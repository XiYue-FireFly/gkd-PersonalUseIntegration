import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.browser.hd',
  name: '联想浏览器HD',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.zui.launcher.drawer.NormalLauncher',
        matches: '[text="发现新版本"] - * > [id="com.lenovo.browser.hd:id/fl_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13401982',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="发现新版本"] - * > [id="com.lenovo.browser.hd:id/fl_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.zui.launcher.drawer.NormalLauncher',
        matches: '[text="开启消息通知"] +n * > [id="com.lenovo.browser.hd:id/tv_cancle"]',
        snapshotUrls: 'https://i.gkd.li/i/13401980',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启消息通知"] +n * > [id="com.lenovo.browser.hd:id/tv_cancle"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});