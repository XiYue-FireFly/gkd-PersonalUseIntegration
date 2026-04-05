import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sh.gj',
  name: '上海公交',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['com.sh.gj.MainActivity', 'com.sh.gj.activity.LineDetailActivity'],
        matches: 'ImageView[visibleToUser=true] - FrameLayout[childCount=1] > @ImageView[visibleToUser=true] <<n [vid="bannerContainer"]',
        snapshotUrls: ['https://i.gkd.li/i/14883102', 'https://i.gkd.li/i/14883152'],
        exampleUrls: 'https://m.gkd.li/57941037/36771be2-e3fd-498c-9adb-458e9f487b9b',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '腾讯SDK',
        activityIds: ['com.sh.gj.MainActivity', 'com.sh.gj.activity.LineDetailActivity'],
        matches: 'ImageView < @FrameLayout <<n [vid="bannerContainer"]',
        snapshotUrls: ['https://i.gkd.li/i/14883107', 'https://i.gkd.li/i/14883157'],
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '功能类-退出软件时的确认弹窗',
      desc: '点击[确认退出]',
      rules: [
      {
        key: 0,
        activityIds: 'com.sh.gj.MainActivity',
        matches: '[text="确认退出"]',
        snapshotUrls: 'https://i.gkd.li/i/14883160',
        exampleUrls: 'https://m.gkd.li/57941037/38c20d82-947e-4e46-aba8-80e1a773552b',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="确认退出"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});