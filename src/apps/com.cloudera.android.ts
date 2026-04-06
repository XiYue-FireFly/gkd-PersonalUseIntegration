import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cloudera.android',
  name: '慧生活 798',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      categoryKey: 0,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.cloudera.android.ui.activity.SplashActivity',
          matches: [
            '[text*="跳过" && text.length<=10]',
            '[vid*="skip" || vid*="count"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18375410',
        },
        {
          matches: '[text*="跳过" && text.length<=10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375410',
        },
      ],
    },
  ],
});
