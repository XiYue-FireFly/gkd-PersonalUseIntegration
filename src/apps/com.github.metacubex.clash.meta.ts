import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.metacubex.clash.meta',
  name: 'Clash Meta for Android',
  groups: [
{
      key: 1,
      name: '功能类-代理页面自动点击延迟测试',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.github.kr328.clash.ProxyActivity',
        matches: '[vid="url_test_view"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20926416',
        exampleUrls: 'https://e.gkd.li/490f4572-a1af-4345-8f6e-3b0081929628',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/20926355',
        _uniqueKey: 0
      },
      ],
    },
  ],
});