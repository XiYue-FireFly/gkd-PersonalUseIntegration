import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oppo.store',
  name: 'OPPO商城',
  groups: [
{
      key: 1,
      name: '更新提示',
      desc: '点击下次再说',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '@[text="下次再说"] -3 [text="发现新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/13295202',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[text="下次再说"] -n [text="发现新版本"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.oppo.store.MainActivity',
        matches: 'ImageView[id="com.oppo.store:id/dialog_delete"][desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13295201',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.oppo.store:id/dialog_delete"][desc="关闭"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});