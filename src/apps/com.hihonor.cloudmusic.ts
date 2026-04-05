import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.cloudmusic',
  name: '荣耀音乐',
  groups: [
{
      key: 1,
      name: '分段广告-推荐页卡片广告',
      desc: '点击[关闭]-点击[直接关闭]',
      activityIds: 'com.netease.cloudmusic.activity.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="tag_ad_banner"]',
        snapshotUrls: 'https://i.gkd.li/i/15835795',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="直接关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/15835857',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="dsl_dialog_root"] >4 ImageView[index=1]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '[vid="dsl_dialog_root"]',
        snapshotUrls: 'https://i.gkd.li/i/15860430',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
  ],
});