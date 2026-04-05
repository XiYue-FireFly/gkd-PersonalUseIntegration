import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'android.zhibo8',
  name: '直播吧',
  groups: [
{
      key: 1,
      name: '分段广告-信息流广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      activityIds: ['android.zhibo8.ui.contollers.main.MainActivity', 'android.zhibo8.ui.contollers.detail.DetailActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击关闭',
        matches: '[vid="iv_tip"][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13786148', 'https://i.gkd.li/i/14428863', 'https://i.gkd.li/i/15443198'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击不感兴趣',
        matches: '@[clickable=true] >3 [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/14428912',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击[查看详情]右侧x',
        matches: '@[id="android.zhibo8:id/iv_tip"] - [id="android.zhibo8:id/tv_app_download_2"]',
        snapshotUrls: 'https://i.gkd.li/i/12841134',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击[不感兴趣]',
        matches: '@LinearLayout > [id="android.zhibo8:id/tv_title"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/12841135',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击【广告】右侧的x',
        matches: '[text="广告"] <3 LinearLayout +2 [visibleToUser=true][id="android.zhibo8:id/iv_tip"]',
        snapshotUrls: 'https://i.gkd.li/i/13786148',
        _uniqueKey: 4
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.contollers.main.MainActivity',
        matches: ['[text="发现新版本"]', '[text$="不再提醒"]'],
        snapshotUrls: ['https://i.gkd.li/i/14395465', 'https://i.gkd.li/i/17825255'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[vid="pushsetting_close_iv"]',
        snapshotUrls: 'https://i.gkd.li/i/17825298',
        exampleUrls: 'https://e.gkd.li/e28aa1f2-8088-4f78-bee9-2d5832637671',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});