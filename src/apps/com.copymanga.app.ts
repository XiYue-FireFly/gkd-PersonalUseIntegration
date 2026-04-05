import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        name: '快手广告-1',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: ['[text="广告"]', '@ImageView[clickable=true] - [text="|"] - [text$="s"]'],
        snapshotUrls: 'https://i.gkd.li/i/13259085',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '快手广告-2',
        activityIds: ['com.copymanga.app.MainActivity', 'com.kwad.components.ad.interstitial'],
        matches: 'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13625486', 'https://i.gkd.li/i/12504488', 'https://i.gkd.li/i/13344156'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '快手广告-3',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: ['ViewGroup > [text="广告"]', '@ViewGroup[clickable=true] > [text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13696292',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '腾讯广告-1',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/12504520', 'https://i.gkd.li/i/12661019', 'https://i.gkd.li/i/13193877', 'https://i.gkd.li/i/12892156', 'https://i.gkd.li/i/12504501', 'https://i.gkd.li/i/13259082'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '腾讯广告-2',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/13246786',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '腾讯广告-3',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: '[id="com.copymanga.app:id/interact_ad_root"] > [id="com.copymanga.app:id/iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/13521801', 'https://i.gkd.li/i/13332719'],
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '腾讯广告-4',
        matches: '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
        snapshotUrls: 'https://i.gkd.li/i/13233178',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '字节广告-1',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@View[clickable=true] < FrameLayout[desc*="close"] +4 FrameLayout[desc!=null] >2 [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/13372542',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
        matches: '@[clickable=true] > ImageView[vid="beizi_interstitial_ad_close_iv"]',
        snapshotUrls: 'https://i.gkd.li/i/25049918',
        fastQuery: true,
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '字节广告-3',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12925052', 'https://i.gkd.li/i/12925095'],
        _uniqueKey: 9
      },
      {
        key: 10,
        name: '百度广告-1',
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[clickable=true] - RelativeLayout >2 [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/25189723',
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 11,
        name: '快手广告-1-1',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: ['ViewGroup > [text="广告"]', 'ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/13259085',
        _uniqueKey: 11,
        _uniqueName: '快手广告-1-1',
        name: '快手广告-1-1'
      },
      {
        key: 12,
        name: '快手广告-2-1',
        activityIds: ['com.copymanga.app.MainActivity', 'com.kwad.components.ad.interstitial'],
        matches: '[text="广告"] <2 ViewGroup -(2,3) ViewGroup > ViewGroup[clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13625486', 'https://i.gkd.li/i/12504486', 'https://i.gkd.li/i/12504488', 'https://i.gkd.li/i/13344156'],
        _uniqueKey: 12,
        _uniqueName: '快手广告-2-1',
        name: '快手广告-2-1'
      },
      {
        key: 13,
        name: '快手广告-3-1',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: ['ViewGroup > [text="广告"]', '@ViewGroup[clickable=true] > [text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13696292',
        _uniqueKey: 13,
        _uniqueName: '快手广告-3-1',
        name: '快手广告-3-1'
      },
      {
        key: 14,
        name: '腾讯广告-1-1',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: 'ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: ['https://i.gkd.li/i/12504520', 'https://i.gkd.li/i/12661019', 'https://i.gkd.li/i/13193877', 'https://i.gkd.li/i/12892156', 'https://i.gkd.li/i/12504501', 'https://i.gkd.li/i/13259082'],
        _uniqueKey: 14,
        _uniqueName: '腾讯广告-1-1',
        name: '腾讯广告-1-1'
      },
      {
        key: 15,
        name: '腾讯广告-2-1',
        matches: 'ImageView <2 FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/13246786',
        _uniqueKey: 15,
        _uniqueName: '腾讯广告-2-1',
        name: '腾讯广告-2-1'
      },
      {
        key: 16,
        name: '腾讯广告-3-1',
        matches: '[id="com.copymanga.app:id/interact_ad_root"] > [id="com.copymanga.app:id/iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/13521801', 'https://i.gkd.li/i/13332719'],
        _uniqueKey: 16,
        _uniqueName: '腾讯广告-3-1',
        name: '腾讯广告-3-1'
      },
      {
        key: 17,
        name: '腾讯广告-4-1',
        matches: 'ImageView - ImageView - FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13233178',
        _uniqueKey: 17,
        _uniqueName: '腾讯广告-4-1',
        name: '腾讯广告-4-1'
      },
      {
        key: 18,
        name: '字节广告-1-1',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: ['[desc^="logoad"] > [text="广告"]', '[desc^="webview-close"] > View[clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/13372542',
        _uniqueKey: 18,
        _uniqueName: '字节广告-1-1',
        name: '字节广告-1-1'
      },
      {
        key: 19,
        name: '字节广告-2',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] -2 @View - Image',
        snapshotUrls: 'https://i.gkd.li/i/12925052',
        _uniqueKey: 19
      },
      {
        key: 20,
        name: '字节广告-3-1',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] -4 @View < View[childCount=7]',
        snapshotUrls: 'https://i.gkd.li/i/12925095',
        _uniqueKey: 20,
        _uniqueName: '字节广告-3-1',
        name: '字节广告-3-1'
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        name: '快手广告-1',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: '[id^="com.copymanga.app:id/ad_flag_source"] - * > [id="com.copymanga.app:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/12504525',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '快手广告-2',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: '[id="com.copymanga.app:id/close_m_image_left_text_right_no_compliance"]',
        snapshotUrls: 'https://i.gkd.li/i/13761154',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '腾讯广告',
        activityIds: 'com.copymanga.app.MainActivity',
        matches: 'FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]',
        snapshotUrls: ['https://i.gkd.li/i/12851671', 'https://i.gkd.li/i/12909005'],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-关闭赞助提示',
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
      {
        key: 0,
        matches: '@[desc="就这样吧"] + [desc^="赞助免广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12851627',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '功能类-自动确认线路',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '[desc="进入拷贝漫画"]',
        snapshotUrls: 'https://i.gkd.li/i/13233179',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="进入拷贝漫画"]',
        snapshotUrls: 'https://i.gkd.li/i/13233179',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '通知提示-公告弹窗',
      matchTime: 30000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '[desc="系统提示"] +2 [desc="确定"]',
        snapshotUrls: 'https://i.gkd.li/i/13233180',
        exampleUrls: 'https://m.gkd.li/57941037/7577dafa-9e3e-44de-bd20-c52f8a30e9c6',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="系统提示"] +n [desc="确定"]',
        snapshotUrls: 'https://i.gkd.li/i/13233180',
        _uniqueKey: 1
      },
      ],
    },
  ],
});