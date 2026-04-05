import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jz.xydj',
  name: '星芽免费短剧',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        name: '底部卡片广告',
        activityIds: 'com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2',
        matches: '[vid="ad_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14391204',
        exampleUrls: 'https://m.gkd.li/57941037/c6e1dfa9-388e-417f-9ab2-d3ea63d3eb8a',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '腾讯SDK',
        activityIds: 'com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2',
        matches: '[vid="ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14391606',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});