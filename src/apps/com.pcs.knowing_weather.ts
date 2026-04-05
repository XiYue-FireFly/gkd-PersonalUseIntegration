import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pcs.knowing_weather',
  name: '知天气',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="btn_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/19832565',
        exampleUrls: 'https://e.gkd.li/68883ff3-cc5a-46a1-9258-bfeff208dbee',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '青少年模式-版本更新',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/13378992',
      rules: [
      {
        key: 0,
        matches: '[text="立即升级"] +2 [text="以后再说"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});