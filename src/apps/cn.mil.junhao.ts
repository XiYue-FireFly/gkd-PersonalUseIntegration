import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.mil.junhao',
  name: '中国军号',
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
        matches: '[vid="splash_adv_ship"]',
        snapshotUrls: 'https://i.gkd.li/i/13806892',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="splash_adv_ship"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '功能类-首页右侧浮窗',
      enable: false,
      activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
      snapshotUrls: 'https://i.gkd.li/i/13806894',
      rules: [
      {
        key: 0,
        matches: '[vid="fragment_containerx"] > FrameLayout > ImageView[index=2][clickable=true]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '局部广告-右侧悬浮窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 [vid="float_feedback"]',
        snapshotUrls: 'https://i.gkd.li/i/13806896',
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 FrameLayout <2 [vid="fragment_containerx"]',
        snapshotUrls: 'https://i.gkd.li/i/13806894',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="float_feedback"] > ImageView[index=2][clickable=true]',
        _uniqueKey: 2
      },
      ],
    },
  ],
});