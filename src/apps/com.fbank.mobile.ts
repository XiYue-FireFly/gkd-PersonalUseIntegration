import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fbank.mobile',
  name: '富民银行',
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
          matches: '[id="com.fbank.mobile:id/iv_dumiao"]',
          snapshotUrls: 'https://i.gkd.li/i/13797434',
      },
    ],
  }
  ],
});
