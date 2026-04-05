import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lolaage.tbulu.tools',
  name: '两步路户外助手',
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
        activityIds: '.upgrade',
        matches: '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
        snapshotUrls: 'https://i.gkd.li/i/12882550',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        name: '腾讯广告',
        activityIds: ['com.lolaage.tbulu.tools.ui.activity.WelcomeActivity', 'com.lolaage.tbulu.tools.ui.activity.main.MainActivity'],
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/13627861', 'https://i.gkd.li/i/13650732', 'https://i.gkd.li/i/14866147'],
        fastQuery: true,
        forcedTime: 10000,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.lolaage.tbulu.tools.ui.activity.main.MainActivity',
        matches: '[vid="ivClose"]',
        snapshotUrls: 'https://i.gkd.li/i/14952807',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] -4 View[childCount=1] > Image[childCount=0][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16812345',
        exampleUrls: 'https://e.gkd.li/0ed488e1-f0d8-4c5f-a507-af9c2cedd2a1',
        forcedTime: 10000,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '腾讯广告-1',
        activityIds: ['com.lolaage.tbulu.tools.ui.activity.WelcomeActivity', 'com.lolaage.tbulu.tools.ui.activity.main.MainActivity'],
        matches: '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/13627861', 'https://i.gkd.li/i/13650732', 'https://i.gkd.li/i/14866147'],
        forcedTime: 10000,
        _uniqueKey: 3,
        _uniqueName: '腾讯广告-1',
        name: '腾讯广告-1'
      },
      ],
    },
{
      key: 3,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.activity.main.MainActivity',
        matches: '[text="发送通知"] + * >3 [text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/14952803',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="发送通知"] + * >3 [text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/14952803',
        _uniqueKey: 1
      },
      ],
    },
  ],
});