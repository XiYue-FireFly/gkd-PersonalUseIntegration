import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      rules: [
      {
        key: 1,
        matches: '[text^="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/12843368', 'https://i.gkd.li/i/13363222', 'https://i.gkd.li/i/13363246'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[id$="tt_splash_skip_btn"] <<n [id="com.realtech.xiaocan:id/splash_ad_container"]',
        snapshotUrls: 'https://i.gkd.li/i/12854728',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@View[visibleToUser=true][clickable=true] <n FrameLayout[childCount=4||childCount=3] <<n [id="com.realtech.xiaocan:id/splash_ad_container"]',
        snapshotUrls: ['https://i.gkd.li/i/13694858', 'https://i.gkd.li/i/13794403'],
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.realtech.xiaocan.MainActivity',
        matches: 'View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/13694864',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-签到成功弹窗-1',
      desc: '点击[关闭]按钮',
      actionMaximum: 1,
      resetMatch: 'app',
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.realtech.xiaocan.MainActivity',
        matches: '[id="android:id/content"] >5 View[childCount=6] > ImageView[index=5][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14290847',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="开启提醒"] - ImageView[clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-优惠券弹窗',
      enable: false,
      activityIds: 'com.realtech.xiaocan.MainActivity',
      snapshotUrls: 'https://i.gkd.li/i/14196232',
      rules: [
      {
        key: 0,
        matches: '[desc*="今日最新红包已更新"] > ImageView[index=4]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '功能类-签到成功弹窗-1-1-1-1',
      desc: '自动点击[关闭]按钮',
      enable: false,
      activityIds: 'com.realtech.xiaocan.MainActivity',
      snapshotUrls: 'https://i.gkd.li/i/14290847',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        matches: 'View[childCount=6][desc!=""] > View[index=4] + ImageView[index=5][clickable=true]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});