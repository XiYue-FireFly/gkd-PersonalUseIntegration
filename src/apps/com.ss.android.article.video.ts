import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.SplashActivity',
        matches: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
        snapshotUrls: 'https://i.gkd.li/i/13328430',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.SplashActivity',
        matches: ['[text="开启推送通知"]', '[text="暂不开启"]'],
        snapshotUrls: 'https://i.gkd.li/i/13456568',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@TextView[id="com.ss.android.article.video:id/sj"][text="暂不开启"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-红包弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.article.video.activity.SplashActivity',
        matches: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
        snapshotUrls: 'https://i.gkd.li/i/13620299',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});