import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cloudera.android',
  name: '慧生活 798',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      categoryKey: 0,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.cloudera.android.ui.activity.SplashActivity',
          matches: [
            '[text*="跳过" && text.length<=10]',
            '[vid*="skip" || vid*="count" || vid*="jump"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18375410',
        },
        {
          matches: '[text*="跳过" && text.length<=10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375410',
        },
        {
          matches: '[text*="跳过" && text*="s" && text.length<=10][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375415',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      categoryKey: 7,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.cloudera.android.ui.activity.MainActivity',
          matches: '@[text="清除" || text="关闭" || vid="close_btn" || id="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/18375411',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      categoryKey: 6,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.cloudera.android.ui.activity.MainActivity',
          matches: '[text="京东" || text="查看详情"] + [vid="close_btn" || id="close_btn" || text="×"]',
          snapshotUrls: 'https://i.gkd.li/i/18375412',
        },
        {
          activityIds: 'com.cloudera.android.ui.activity.MainActivity',
          matches: '[text^="来 oppo 软件商店"] + [vid="close_btn" || id="close_btn" || text="×"]',
          snapshotUrls: 'https://i.gkd.li/i/18375413',
        },
        {
          activityIds: 'com.cloudera.android.ui.activity.MainActivity',
          matches: '[text="立即参与" || text="立即领取"] + [text="查看"] + [text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375416',
        },
        {
          activityIds: 'com.cloudera.android.ui.activity.MainActivity',
          matches: '[text="京东"] <<n [text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375417',
        },
      ],
    },
  ],
});
