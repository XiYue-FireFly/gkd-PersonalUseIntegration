import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tianqi2345',
  name: '2345天气王',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.biz2345.shell.activity.holder.CloudInterstitialActivity',
        matches: '@TextView[id="com.biz2345.adware:id/cloud_interstitial_close_tv"][clickable=true][childCount=0] < RelativeLayout[childCount=2] < RelativeLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14391796',
        exampleUrls: 'https://m.gkd.li/57941037/1535a559-f2cd-49c5-8c19-b2bc16709f55',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '快手SDK',
        activityIds: 'com.tianqi2345.activity.NewMainActivity',
        matches: '@ImageView[clickable=true] + * > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14391630',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.tianqi2345.activity.NewMainActivity',
        matches: '@[id="com.biz2345.adware:id/native_express_close_iv"] + LinearLayout > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14391799',
        exampleUrls: 'https://m.gkd.li/57941037/a2ce856a-78e8-4b81-bc1f-64a5db81913f',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.biz2345.shell.activity.holder.CloudInterstitialActivity',
        matches: '[id="com.biz2345.adware:id/cloud_interstitial_close_tv"]',
        snapshotUrls: 'https://i.gkd.li/i/14391631',
        _uniqueKey: 1
      },
      ],
    },
  ],
});