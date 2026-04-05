import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dep.biguo',
  name: '自考笔果题库',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.dialog',
        matches: '@[text="取消"] +2 [text="立即更新"]',
        snapshotUrls: 'https://i.gkd.li/i/12708751',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.dep.biguo.dialog',
        matches: '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
        snapshotUrls: 'https://i.gkd.li/i/12708756',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.dep.biguo:id/imageView"] + [id="com.dep.biguo:id/closeView"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '权限提示-定位权限',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.dep.biguo.mvp.ui.activity.MainActivity',
        matches: '[text*="定位权限"] +2 [text="拒绝"]',
        snapshotUrls: 'https://i.gkd.li/i/12708770',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="定位权限"] +2 [text="拒绝"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});