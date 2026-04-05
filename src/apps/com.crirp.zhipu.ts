import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crirp.zhipu',
  name: '智谱',
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
        matches: '[text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13725305',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-今日要闻弹窗',
      desc: '点击不再提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
        matches: '[text="今日不再提示"]',
        snapshotUrls: 'https://i.gkd.li/i/13725337',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id$="/cancel_tv"]',
        snapshotUrls: 'https://i.gkd.li/i/13725337',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '评价提示-首页-今日要闻-关闭',
      desc: '【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可',
      enable: false,
      activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id$="/tv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13725337',
        _uniqueKey: 0
      },
      ],
    },
  ],
});