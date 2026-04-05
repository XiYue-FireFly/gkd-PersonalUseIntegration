import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pywm.fund',
  name: '普益基金',
  groups: [
{
    key: 1,
    name: '未分类-版本更新',
    enable: false,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          matches: 'TextView[text="立即更新"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/13327271',
      },
    ],
  }
  ],
});
