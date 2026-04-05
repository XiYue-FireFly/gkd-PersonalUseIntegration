import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<=10][!(id="com.netease.mobimail:id/ad_skip")]',
        snapshotUrls: ['https://i.gkd.li/i/12686132', 'https://i.gkd.li/i/13328441', 'https://i.gkd.li/i/13800060'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        snapshotUrls: 'https://i.gkd.li/i/12686093',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.netease.mobimail:id/ad_skip"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12667519', 'https://i.gkd.li/i/13328425'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text*="跳过"][text.length<=10][id!="com.netease.mobimail:id/ad_skip"]',
        snapshotUrls: ['https://i.gkd.li/i/12686132', 'https://i.gkd.li/i/13328441', 'https://i.gkd.li/i/13800060'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/12686093',
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[id="com.netease.mobimail:id/ad_skip"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12667519', 'https://i.gkd.li/i/13328425'],
        _uniqueKey: 5
      },
      ],
    },
{
      key: 1,
      name: '局部广告-邮件列表页面广告条目',
      rules: [
      {
        key: 0,
        activityIds: 'com.netease.mail.biz.main.MainITabActivity',
        matches: '[id="com.netease.mobimail:id/ad_vip" || id="com.netease.mobimail:id/ll_delete"]',
        snapshotUrls: ['https://i.gkd.li/i/12683488', 'https://i.gkd.li/i/12683511'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.netease.mail.biz.main.MainITabActivity',
        matches: '[id="com.netease.mobimail:id/ad_vip"]',
        snapshotUrls: 'https://i.gkd.li/i/12683488',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.netease.mail.biz.main.MainITabActivity',
        matches: '[id="com.netease.mobimail:id/ll_delete"]',
        snapshotUrls: 'https://i.gkd.li/i/12683511',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '更新提示-切回时的开屏广告',
      enable: false,
      activityIds: 'com.netease.mail.biz.main.MainITabActivity',
      snapshotUrls: 'https://i.gkd.li/i/12685745',
      rules: [
      {
        key: 0,
        matches: '@LinearLayout > TextView[text^="跳过"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});