import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dmzj.manhua',
  name: '动漫之家',
  groups: [
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
        activityIds: 'com.dmzj.manhua.ui.LaunchInterceptorActivity',
        matches: '[id="com.dmzj.manhua:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13542503',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.dmzj.manhua:id/iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-悬浮广告',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.dmzj.manhua.ui.home.HomeTabsActivitys',
        matches: '[id="com.dmzj.manhua:id/ivAdClose"]',
        snapshotUrls: 'https://i.gkd.li/i/13542506',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.dmzj.manhua:id/ivAdClose"] - [id="com.dmzj.manhua:id/ivFloatAd"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});