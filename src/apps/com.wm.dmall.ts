import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wm.dmall',
  name: '多点',
  groups: [
{
      key: 1,
      name: '全屏广告-首页-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 1,
        activityIds: '.MainActivity',
        matches: '[id="com.wm.dmall:id/advert_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13197627',
        exampleUrls: 'https://e.gkd.li/60b65af4-7efa-4e82-b294-d96d5b426953',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: ['[id="com.wm.dmall:id/coupon_activity"][text="去使用"]', '[id="com.wm.dmall:id/iv_close"]'],
        snapshotUrls: 'https://i.gkd.li/i/13331283',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 0,
        matches: '[id="com.wm.dmall:id/advert_close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '局部广告-首页-浮窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.wm.dmall.MainActivity',
        snapshotUrls: 'https://i.gkd.li/i/13197634',
        fastQuery: true,
        anyMatches: ['@[id="com.wm.dmall:id/iv_close"] + [id="com.wm.dmall:id/view_float"]', '[id="com.wm.dmall:id/close_iV"]'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/13246242',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.wm.dmall:id/iv_close"] + [id="com.wm.dmall:id/view_float"]',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.wm.dmall:id/close_iV"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: ['[id="com.wm.dmall:id/update_confirm_btn"]', '[id="com.wm.dmall:id/close_btn"]'],
        snapshotUrls: 'https://i.gkd.li/i/13234668',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[id="com.wm.dmall:id/update_confirm_btn"]', '[id="com.wm.dmall:id/close_btn"]'],
        snapshotUrls: ['https://i.gkd.li/i/13234668'],
        _uniqueKey: 1
      },
      ],
    },
  ],
});