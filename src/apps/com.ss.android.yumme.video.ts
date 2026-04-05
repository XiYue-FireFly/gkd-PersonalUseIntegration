import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.yumme.video',
  name: '抖音精选',
  groups: [
{
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.main.MainActivity',
        matches: ['[text="立即升级"]', '[text="以后再说"]'],
        snapshotUrls: ['https://i.gkd.li/i/12534016', 'https://i.gkd.li/i/13328599'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        matches: 'TextView[text="去商店评分"]',
        snapshotUrls: 'https://i.gkd.li/i/15858132',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
  ],
});