import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.music',
  name: '音乐',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.allsaints.music.MainActivity',
        matches: '@ImageView[clickable=true] + [text="检测到新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/14987173',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[clickable=true] + [text="检测到新版本"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['com.allsaints.ad.sjy.reward.SRewardLoadingActivity', 'com.allsaints.music.MainActivity'],
        matches: ['[vid="btnFreeListening"][visibleToUser=true]', '[vid="close"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/16200623', 'https://i.gkd.li/i/21175600'],
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});