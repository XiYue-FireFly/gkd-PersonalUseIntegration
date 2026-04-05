import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jisu.manhua',
  name: '漫画人极速版',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ilike.cartoon.activities.HomeActivity',
        matches: '[id="com.jisu.manhua:id/iv_promotion"] + [id="com.jisu.manhua:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13688186',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.jisu.manhua:id/iv_promotion"] + [id="com.jisu.manhua:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13688186',
        _uniqueKey: 1
      },
      ],
    },
  ],
});