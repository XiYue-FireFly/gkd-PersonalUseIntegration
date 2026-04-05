import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.byfen.market',
  name: '百分网游戏盒子',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13298944',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.byfen.market:id/ad_view"] >3 View[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13800021',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.byfen.market.ui.activity.MainActivity',
        matches: '[vid="idIvClose"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13801613',
        exampleUrls: 'https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.byfen.market:id/idIvClose"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      desc: '点击[忽略更新]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.activity.MainActivity',
        matches: '[text="忽略更新"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14322280',
        exampleUrls: 'https://m.gkd.li/57941037/e92b10b8-b0f8-4dc3-95bf-172829996600',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '穿山甲SDK-点击【反馈】',
        matches: '[id="com.byfen.market:id/idAd"] >n [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/13771711',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '穿山甲SDK-点击【不感兴趣】',
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13771773',
        preKeys: 0,
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
  ],
});