import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.keke.ysh1.tz08051h',
  name: '可可影视',
  groups: [
{
      key: 1,
      name: '通知提示-公告弹窗',
      activityIds: 'com.salmon.film.main.ui.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 1,
        matches: '[text="朕知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/13548412',
        _uniqueKey: 1
      },
      {
        key: 0,
        matches: '[text="可可影视"] +2 * > [text*="知道了"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});