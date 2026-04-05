import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.picovr.assistantphone',
  name: 'PICO',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      matchRoot: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.MainActivity',
        matches: '[vid="update_check_cancel_btn"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20852432',
        exampleUrls: 'https://e.gkd.li/b63e9ce4-e333-4702-abd5-d2355f83da1f',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});