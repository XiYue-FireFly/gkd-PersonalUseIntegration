import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
{
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: ['[text*="开启通知服务"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/13259242',
        exampleUrls: 'https://e.gkd.li/64df0999-cd85-48c3-871f-5e65e9131d6e',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.mcd.order.activity.OrderDetailActivity',
        matches: '@[vid="v_cancel"] + [vid="v_open"]',
        snapshotUrls: 'https://i.gkd.li/i/17092374',
        exampleUrls: 'https://e.gkd.li/123fc7d2-b2a3-41fb-8e4c-50f625b195c4',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.mcdonalds.gma.cn:id/tv_cancel"][text="取消"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 1,
        activityIds: '.activity.MainActivity',
        matches: '[vid="iv_ad_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17967920',
        exampleUrls: 'https://e.gkd.li/6a95fcb7-3f9c-43f8-80bb-bdd034c81252',
        fastQuery: true,
        forcedTime: 10000,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.mcd.order.activity.OrderActivity',
        matches: '[vid="recommend_product_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17967943',
        exampleUrls: 'https://e.gkd.li/8f3670e7-a0c9-47a5-b708-163a94ac2a8f',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
        matches: '[id="com.mcdonalds.gma.cn:id/iv_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13465873',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '功能类-关闭[开通免密支付]弹窗',
      rules: [
      {
        key: 0,
        activityIds: 'com.mcd.order.activity.OrderDetailActivity',
        matches: '@[vid="iv_close"] - * >2 [text*="免密支付"]',
        snapshotUrls: 'https://i.gkd.li/i/14798873',
        exampleUrls: 'https://m.gkd.li/57941037/4b26dc9e-06d9-43a2-a105-6fb711c9aedb',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '权限提示-设备信息权限',
      desc: '点击[不允许]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.mcdonalds.gma.cn.activity.LaunchActivity',
        matches: '[text$="获取您的设备信息"] + * > [text="不允许"]',
        snapshotUrls: 'https://i.gkd.li/i/15944357',
        exampleUrls: 'https://m.gkd.li/101449500/121c7e65-780e-41aa-acf8-34c491d4be41',
        _uniqueKey: 0
      },
      ],
    },
  ],
});