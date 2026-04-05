import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.note',
  name: '有道云笔记',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 1,
        name: '首页上方卡片广告',
        activityIds: 'com.youdao.note.activity2.MainActivity',
        matches: '[id="com.youdao.note:id/recycle_view"] + [id="com.youdao.note:id/close_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/13379524',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '首页上方卡片广告-1',
        activityIds: 'com.youdao.note.activity2.MainActivity',
        matches: '[id="com.youdao.note:id/recycle_view"] + [id="com.youdao.note:id/close_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/13379524',
        fastQuery: true,
        _uniqueKey: 2,
        _uniqueName: '首页上方卡片广告-1',
        name: '首页上方卡片广告-1'
      },
      ],
    },
  ],
});