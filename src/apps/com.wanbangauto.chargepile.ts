import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wanbangauto.chargepile',
  name: '星星充电',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.newhome.MainActivity',
        matches: '@[vid="image_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18421090',
        exampleUrls: 'https://e.gkd.li/ce4838fb-0f0d-4b20-bab3-565bd80bbc93',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-签到提示',
      desc: '点击[忽略]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.newhome.MainActivity',
        matches: ['[text^="小星提醒您"][visibleToUser=true]', '[text="忽略"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18421092',
        exampleUrls: 'https://e.gkd.li/542507c4-57dd-46f5-b354-78cdbacb3191',
        _uniqueKey: 0
      },
      ],
    },
  ],
});