import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
{
      key: 0,
      name: '开屏广告-1',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      order: -10,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        matches: '[id="com.android.bankabc:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/14179162',
        exampleUrls: 'https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '开屏广告-1-1-1-1',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        matches: '[id="com.android.bankabc:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/14179162',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17879768',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.android.bankabc:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/14179162',
        exampleUrls: 'https://m.gkd.li/57941037/67cfc2f8-a108-4382-976a-0da7d13764e9',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17879768',
        exampleUrls: 'https://e.gkd.li/a5f6ec81-04f6-4678-b1d5-f2f326521945',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[vid="upgrade_checkbox"][checked=false]',
        snapshotUrls: ['https://i.gkd.li/i/14208545', 'https://i.gkd.li/i/16410094'],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[vid="negativeTextView"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14208545',
        preKeys: [0],
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: '[vid="iv_negative"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16410094',
        preKeys: [0],
        _uniqueKey: 6
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      enable: false,
      activityIds: '.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="upgrade_checkbox"][checked=false]',
        snapshotUrls: ['https://i.gkd.li/i/14208545', 'https://i.gkd.li/i/16410094'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="negativeTextView"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14208545',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="iv_negative"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16410094',
        preKeys: [0],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="允许获取位置信息"] +n * > [text="取消"]',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '权限提示-定位权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '[text="允许获取位置信息"] +n * > [text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/14208572',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="iv_notification_reminder_dialog_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '权限提示-通知权限',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '[vid="iv_notification_reminder_dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14208621',
        _uniqueKey: 0
      },
      ],
    },
  ],
});