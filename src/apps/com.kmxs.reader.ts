import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kmxs.reader',
  name: '七猫免费小说',
  groups: [
{
      key: 2,
      name: '分段广告-阅读页面广告',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'org.geometerplus.android.fbreader.FBReader',
        matches: '[vid="ad_direct_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17355000',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'org.geometerplus.android.fbreader.FBReader',
        matches: '[text="直接关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/17354753',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.kmxs.reader:id/ll_ad_native_banner"] > [id="com.kmxs.reader:id/iv_ad_direct_close"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-阅读结束后显示的广告',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.kmxs.reader:id/ad_direct_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12640303', 'https://i.gkd.li/i/13362269', 'https://i.gkd.li/i/13362272'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text$="广告"]', '[id="com.kmxs.reader:id/ad_direct_close"]'],
        snapshotUrls: ['https://i.gkd.li/i/12640303', 'https://i.gkd.li/i/13362269', 'https://i.gkd.li/i/13362272'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-签到弹窗',
      activityIds: 'org.geometerplus.android.fbreader.FBReader',
      snapshotUrls: ['https://i.gkd.li/i/12640320'],
      rules: [
      {
        key: 0,
        matches: '@TextView[id=null] < View +(2) TextView[text^="已连签"&&text*="天"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-字节视频广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text*="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/13459157', 'https://i.gkd.li/i/13459172', 'https://i.gkd.li/i/13459174'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[id="com.byted.pangle:id/tt_reward_full_count_down_after_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13459182',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 RelativeLayout[childCount=4] < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13472957',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.qq.e.ads.PortraitADActivity',
        matches: '@ImageView[visibleToUser=true][childCount=0] < FrameLayout[childCount=1] < FrameLayout[childCount=1] + FrameLayout >3 [text^="摇动或点击"]',
        snapshotUrls: 'https://i.gkd.li/i/13472955',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击跳过',
        matches: '[text*="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/13459157', 'https://i.gkd.li/i/13459172', 'https://i.gkd.li/i/13459174'],
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '点击【x】',
        matches: '[id="com.byted.pangle:id/tt_reward_full_count_down_after_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13459182',
        fastQuery: true,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 6,
      name: '局部广告-【百度】全屏广告',
      desc: '此规则有概率误触或失效，请谨慎选择开启。',
      enable: false,
      activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      rules: [
      {
        key: 0,
        name: '点击【x】',
        matches: 'RelativeLayout > RelativeLayout + ImageView + ImageView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13472957',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '全屏广告-【腾讯】全屏广告',
      desc: '此规则有概率误触或失效，请谨慎选择开启。',
      enable: false,
      activityIds: 'com.qq.e.ads.PortraitADActivity',
      rules: [
      {
        key: 0,
        name: '点击【x】',
        matches: 'FrameLayout[childCount=10] > FrameLayout[index=3] > FrameLayout > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13472955',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 1,
        activityIds: 'com.kmxs.reader.home.ui.HomeActivity',
        matches: '[id="com.kmxs.reader:id/bookshelf_book_item_direct_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13489942',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'org.geometerplus.android.fbreader.FBReader',
        matches: '[vid="iv_ad_direct_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17574170',
        exampleUrls: 'https://e.gkd.li/9217fd14-1ca6-49b8-8f8b-bff7a98745dd',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 0,
        matches: '[id="com.kmxs.reader:id/bookshelf_book_item_direct_close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 9,
      name: '全屏广告-今日专属推荐弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[id="com.kmxs.reader:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13941276',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});