import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jianshu.haruki',
  name: '简书',
  groups: [
{
      key: 1,
      name: '全屏广告-VIP弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.baiji.jianshu.ui.splash.SplashScreenActivity',
        matches: '[id="com.jianshu.haruki:id/dialog_lucky_prize_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13327286',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      activityIds: 'com.jianshu.wireless.articleV2.X5ArticleDetailActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[checked=false] + [text="忽略此版本"]',
        snapshotUrls: 'https://i.gkd.li/i/15989275',
        exampleUrls: 'https://e.gkd.li/23662d6a-1858-4d97-9bc7-ef03ede9f316',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/15989275',
        exampleUrls: 'https://e.gkd.li/23662d6a-1858-4d97-9bc7-ef03ede9f316',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '局部广告-首页信息流广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.baiji.jianshu.MainActivity',
        matches: 'ImageView[vid="nativeAdClose"]',
        snapshotUrls: 'https://i.gkd.li/i/16201541',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});