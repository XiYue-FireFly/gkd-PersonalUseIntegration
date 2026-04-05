import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.newapp',
  name: '文心一言',
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
        activityIds: '.update.UpdateAlertActivity',
        matches: '[text="立即更新"] + [text="暂不升级"]',
        snapshotUrls: 'https://i.gkd.li/i/13360280',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="立即更新"] + [text="暂不升级"]',
        snapshotUrls: 'https://i.gkd.li/i/13360280',
        _uniqueKey: 1
      },
      ],
    },
  ],
});