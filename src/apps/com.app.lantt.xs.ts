import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.app.lantt.xs',
  name: '蓝豚豚',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      order: -10,
      rules: [
      {
        key: 0,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14899867',
        _uniqueKey: 0
      },
      ],
    },
  ],
});