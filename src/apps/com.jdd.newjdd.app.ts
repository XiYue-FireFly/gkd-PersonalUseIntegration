import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdd.newjdd.app',
  name: '匠多多师傅版',
  groups: [
{
      key: 1,
      name: '开屏广告',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="jump"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23294048',
        exampleUrls: 'https://e.gkd.li/10dd2d8b-e48a-4554-a748-c9e156b003d9',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告',
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: '[vid="iv_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23294049',
        exampleUrls: 'https://e.gkd.li/557eefdd-fd75-4a93-8f68-6ae8f042270a',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '通知提示-公告弹窗',
      desc: '点击[查看详情]-返回关闭',
      activityIds: '.activity.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: ['[text="系统公告"][visibleToUser=true]', '[text="点击查看详情"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/23295736',
        exampleUrls: 'https://e.gkd.li/146c27dc-9e92-4074-930f-d099c65c44f2',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@View[clickable=true] >2 [childCount=0][text=""][visibleToUser=true] <<n [vid="webviewschool"]',
        snapshotUrls: 'https://i.gkd.li/i/23295738',
        exampleUrls: 'https://e.gkd.li/dff1e373-76eb-43d7-9bec-229eebae511d',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});