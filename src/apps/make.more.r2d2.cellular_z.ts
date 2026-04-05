import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    actionMaximumKey: 0,
    resetMatch: 'app',
    fastQuery: true,
    order: -10,
    rules: [
      {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/10fa1ebe-c208-4127-a456-48ac91901984',
          snapshotUrls: 'https://i.gkd.li/i/16486491',
      },
      {
          key: 1,
          matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13978978',
      },
    ],
  },
{
    key: 2,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: '.activity.MonitorActivity',
          matches: [
              '[text="发现新版本"]',
              '[text="取消"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13608563',
      },
    ],
  }
  ],
});
