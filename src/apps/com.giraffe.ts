import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.giraffe',
  name: '安易加速器',
  groups: [
{
      key: 1,
      name: '更新提示',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.speed.shadowsocks.ui.main.MainActivity',
        matches: '[id="com.giraffe:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14000409',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});