import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12867875', 'https://i.gkd.li/i/16812698'],
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12867875',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14434685',
        exampleUrls: 'https://m.gkd.li/57941037/45daad88-68a3-41b9-933a-943eeae0e4ff',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 1,
      name: '通知提示-请求推送通知弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12867853',
      rules: [
      {
        key: 0,
        matches: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告',
      desc: '关闭各种全屏广告弹窗，包括字节广告、会员推广等',
      enable: false,
      activityIds: ['com.zmzx.college.search.activity.main.activity.MainActivity', 'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity', 'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity', 'com.zmzx.college.search.activity.common.CommonCacheHybridActivity', 'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity', 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity', 'com.zmzx.college.search.activity.common.DialogWebActivity', 'com.mercury.sdk.activity.InterstitialPortraitActivity', 'com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
      rules: [
      {
        key: 0,
        name: '广告-1',
        matches: '[vid="iv_close"]',
        snapshotUrls: ['https://i.gkd.li/import/12867751', 'https://i.gkd.li/import/12894813', 'https://i.gkd.li/import/13522998'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '广告-2',
        matches: '[vid="iv_itr_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15360368',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '广告-3',
        matches: 'ImageView - FrameLayout >3 FrameLayout[childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/15372979',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '广告-4',
        matches: '@ImageView <n RelativeLayout > RelativeLayout > RelativeLayout > [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/15521123',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '字节广告',
        matches: '@Image[text.length=0] < View +(3,5) View > View > TextView[text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/import/13523288', 'https://i.gkd.li/i/14965922', 'https://i.gkd.li/i/15316457', 'https://i.gkd.li/i/15442099'],
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '关闭开通会员免广告打扰弹窗',
        matches: '@TextView[text.length=0] <n View > [text*="免广告"]',
        snapshotUrls: ['https://i.gkd.li/i/15316467'],
        preKeys: [0,1,2,3,4],
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '腾讯广告',
        activityIds: ['com.zmzx.college.search.activity.main.activity.MainActivity', 'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity', 'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity', 'com.zmzx.college.search.activity.common.CommonCacheHybridActivity'],
        matches: '[id="com.zmzx.college.search:id/iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12867751', 'https://i.gkd.li/i/12894813', 'https://i.gkd.li/i/13522998', 'https://i.gkd.li/i/14554866'],
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '快手广告-1',
        activityIds: ['com.zmzx.college.search.activity.main.activity.MainActivity', 'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity'],
        matches: 'ImageView < @ViewGroup[clickable=true] < ViewGroup <n * + ViewGroup >3 [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13451304', 'https://i.gkd.li/i/14519779', 'https://i.gkd.li/i/14731371'],
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '字节广告-1',
        activityIds: 'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
        matches: 'Image < @View +3 View > View > TextView[text$="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13523288',
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '字节广告-2',
        activityIds: ['com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity'],
        matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12893408', 'https://i.gkd.li/i/13929945'],
        fastQuery: true,
        _uniqueKey: 9
      },
      {
        key: 10,
        activityIds: 'com.mercury.sdk.activity.InterstitialPortraitActivity',
        matches: '[vid="iv_itr_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15360368',
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 11,
        name: '快手广告-1-1',
        activityIds: ['com.zmzx.college.search.activity.main.activity.MainActivity', 'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity'],
        matches: ['ViewGroup[childCount=2] [text="广告"]', 'ViewGroup @ViewGroup[clickable=true][childCount=1] > ImageView'],
        snapshotUrls: ['https://i.gkd.li/i/13346628', 'https://i.gkd.li/i/13451304', 'https://i.gkd.li/i/14519779'],
        _uniqueKey: 11,
        _uniqueName: '快手广告-1-1',
        name: '快手广告-1-1'
      },
      {
        key: 12,
        name: '字节广告-2-1',
        activityIds: ['com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity'],
        matches: '[id$="tt_reward_full_count_down"]',
        snapshotUrls: 'https://i.gkd.li/i/13929945',
        fastQuery: true,
        _uniqueKey: 12,
        _uniqueName: '字节广告-2-1',
        name: '字节广告-2-1'
      },
      ],
    },
{
      key: 3,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        activityIds: ['com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity', 'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity'],
        matches: '[vid="close_m_image_left_text_right_app_compliance"]',
        snapshotUrls: ['https://i.gkd.li/i/13849755', 'https://i.gkd.li/i/13929965'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
        matches: '[id^="com.zmzx.college.search:id/ad_flag_source"] - * > [id="com.zmzx.college.search:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13063381',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.main.activity.MainActivity', '.activity.init.InitActivity'],
        matches: '[id="com.zmzx.college.search:id/update_close"]',
        snapshotUrls: ['https://i.gkd.li/i/13063373', 'https://i.gkd.li/i/13623469'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.zmzx.college.search:id/update_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.main.activity.MainActivity',
        matches: '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13440939',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13440939',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '评价提示-请求好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.camerasdk.ZybCameraSDKActivity',
        matches: '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13476308',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '分段广告-信息流广告',
      desc: '关闭首页、教材详情页等位置的信息流广告',
      enable: false,
      activityIds: ['com.zmzx.college.search.activity.main.activity.MainActivity', '.activity.booksearch.result.activity.TextbookDetailActivity', '.activity.common.DialogWebActivity', 'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity'],
      rules: [
      {
        key: 0,
        matches: 'ImageView < FrameLayout > FrameLayout[childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/15373051',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="广告"] <<n [name*=".View"] +n [name*=".View"] >(1, 2) [name*=".Image"][index=0]',
        snapshotUrls: ['https://i.gkd.li/i/15521151', 'https://i.gkd.li/i/16319245'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="iv_native_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15527866',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@Image < View + View > View >n [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/15885694',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@ImageView - ImageView <(2) * > TextView[text.length>0] < * <n * > TextView[text.length>0]',
        snapshotUrls: ['https://i.gkd.li/i/16157056', 'https://i.gkd.li/i/16571916'],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[vid="ms_item_pre_render_smallimage_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16398731',
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '首页底部广告',
        matches: '[vid="tvClose"]',
        snapshotUrls: 'https://i.gkd.li/i/14518991',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '教材底部广告',
        matches: '@[desc$="dislike"] <<n [vid="rlBottomADContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/15902162',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 10,
        name: '点击不感兴趣',
        matches: 'TextView[text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/15913004', 'https://i.gkd.li/i/15902298'],
        preKeys: [0,1,2,3,4,5,6,7],
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 11,
        name: '关闭开通会员免广告打扰弹窗',
        matches: '@TextView[text.length=0] <n View > [text*="免广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16319260'],
        preKeys: [0,1,2,3,4,5,6,7,10],
        _uniqueKey: 11
      },
      ],
    },
{
      key: 11,
      name: '全屏广告-邀好友得开学好礼',
      desc: '使用返回关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.zmzx.college.search.activity.common.CommonCacheHybridActivity',
        matches: '[visibleToUser=true][text="邀好友得开学好礼"] <<n [vid="webview_root_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/14555042',
        exampleUrls: 'https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb',
        fastQuery: true,
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.zmzx.college.search.activity.common.CommonCacheHybridActivity',
        matches: '[text="邀好友得开学好礼"] <<n [vid="webview_root_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/14555042',
        exampleUrls: 'https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb',
        fastQuery: true,
        action: 'back',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 12,
      name: '分段广告-底部卡片广告',
      desc: '点击关闭-点击不感兴趣',
      activityIds: 'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[desc$="dislike"] <<n [vid="rlBottomADContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/15902162',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/15902298',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});