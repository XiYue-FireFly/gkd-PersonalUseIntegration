# GKD 个人订阅 (GKD-PersonalUseIntegration)

> 一个基于 [GKD](https://github.com/gkd-kit/gkd) 的开源自订阅，整合了 aoguai、AIsouler、Adpro 等优质订阅源，覆盖 **939+ 款应用**的开屏广告、全屏广告、局部广告、更新提示等屏蔽规则。

## 功能特点

- **海量应用覆盖**：支持 939+ 款主流应用，覆盖开屏广告、全屏广告、局部广告、更新提示、评价提示、通知提示、权限提示、青少年模式等多种场景
- **标准化架构**：采用 AIsouler 官方标准方式重构，使用 `@gkd-kit/tools` + `@gkd-kit/define` 官方工具链
- **自动构建发布**：通过 GitHub Actions 实现自动化构建和发布，每次提交自动更新订阅
- **兼容性强**：遵循 GKD 订阅规范，兼容所有 GKD 客户端

## 订阅信息

| 项目         | 内容                               |
| ------------ | ---------------------------------- |
| **订阅 ID**  | 888                                |
| **订阅名称** | GKD合并订阅(aoguai+AIsouler+Adpro) |
| **当前版本** | 407                                |
| **作者**     | aoguai & AIsouler & Adpro (merged) |

## 订阅地址

### 主订阅（推荐）

```
https://cdn.jsdelivr.net/gh/XiYue-FireFly/gkd-PersonalUseIntegration@master/dist/gkd.json5
```

### 备用订阅

如果主订阅无法访问，可尝试以下备用地址：

```
# GitHub Raw
https://raw.githubusercontent.com/XiYue-FireFly/gkd-PersonalUseIntegration/master/dist/gkd.json5
```

## 支持的分类

| 分类       | 说明                                           | 默认状态 |
| ---------- | ---------------------------------------------- | -------- |
| 开屏广告   | 点击跳过应用启动时的开屏广告                   | ✅ 已启用 |
| 青少年模式 | 关闭通用的青少年模式提示弹窗                   | ❌ 已禁用 |
| 更新提示   | 关闭应用更新提示弹窗                           | ❌ 已禁用 |
| 评价提示   | 关闭通用的评价提示弹窗                         | ❌ 已禁用 |
| 通知提示   | 关闭消息推送开启提示                           | ❌ 已禁用 |
| 权限提示   | 关闭蓝牙、剪切板、通讯录、悬浮窗等权限申请弹窗 | ❌ 已禁用 |
| 局部广告   | 关闭通用的局部广告弹窗                         | ❌ 已禁用 |
| 全屏广告   | 关闭通用的全屏广告弹窗                         | ❌ 已禁用 |
| 分段广告   | 关闭信息流分段广告                             | ❌ 已禁用 |
| 功能类     | 自动点击查看翻译等辅助功能                     | ❌ 已禁用 |
| 其他       | 其他类型的弹窗                                 | ❌ 已禁用 |

## 项目结构

```
gkd-PersonalUseIntegration/
├── src/
│   ├── categories.ts       # 分类定义
│   ├── globalGroups.ts     # 全局规则组
│   ├── subscription.ts     # 订阅入口
│   └── apps/               # 应用规则 (939+ files)
│       ├── com.tencent.mm.ts
│       ├── cn.xiaochuankeji.tieba.ts
│       └── ...
├── scripts/
│   ├── build.ts            # 构建脚本
│   └── check.ts            # 校验脚本
├── dist/                   # 构建输出目录
│   ├── gkd.json5           # 订阅文件
│   └── gkd.version.json5   # 版本信息
└── .github/workflows/
    └── build.yml           # GitHub Actions 配置
```

## 本地开发

### 环境要求

- Node.js 22+
- pnpm

### 安装依赖

```bash
pnpm install
```

### 构建订阅

```bash
# 构建 dist/gkd.json5
pnpm run build

# 运行校验检查
pnpm run check
```

### 构建和校验一起运行

```bash
pnpm run all
```

## 技术架构

本订阅采用 **AIsouler 官方标准方式** 构建：

### 核心依赖

- `@gkd-kit/define` - GKD 类型定义和辅助函数
  - `defineGkdApp()` - 定义应用规则
  - `defineGkdGlobalGroups()` - 定义全局规则组
  - `defineGkdCategories()` - 定义分类
  - `defineGkdSubscription()` - 定义订阅配置

- `@gkd-kit/tools` - GKD 构建工具
  - `batchImportApps()` - 批量导入应用规则
  - `updateDist()` - 更新订阅文件
  - `checkSubscription()` - 校验订阅结构
  - `checkApiVersion()` - 校验 API 版本

### 数据流

```
src/apps/*.ts    →  batchImportApps()  →  subscription.ts  →  build.ts  →  dist/gkd.json5
src/globalGroups.ts ──────────────────────────────────────────────────────────────────┘
src/categories.ts ──────────────────────────────────────────────────────────────────┘
```

## 常见问题

### Q: 导入订阅失败，显示 "Element class gg.a0 is not a JsonArray"

这是 **网络/CDN 问题**，GKD 收到的是 HTML 页面而非 JSON 数据。解决方案：

1. **更换订阅地址**：尝试使用备用订阅地址
2. **检查网络**：确保可以正常访问 GitHub
3. **更新 GKD**：确保使用的是最新版 GKD

### Q: 为什么默认只启用了开屏广告？

开屏广告是用户最常遇到且影响最大的广告类型，启用后可以自动跳过应用启动时的广告。其他类型的规则可能需要根据个人使用习惯选择性启用。

### Q: 如何贡献规则？

欢迎提交 Issue 或 Pull Request！如果您发现某个应用有广告但订阅中没有覆盖，可以通过以下方式贡献：

1. 使用 GKD 录制新的规则
2. 参考现有规则格式编写
3. 提交 PR 或 Issue

## 更新日志

### v407

- 采用 AIsouler 官方标准方式重构
- 使用 `@gkd-kit/tools` + `@gkd-kit/define` 官方工具链
- 支持 939+ 款应用

## 致谢

本订阅整合自以下优质订阅源：

- [aoguai](https://github.com/gkd-kit/subscription)
- [AIsouler](https://github.com/AIsouler/GKD_subscription)
- [Adpro](https://github.com/AdproTeam/GKD_subscription)

## 开源协议

本项目基于 MIT 协议开源。

---

**Star ⭐ 如果对你有帮助！**
