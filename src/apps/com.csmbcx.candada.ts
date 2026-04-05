import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csmbcx.candada',
  name: '餐大大',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      snapshotUrls: 'https://i.gkd.li/i/14079762',
      rules: [
      {
        key: 0,
        matches: '[vid="flContainer"] >n View[clickable=true]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});