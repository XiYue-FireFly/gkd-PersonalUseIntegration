import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jsmcc',
  name: '中国移动江苏',
  groups: [
{
      key: 1,
      name: '青少年模式-版本更新',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.jsmcc:id/cancelVersionTV"]',
        snapshotUrls: 'https://i.gkd.li/i/13327322',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.MainActivityGroupNew',
        matches: 'ImageView[vid="notice_dia"]',
        snapshotUrls: 'https://i.gkd.li/i/16215987',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
  ],
});