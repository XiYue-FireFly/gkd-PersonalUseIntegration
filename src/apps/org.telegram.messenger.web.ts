import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.messenger.web',
  name: 'Telegram',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="更新 Telegram"]',
            '@View[clickable=true] + [text="请稍后提醒我"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13847837',
        },
        {
          matches: [
            '[text="更新 Telegram"]',
            '[text="请稍后提醒我"] - View',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示-同意消息通知',
      desc: '点击【继续】',
      fastQuery: true,
      activityIds: 'org.telegram.ui.LaunchActivity',
      rules: '[text="打开通知"] +n [text="继续"]',
      snapshotUrls: 'https://i.gkd.li/i/14048218',
      enable: false,
    },
  ],
});
