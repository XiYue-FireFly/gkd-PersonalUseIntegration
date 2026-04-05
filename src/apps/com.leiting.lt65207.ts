import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.leiting.lt65207',
  name: '山东人在山西',
  groups: [
{
    key: 1,
    name: '全屏广告-软件推荐',
    desc: '点击右上角X',
    enable: false,
    activityIds: 'com.leiting.lt65207.ui.MainActivity',
    snapshotUrls: 'https://i.gkd.li/i/14107951',
    exampleUrls: 'https://m.gkd.li/57941037/1fb3d32f-961d-4026-9f02-10da392fca92',
    rules: [
      { key: 0, matches: '[vid="tab_main_bg"] > FrameLayout[childCount=6] > ImageView[index=1]' },
    ],
  }
  ],
});
