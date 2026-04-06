const fs = require('fs');
const JSON5 = require('json5');

console.log('=== 检查 dist/gkd.json5 文件格式 ===\n');

try {
  const data = JSON5.parse(fs.readFileSync('dist/gkd.json5', 'utf8'));
  
  console.log(`订阅 ID: ${data.id}`);
  console.log(`订阅名称：${data.name}`);
  console.log(`应用总数：${data.apps.length}\n`);
  
  let missingIdCount = 0;
  let missingIdApps = [];
  
  // 检查每个应用
  data.apps.forEach((app, index) => {
    if (!app.id && !app.appId) {
      missingIdCount++;
      missingIdApps.push({
        index: index,
        name: app.name || 'unknown',
        groups: app.groups?.length || 0
      });
    }
  });
  
  console.log(`=== 检查结果 ===`);
  if (missingIdCount > 0) {
    console.log(`❌ 发现 ${missingIdCount} 个应用缺少 id/appId 字段:\n`);
    missingIdApps.slice(0, 50).forEach(app => {
      console.log(`  [${app.index}] ${app.name} (${app.groups} groups)`);
    });
    if (missingIdApps.length > 50) {
      console.log(`  ... 还有 ${missingIdApps.length - 50} 个`);
    }
    
    // 显示第一个错误的应用详情
    if (missingIdApps.length > 0) {
      const firstError = missingIdApps[0];
      const errorApp = data.apps[firstError.index];
      console.log(`\n=== 第一个错误的应用详情 [${firstError.index}] ===`);
      console.log(JSON.stringify(errorApp, null, 2).substring(0, 1000));
    }
  } else {
    console.log('✅ 所有应用都有有效的 id/appId 字段');
  }
  
  // 检查 apps[0]
  console.log(`\n=== apps[0] 详情 ===`);
  console.log(`id: ${data.apps[0].id}`);
  console.log(`name: ${data.apps[0].name}`);
  console.log(`appId: ${data.apps[0].appId || 'undefined'}`);
  console.log(`groups: ${data.apps[0].groups?.length || 0}`);
  
  // 生成修复后的文件（如果有问题）
  if (missingIdCount > 0) {
    console.log('\n=== 准备修复 ===');
    const fixedApps = data.apps.filter(app => app.id || app.appId);
    const fixedData = {
      ...data,
      apps: fixedApps
    };
    
    fs.writeFileSync('dist/gkd.fixed.json5', JSON5.stringify(fixedData, null, 2), 'utf8');
    console.log(`✅ 已生成修复后的文件：dist/gkd.fixed.json5`);
    console.log(`   修复后应用数量：${fixedApps.length} (删除了 ${missingIdCount} 个无效应用)`);
  }
  
} catch (e) {
  console.error('❌ 解析失败:', e.message);
  if (e.lineNumber) {
    console.error(`   位置：第 ${e.lineNumber} 行`);
  }
}
