import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vson.smarthome',
  name: '小美智能',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text^="发现新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/15526571',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
  ],
});