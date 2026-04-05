import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.robortx.clousx6F',
  name: 'Clousx6',
  groups: [
{
      key: 1,
      name: '通知提示-公告弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '@[vid="iv_close"] + * >2 [text="上一条"]',
        snapshotUrls: 'https://i.gkd.li/i/14571096',
        exampleUrls: 'https://m.gkd.li/57941037/a59e4c30-29e3-4d7e-9c05-f7e844ff6ac3',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="tv_next"][text="下一条"] <<n LinearLayout - [vid="iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});