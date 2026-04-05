import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.yun',
  name: '金山文档',
  groups: [
{
      key: 1,
      name: '局部广告-列表卡片广告',
      desc: '点击右侧x',
      rules: [
      {
        key: 0,
        activityIds: 'cn.wps.yun.ui.IndexActivity',
        matches: '[id="cn.wps.yun:id/rootGroup"][childCount=5] >  [text^="实用技巧"] +3 [id="cn.wps.yun:id/moreIconRight"]',
        snapshotUrls: 'https://i.gkd.li/i/13495062',
        exampleUrls: 'https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/14333322',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'cn.wps.yun.ui.IndexActivity',
        matches: '[id="cn.wps.yun:id/rootGroup"][childCount=5] >  [id="cn.wps.yun:id/moreIconRight"]',
        snapshotUrls: 'https://i.gkd.li/i/13495062',
        exampleUrls: 'https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.IndexActivity',
        matches: '[text="发现新版本"] +3 [text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/14333103',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.IndexActivity',
        matches: '[text="开启推送通知"] +2 * > [text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/14333362',
        _uniqueKey: 0
      },
      ],
    },
  ],
});