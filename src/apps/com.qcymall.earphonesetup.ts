import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qcymall.earphonesetup',
  name: 'QCY',
  groups: [
{
    key: 1,
    name: '局部广告-我的-卡片广告',
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.qcymall.earphonesetup.v2ui.activity.V2MainActivity',
          matches: '[vid="close_img_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/13874219',
      },
      { key: 0, matches: '[vid="close_img_banner"]' },
    ],
  }
  ],
});
