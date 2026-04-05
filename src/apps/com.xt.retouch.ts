import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xt.retouch',
  name: '醒图',
  groups: [
{
      key: 5,
      name: '评价提示-好评反馈',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.uilauncher.MainActivity',
        matches: '[id="com.xt.retouch:id/market_feedback_dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13062637',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.xt.retouch:id/market_feedback_dialog_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});