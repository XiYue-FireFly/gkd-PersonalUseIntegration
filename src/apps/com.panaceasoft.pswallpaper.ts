import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.panaceasoft.pswallpaper',
  name: 'ClrvAI',
  groups: [
{
      key: 1,
      name: '通知提示-公告弹窗',
      activityIds: '.xiao.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="cb_ignore"][checked=false]',
        snapshotUrls: 'https://i.gkd.li/i/14141561',
        exampleUrls: 'https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="iv_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14141561',
        exampleUrls: 'https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="tv_next"][text="下一条"] <<n LinearLayout - [vid="iv_close"]',
        _uniqueKey: 2
      },
      ],
    },
  ],
});