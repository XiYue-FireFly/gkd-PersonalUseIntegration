import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crirp.zhipu',
  name: '智谱',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13725305',
        },
      ],
      order: -10,
    },
    {
      key: 2,
      name: '全屏广告-今日要闻弹窗',
      desc: '点击不再提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
          matches: '[text="今日不再提示"]',
          snapshotUrls: 'https://i.gkd.li/i/13725337',
        },
        {
          matches: '[id$="/cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/13725337',
        },
      ],
    },
    {
      name: '未分类-首页-今日要闻-关闭',
      key: 3,
      desc: '【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可',
      fastQuery: true,
      activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
      rules: [
        {
          matches: '[id$="/tv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13725337',
        },
      ],
      enable: false,
    },
  ],
});
