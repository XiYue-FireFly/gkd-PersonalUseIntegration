import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ctm',
  name: 'CTM Buddy',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.home.page.MainActivity',
        matches: '[id="com.ctm:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13350575',
        exampleUrls: 'https://e.gkd.li/fbaa53c3-109d-47b3-b85c-373d93e420d9',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.ctm:id/iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-底部横幅广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.ctm.home.page.MainActivity',
        matches: '[id="com.ctm:id/iv_bottom_adv"] + [id="com.ctm:id/btn_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13350612',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.ctm:id/btn_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});