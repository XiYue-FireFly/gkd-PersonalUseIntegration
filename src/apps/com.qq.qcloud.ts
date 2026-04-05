import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.qcloud',
  name: '腾讯微云',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        activityIds: '.activity.WeiyunRootActivity',
        matches: '@LinearLayout -(1,2) [text="互动广告"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/19752123', 'https://i.gkd.li/i/19752144'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.qq.qcloud:id/gdt_ad_text"] + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12755789',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text^="互动广告"] + @LinearLayout[clickable=true] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12755799',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="android:id/content"] >2 FrameLayout[childCount=4] > @LinearLayout[clickable=true] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/14735621',
        _uniqueKey: 3
      },
      ],
    },
  ],
});