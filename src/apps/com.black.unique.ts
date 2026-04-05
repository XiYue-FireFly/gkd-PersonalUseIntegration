import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.black.unique',
  name: '全球购骑士特权',
  groups: [
{
    key: 1,
    name: '全屏广告-弹窗广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.black.unique.feature.home.HomeActivity',
          matches: '@ImageView[id="com.black.unique:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13499502',
      },
      {
          matches: '@ImageView[id="com.black.unique:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13499502',
      },
    ],
  }
  ],
});
