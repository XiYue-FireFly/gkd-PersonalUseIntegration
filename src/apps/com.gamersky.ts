import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gamersky',
  name: '游民星空',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16322789',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        snapshotUrls: 'https://i.gkd.li/i/16333782',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="ms_skipView"]',
        snapshotUrls: 'https://i.gkd.li/i/16860311',
        exampleUrls: 'https://e.gkd.li/4b7fd3fe-8467-49e3-93af-64515416911c',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/16902939',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="animation_view"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17565808',
        exampleUrls: 'https://e.gkd.li/6bca4f19-320d-42e4-affb-4667a8112653',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.main.activity.LibMainActivity', '.common.activity.LibDetailContentDetailActivity'],
        matches: ['[text="广告" || vid="badge"][visibleToUser=true]', '[vid="delete" || vid="close"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/18122883', 'https://i.gkd.li/i/18122884', 'https://i.gkd.li/i/20422031'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.gamersky.common.activity.LibDetailContentDetailActivity',
        matches: 'WebView >2 View[childCount=2] > View[index=1] > @View[clickable=true][visibleToUser=true][childCount=0] <<n [vid="contentWebView"]',
        snapshotUrls: 'https://i.gkd.li/i/14622935',
        excludeSnapshotUrls: 'https://i.gkd.li/i/14892583',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.gamersky.common.activity.LibDetailContentDetailActivity',
        matches: '@[clickable=true][visibleToUser=true][text=""] - [childCount=0][text="广告"] <<n [vid="nested_view_group" || vid="contentWebView"]',
        snapshotUrls: ['https://i.gkd.li/i/13635579', 'https://i.gkd.li/i/15477470', 'https://i.gkd.li/i/17356753'],
        _uniqueKey: 2
      },
      {
        key: 4,
        activityIds: 'com.gamersky.main.activity.LibMainActivity',
        matches: '[vid="recommended_reviews_or_rating_close_img"]',
        snapshotUrls: 'https://i.gkd.li/i/16556122',
        exampleUrls: 'https://e.gkd.li/f214c099-c22a-4c20-abc0-4cdddc2fe614',
        _uniqueKey: 4
      },
      {
        key: 3,
        name: '首页卡片广告',
        activityIds: 'com.gamersky.main.activity.LibMainActivity',
        matches: '[text="广告"] < * + [id="com.gamersky:id/delete"]',
        snapshotUrls: ['https://i.gkd.li/i/13451220', 'https://i.gkd.li/i/13635580'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 5,
        name: '正文底部卡片广告',
        activityIds: 'com.gamersky.common.activity.LibDetailContentDetailActivity',
        matches: 'WebView >2 View[childCount=2] > View[index=1] > View[childCount=0][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13451258', 'https://i.gkd.li/i/14622935', 'https://i.gkd.li/i/14892583'],
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.gamersky.common.activity.LibDetailContentDetailActivity',
        matches: 'View[childCount=2] > [text="广告"] + View[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13635579',
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '评论区卡片广告',
        activityIds: 'com.gamersky.common.activity.LibDetailContentDetailActivity',
        matches: '@[id="com.gamersky:id/close"][clickable=true][visibleToUser=true] - * > [id="com.gamersky:id/badge"]',
        snapshotUrls: 'https://i.gkd.li/i/13759484',
        fastQuery: true,
        _uniqueKey: 7
      },
      ],
    },
{
      key: 2,
      name: '功能类-签到成功弹窗',
      desc: '点击[确定]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.gamersky.main.activity.LibMainActivity',
        matches: ['[text="签到成功！"]', '[text="确定"]'],
        snapshotUrls: 'https://i.gkd.li/i/14761502',
        exampleUrls: 'https://m.gkd.li/57941037/696e417a-3100-43a2-a401-f4f80dfa9f47',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.gamersky.main.activity.LibMainActivity',
        matches: '[text="签到成功！"] < * > [text="确定"]',
        snapshotUrls: 'https://i.gkd.li/i/14761502',
        exampleUrls: 'https://m.gkd.li/57941037/696e417a-3100-43a2-a401-f4f80dfa9f47',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});