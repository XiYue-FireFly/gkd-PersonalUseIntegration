import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.weread',
  name: '微信读书',
  groups: [
{
      key: 1,
      name: '权限提示-通知权限',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.module.bottomSheet.BottomSheetForFragment', '.WeReadFragmentActivity'],
        matches: '[id="com.tencent.weread:id/open_notification_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12642247', 'https://i.gkd.li/i/13233735'],
        matchTime: 30000,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.WeReadFragmentActivity',
        matches: '[text="开启推送通知"] +3 [clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14190089',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '通知提示-开启推送通知提示弹窗',
        matches: '[id="com.tencent.weread:id/open_notification_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12642247', 'https://i.gkd.li/i/13233735'],
        fastQuery: true,
        actionMaximum: 1,
        matchTime: 30000,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '通知提示-开启推送通知提示信息',
        matches: '[text="开启推送通知"] +3 [clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14190089',
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 3
      },
      ],
    },
  ],
});