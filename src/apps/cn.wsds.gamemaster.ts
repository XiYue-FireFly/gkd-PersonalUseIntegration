import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wsds.gamemaster',
  name: '迅游手游加速器',
  groups: [
{
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      rules: [
      {
        key: 0,
        matches: '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="splash_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13930391',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '分段广告-卡片广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
        matches: 'ViewGroup[childCount=2] > @ImageView[childCount=0][index=1][clickable=true][visibleToUser=true] - [text="立即下载"]',
        snapshotUrls: 'https://i.gkd.li/i/13930398',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
        matches: '[text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13930399',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
        matches: '[id="cn.wsds.gamemaster:id/feed_ad"] [text="立即下载"] + ImageView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13930398',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails',
        matches: '[text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13930399',
        preKeys: 0,
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
  ],
});