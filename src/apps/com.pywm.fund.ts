import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pywm.fund',
  name: '普益基金',
  groups: [
{
      key: 1,
      name: '青少年模式-版本更新',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'TextView[text="立即更新"]',
        snapshotUrls: 'https://i.gkd.li/i/13327271',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
  ],
});