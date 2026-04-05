import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realmecomm.app',
  name: 'realme社区',
  groups: [
{
      key: 1,
      name: '功能类-自动签到',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.android.realme2.home.view.MainActivity',
        matches: '[text="签到"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14321155',
        exampleUrls: 'https://m.gkd.li/57941037/18a5751c-0bbd-475d-be6a-5803307111cb',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="tv_check_in"][text="签到"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});