import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.com.gamer.android.activecenter',
  name: '巴哈姆特',
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
        matches: '@ImageButton[desc="Interstitial close button"][visibleToUser=true] < FrameLayout <2 RelativeLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14292691',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="Interstitial close button"][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});