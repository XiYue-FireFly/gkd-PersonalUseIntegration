import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video.lite',
  name: '爱奇艺极速版',
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
        matches: '@[clickable=true] >2 [text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13797162',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="关闭"] <2 LinearLayout',
        _uniqueKey: 1
      },
      ],
    },
  ],
});