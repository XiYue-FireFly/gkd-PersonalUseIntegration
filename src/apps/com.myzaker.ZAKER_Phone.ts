import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.myzaker.ZAKER_Phone',
  name: 'ZAKER',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20689993',
        exampleUrls: 'https://e.gkd.li/0c69945f-ac0e-44a8-a0a3-95544e53849f',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.myzaker.ZAKER_Phone:id/cover_pic"]',
        snapshotUrls: 'https://i.gkd.li/i/13694552',
        exampleUrls: 'https://m.gkd.li/57941037/c140267a-a48a-45a9-9303-7507aa2008e4',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="cover_pic"]',
        snapshotUrls: 'https://i.gkd.li/i/14958042',
        _uniqueKey: 2
      },
      ],
    },
  ],
});