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
          matches: '@[clickable=true] >2 [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13797162',
      },
      { key: 0, matches: '[text*="关闭"] <2 LinearLayout' },
    ],
  }
  ],
});
