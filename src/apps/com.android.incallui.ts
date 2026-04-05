import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.incallui',
  name: '电话',
  groups: [
{
      key: 1,
      name: '功能类-接通话时自动点击录音',
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: '.InCallActivity',
        matches: ['[vid="elapsedTime"][visibleToUser=true]', '[vid="recordButton"][desc="录音"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/20876897',
        exampleUrls: 'https://e.gkd.li/cfe191ef-3786-403c-ba88-e18d299803a8',
        actionDelay: 500,
        fastQuery: true,
        excludeSnapshotUrls: ['https://i.gkd.li/i/20876893', 'https://i.gkd.li/i/20877514'],
        _uniqueKey: 0
      },
      ],
    },
  ],
});