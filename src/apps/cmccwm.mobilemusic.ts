import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmccwm.mobilemusic',
  name: '咪咕音乐',
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
        activityIds: '.ui.base.MainActivity',
        matches: '[text="发现新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/13448898',
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="cmccwm.mobilemusic.libraries_feature:id/tv_title"][text="发现新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/13448898',
        action: 'back',
        _uniqueKey: 1
      },
      ],
    },
  ],
});