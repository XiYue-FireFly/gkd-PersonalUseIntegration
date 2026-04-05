import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.videogo',
  name: '萤石云视频',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      actionCdKey: 0,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: -1,
        matches: '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead" && vid!*="time")]',
        _uniqueKey: -1
      },
      {
        key: 1,
        name: '穿山甲SDK',
        matches: '[vid="ad_content"] >n View[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14076262',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '分段广告-主页广告',
      activityIds: 'com.videogo.main.MainTabActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.videogo:id/ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13255684',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.videogo:id/ad_closead_nointerest"]',
        snapshotUrls: 'https://i.gkd.li/i/13255697',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.videogo:id/ad_closead_nointerest"]',
        snapshotUrls: 'https://i.gkd.li/i/13255697',
        preKeys: 0,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '功能类-在线值守试用弹窗',
      desc: '点击x',
      enable: false,
      activityIds: 'com.videogo.main.MainTabActivity',
      snapshotUrls: 'https://i.gkd.li/i/14065785',
      rules: [
      {
        key: 0,
        matches: '[text="了解并试用服务"] <<n ViewGroup[index=0][childCount=2] > ViewGroup[clickable=true]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '全屏广告-弹窗广告',
      activityIds: ['.main.MainTabActivity', '.login.LoadingActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'TextView[text="了解并试用服务"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15338834',
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="新机礼包专享"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18843418', 'https://i.gkd.li/i/20139706'],
        exampleUrls: 'https://e.gkd.li/b9045305-ce34-43f7-ab86-b48a672281cb',
        action: 'back',
        _uniqueKey: 1
      },
      ],
    },
  ],
});