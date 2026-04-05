import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.duer.superapp',
  name: '小度',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      snapshotUrls: 'https://i.gkd.li/i/14204175',
      rules: [
      {
        key: 0,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
        _uniqueKey: 0
      },
      ],
    },
  ],
});