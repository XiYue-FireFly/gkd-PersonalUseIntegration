import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwread.dz',
  name: '华为阅读',
  groups: [
{
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15862073',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
  ],
});