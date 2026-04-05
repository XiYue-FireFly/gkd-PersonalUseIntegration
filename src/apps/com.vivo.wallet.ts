import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.wallet',
  name: '钱包',
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
        activityIds: '.bookkeep.activity.BookKeepMainActivity',
        matches: '@[clickable=true] > [text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/13440881',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@Button[text*="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/13440881',
        _uniqueKey: 1
      },
      ],
    },
  ],
});