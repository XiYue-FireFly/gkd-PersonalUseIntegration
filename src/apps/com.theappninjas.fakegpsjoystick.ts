import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.theappninjas.fakegpsjoystick',
  name: 'GPS JoyStick',
  groups: [
    {
      key: 0,
      name: '更新提示',
      categoryKey: 2,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.theappninjas.fakegpsjoystick.ui.MainActivity',
          matches: [
            '[text="新版本" || text^="此应用的新版本"]',
            '[text="稍后" || text="稍后提醒"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18375411',
        },
        '[text="稍后" || text="稍后提醒"]',
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      categoryKey: 7,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.theappninjas.fakegpsjoystick.ui.MainActivity',
          matches: '@[text="关闭广告" || desc="关闭广告" || vid="close_btn" || id="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/18375412',
        },
        {
          activityIds: 'com.theappninjas.fakegpsjoystick.ui.MainActivity',
          matches: '@[text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18375413',
        },
        '@[text="关闭广告" || desc="关闭广告" || text="×"]',
      ],
    },
  ],
});
