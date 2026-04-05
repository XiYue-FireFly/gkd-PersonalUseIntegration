import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lanjinger.choiassociatedpress',
  name: '财联社',
  groups: [
{
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.lanjinger.choiassociatedpress.main.OperateActivity',
        matches: '@ImageView[id$="iv_back"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13749206',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[id$="iv_back"][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});