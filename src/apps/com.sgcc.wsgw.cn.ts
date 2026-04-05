import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
{
      key: 1,
      name: '分段广告-首页弹窗广告',
      activityIds: ['com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity', 'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity'],
      rules: [
      {
        key: 1,
        matches: '@[focusable=true] + [text="今日不再出现"]',
        snapshotUrls: ['https://i.gkd.li/i/12745042', 'https://i.gkd.li/i/13247655'],
        actionCd: 2000,
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/13247655', 'https://i.gkd.li/i/13247655'],
        preKeys: [1],
        actionDelay: 300,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.sgcc.wsgw.cn:id/news_remind_laytout"] >n [id="com.sgcc.wsgw.cn:id/btn_remind_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12745042',
        preKeys: [1],
        actionDelay: 300,
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: 'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/13247655', 'https://i.gkd.li/i/13247655'],
        preKeys: 1,
        actionDelay: 300,
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[id="com.sgcc.wsgw.cn:id/news_remind_laytout"] >n [id="com.sgcc.wsgw.cn:id/btn_remind_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12745042'],
        preKeys: 1,
        actionDelay: 300,
        fastQuery: true,
        _uniqueKey: 5
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
        activityIds: 'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
        matches: '@ImageView < ViewGroup -3 [text="有新版本啦!"]',
        snapshotUrls: 'https://i.gkd.li/i/13501638',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView < ViewGroup -3 [text="有新版本啦!"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});