import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gvsoft.gofun',
  name: 'GoFun出行',
  groups: [
{
      key: 5,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.gvsoft.gofun.module.home.activity.HomeActivity',
        matches: '[id="com.gvsoft.gofun:id/cardView"] + [id="com.gvsoft.gofun:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13497777',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.gvsoft.gofun:id/cardView"] + [id="com.gvsoft.gofun:id/iv_close"]',
        action: 'clickCenter',
        _uniqueKey: 1
      },
      ],
    },
  ],
});