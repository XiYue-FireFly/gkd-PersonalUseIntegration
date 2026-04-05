import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kmb.app1933',
  name: 'KMB . LWB',
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
        activityIds: 'com.google.android.gms.ads.AdActivity',
        matches: '[desc="Interstitial close button"]',
        snapshotUrls: 'https://i.gkd.li/i/16620586',
        exampleUrls: 'https://e.gkd.li/3b5d7bcd-4629-44af-8ee9-5c8a1001ebad',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.google.android.gms.ads.AdActivity',
        matches: '[desc="打开"] - View > [text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/16620123',
        exampleUrls: 'https://e.gkd.li/14158b1c-88f3-4e5c-bbc1-193186e77b07',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.google.android.gms.ads.AdActivity',
        matches: 'WebView >2 View[childCount=3] >2 View[childCount=2] > View[childCount=2] > View[childCount=1] > Button[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/16621030',
        exampleUrls: 'https://e.gkd.li/0be64275-23d1-4b13-b444-6e0c67fdd8fc',
        _uniqueKey: 2
      },
      ],
    },
  ],
});