import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xpx365.projphoto',
  name: '工程相机',
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
        snapshotUrls: 'https://i.gkd.li/i/13827755',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/16030619', 'https://i.gkd.li/i/16030620', 'https://i.gkd.li/i/16030622'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@ImageView[clickable=true][visibleToUser=true] - [text="|"]',
        snapshotUrls: 'https://i.gkd.li/i/16030413',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@View <2 FrameLayout <2 FrameLayout < [vid="splash_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13827755',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '字节广告SDK',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@LinearLayout[clickable=true] - FrameLayout[childCount=1] > [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/13762195',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '腾讯广告SDK',
        activityIds: 'com.xpx365.projphoto.FirstActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/13762196',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '快手广告SDK',
        activityIds: 'com.xpx365.projphoto.AdKS2AutoCloseActivity',
        matches: '[id="com.kwad.dy.sdk:id/ksad_tk_view"] @ViewGroup[clickable=true] > TextView[text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/13695668',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '字节广告SDK-1',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@LinearLayout[clickable=true] > LinearLayout[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13695604', 'https://i.gkd.li/i/13762212', 'https://i.gkd.li/i/13762195'],
        _uniqueKey: 3,
        _uniqueName: '字节广告SDK-1',
        name: '字节广告SDK-1'
      },
      {
        key: 4,
        name: '腾讯广告SDK-1',
        activityIds: 'com.xpx365.projphoto.FirstActivity',
        matches: 'FrameLayout[childCount>1] > FrameLayout[index=3]',
        snapshotUrls: 'https://i.gkd.li/i/13762196',
        _uniqueKey: 4,
        _uniqueName: '腾讯广告SDK-1',
        name: '腾讯广告SDK-1'
      },
      {
        key: 5,
        name: '快手广告SDK-1',
        activityIds: 'com.xpx365.projphoto.AdKS2AutoCloseActivity',
        matches: '[id="com.kwad.dy.sdk:id/ksad_tk_view"] @ViewGroup[clickable=true] > TextView[text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/13695668',
        _uniqueKey: 5,
        _uniqueName: '快手广告SDK-1',
        name: '快手广告SDK-1'
      },
      ],
    },
  ],
});