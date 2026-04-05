import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yikaobang.yixue',
  name: '医考帮',
  groups: [
{
      key: 1,
      name: '全屏广告-会员活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
        matches: '@ImageView[id="com.yikaobang.yixue:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13425853',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[id="com.yikaobang.yixue:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13425853',
        _uniqueKey: 1
      },
      ],
    },
  ],
});