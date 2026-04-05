import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xyhj.hanju',
  name: '韩剧TV',
  groups: [
{
      key: 1,
      name: '局部广告-播放页下方广告',
      desc: '点击x',
      enable: false,
      activityIds: '.ui.activity.ZtvSeriesActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/17265226',
      exampleUrls: 'https://e.gkd.li/b94e7ce3-16ba-42e0-9e93-882ceb5e6ab0',
      rules: [
      {
        key: 0,
        matches: '[vid="unified_ad_close"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});