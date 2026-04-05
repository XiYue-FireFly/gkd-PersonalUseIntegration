import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shangfang.gylm',
  name: '高佣联盟',
  groups: [
{
    key: 2,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: '.mvp.ui.home.activity.UpdateActivityV2',
          matches: '[id="com.shangfang.gylm:id/iv_upgrade_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13643599',
      },
      { key: 0, matches: '[id="com.shangfang.gylm:id/iv_upgrade_close"]' },
    ],
  }
  ],
});
