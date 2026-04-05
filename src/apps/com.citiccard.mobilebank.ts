import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[id="com.citiccard.mobilebank:id/btn_skip"]',
        snapshotUrls: 'https://i.gkd.li/i/12684908',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.citiccard.mobilebank:id/jump"]',
        snapshotUrls: 'https://i.gkd.li/i/13049013',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.citiccard.mobilebank:id/btn_skip"]',
        snapshotUrls: ['https://i.gkd.li/i/12684908'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.citiccard.mobilebank:id/jump"]',
        snapshotUrls: ['https://i.gkd.li/i/13049013'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.citiccard.mobilebank.card.activity.BillDetailHomeActivity',
        matches: '[id="com.citiccard.mobilebank:id/iv_bill_home_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/13049284',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.citiccard.mobilebank:id/iv_bill_home_cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/13049284'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.citiccard.mobilebank:id/ll_app_upgrade_content"] + [id="com.citiccard.mobilebank:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13049283',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.citiccard.mobilebank:id/ll_app_upgrade_content"] + [id="com.citiccard.mobilebank:id/iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/13049283'],
        _uniqueKey: 1
      },
      ],
    },
  ],
});