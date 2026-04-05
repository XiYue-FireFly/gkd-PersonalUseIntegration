import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hpbr.bosszhipin',
  name: 'BOSS直聘',
  groups: [
{
      key: 0,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.module.main.activity.MainActivity', '.module.launcher.WelcomeActivity'],
        matches: '@ImageView[id="com.hpbr.bosszhipin:id/iv_cancle"]',
        snapshotUrls: ['https://i.gkd.li/i/13440781', 'https://i.gkd.li/i/13623476'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[id="com.hpbr.bosszhipin:id/iv_cancle"]',
        snapshotUrls: ['https://i.gkd.li/i/13440781', 'https://i.gkd.li/i/13623476'],
        _uniqueKey: 1
      },
      ],
    },
  ],
});