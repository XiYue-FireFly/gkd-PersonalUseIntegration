import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.paces.ccms',
  name: '平安口袋银行',
  groups: [
{
      key: 1,
      name: '全屏广告-首页-权益/抽奖弹窗',
      enable: false,
      activityIds: 'com.pingan.launcher.activity.LauncherActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/i/14107110', 'https://i.gkd.li/i/14107111'],
      rules: [
      {
        key: 0,
        matches: '[text!="" || text!=null] < [vid="alertHeader"] < [vid="allViewstub"] + [vid="horizontalBottomIcon"] >2 [vid="bottom_close_image"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});