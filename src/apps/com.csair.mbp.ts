import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csair.mbp',
  name: '南方航空',
  groups: [
{
      key: 1,
      name: '功能类-长辈版弹窗-1',
      desc: '点击【暂不开启】',
      enable: false,
      activityIds: 'com.csair.mbp.CSMBPActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/14810700',
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        matches: '[text="开启长辈版"] -2 [text="暂不开启"]',
        _uniqueKey: 0
      },
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
        key: 0,
        activityIds: '.CSMBPActivity',
        matches: '[id="com.csair.mbp:id/close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13197497',
        exampleUrls: 'https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.csair.mbp:id/close_btn"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '功能类-长辈版弹窗-1-1-1-1',
      desc: '点击[暂不开启]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.csair.mbp.CSMBPActivity',
        matches: '[text="开启长辈版"] -2 [text="暂不开启"]',
        snapshotUrls: 'https://i.gkd.li/i/14810700',
        exampleUrls: 'https://m.gkd.li/57941037/8744f8c6-7f9a-4f7b-a5c7-68de1701cd7b',
        _uniqueKey: 0
      },
      ],
    },
  ],
});