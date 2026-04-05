import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.health',
  name: 'OPPO 健康',
  groups: [
{
      key: 1,
      name: '更新提示',
      desc: '点击[以后再说]',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.heytap.health.settings.me.upgrade.UpgradeActivity',
        matches: ['[text="检测到新版本"][visibleToUser=true]', '[text="以后再说"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/22657352',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.heytap.health.main.MainActivity',
        matches: '[vid="adapter_act_root_view"] > [vid="close"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22657359',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '通知提示-健康周报',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.main.MainActivity',
        matches: ['[text="您的健康周报已生成"]', '[text="关闭"]'],
        snapshotUrls: 'https://i.gkd.li/i/22724032',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '全屏广告',
      rules: [
      {
        key: 0,
        activityIds: '.main.MainActivity',
        matches: '[vid="image_operation"] + [vid="close"]',
        snapshotUrls: 'https://i.gkd.li/i/22724039',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '其他-忽略[开启微信运动同步]',
      rules: [
      {
        key: 0,
        activityIds: 'com.heytap.health.main.MainActivity',
        matches: '[text^="开启微信运动同步"] + [text="忽略"]',
        snapshotUrls: 'https://i.gkd.li/i/23087769',
        exampleUrls: 'https://e.gkd.li/867170d7-5c10-48fc-8bda-9139235ef718',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '权限提示-应用使用情况',
      desc: '点击[暂不]',
      rules: [
      {
        key: 0,
        activityIds: '.sleep.SleepHistoryActivity',
        matches: ['[text^="授权“OPPO 健康”应用访问应用使用情况"]', '[text="暂不"]'],
        snapshotUrls: 'https://i.gkd.li/i/23146074',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});