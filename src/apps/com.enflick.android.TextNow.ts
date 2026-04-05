import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.enflick.android.TextNow',
  name: 'TextNow',
  groups: [
{
      key: 1,
      name: '其他-设为默认应用提示',
      activityIds: '.activities.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.enflick.android.TextNow:id/btn_dismiss"][text="Not Now"]',
        snapshotUrls: 'https://i.gkd.li/i/13630460',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="android:id/button2"][text="SKIP"]',
        snapshotUrls: 'https://i.gkd.li/i/13630463',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="android:id/button2"][text="SKIP"]',
        snapshotUrls: 'https://i.gkd.li/i/13630463',
        preKeys: 0,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知/链接蓝牙附件设备',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.enflick.android.TextNow.activities.MainActivity',
        matches: '@ImageView[clickable=true] <2 [id="com.enflick.android.TextNow:id/calling_banner"]',
        snapshotUrls: ['https://i.gkd.li/i/13657279', 'https://i.gkd.li/i/13657280'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[clickable=true] <2 [id="com.enflick.android.TextNow:id/calling_banner"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});