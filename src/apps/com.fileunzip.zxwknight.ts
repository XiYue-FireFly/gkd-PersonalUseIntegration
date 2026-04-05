import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fileunzip.zxwknight',
  name: '解压专家',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 1,
        name: '字节广告',
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: 'Image < @View[visibleToUser=true] +4 [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/13328194',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '腾讯广告',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/13391833',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '腾讯广告-1',
        matches: '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13391833',
        _uniqueKey: 3,
        _uniqueName: '腾讯广告-1',
        name: '腾讯广告-1'
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-升级专业版弹窗',
      rules: [
      {
        key: 0,
        activityIds: ['com.fileunzip.zxwknight.activity.MainActivity', 'com.fileunzip.zxwknight.activity.VideoPlayActivity'],
        matches: '@[vid="ziputil_dialog_imageview"] < * > [text="升级到专业版"]',
        snapshotUrls: ['https://i.gkd.li/i/13328212', 'https://i.gkd.li/i/14885336'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[vid="ziputil_dialog_imageview"] < * > [text="升级到专业版"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-软件推广',
      desc: '全能保险箱',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="dialog_recommend_back"]',
        snapshotUrls: 'https://i.gkd.li/i/14472568',
        exampleUrls: 'https://m.gkd.li/57941037/de127f4b-5de6-41ab-a1ea-5a98f7eeab58',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
        matches: '@[text="本次启动不再提示"][checked=false]',
        snapshotUrls: 'https://i.gkd.li/i/14885425',
        exampleUrls: 'https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
        matches: '[vid="promote_vault_full_screen_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14885425',
        exampleUrls: 'https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d',
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="dialog_recommend_back"]',
        snapshotUrls: 'https://i.gkd.li/i/14472982',
        exampleUrls: 'https://m.gkd.li/101449500/e7cf2c1a-9323-4ef4-8c89-82f63244b24b',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 4,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[vid="ziputil_dialog_imageview"] + [text="有新版本啦"]',
        snapshotUrls: 'https://i.gkd.li/i/14900121',
        exampleUrls: 'https://m.gkd.li/57941037/a428a59c-5cdd-47e9-bfc5-492b43ed169a',
        _uniqueKey: 0
      },
      ],
    },
  ],
});