import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.docs',
  name: '腾讯文档',
  groups: [
{
      key: 0,
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
        matches: '@LinearLayout[clickable=true] - [text^="互动广告"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13198082', 'https://i.gkd.li/i/23557410'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@LinearLayout > [id="com.tencent.docs:id/tv_gdt_ad_text"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.DocsFlutterActivity',
        matches: '@[desc="暂不更新"] + [desc="现在更新"]',
        snapshotUrls: 'https://i.gkd.li/i/13198091',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[desc="暂不更新"] + [desc="现在更新"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.docs.DocsFlutterActivity',
        matches: '@ImageView[clickable=true] - [desc="限时购买"]',
        snapshotUrls: 'https://i.gkd.li/i/13198097',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="限时购买"] + ImageView[clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.docs.DocsFlutterActivity',
        matches: 'View[childCount=2] > @TextView[id=null][clickable=true] + View',
        snapshotUrls: 'https://i.gkd.li/i/13242404',
        actionDelay: 200,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'View[childCount=2] > @TextView[id=null][clickable=true] + View',
        _uniqueKey: 1
      },
      ],
    },
  ],
});