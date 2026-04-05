import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.cloud',
  name: '云服务',
  groups: [
{
      key: 1,
      name: '更新提示',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.heytap.cloud.home.ui.CloudSettingsActivity2',
        matches: ['[text="检测到新版本"]', '[vid="cancel"]'],
        snapshotUrls: 'https://i.gkd.li/i/16097208',
        _uniqueKey: 0
      },
      ],
    },
  ],
});