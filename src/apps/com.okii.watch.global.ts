import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.okii.watch.global',
  name: '小天才',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.xtc.widget.phone.popup.activity.CustomActivity',
        matches: '[id="com.okii.watch.global:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13630943',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.okii.watch.global:id/iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '其他-手表安全守护弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.xtc.widget.phone.popup.activity.CustomActivity13',
        matches: '[id="com.okii.watch.global:id/photo_sensitive_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13630944',
        exampleUrls: 'https://m.gkd.li/57941037/8a5030a1-2b24-4a8a-a944-29d0eaabf936',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.okii.watch.global:id/photo_sensitive_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});