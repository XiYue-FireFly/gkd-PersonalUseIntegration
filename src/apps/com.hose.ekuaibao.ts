import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hose.ekuaibao',
  name: '易快报',
  groups: [
{
      key: 1,
      name: '局部广告-首页横幅广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      snapshotUrls: ['https://i.gkd.li/i/12649616', 'https://i.gkd.li/i/18455642'],
      rules: [
      {
        key: 0,
        matches: '[text="不感兴趣"][visibleToUser=true]',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'View[childCount=2] > TextView + TextView[text="不感兴趣"][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});