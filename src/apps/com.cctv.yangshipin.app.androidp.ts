import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cctv.yangshipin.app.androidp',
  name: '央视频',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/19859692',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/20949002',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16479226',
        exampleUrls: 'https://e.gkd.li/8f722fca-4f50-4d5e-bbb6-14276f973404',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
        matches: '[vid="lottery_popup_view_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16493556',
        exampleUrls: 'https://e.gkd.li/8ae44849-08d0-4e7f-a3e1-a277a4e22315',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.tencent.videolite.android.business.videolive.VideoLiveActivity',
        matches: '[vid="product_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21209009',
        exampleUrls: 'https://e.gkd.li/1dcd9a1c-4994-4d6f-8611-fcfbcfa184bd',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
        matches: '[vid="lottery_popup_view_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16493556',
        exampleUrls: 'https://e.gkd.li/8ae44849-08d0-4e7f-a3e1-a277a4e22315',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
        matches: '[vid="iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16742915',
        exampleUrls: 'https://e.gkd.li/abb06a51-6b92-4734-8a60-d0ef87b3364d',
        fastQuery: true,
        forcedTime: 10000,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.videolite.android.ui.HomeActivity',
        matches: ['[text="给个好评"][visibleToUser=true]', '[vid="close_btn"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/19788008',
        exampleUrls: 'https://e.gkd.li/7d8f15f0-1f71-4538-8fde-144ebd81dead',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-底部关注弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.videolite.android.business.videolive.VideoLiveActivity',
        matches: '@[vid="close"] <<n [vid="follow_float_container"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21208995',
        exampleUrls: 'https://e.gkd.li/b4006011-8b13-431b-9af3-f4390898d12c',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});