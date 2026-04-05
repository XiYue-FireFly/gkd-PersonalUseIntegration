import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.nineteenlou.nineteenlou',
  name: '19楼',
  groups: [
{
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: ['[vid="adv_layout"][visibleToUser=true]', '[vid="jump"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/20438918',
        exampleUrls: 'https://e.gkd.li/3c41a2ae-a470-4dc5-974b-4157c77b6efb',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});