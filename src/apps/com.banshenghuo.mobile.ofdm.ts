import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.banshenghuo.mobile.ofdm',
  name: 'OmoFun',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
        matches: '[vid="anythink_myoffer_btn_close_id"]',
        snapshotUrls: 'https://i.gkd.li/i/15443189',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.banshenghuo.mobile.ofdm.MainActivity',
        matches: '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^="扭动或点击"]',
        snapshotUrls: 'https://i.gkd.li/i/15444005',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] -n @View[index=0] > Image',
        snapshotUrls: 'https://i.gkd.li/i/15444017',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.banshenghuo.mobile.ofdm.MainActivity',
        matches: 'ImageView[childCount=0][text=null] < @ViewGroup[clickable=true] < ViewGroup + ViewGroup > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/16548166',
        exampleUrls: 'https://e.gkd.li/8bbf31e8-598b-4021-9136-8de189fc7cf9',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.banshenghuo.mobile.ofdm.MainActivity',
        matches: '[id="android:id/content"] FrameLayout[index=1][childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/15444005',
        _uniqueKey: 4
      },
      ],
    },
{
      key: 2,
      name: '通知提示-公告弹窗',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
        matches: '[desc="我知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/16548158',
        exampleUrls: 'https://e.gkd.li/327ea04c-acda-4913-a0a9-fdda9cd83dd7',
        _uniqueKey: 0
      },
      ],
    },
  ],
});