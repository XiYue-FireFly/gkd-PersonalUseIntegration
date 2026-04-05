import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianxinai.mobile',
  name: '点心云',
  groups: [
{
      key: 0,
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
        matches: '[text$="s"][text.length=2]',
        snapshotUrls: 'https://i.gkd.li/i/16115075',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ViewGroup[clickable = true] > TextView[text $="s" && text.length=2]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});