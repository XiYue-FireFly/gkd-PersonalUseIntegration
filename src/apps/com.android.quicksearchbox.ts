import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.quicksearchbox',
  name: '搜索',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.SearchActivityTransparent',
        matches: '[vid="ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13897834',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="ad_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});