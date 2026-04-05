import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.homework',
  name: '作业帮',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.homework.activity.index.IndexActivity',
        matches: '[vid="ad_dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15374440',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.activity.index.IndexActivity',
        matches: ['[text^="小组件"]', '[text="以后再说"][clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/23567064',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});