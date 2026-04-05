import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
{
      key: 2,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        activityIds: ['com.babycloud.hanju.ui.activity.HanjuSeriesActivity', 'com.babycloud.hanju.ui.activity.HanjuHomeActivity', 'com.babycloud.hanju.search.activity.SearchActivity'],
        matches: '[vid="unified_ad_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13628282', 'https://i.gkd.li/i/13670721', 'https://i.gkd.li/i/13849929'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.babycloud.hanju.ui.activity.HanjuSeriesActivity', 'com.babycloud.hanju.ui.activity.HanjuHomeActivity', 'com.babycloud.hanju.search.activity.SearchActivity'],
        matches: '[id="com.babycloud.hanju:id/unified_ad_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13628282', 'https://i.gkd.li/i/13670721', 'https://i.gkd.li/i/13849929'],
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-视频播放时的弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.babycloud.hanju.ui.activity.HanjuSeriesActivity',
        matches: '[vid="close_rl" || vid="only_skip_rl" || vid="skip_rl"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13800123', 'https://i.gkd.li/i/13972345', 'https://i.gkd.li/i/14048532', 'https://i.gkd.li/i/14048302'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.babycloud.hanju.ui.activity.HanjuSeriesActivity',
        matches: '@RelativeLayout[childCount=1] [vid*="skip_tv" || vid*="close_iv"]',
        snapshotUrls: ['https://i.gkd.li/i/13800123', 'https://i.gkd.li/i/13972345', 'https://i.gkd.li/i/14048532', 'https://i.gkd.li/i/14048302'],
        _uniqueKey: 1
      },
      ],
    },
  ],
});