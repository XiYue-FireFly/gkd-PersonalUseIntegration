import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wls.weex',
  name: '我联智慧用电',
  groups: [
{
    key: 1,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    order: -10,
    snapshotUrls: 'https://i.gkd.li/i/14122524',
    exampleUrls: 'https://m.gkd.li/57941037/74525817-4bc5-4a06-9bda-d5de97e2e91b',
    rules: [
      { key: 0, matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView' },
    ],
  }
  ],
});
