import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.pptv',
  name: '人人视频',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<=10]',
        snapshotUrls: 'https://i.gkd.li/i/13669401',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.example.pptv:id/view_count_shake"]',
        snapshotUrls: 'https://i.gkd.li/i/13761160',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '青少年模式',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      order: -8,
      snapshotUrls: 'https://i.gkd.li/i/13761159',
      rules: [
      {
        key: 0,
        matches: '@[text="我知道了"] - * > [text="未成年模式"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});