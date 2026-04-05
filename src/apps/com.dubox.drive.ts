import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dubox.drive',
  name: 'TeraBox',
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
        matches: 'TextView[id="com.dubox.drive:id/tv_skip"]',
        snapshotUrls: 'https://i.gkd.li/i/13200574',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.dubox.drive:id/ivClose"] - * >2 [id="inmobi-ad"]',
        snapshotUrls: 'https://i.gkd.li/i/13688384',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'TextView[id="com.dubox.drive:id/tv_skip"]',
        snapshotUrls: 'https://i.gkd.li/i/13200574',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: ['[id="inmobi-ad"]', '[id="com.dubox.drive:id/ivClose"]'],
        snapshotUrls: 'https://i.gkd.li/i/13688384',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.dubox.drive.ui.MainActivity',
        matches: 'ImageView[id="com.dubox.drive:id/ivClose"]',
        snapshotUrls: 'https://i.gkd.li/i/13200577',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.dubox.drive:id/ivClose"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.permission.view.PermissionDialogActivity',
        matches: '[text="Authorize"] - [id="com.dubox.drive:id/dialog_button_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/13688406',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="Authorize"] - [id="com.dubox.drive:id/dialog_button_cancel"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});