import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.leo',
  name: '小猿口算',
  groups: [
{
      key: 1,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.imgsearch.sdk.activity.NewCheckCameraActivity',
        matches: '@[text="残忍拒绝"] + [text*="好评"][text.length<=10]',
        snapshotUrls: 'https://i.gkd.li/i/13226140',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[text="残忍拒绝"] + [text*="好评"][text.length<=10]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});