import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shinyv.cnr',
  name: '云听',
  groups: [
{
      key: 1,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'yt.com.module.home.MainActivity',
        matches: '[vid="iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16914130',
        exampleUrls: 'https://e.gkd.li/d1680c51-70c8-4d50-9560-f5e091685ee8',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.shinyv.cnr:id/iv_ad"] + [id="com.shinyv.cnr:id/iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});