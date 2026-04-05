import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shizi.tool.p3',
  name: '动漫共和国',
  groups: [
{
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      matchRoot: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22136545',
        exampleUrls: 'https://e.gkd.li/b10db699-ed34-4619-b3ca-5821321f4b58',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="ms_skipView"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23925246',
        exampleUrls: 'https://e.gkd.li/64be8cde-d60d-4c71-ba13-4bcb78842931',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.windmill.sdk.widget.InterstitialView',
        matches: '[vid="tobid_interstitial_skip_ll"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23925245',
        exampleUrls: 'https://e.gkd.li/8405053f-ebb9-4915-b8c7-499fcaa953ff',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
        matches: '[vid="beizi_interstitial_ad_close_container_rl"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24541547',
        exampleUrls: 'https://e.gkd.li/4ed42cae-88b2-4429-93ba-237bdf221f80',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'app.video.guoguo.MainActivity',
        matches: '[id$="ksad_auto_close_btn"][visibleToUser=true] < LinearLayout < LinearLayout + FrameLayout >6 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/24818734',
        exampleUrls: 'https://e.gkd.li/179028f9-ae60-4286-b746-ac2f0bb7aad6',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'app.video.guoguo.MainActivity',
        matches: '[desc="不再显示"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/25122774',
        _uniqueKey: 3
      },
      ],
    },
  ],
});