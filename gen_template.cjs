/**
 * GKD 订阅生成脚本 - repo 内部版本
 * 仓库使用平铺结构：src/apps/{appId}.ts（字符串 ID 作为文件名）
 */

const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');

const MERGED_FILE = path.join(__dirname, 'merged_gkd.json5');
const OUT_DIR = path.join(__dirname, 'src');
const APPS_DIR = path.join(OUT_DIR, 'apps');

console.log('正在读取合并文件...');
const raw = fs.readFileSync(MERGED_FILE, 'utf8');
const data = JSON5.parse(raw);
console.log('解析成功，apps:', data.apps.length, 'globalGroups:', data.globalGroups.length);

// ==================== 工具函数 ====================

function serializeToTS(obj, indent = 2) {
  return JSON5.stringify(obj, null, indent);
}

// 将 rule 转换为 TS 格式（兼容字符串和对象两种形式）
function ruleToTS(rule) {
  if (typeof rule === 'string') {
    // 简化格式：直接是 matches 字符串
    const escaped = rule.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `      { key: 0, matches: '${escaped}' },`;
  } else {
    return serializeToTS(rule, 4)
      .split('\n')
      .map((l, i) => i === 0 ? '      ' + l : '      ' + l)
      .join('\n') + ',';
  }
}

// 将 rules 数组转换为 TS 格式（兼容字符串和对象数组两种形式）
function rulesToTS(rules) {
  if (typeof rules === 'string') {
    // 字符串格式 → 转换为单条规则对象
    const escaped = rules.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `[\n      { key: 0, matches: '${escaped}' },\n    ]`;
  } else if (Array.isArray(rules)) {
    if (rules.length === 0) return '[]';
    return '[\n' + rules.map(r => ruleToTS(r)).join('\n') + '\n    ]';
  } else {
    // object 类型（不应该出现，但容错处理）
    return '[]';
  }
}

// 将 group 的元字段（不含 rules）序列化为 TS
function groupMetaToTS(group, baseIndent = 2) {
  const pad = ' '.repeat(baseIndent);
  const pad2 = ' '.repeat(baseIndent + 2);
  const lines = ['{'];

  const orderedKeys = [
    'key', 'name', 'desc', 'enable', 'activityIds', 'excludeActivityIds',
    'matchTime', 'actionMaximum', 'actionMaximumKey', 'resetMatch',
    'fastQuery', 'matchRoot', 'forcedTime', 'actionCdKey', 'priorityTime',
    'disableIfAppGroupMatch', 'order', 'categoryNames',
    'snapshotUrls', 'exampleUrls'
  ];

  const seenKeys = new Set(['rules']); // rules 单独处理

  for (const key of orderedKeys) {
    if (!(key in group) || seenKeys.has(key)) continue;
    seenKeys.add(key);
    const val = group[key];
    if (val === undefined || val === null) continue;

    if (typeof val === 'string') {
      const escaped = val.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      lines.push(pad2 + key + ": '" + escaped + "',");
    } else if (typeof val === 'number' || typeof val === 'boolean') {
      lines.push(pad2 + key + ': ' + val + ',');
    } else if (Array.isArray(val)) {
      if (val.length === 0) {
        lines.push(pad2 + key + ': [],');
      } else {
        const arrStr = serializeToTS(val, 2);
        const indented = arrStr.split('\n').map((l, i) => i === 0 ? l : pad2 + l).join('\n');
        lines.push(pad2 + key + ': ' + indented + ',');
      }
    } else if (typeof val === 'object') {
      const objStr = serializeToTS(val, 2);
      const indented = objStr.split('\n').map((l, i) => i === 0 ? l : pad2 + l).join('\n');
      lines.push(pad2 + key + ': ' + indented + ',');
    }
  }

  // rules 单独序列化（关键修复！）
  lines.push(pad2 + 'rules: ' + rulesToTS(group.rules) + ',');
  lines.push(pad + '}');
  return lines.join('\n');
}

// 兼容旧调用（app groups 不含 rules 作为顶层字段）
function groupToTS(group, baseIndent = 2) {
  return groupMetaToTS(group, baseIndent);
}

// ==================== Subscription ====================
const sub = data.subscription || {};

const subscriptionTS = `import { Subscription } from '@gkd-kit/api';
import categories from './categories';
import globalGroups from './globalGroups';
import apps from './apps';

export default <Subscription>{
  id: ${sub.id || 888},
  name: '${sub.name || 'GKD订阅'}',
  version: ${sub.version || 1},
  author: '${sub.author || ''}',
  description: '${sub.description || ''}',
  supportUri: '${sub.supportUri || ''}',
  openEmptyRuleGroup: ${sub.openEmptyRuleGroup !== false},
  referenceRules: [],
  categories,
  globalGroups,
  apps,
};
`;

fs.writeFileSync(path.join(OUT_DIR, 'subscription.ts'), subscriptionTS, 'utf8');
console.log('✅ 生成 subscription.ts');

// ==================== Categories ====================
const categoriesTS = `import { GkdCategory } from '@gkd-kit/api';

export default <GkdCategory[]>[
${data.categories.map(c => `  {
    key: ${c.key},
    name: '${c.name}',
    enable: ${c.enable},
  }`).join(',\n')}
];
`;
fs.writeFileSync(path.join(OUT_DIR, 'categories.ts'), categoriesTS, 'utf8');
console.log('✅ 生成 categories.ts（' + data.categories.length + ' 个分类）');

// ==================== GlobalGroups ====================
const globalGroupsTS = `import { GkdGlobalGroup } from '@gkd-kit/api';
import categories from './categories';

export default <GkdGlobalGroup[]>[
${data.globalGroups.map((g) => {
  const catName = g.key !== undefined && g.key !== null ? `categories[${g.key}]` : 'undefined';
  const lines = [
    '  {',
    `    key: ${g.key ?? 'undefined'},`,
    `    name: '${(g.name || '').replace(/'/g, "\\'")}',`,
    `    categories: [${catName}],`,
  ];
  if (g.order !== undefined) lines.push(`    order: ${g.order},`);
  if (g.matchTime !== undefined) lines.push(`    matchTime: ${g.matchTime},`);
  if (g.actionMaximum !== undefined) lines.push(`    actionMaximum: ${g.actionMaximum},`);
  if (g.actionCdKey !== undefined) lines.push(`    actionCdKey: ${g.actionCdKey},`);
  if (g.actionMaximumKey !== undefined) lines.push(`    actionMaximumKey: ${g.actionMaximumKey},`);
  if (g.resetMatch !== undefined) lines.push(`    resetMatch: '${g.resetMatch}',`);
  if (g.forcedTime !== undefined) lines.push(`    forcedTime: ${g.forcedTime},`);
  if (g.priorityTime !== undefined) lines.push(`    priorityTime: ${g.priorityTime},`);
  if (g.disableIfAppGroupMatch !== undefined) lines.push(`    disableIfAppGroupMatch: '${g.disableIfAppGroupMatch}',`);
  if (g.fastQuery !== undefined) lines.push(`    fastQuery: ${g.fastQuery},`);
  if (g.matchRoot !== undefined) lines.push(`    matchRoot: ${g.matchRoot},`);
  lines.push(`    rules: ${rulesToTS(g.rules)}`);
  lines.push('  }');
  return lines.join('\n');
}).join(',\n')}
];
`;
fs.writeFileSync(path.join(OUT_DIR, 'globalGroups.ts'), globalGroupsTS, 'utf8');
console.log('✅ 生成 globalGroups.ts（' + data.globalGroups.length + ' 个全局规则组）');

// ==================== Apps ====================
// 使用平铺结构：src/apps/{appId}.ts（字符串 appId 作为文件名，需处理路径特殊字符）
function sanitizeFilename(appId) {
  // 替换 / 和 \ 为安全字符，保留原始 appId 作为内容中的值
  return appId.replace(/\//g, '_').replace(/\\/g, '_').replace(/:/g, '_');
}

console.log('正在生成 app 规则文件（平铺结构）...');
let appCount = 0;

for (const app of data.apps) {
  const appId = app.id ?? app.appId;
  if (!appId) continue;

  const groups = (app.groups || []).filter(g => g && g.rules && g.rules.length > 0);
  if (groups.length === 0) continue;

  const groupsTS = groups.map(g => groupToTS(g, 2)).join(',\n');

  const appTS = `import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: '${appId}',
  name: '${(app.name || '').replace(/'/g, "\\'")}',
  groups: [
${groupsTS}
  ],
});
`;

  const safeName = sanitizeFilename(String(appId));
  fs.writeFileSync(path.join(APPS_DIR, safeName + '.ts'), appTS, 'utf8');
  appCount++;
}

console.log('✅ 生成 ' + appCount + ' 个 app 规则文件（平铺结构）');

// ==================== Apps index ====================
// 生成 apps.ts 汇总所有 app
const allAppIds = data.apps
  .filter(app => {
    const appId = app.id ?? app.appId;
    return appId && (app.groups || []).some(g => g && g.rules && g.rules.length > 0);
  })
  .map(app => app.id ?? app.appId);

const appsTS = `import { GkdApp } from '@gkd-kit/api';
${allAppIds.map(id => {
  const safe = sanitizeFilename(String(id)).replace(/[^a-zA-Z0-9_]/g, '_').replace(/^([0-9])/, '_$1');
  return `import ${safe} from './apps/${sanitizeFilename(String(id))}';`;
}).join('\n')}

export default <GkdApp[]>[
${allAppIds.map(id => {
  const safe = sanitizeFilename(String(id)).replace(/[^a-zA-Z0-9_]/g, '_').replace(/^([0-9])/, '_$1');
  return `  ${safe}`;
}).join(',\n')}
];
`;
fs.writeFileSync(path.join(OUT_DIR, 'apps.ts'), appsTS, 'utf8');
console.log('✅ 生成 apps.ts（' + allAppIds.length + ' 个汇总）');

console.log('\n========== 生成完毕 ==========');
console.log('categories:', data.categories.length, '个');
console.log('globalGroups:', data.globalGroups.length, '个');
console.log('apps:', appCount, '个');
