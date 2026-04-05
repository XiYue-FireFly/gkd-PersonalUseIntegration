import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.chunyu.ChunyuDoctor',
  name: '春雨医生',
  groups: [
{
      key: 10,
      name: '评价提示-应用评分弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.Activities.MainActivity', '.Activities.WelcomeActivity'],
        matches: '[text="给应用评分"] +(2) RelativeLayout > [text="下次再说"]',
        snapshotUrls: ['https://i.gkd.li/i/12661907', 'https://i.gkd.li/i/12661924'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="给应用评分"] +(2) RelativeLayout > [text="下次再说"]',
        snapshotUrls: ['https://i.gkd.li/i/12661907', 'https://i.gkd.li/i/12661924'],
        _uniqueKey: 1
      },
      ],
    },
  ],
});