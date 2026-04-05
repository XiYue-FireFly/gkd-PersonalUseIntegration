import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.reader',
  name: '阅读',
  groups: [
{
      key: 2,
      name: '全屏广告-首页弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
        matches: '[id="com.zhangyue.commonplugin:id/dialog_welfare_card_close"]',
        snapshotUrls: 'https://i.gkd.li/i/19890575',
        exampleUrls: 'https://e.gkd.li/76f226bb-fcd4-439a-9eed-520a9c35a0c0',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.zhangyue.commonplugin:id/dialog_welfare_card_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13387130',
        exampleUrls: 'https://m.gkd.li/6328439/4feb19d4-f90f-4ed5-b025-9c2a6e4fc479',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '局部广告-首页浮窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
        matches: '[id="com.heytap.reader:id/float_delete"]',
        snapshotUrls: 'https://i.gkd.li/i/13387138',
        exampleUrls: 'https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
        matches: '[id="com.heytap.reader:id/float_delete"]',
        snapshotUrls: 'https://i.gkd.li/i/13387138',
        exampleUrls: 'https://m.gkd.li/6328439/860371ea-1f09-4f82-8ed6-1436eca4a50d',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '局部广告-今日推荐',
      rules: [
      {
        key: 0,
        activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
        matches: '[id="com.heytap.reader:id/iv_float_read_continue_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13387159',
        exampleUrls: 'https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
        matches: '[id="com.heytap.reader:id/iv_float_read_continue_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13387159',
        exampleUrls: 'https://m.gkd.li/6328439/3ee7210c-970e-4c9a-acb6-9254245c27a0',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});