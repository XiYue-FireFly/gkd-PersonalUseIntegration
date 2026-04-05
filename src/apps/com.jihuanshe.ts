import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jihuanshe',
  name: '集换社',
  groups: [
{
    key: 0,
    name: '开屏广告',
    desc: '点击【跳过】',
    fastQuery: true,
    order: -10,
    snapshotUrls: 'https://i.gkd.li/i/14303879',
    rules: [
      { key: 0, matches: '@View <2 FrameLayout <2 FrameLayout < [vid="adContainer"]' },
    ],
  }
  ],
});
