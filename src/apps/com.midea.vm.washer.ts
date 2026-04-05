import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.midea.vm.washer',
  name: 'U净',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    order: -10,
    snapshotUrls: 'https://i.gkd.li/i/13407199',
    rules: [
      { key: 0, matches: '[text*="跳过"][text.length<=10]' },
    ],
  }
  ],
});
