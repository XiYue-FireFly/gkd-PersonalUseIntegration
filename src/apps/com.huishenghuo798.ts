import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huishenghuo798',
  name: '惠生活 798',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.huishenghuo798.ui.activity.SplashActivity',
          matches: '[text*="跳过" || text*="Skip"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/i/18375410',
        },
        '[text*="跳过" || text*="Skip"][text.length<=10]',
      ],
    },
  ],
});
