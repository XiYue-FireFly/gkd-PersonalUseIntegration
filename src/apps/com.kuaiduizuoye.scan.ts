import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaiduizuoye.scan',
  name: '快对',
  groups: [
{
      key: 1,
      name: '青少年模式-首页广告弹窗',
      enable: false,
      activityIds: 'com.hihonor.android.launcher.drawer.DrawerLauncher',
      snapshotUrls: 'https://i.gkd.li/i/12716285',
      rules: [
      {
        key: 0,
        matches: '[id="com.kuaiduizuoye.scan:id/iv_advertisement_widget_close"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});