import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.news',
  name: '腾讯新闻',
  groups: [
{
      key: 1,
      name: '分段广告-信息流广告',
      desc: '自动点击"更多"->"不感兴趣"',
      activityIds: 'com.tencent.news.activity.SplashActivity',
      rules: [
      {
        key: 0,
        name: '点击"更多"按钮',
        matches: 'FrameLayout[id="android:id/content"][childCount=1] >n [text="广告"] +n [id="com.tencent.news:id/dislike_streamAd_more"]',
        snapshotUrls: ['https://i.gkd.li/i/12755834', 'https://i.gkd.li/i/12755852'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击"不感兴趣"按钮',
        matches: '[id="com.tencent.news:id/dislike_reason_view"] >n [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/12755852',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击【更多】按钮',
        matches: 'FrameLayout[id="android:id/content"][childCount=1] >n [text="广告"] +n [id="com.tencent.news:id/dislike_streamAd_more"]',
        snapshotUrls: ['https://i.gkd.li/i/12755834', 'https://i.gkd.li/i/12755852', 'https://i.gkd.li/i/12755914'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击【不感兴趣】按钮',
        matches: '[id="com.tencent.news:id/dislike_reason_view"] >n [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/12755852',
        preKeys: [0],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-广告、活动弹窗',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.news.activity.SplashActivity',
        matches: '@[text="关闭"] + [text="查看活动详情"]',
        snapshotUrls: 'https://i.gkd.li/i/12755872',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.activity.SplashActivity',
        matches: '[text="开启通知"] + [text="先不了"]',
        snapshotUrls: 'https://i.gkd.li/i/12755824',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启通知"] + [text="先不了"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});