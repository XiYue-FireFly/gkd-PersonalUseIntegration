import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.loyea.adnmb',
  name: '蓝岛',
  groups: [
{
    key: 5,
    name: '通知提示-通知弹窗',
    desc: '点击通知弹窗的【确定】按钮',
    enable: false,
    activityIds: 'com.loyea.adnmb.activity.MainActivity',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/import/13623450',
    rules: [
      { key: 0, matches: 'LinearLayout > Button[text="确定"||text="確定"]' },
      {
          key: 0,
          matches: '[text="不再显示该条通知"][checked=false]',
          exampleUrls: 'https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a',
          snapshotUrls: 'https://i.gkd.li/i/13623450',
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          matches: '[text="确定"]',
          exampleUrls: 'https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a',
          snapshotUrls: 'https://i.gkd.li/i/13623450',
      },
      { key: 0, matches: 'LinearLayout > Button[text="确定"]' },
    ],
  }
  ],
});
