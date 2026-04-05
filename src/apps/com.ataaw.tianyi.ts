import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ataaw.tianyi',
  name: '天翼生活',
  groups: [
{
    key: 2,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/i/13867468',
    rules: [
      { key: 0, matches: '[vid="version"]' },
      { key: 0, matches: '[vid="ignore"]' },
    ],
  }
  ],
});
