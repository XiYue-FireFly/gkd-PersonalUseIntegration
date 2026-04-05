import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.iftech.android.box',
  name: '小组件盒子',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      snapshotUrls: 'https://i.gkd.li/i/14204126',
      rules: [
      {
        key: 0,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      enable: false,
      order: -9,
      snapshotUrls: 'https://i.gkd.li/i/12706195',
      rules: [
      {
        key: 0,
        matches: '[text*="新版本"] +(2) [text="取消"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@Image[text=""] < View +(n) View >(2) TextView[text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12706209',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'io.iftech.android.box.main.HomeActivity',
        matches: 'ImageView - FrameLayout > ImageView[id=null]',
        snapshotUrls: 'https://i.gkd.li/i/12706209',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
        matches: '[id="io.iftech.android.box:id/anythink_myoffer_btn_close_id"]',
        snapshotUrls: 'https://i.gkd.li/i/12706228',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12706236',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12706240',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '穿山甲',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@Image[text=""] < View +(n) View >(2) TextView[text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12706209',
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '优量汇',
        activityIds: 'io.iftech.android.box.main.HomeActivity',
        matches: 'ImageView - FrameLayout > ImageView[id=null]',
        snapshotUrls: 'https://i.gkd.li/i/12706209',
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '百青藤-1',
        activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
        matches: '[id="io.iftech.android.box:id/anythink_myoffer_btn_close_id"]',
        snapshotUrls: 'https://i.gkd.li/i/12706228',
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '百青藤-2',
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12706236',
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '百青藤-3',
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12706240',
        _uniqueKey: 9
      },
      ],
    },
{
      key: 10,
      name: '全屏广告-会员限时优惠弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'io.iftech.android.box.main.HomeActivity',
        matches: '@[id="io.iftech.android.box:id/ivClose"] + [text^="限时"][text$="特惠"]',
        snapshotUrls: 'https://i.gkd.li/i/12706226',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="io.iftech.android.box:id/ivClose"] + [text^="限时"][text$="特惠"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});