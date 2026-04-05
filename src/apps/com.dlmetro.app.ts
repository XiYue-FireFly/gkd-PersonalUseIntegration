import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dlmetro.app',
  name: '大连交通e出行',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.bwton.metro.tabindicator.business.MainTabActivity',
        matches: '[vid="iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15369247',
        exampleUrls: 'https://m.gkd.li/57941037/78f79ab0-c224-40b8-9cae-e4a3366660db',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});