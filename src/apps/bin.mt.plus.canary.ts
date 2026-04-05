import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus.canary',
  name: 'MT管理器Pro',
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
        activityIds: 'bin.mt.plus.Main',
        matches: '@[text="取消"] + [text="更新"]',
        snapshotUrls: 'https://i.gkd.li/i/13561226',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'LinearLayoutCompat @[text="取消"] + [text="更新"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});