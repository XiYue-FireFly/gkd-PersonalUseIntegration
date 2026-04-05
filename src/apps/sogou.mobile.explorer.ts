import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'sogou.mobile.explorer',
  name: '搜狗浏览器极速版',
  groups: [
{
      key: 1,
      name: '分段广告-小说页面广告',
      activityIds: 'com.tencent.mtt.MainActivity',
      rules: [
      {
        key: 0,
        matches: '@ViewGroup[clickable=true] >2 [desc="广告"][visibleToUser=true]',
        excludeMatches: '[desc="关闭此广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21556785',
        exampleUrls: 'https://e.gkd.li/5c2eb8d5-f53a-4b8e-81e2-65728cf4e924',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ViewGroup[clickable=true] > [desc="关闭此广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21556776',
        exampleUrls: 'https://e.gkd.li/63c0e510-c2eb-4cca-b3f4-81bfe709972c',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});