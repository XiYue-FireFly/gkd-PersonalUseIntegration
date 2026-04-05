import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务/小米手机管家',
  groups: [
{
      key: 10,
      name: '功能类-USB安装时自动继续安装',
      desc: '点击USB安装应用时的【继续安装】按钮',
      enable: false,
      activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="继续安装"]',
        snapshotUrls: 'https://i.gkd.li/import/13269875',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
        matches: '[text="继续安装"]',
        snapshotUrls: 'https://i.gkd.li/i/13269875',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="继续安装"]',
        snapshotUrls: 'https://i.gkd.li/i/13269875',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 11,
      name: '功能类-禁止获取定位',
      desc: '点击获取定位权限弹窗的【不同意】按钮',
      enable: false,
      activityIds: ['com.miui.securityscan.MainActivity', 'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: ['[id="com.miui.securitycenter:id/title"][text="获取位置信息"]', '[text="不同意"]'],
        snapshotUrls: ['https://i.gkd.li/import/13474517', 'https://i.gkd.li/import/13476592'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.miui.securityscan.MainActivity', 'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity'],
        matches: ['[id="com.miui.securitycenter:id/title"][text="获取位置信息"]', '[text="不同意"]'],
        snapshotUrls: ['https://i.gkd.li/i/13474517', 'https://i.gkd.li/i/13476592'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: ['[id="com.miui.securitycenter:id/title"][text="获取位置信息"]', '[text="不同意"]'],
        snapshotUrls: ['https://i.gkd.li/i/13474517', 'https://i.gkd.li/i/13476592'],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 12,
      name: '功能类-使用返回退出时直接点击[退出]',
      desc: '退出时自动点击【退出】按钮，跳过体检优化和存储空间预警提示',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.miui.securityscan.MainActivity',
        matches: ['[text="体检优化" || text="存储空间预警"][visibleToUser=true]', '[text="退出"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13474504', 'https://i.gkd.li/i/13476770', 'https://i.gkd.li/i/15137908'],
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/18126157',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="退出"]',
        snapshotUrls: ['https://i.gkd.li/i/13474504', 'https://i.gkd.li/i/13476770', 'https://i.gkd.li/i/15137908'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 13,
      name: '功能类-高敏感权限自动确定-1',
      desc: '自动处理高敏感权限申请：勾选风险提示并延迟10秒后点击确定',
      enable: false,
      activityIds: ['com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity', 'com.miui.permcenter.privacymanager.DeviceManagerApplyActivity'],
      fastQuery: true,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        matches: ['[text="我已知晓可能存在的风险，并自愿承担可能导致的后果"]', '@[vid="check_box"][checked=false]'],
        snapshotUrls: ['https://i.gkd.li/i/14965657', 'https://i.gkd.li/i/15242826'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="确定"]',
        snapshotUrls: ['https://i.gkd.li/i/14965656', 'https://i.gkd.li/i/15242825'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[text="知道了"] + [text="省电模式"]',
        snapshotUrls: 'https://i.gkd.li/i/14468423',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 14,
      name: '功能类-高敏感权限自动确定-1-1-1-1',
      desc: '勾选[我已知晓可能存在的风险]-10s后点击[确定]',
      activityIds: ['com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity', 'com.miui.permcenter.privacymanager.DeviceManagerApplyActivity'],
      fastQuery: true,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        matches: ['[text="我已知晓可能存在的风险，并自愿承担可能导致的后果"]', '@[vid="check_box"][checked=false]'],
        snapshotUrls: ['https://i.gkd.li/i/14965657', 'https://i.gkd.li/i/15242826'],
        exampleUrls: 'https://m.gkd.li/57941037/e9672ccd-8dd1-4060-bdbe-52bb355d404f',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="确定"]',
        snapshotUrls: ['https://i.gkd.li/i/14965656', 'https://i.gkd.li/i/15242825'],
        exampleUrls: 'https://m.gkd.li/57941037/1f2a118a-db2a-448d-a95d-f10d746b72e3',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 15,
      name: '功能类-应用信息页-自启动提示',
      desc: '点击[知道了]/[关闭]',
      activityIds: 'com.miui.appmanager.ApplicationsDetailsActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text^="开启自启动"]',
        snapshotUrls: 'https://i.gkd.li/i/15524706',
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text^="关闭自启动后将导致"]', '[text="关闭"]'],
        snapshotUrls: 'https://i.gkd.li/i/15531343',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 16,
      name: '功能类-自动允许分享文件',
      desc: '允许应用通过分享获取手机文件',
      rules: [
      {
        key: 0,
        activityIds: 'com.miui.wakepath.ui.ConfirmStartActivity',
        matches: ['[text="分享文件"]', '[text="允许"]'],
        snapshotUrls: 'https://i.gkd.li/i/17174152',
        exampleUrls: 'https://e.gkd.li/02c752e7-3dd9-47dc-819b-e8246de29b6a',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 17,
      name: '功能类-自动关闭SIM卡安全保护验证提示',
      desc: '点击[确定]',
      rules: [
      {
        key: 0,
        activityIds: ['com.miui.simlock.activity.SuccessDialogActivity', 'com.miui.simlock.activity.SuccessDialogNormalActivity'],
        matches: ['[text="SIM卡安全保护验证成功"]', '[text="确定"]'],
        snapshotUrls: ['https://i.gkd.li/i/17276599', 'https://i.gkd.li/i/17276586'],
        exampleUrls: 'https://e.gkd.li/2274c673-a2a9-43ad-a5ab-74598787ec0f',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 18,
      name: '功能类-禁止后台运行弹窗',
      desc: '点击确定',
      rules: [
      {
        key: 0,
        activityIds: 'com.miui.powercenter.legacypowerrank.PowerDetailActivity',
        matches: ['[text="应用在后台被终止运行，可能会影响应用正常使用。"]', '[text="确定"]'],
        snapshotUrls: 'https://i.gkd.li/i/23096094',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 19,
      name: '功能类-风险提示-仍然支付',
      rules: [
      {
        key: 0,
        activityIds: 'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
        matches: '[text="仍然支付"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/24717617',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});