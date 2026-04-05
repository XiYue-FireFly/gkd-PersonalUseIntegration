import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.djcity',
  name: '掌上道聚城',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15137209',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@LinearLayout[clickable=true] > [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/15137209',
        action: 'clickCenter',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.djcity.activities.homepage.MainActivity',
        matches: '[vid="main_container"] >7 View[childCount=7] > View[childCount=2] > @View[index=1][childCount=1][clickable=true] > ImageView[childCount=0] <<n [vid="main_container"]',
        snapshotUrls: 'https://i.gkd.li/i/14229532',
        exampleUrls: 'https://m.gkd.li/57941037/151fd8a5-8c44-4368-a8ba-3563df44e492',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-"签到成功"弹窗',
      desc: '点击"好的"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.djcity.activities.homepage.MainActivity',
        matches: '@View[clickable=true] > [desc="好的"]',
        snapshotUrls: 'https://i.gkd.li/i/14229554',
        exampleUrls: 'https://m.gkd.li/57941037/22ba335b-c225-41f0-97be-a91377ebc121',
        _uniqueKey: 0
      },
      ],
    },
  ],
});