import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaote',
  name: '小特',
  groups: [
{
    key: 1,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    priorityTime: 10000,
    order: -10,
    rules: [
      {
          matches: '[id="com.xiaote:id/ad_close"][text*="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14035706',
      },
    ],
  }
  ],
});
