import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.emagsoftware.gamehall',
  name: '咪咕快游',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.migugame.home_module.ui.activity.HomeActivity',
        matches: '[id="cn.emagsoftware.gamehall:id/btn_update"] -2 [id="cn.emagsoftware.gamehall:id/btn_cancle"]',
        snapshotUrls: 'https://i.gkd.li/i/13448894',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="cn.emagsoftware.gamehall:id/btn_update"] -2 [id="cn.emagsoftware.gamehall:id/btn_cancle"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});