import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fiveplay',
  name: '5EPlay',
  groups: [
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
        activityIds: '.sihp_homepage.module.main.Main2Activity',
        matches: '@[vid="iv_close"] - * > [text="打开消息推送"]',
        snapshotUrls: 'https://i.gkd.li/i/14680645',
        exampleUrls: 'https://m.gkd.li/57941037/020e18ab-1bf1-4639-b32a-777719881dcb',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[vid="iv_close"] - * > [text="打开消息推送"]',
        snapshotUrls: 'https://i.gkd.li/i/14680645',
        exampleUrls: 'https://m.gkd.li/57941037/020e18ab-1bf1-4639-b32a-777719881dcb',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-首页右下角浮窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.sihp_homepage.module.main.Main2Activity',
        matches: '[id="com.fiveplay:id/iv_ad_float_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16825082',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      activityIds: '.login.view.dialog.UpdateHintDialog',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="cb_ignore_version"][checked=false][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23833318',
        exampleUrls: 'https://e.gkd.li/4833b753-6fcd-4caf-b57a-1a27fdfecd0a',
        excludeSnapshotUrls: 'https://i.gkd.li/i/23833319',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="暂不更新"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23833318',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});