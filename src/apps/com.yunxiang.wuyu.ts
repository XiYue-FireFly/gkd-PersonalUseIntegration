import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yunxiang.wuyu',
  name: '特狗APP',
  groups: [
{
      key: 2,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '[desc="我知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/13455634',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc^="人生嘛"] +4 ImageView[clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.yunxiang.wuyu.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 1,
        name: '"x"型',
        matches: 'ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13455628',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '"跳过"型',
        matches: ['TextView[text="广告"]', '@ViewGroup > TextView[text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13455629',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '【x】型',
        matches: 'ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13455628',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '【跳过】型',
        matches: ['TextView[text="广告"]', '@ViewGroup > TextView[text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13455629',
        _uniqueKey: 4
      },
      ],
    },
  ],
});