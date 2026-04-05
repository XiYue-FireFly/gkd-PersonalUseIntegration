import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maertsno.m',
  name: 'OnStream',
  groups: [
{
      key: 1,
      name: '全屏广告',
      rules: [
      {
        key: 0,
        activityIds: 'co.notix.interstitial.InterstitialActivity',
        matches: '[vid="tv_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13842558',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="tv_button"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});