import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.aiwu.market',
  name: '爱吾游戏宝盒',
  groups: [
{
      key: 1,
      name: '青少年模式',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.activity.NewHomeActivity',
        matches: '[vid="hintTextView2"] + [vid="confirmView"]',
        snapshotUrls: 'https://i.gkd.li/i/14032203',
        _uniqueKey: 0
      },
      ],
    },
  ],
});