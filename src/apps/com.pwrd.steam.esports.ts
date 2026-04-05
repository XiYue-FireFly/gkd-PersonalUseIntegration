import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pwrd.steam.esports',
  name: '完美世界电竞',
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
        matches: '[vid="rl_skip"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21808124',
        exampleUrls: 'https://e.gkd.li/b7adf229-631c-4c27-a07b-eb6e0e1854af',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[text="开启推送通知"] + [vid="tv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14622501',
        exampleUrls: 'https://m.gkd.li/57941037/6bb3a2b3-5511-4655-9e4a-c0eb6bae27ad',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启推送通知"] + [vid="tv_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});