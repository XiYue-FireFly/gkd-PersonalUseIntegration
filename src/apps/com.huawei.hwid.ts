import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
{
      key: 0,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: ['com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity', 'com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity'],
        matches: '@[id*="interstitial_close"][clickable=true] +n * >n [text="广告"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12709068', 'https://i.gkd.li/i/24675884', 'https://i.gkd.li/i/24979139'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.huawei.hwid:id/interstitial_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12709068'],
        _uniqueKey: 1
      },
      ],
    },
  ],
});