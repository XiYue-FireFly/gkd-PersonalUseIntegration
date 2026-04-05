import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mostone.life',
  name: '默往',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      snapshotUrls: 'https://i.gkd.li/i/13832104',
      rules: [
      {
        key: 0,
        matches: '[id="android:id/content"] >n FrameLayout[childCount=4] > View',
        _uniqueKey: 0
      },
      ],
    },
  ],
});