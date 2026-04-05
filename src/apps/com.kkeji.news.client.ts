import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kkeji.news.client',
  name: '快科技',
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
          matches: '[id="com.kkeji.news.client:id/tv_counter"]',
          snapshotUrls: 'https://i.gkd.li/i/13197536',
      },
    ],
  }
  ],
});
