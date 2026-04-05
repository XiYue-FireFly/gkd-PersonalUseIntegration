import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coloros.gallery3d',
  name: '相册',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.app.MainActivity',
        matches: '[text="更新"] -2 [text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/13554797',
        exampleUrls: 'https://m.gkd.li/47232102/0dae9f4b-8432-4cf4-b648-07ae17cdece2',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '功能类-开启相册同步弹窗',
      desc: '点击忽略',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.coloros.gallery3d.app.MainActivity',
        matches: '[text="开启相册自动同步，保障相册数据安全"] + [text="忽略"]',
        snapshotUrls: 'https://i.gkd.li/i/13637185',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启相册自动同步，保障相册数据安全"] + [text="忽略"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});