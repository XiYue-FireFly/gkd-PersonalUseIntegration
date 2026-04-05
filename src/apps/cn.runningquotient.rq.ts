import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.runningquotient.rq',
  name: 'RQrun',
  groups: [
{
      key: 1,
      name: '功能类-自动签到',
      desc: '点击右侧[签到福利]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'cn.runningquotient.rq.page.common_page.MainActivity',
        matches: '[vid="iv_main_checkin_entry"]',
        snapshotUrls: 'https://i.gkd.li/i/16105502',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'cn.runningquotient.rq.page.common_page.CommonContainerActivity',
        matches: '@[visibleToUser=true][text="我知道了"] <<n [vid="common_h5_container"]',
        snapshotUrls: 'https://i.gkd.li/i/16105938',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'cn.runningquotient.rq.page.common_page.CommonContainerActivity',
        matches: '[vid="iv_setting_header_view_left"]',
        snapshotUrls: 'https://i.gkd.li/i/16105942',
        preKeys: [1],
        _uniqueKey: 2
      },
      ],
    },
  ],
});