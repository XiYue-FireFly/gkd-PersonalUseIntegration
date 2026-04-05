import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.steampy.app',
  name: 'SteamPY',
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
        activityIds: '.activity.common.MainActivity',
        matches: '@[id="com.steampy.app:id/imgClose"] - RelativeLayout [id="com.steampy.app:id/tv_update"]',
        snapshotUrls: 'https://i.gkd.li/i/13695519',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.steampy.app:id/imgClose"] - RelativeLayout [id="com.steampy.app:id/tv_update"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '功能类-首页优惠券弹窗自动点击领取/使用',
      matchTime: 10000,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.common.MainActivity',
        matches: '[vid="coupon_right"]',
        snapshotUrls: ['https://i.gkd.li/i/16860018', 'https://i.gkd.li/i/16860017'],
        exampleUrls: ['https://e.gkd.li/2e87decb-54ba-4f8b-9330-f037c220d2d9', 'https://e.gkd.li/b2e256c2-c606-430c-afa9-3cd02f4d56c2'],
        _uniqueKey: 0
      },
      ],
    },
  ],
});