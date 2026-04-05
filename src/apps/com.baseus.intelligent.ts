import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baseus.intelligent',
  name: '倍思',
  groups: [
{
      key: 1,
      name: '权限提示-定位请求',
      desc: '点击取消-点击取消',
      activityIds: 'com.baseus.intelligent.view.home.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[text="取消"] + [text="前往设置"]',
        snapshotUrls: 'https://i.gkd.li/i/13827653',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[text="取消"] + [text="授权"]',
        snapshotUrls: 'https://i.gkd.li/i/13827986',
        preKeys: 0,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.baseus.intelligent.view.home.MainActivity',
        matches: '@[text="取消"] + [text="前往设置"]',
        snapshotUrls: 'https://i.gkd.li/i/13827653',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.baseus.intelligent.view.home.MainActivity',
        matches: '@[text="取消"] + [text="授权"]',
        snapshotUrls: 'https://i.gkd.li/i/13827986',
        preKeys: 0,
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
  ],
});