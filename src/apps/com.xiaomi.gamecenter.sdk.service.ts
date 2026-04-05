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
          activityIds: 'com.xiaomi.gamecenter.sdk.ui.actlayout.ViewUpgrade',
          matches: '[text="升级提示"] < * + [vid="btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14188929',
      },
      { key: 0, matches: '[text="升级提示"] < * + [vid="btn_close"]' },
    ],
  }
  ],
});
