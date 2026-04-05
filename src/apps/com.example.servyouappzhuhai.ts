import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.servyouappzhuhai',
  name: '广东税务',
  groups: [
{
      key: 0,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'cn.com.servyou.servyouzhuhai.activity.main.imps.MainActivity',
        matches: '[id="com.example.servyouappzhuhai:id/btn_dialog_negtive"]',
        snapshotUrls: 'https://i.gkd.li/i/13440721',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.example.servyouappzhuhai:id/btn_dialog_negtive"]',
        snapshotUrls: 'https://i.gkd.li/i/13440721',
        _uniqueKey: 1
      },
      ],
    },
  ],
});