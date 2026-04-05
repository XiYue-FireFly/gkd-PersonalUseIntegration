import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cisdom.com.bigteaapp',
  name: '大茶肆',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text$="抽奖送大礼"] < WebView - [id="cisdom.com.bigteaapp:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13228579',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text$="抽奖送大礼"] < WebView - [id="cisdom.com.bigteaapp:id/close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});