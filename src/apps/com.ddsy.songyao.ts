import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddsy.songyao',
  name: '叮当快药',
  groups: [
{
      key: 1,
      name: '全屏广告-优惠卷提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ddsy.songyao.activity.SplashActivity',
        matches: '[id="com.ddsy.songyao:id/iv_coupon_bottom"] + [id="com.ddsy.songyao:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13048720',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.ddsy.songyao:id/iv_coupon_bottom"] + [id="com.ddsy.songyao:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13048720',
        _uniqueKey: 1
      },
      ],
    },
  ],
});