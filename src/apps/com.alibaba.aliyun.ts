import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.aliyun',
  name: '阿里云',
  groups: [
{
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.biz.home.mine.activity.KFeeCenterActivity',
        matches: '[text^="打开手机消息通知"] + * >2 [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13446162',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text^="打开手机消息通知"] + * >2 [text="以后再说"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});