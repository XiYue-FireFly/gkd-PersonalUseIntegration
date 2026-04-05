import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ylmf.androidclient',
  name: '115生活',
  groups: [
{
      key: 1,
      name: '功能类-自动签到',
      activityIds: ['com.ylmf.androidclient.UI.MainBossActivity', 'com.main.world.equity.activity.SignInActivity', 'com.main.world.equity.activity.SignInRewardActivity'],
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击[签到]-1',
        matches: '@[clickable=true] >2 [text="签到"]',
        snapshotUrls: ['https://i.gkd.li/i/14738911', 'https://i.gkd.li/i/14738906'],
        _uniqueKey: 0
      },
      {
        key: 3,
        name: '点击[签到]-2',
        matches: '[vid="iv_sign_in_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/15510753',
        preKeys: [0],
        _uniqueKey: 3
      },
      {
        key: 1,
        name: '点击[我知道了]',
        matches: '[text="我知道了"]',
        snapshotUrls: ['https://i.gkd.li/i/14738909', 'https://i.gkd.li/i/15510873'],
        preKeys: [0,3],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '返回',
        matches: '[text="签到规则"]',
        snapshotUrls: ['https://i.gkd.li/i/14738907', 'https://i.gkd.li/i/15509322'],
        preKeys: [1],
        action: 'back',
        _uniqueKey: 2
      },
      {
        key: 4,
        name: '点击[签到]',
        activityIds: 'com.ylmf.androidclient.UI.MainBossActivity',
        matches: '@[clickable=true] >2 [text="签到"]',
        snapshotUrls: ['https://i.gkd.li/i/14738911', 'https://i.gkd.li/i/14738906'],
        exampleUrls: 'https://m.gkd.li/57941037/09c2ac32-9364-4a1f-9f49-c05c5695d5a0',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '点击[我知道了]-1',
        activityIds: 'com.main.world.equity.activity.SignInActivity',
        matches: '[text="我知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/14738909',
        exampleUrls: 'https://m.gkd.li/57941037/fd597dc2-b926-44fa-acaf-ec7cfa41813a',
        preKeys: [0],
        _uniqueKey: 5,
        _uniqueName: '点击[我知道了]-1',
        name: '点击[我知道了]-1'
      },
      {
        key: 6,
        name: '返回-1',
        activityIds: 'com.main.world.equity.activity.SignInActivity',
        matches: '[text="签到规则"]',
        snapshotUrls: 'https://i.gkd.li/i/14738907',
        exampleUrls: 'https://m.gkd.li/57941037/9d445e18-91dc-4e6c-a765-3a1593230d7b',
        preKeys: [1],
        action: 'back',
        _uniqueKey: 6,
        _uniqueName: '返回-1',
        name: '返回-1'
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      desc: '点击[返回]关闭页面',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ylmf.androidclient.UI.UpdateVersionActivity',
        matches: '@[desc="转到上一层级"] + [text="更新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/14738944',
        exampleUrls: 'https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d',
        _uniqueKey: 0
      },
      ],
    },
  ],
});