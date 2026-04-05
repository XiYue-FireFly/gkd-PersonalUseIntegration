import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
{
      key: 1,
      name: '功能类-权限授予弹窗',
      desc: '点击【仅在使用中允许】',
      enable: false,
      activityIds: 'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/import/13761264',
      rules: [
      {
        key: 0,
        matches: '[text="仅在使用中允许"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
        matches: '[text="仅在使用中允许"]',
        snapshotUrls: 'https://i.gkd.li/i/13761264',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击拒绝',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: ['[text$="发送通知"]', '[text="拒绝"]'],
        snapshotUrls: 'https://i.gkd.li/i/14321882',
        exampleUrls: 'https://m.gkd.li/57941037/0487a113-5b57-402e-96ca-1f351e121d82',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});