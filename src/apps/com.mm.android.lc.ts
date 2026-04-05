import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mm.android.lc',
  name: '乐橙',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="advert_countdown_view"]',
        snapshotUrls: 'https://i.gkd.li/i/14586621',
        exampleUrls: 'https://m.gkd.li/57941037/b30750e1-92ca-452b-8467-a0074989ec92',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="advert_countdown_view"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});