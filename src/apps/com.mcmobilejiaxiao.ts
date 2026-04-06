import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcmobilejiaxiao',
  name: '驾校一点通',
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
          activityIds: 'com.mcmobilejiaxiao.ui.activity.SplashActivity',
          matches: '[text*="跳过" && text.length<=10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375420',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      categoryKey: 7,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mcmobilejiaxiao.ui.activity.MainActivity',
          matches: '@[text="×" || vid="close_btn" || id="close_btn"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375421',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      categoryKey: 6,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.mcmobilejiaxiao.ui.activity.MainActivity',
          matches: '[text^="来 oppo 软件商店" || text*="附近动态"] + [vid="close_btn" || id="close_btn" || text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375422',
        },
        {
          activityIds: 'com.mcmobilejiaxiao.ui.activity.MainActivity',
          matches: '[text="立即领取"] + [text="查看"] + [text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375423',
        },
      ],
    },
  ],
});
