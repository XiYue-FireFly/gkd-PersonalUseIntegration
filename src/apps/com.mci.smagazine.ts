import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mci.smagazine',
  name: '三星阅读',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14573324',
        exampleUrls: 'https://m.gkd.li/57941037/6654a799-c853-4221-b058-8278949574cc',
        fastQuery: true,
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14573324',
        exampleUrls: 'https://m.gkd.li/57941037/6654a799-c853-4221-b058-8278949574cc',
        fastQuery: true,
        action: 'clickCenter',
        _uniqueKey: 1
      },
      ],
    },
  ],
});