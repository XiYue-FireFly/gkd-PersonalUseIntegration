import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmstop.shaoxing',
  name: '越牛新闻',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[id="com.cmstop.shaoxing:id/roundProgressBar"]',
        snapshotUrls: 'https://i.gkd.li/i/13611775',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.cmstop.shaoxing:id/roundProgressBar"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});