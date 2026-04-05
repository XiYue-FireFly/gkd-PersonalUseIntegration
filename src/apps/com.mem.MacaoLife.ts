import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mem.MacaoLife',
  name: '澳覓',
  groups: [
{
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.mem.life.ui.launch.LaunchActivity',
        matches: '[id="com.mem.MacaoLife:id/cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/13350665',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.mem.MacaoLife:id/cancel"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-浮窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.mem.life.ui.home.HomeActivity',
        matches: '[id="com.mem.MacaoLife:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13350685',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.mem.MacaoLife:id/close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});