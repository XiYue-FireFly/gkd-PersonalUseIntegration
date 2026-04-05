import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text="跳过"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14753912',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
        snapshotUrls: ['https://i.gkd.li/i/14031922', 'https://i.gkd.li/i/14322264'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '全屏广告',
      enable: false,
      activityIds: ['com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T', 'com.aster.comic.app.view.MainActivity', 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity'],
      rules: [
      {
        key: 0,
        name: '腾讯SDK-1',
        matches: '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/13830354', 'https://i.gkd.li/i/13842716', 'https://i.gkd.li/i/13842966'],
        actionDelay: 350,
        _uniqueKey: 0
      },
      {
        key: 10,
        name: '腾讯SDK-2',
        matches: '[id="android:id/content"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/15173845',
        actionDelay: 350,
        _uniqueKey: 10
      },
      {
        key: 1,
        name: '字节SDK',
        matches: 'FrameLayout[desc*="close"] > View',
        snapshotUrls: ['https://i.gkd.li/i/13839432', 'https://i.gkd.li/i/13839519'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '穿山甲SDK-1',
        matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
        snapshotUrls: 'https://i.gkd.li/i/13810767',
        actionDelay: 350,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '穿山甲SDK-2',
        matches: '[text="反馈"] <<n View + View[childCount=1]',
        snapshotUrls: 'https://i.gkd.li/i/13830798',
        actionDelay: 350,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '穿山甲SDK-3',
        matches: '[text*="跳过" && text.length<=6] <2 @View -(3-n) View < View',
        snapshotUrls: 'https://i.gkd.li/i/13829749',
        actionDelay: 350,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '穿山甲SDK-4',
        matches: '[text="反馈"] -n @View[index<=1] > Image[text.length=0]',
        snapshotUrls: ['https://i.gkd.li/i/13809737', 'https://i.gkd.li/i/13809578'],
        actionDelay: 350,
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '穿山甲SDK-5',
        matches: '[text="反馈"] <<n View - View[childCount=1]',
        snapshotUrls: 'https://i.gkd.li/i/13810150',
        actionDelay: 350,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '快手SDK-1',
        matches: '[text*="跳过"] <n *[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13809629',
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '快手SDK-2',
        matches: '[vid="ksad_auto_close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13837855',
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '快手SDK-3',
        matches: '[vid="ksad_video_container"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13829312',
        _uniqueKey: 9
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      desc: '点击"暂不"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.aster.comic.app.view.bookdetails.BookdetailsActivity',
        matches: '[id="com.paokeji.yiqu:id/btnCancel"]',
        snapshotUrls: 'https://i.gkd.li/i/14140265',
        exampleUrls: 'https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.paokeji.yiqu:id/btnCancel"]',
        snapshotUrls: 'https://i.gkd.li/i/14140265',
        exampleUrls: 'https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] + @View[childCount=2] > [text*="跳过"]',
        snapshotUrls: ['https://i.gkd.li/i/13829749', 'https://i.gkd.li/i/14362119'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity', 'com.aster.comic.app.view.MainActivity'],
        matches: '[text="反馈"] -(2,4) @View[childCount=1][visibleToUser=true] > Image[childCount=0][text=""]',
        snapshotUrls: ['https://i.gkd.li/i/13809578', 'https://i.gkd.li/i/14717730', 'https://i.gkd.li/i/16062358'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@LinearLayout[clickable=true] - * > [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/14847142',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.aster.comic.app.view.MainActivity',
        matches: '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
        snapshotUrls: 'https://i.gkd.li/i/15374245',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['com.aster.comic.app.view.MainActivity', 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity'],
        matches: '[text="反馈"] + View[childCount=1] > Image[childCount=0][text=""]',
        snapshotUrls: ['https://i.gkd.li/i/15711106', 'https://i.gkd.li/i/17301509'],
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
        matches: '@[id="com.kwad.dy.sdk:id/ksad_end_close_btn"] - [text="免费获取"]',
        snapshotUrls: 'https://i.gkd.li/i/16369203',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
        matches: '@ViewGroup[clickable=true] +3 ViewGroup > [text*="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/16401930',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '腾讯SDK-1',
        activityIds: ['com.aster.comic.app.view.MainActivity', 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T'],
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/13830354', 'https://i.gkd.li/i/13842966'],
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '腾讯SDK-2',
        activityIds: 'com.aster.comic.app.view.MainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/15173845',
        fastQuery: true,
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '字节SDK',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: 'FrameLayout[desc*="close"] > View',
        snapshotUrls: 'https://i.gkd.li/i/13839519',
        _uniqueKey: 9
      },
      {
        key: 10,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down"]',
        snapshotUrls: 'https://i.gkd.li/i/13810767',
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 11,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: 'Image[childCount=0][text=""] < @View + View > [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/13810150',
        _uniqueKey: 11
      },
      {
        key: 12,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
        matches: ['[text*="广告"]', '[text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13809629',
        fastQuery: true,
        _uniqueKey: 12
      },
      {
        key: 13,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] + @View[childCount=2] > [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/14362119',
        exampleUrls: 'https://m.gkd.li/57941037/6f12fd12-b956-474a-834c-8ebba00efbff',
        _uniqueKey: 13
      },
      {
        key: 14,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: 'Image[text=""] < @View +4 [text="反馈"] + * >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14717730',
        exampleUrls: 'https://m.gkd.li/57941037/9bf34f1f-f1a1-4fb8-a84a-96cb8e1c2669',
        _uniqueKey: 14
      },
      ],
    },
{
      key: 4,
      name: '功能类-漫画页链接断开提示',
      desc: '点击[点我重试]',
      actionMaximum: 3,
      rules: [
      {
        key: 0,
        activityIds: 'com.aster.comic.app.view.reader.ReaderActivity',
        matches: '@[clickable=true] > [text="点我重试"]',
        snapshotUrls: 'https://i.gkd.li/i/14572053',
        exampleUrls: 'https://m.gkd.li/57941037/d71c73bb-289f-4205-a253-fcd8bd32f196',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});