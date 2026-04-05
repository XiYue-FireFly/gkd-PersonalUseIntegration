import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecellsz.watch.guard',
  name: '乐康守护',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      order: -10,
      snapshotUrls: 'https://i.gkd.li/i/14039510',
      rules: [
      {
        key: 0,
        matches: 'View[clickable=true] <<n [vid="splash_container"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});