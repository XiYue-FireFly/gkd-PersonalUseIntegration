import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hexin.plat.android',
  name: '同花顺',
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
        matches: '@[id="android:id/title"][childCount=0][width<150] < LinearLayout < [parent=null]',
        snapshotUrls: 'https://i.gkd.li/i/16505270',
        exampleUrls: 'https://e.gkd.li/2750d496-8889-4aed-88b7-70692df44e8f',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="android:id/title"][childCount=0][width>=150] < LinearLayout < [parent=null]',
        snapshotUrls: 'https://i.gkd.li/i/17726527',
        exampleUrls: 'https://e.gkd.li/f9c7621d-8b2b-4ca8-9904-fe0bca61c43f',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24119631',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 1,
      name: '分段广告-信息流广告',
      desc: '信息流广告-点击x按钮-点击内容质量差',
      activityIds: ['com.hexin.plat.android.Hexin'],
      rules: [
      {
        key: 1,
        matches: '@[id="com.hexin.plat.android:id/iv_feed_bottom_bar_dislike"] < LinearLayout -(2) LinearLayout >(2) [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12662754'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.hexin.plat.android:id/tv_negative_feedback_option"][text="内容质量差"] - ImageView < LinearLayout[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12662781'],
        preKeys: [1],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 10,
      name: '局部广告-底部产品广告',
      activityIds: ['com.hexin.plat.android'],
      rules: [
      {
        key: 0,
        matches: '[id="com.hexin.plat.android:id/prod_ad"] + [id="com.hexin.plat.android:id/prod_close_image"]',
        snapshotUrls: ['https://i.gkd.li/i/12662656'],
        _uniqueKey: 0
      },
      ],
    },
  ],
});