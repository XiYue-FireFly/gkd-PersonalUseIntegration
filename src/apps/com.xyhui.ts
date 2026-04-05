import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xyhui',
  name: 'PU口袋校园',
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
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
        snapshotUrls: ['https://i.gkd.li/i/14560058', 'https://i.gkd.li/i/14560214'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text^="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/12642486', 'https://i.gkd.li/i/12846496', 'https://i.gkd.li/i/12868232'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="ms_skipView"]',
        snapshotUrls: 'https://i.gkd.li/i/16486847',
        action: 'clickCenter',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '关闭各类全屏弹窗广告',
      enable: false,
      rules: [
      {
        key: 1,
        name: '腾讯广告',
        activityIds: ['com.xyhui.start.PUMainActivity', 'com.xyhui.start.LoadingActivity', '.lut.act.LutMainActivity'],
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/14472097', 'https://i.gkd.li/i/13695488', 'https://i.gkd.li/i/23325238'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '快手广告',
        activityIds: ['com.xyhui.start.PUMainActivity', 'com.xyhui.start.LoadingActivity'],
        matches: 'ImageView < @ViewGroup[clickable=true] < * <2 * +n * >(1,3) [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16837806', 'https://i.gkd.li/i/13259196', 'https://i.gkd.li/i/13259198'],
        exampleUrls: 'https://e.gkd.li/1d51a37a-0444-4850-983c-3646b494204a',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '字节广告',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: 'View[clickable=true] < FrameLayout +4 * >2 [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/13259183',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '美数广告',
        activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
        matches: '[id="com.xyhui:id/ms_activity_sdk_interstitial_cacel"]',
        snapshotUrls: 'https://i.gkd.li/i/13458692',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] + @View[visibleToUser=true] > Image',
        snapshotUrls: 'https://i.gkd.li/i/14560546',
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: ['com.xyhui.start.PUMainActivity', 'com.xyhui.start.LoadingActivity', '.lut.act.LutMainActivity'],
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/14472098', 'https://i.gkd.li/i/14766902', 'https://i.gkd.li/i/23146070', 'https://i.gkd.li/i/23304106', 'https://i.gkd.li/i/24488993'],
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: '.lut.act.LutMainActivity',
        matches: 'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/18245369',
        exampleUrls: 'https://e.gkd.li/240494b6-026f-49f7-a77d-986e70077218',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        activityIds: 'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
        matches: '@Image[childCount=0][text=""] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text="反馈"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22863858',
        _uniqueKey: 8
      },
      {
        key: 9,
        activityIds: ['com.anythink.basead.ui.ATPortraitTranslucentActivity', 'com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity', 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity'],
        matches: '[vid="anythink_myoffer_btn_close_id" || vid="sdm_myoffer_btn_close_id" || vid="beizi_interstitial_ad_close_iv"]',
        snapshotUrls: ['https://i.gkd.li/i/22868736', 'https://i.gkd.li/i/23293759', 'https://i.gkd.li/i/23577343'],
        fastQuery: true,
        _uniqueKey: 9
      },
      {
        key: 10,
        activityIds: '.lut.act.LutMainActivity',
        matches: '@[text="关闭"] < * +n * >(1,2) [text*="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/23125533', 'https://i.gkd.li/i/23577305'],
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 11,
        activityIds: '.lut.act.LutMainActivity',
        matches: '@ImageView[width<140 && height<140] - * > [text^="请允许"][text$="安装应用"]',
        snapshotUrls: 'https://i.gkd.li/i/23125594',
        fastQuery: true,
        _uniqueKey: 11
      },
      {
        key: 12,
        name: '京东广告',
        activityIds: '.lut.act.LutMainActivity',
        matches: '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
        snapshotUrls: 'https://i.gkd.li/i/23325124',
        fastQuery: true,
        _uniqueKey: 12
      },
      {
        key: 13,
        activityIds: 'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
        matches: '@ImageView[width<100 && height<100] <<4 * + * >4 [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/23567050',
        fastQuery: true,
        _uniqueKey: 13
      },
      {
        key: 14,
        activityIds: '.lut.act.LutMainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/23937136',
        fastQuery: true,
        _uniqueKey: 14
      },
      {
        key: 15,
        name: '腾讯广告-1',
        activityIds: ['com.xyhui.start.PUMainActivity', 'com.xyhui.start.LoadingActivity', 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'],
        matches: '[id="android:id/content"] >(4,5) @FrameLayout[index=1] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/14472097', 'https://i.gkd.li/i/14472098', 'https://i.gkd.li/i/13695488', 'https://i.gkd.li/i/14766902'],
        _uniqueKey: 15,
        _uniqueName: '腾讯广告-1',
        name: '腾讯广告-1'
      },
      {
        key: 16,
        name: '快手广告-1',
        activityIds: 'com.xyhui.start.LoadingActivity',
        matches: 'ImageView < @ViewGroup[clickable=true] < * <2 * + * >3 [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13259196', 'https://i.gkd.li/i/13259198'],
        fastQuery: true,
        _uniqueKey: 16,
        _uniqueName: '快手广告-1',
        name: '快手广告-1'
      },
      ],
    },
{
      key: 2,
      name: '局部广告-首页-右侧浮窗广告',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.lut.act.LutMainActivity', 'com.xyhui.start.PUMainActivity', 'com.xyhui.start.LoadingActivity'],
        matches: 'ImageView[id="com.xyhui:id/deleteIv"]',
        snapshotUrls: ['https://i.gkd.li/i/22863860', 'https://i.gkd.li/i/12846543', 'https://i.gkd.li/i/12868119'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.xyhui:id/deleteIv"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      order: -9,
      snapshotUrls: ['https://i.gkd.li/i/12908853', 'https://i.gkd.li/i/12908865'],
      rules: [
      {
        key: 0,
        matches: 'ImageView[id="com.xyhui:id/closeIv"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '权限提示-通知权限',
      rules: [
      {
        key: 0,
        activityIds: 'com.pu.activity.act.ActivityApplyResult',
        matches: ['[text^="打开系统消息通知"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/23206833',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '功能类-打开应用自动进入部落',
      desc: '点击我的-我的部落-已通过-部落详情（如果有多个则点击第一个，仅开屏时触发一次）',
      rules: [
      {
        key: 0,
        name: '点击导航栏[我的]',
        activityIds: '.lut.act.LutMainActivity',
        matches: '@ViewGroup[clickable=true][visibleToUser=true] > [text="我的"] <<n [vid="mCustomTabView"]',
        snapshotUrls: 'https://i.gkd.li/i/23303536',
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[我的部落]',
        activityIds: '.lut.act.LutMainActivity',
        matches: '@LinearLayout[vid="itemView"][visibleToUser=true] > [text="我的部落"]',
        snapshotUrls: 'https://i.gkd.li/i/23303537',
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击[已通过]',
        activityIds: 'com.lut.tribe.act.MyLutTribeAct',
        matches: '@RelativeLayout[clickable=true][visibleToUser=true] > [text="已通过"]',
        snapshotUrls: 'https://i.gkd.li/i/23303538',
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '进入部落详情',
        activityIds: 'com.lut.tribe.act.MyLutTribeAct',
        matches: '@LinearLayout[clickable=true][visibleToUser=true] < [vid="mRecyclerView"]',
        snapshotUrls: 'https://i.gkd.li/i/23303539',
        preKeys: [2],
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
  ],
});