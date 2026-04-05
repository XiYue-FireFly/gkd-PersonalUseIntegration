import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eco.global.app',
  name: 'ECOVACS HOME',
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
        matches: 'ImageView[id="com.eco.global.app:id/adview_jump"]',
        snapshotUrls: 'https://i.gkd.li/i/13538616',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.eco.global.app:id/adview_jump"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});