import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csair.mbp',
  name: '南方航空',
  groups: [
{
    key: 1,
    name: '功能类-长辈版弹窗',
    desc: '点击【暂不开启】',
    enable: false,
    activityIds: 'com.csair.mbp.CSMBPActivity',
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/i/14810700',
    rules: [
      { key: 0, matches: '[text="开启长辈版"] -2 [text="暂不开启"]' },
    ],
  },
{
    key: 3,
    name: '全屏广告-弹窗广告',
    desc: '点击关闭',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
          fastQuery: true,
          activityIds: '.CSMBPActivity',
          matches: '[id="com.csair.mbp:id/close_btn"]',
          exampleUrls: 'https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30',
          snapshotUrls: 'https://i.gkd.li/i/13197497',
      },
      { key: 0, matches: '[id="com.csair.mbp:id/close_btn"]' },
    ],
  },
{
    key: 4,
    name: '功能类-长辈版弹窗',
    desc: '点击[暂不开启]',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.csair.mbp.CSMBPActivity',
          matches: '[text="开启长辈版"] -2 [text="暂不开启"]',
          exampleUrls: 'https://m.gkd.li/57941037/8744f8c6-7f9a-4f7b-a5c7-68de1701cd7b',
          snapshotUrls: 'https://i.gkd.li/i/14810700',
      },
    ],
  }
  ],
});
