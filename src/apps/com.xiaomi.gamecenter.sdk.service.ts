import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.gamecenter.sdk.service',
  name: '小米游戏服务',
  groups: [
{
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.xiaomi.gamecenter.sdk.ui.actlayout.ViewUpgrade',
        matches: '[text="升级提示"] < * + [vid="btn_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14188929',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="升级提示"] < * + [vid="btn_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});