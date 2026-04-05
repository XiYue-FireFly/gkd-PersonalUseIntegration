import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.handsgo.jiakao.android',
  name: '驾考宝典',
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
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14812686',
        exampleUrls: 'https://m.gkd.li/101449500/cac1598d-0e1c-44d7-8a5c-5fb084d8e437',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
        matches: '[id="com.handsgo.jiakao.android:id/ivDelete"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13475994',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.main.activity.MainActivity',
        matches: '[id="com.handsgo.jiakao.android:id/adsdk__ids_component_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13475994',
        exampleUrls: 'https://e.gkd.li/a3ff6d58-4902-4ff4-a1dd-dbdb4a9ae38a',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
        matches: '@[id="com.handsgo.jiakao.android:id/ivDelete"] + [id="com.handsgo.jiakao.android:id/ivRemote"]',
        snapshotUrls: 'https://i.gkd.li/i/13475994',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@View[clickable=true][childCount=0] < FrameLayout[desc^="webview-close"] +4 FrameLayout >3 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13476039',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
        matches: ['[vid="adsdk__ids_cta_layout"][visibleToUser=true]', '[vid="close"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/20745398',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.main.activity.MainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/20745379',
        exampleUrls: 'https://e.gkd.li/5370968e-fded-4be0-8fa4-b7997f8a861a',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '字节广告',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: ['[desc^="logoad"] > [text="广告"]', '[desc^="webview-close"] > View[clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/13476039',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '课程广告',
        activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
        matches: '[id="com.handsgo.jiakao.android:id/adsdk__ids_cta_layout"] - * > [id="com.handsgo.jiakao.android:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13523033',
        fastQuery: true,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 3,
      name: '权限提示-通知权限',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
        matches: '[text="开启专属学习资料推送"] + [vid="closeIv"]',
        snapshotUrls: 'https://i.gkd.li/i/17001986',
        exampleUrls: 'https://e.gkd.li/9a9aad9b-052b-4e00-9926-d4a213f96372',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启专属学习资料推送"] + [id="com.handsgo.jiakao.android:id/closeIv"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});