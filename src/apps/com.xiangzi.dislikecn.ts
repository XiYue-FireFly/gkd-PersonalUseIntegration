import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiangzi.dislikecn',
  name: 'Dislike',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    order: -10,
    snapshotUrls: 'https://i.gkd.li/i/15196702',
    rules: [
      { key: 0, matches: '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="csj_ad_container"]' },
    ],
  }
  ],
});
