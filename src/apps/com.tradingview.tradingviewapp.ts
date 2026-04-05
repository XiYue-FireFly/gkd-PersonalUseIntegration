import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tradingview.tradingviewapp',
  name: 'TradingView',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.root.view.RootActivity',
        matches: '@[clickable=true][text="关闭广告"] <<n [vid="chart_wbv"]',
        snapshotUrls: 'https://i.gkd.li/i/16725697',
        exampleUrls: 'https://e.gkd.li/3798ab1b-2cd3-471e-8303-b8124746e9d8',
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
        activityIds: '.root.view.RootActivity',
        matches: '[vid="friday_fl_layout"] > [vid="friday_iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/18222211',
        exampleUrls: 'https://e.gkd.li/9cc35e84-1b27-4aa5-a74b-ace7cf42d943',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});