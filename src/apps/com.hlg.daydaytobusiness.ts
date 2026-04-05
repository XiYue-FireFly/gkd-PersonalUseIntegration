import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hlg.daydaytobusiness',
  name: '稿定设计',
  groups: [
{
    key: 1,
    name: '未分类-版本更新',
    enable: false,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/i/13766557',
    rules: [
      { key: 0, matches: '[text="现在升级"] - TextView[text="以后再说"]' },
    ],
  }
  ],
});
