import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.leos.appstore',
  name: '联想应用中心',
  groups: [
{
      key: 0,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.zui.launcher.drawer.NormalLauncher',
        matches: '@[id="com.lenovo.leos.appstore:id/dialog_cancel"] + [text$="版本更新"]',
        snapshotUrls: 'https://i.gkd.li/i/13401992',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.lenovo.leos.appstore:id/dialog_cancel"] + [text$="版本更新"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activities.NotificationGuideActivity',
        matches: ['[text$="打开应用中心通知"]', '[text="知道了"]'],
        snapshotUrls: 'https://i.gkd.li/i/13401991',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text$="打开应用中心通知"] +n [text="知道了"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});