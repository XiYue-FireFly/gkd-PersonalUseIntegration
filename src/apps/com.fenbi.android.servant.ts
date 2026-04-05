import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.servant',
  name: '粉笔',
  groups: [
{
      key: 1,
      name: '青少年模式-升级弹窗',
      enable: false,
      activityIds: 'com.fenbi.android.module.home.HomeActivity',
      rules: [
      {
        key: 0,
        matches: '[id="com.fenbi.android.servant:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/12999725',
        _uniqueKey: 0
      },
      ],
    },
  ],
});