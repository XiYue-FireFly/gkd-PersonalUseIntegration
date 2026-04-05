import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
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
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        excludeMatches: '[vid="ad_skip"][clickable=false]',
        snapshotUrls: ['https://i.gkd.li/i/13195662', 'https://i.gkd.li/i/16883928', 'https://i.gkd.li/i/14900326'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        snapshotUrls: 'https://i.gkd.li/i/14046124',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.netease.mail:id/animation_view"]',
        snapshotUrls: ['https://i.gkd.li/i/13207736', 'https://i.gkd.li/i/14900326', 'https://i.gkd.li/i/16892947'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text*="跳过"][text.length<=10]',
        excludeMatches: '[id="com.netease.mail:id/ad_skip"][clickable=false]',
        snapshotUrls: ['https://i.gkd.li/i/12893573', 'https://i.gkd.li/i/12923776', 'https://i.gkd.li/i/13195662', 'https://i.gkd.li/i/12818335', 'https://i.gkd.li/i/13206298'],
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14046124',
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[id="com.netease.mail:id/ad_view"]',
        excludeMatches: '[text*="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/13207736', 'https://i.gkd.li/i/14900326'],
        _uniqueKey: 5
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-邮件列表广告',
      activityIds: 'com.netease.mail.biz.main.MainITabActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.netease.mail:id/ad_vip"]',
        snapshotUrls: 'https://i.gkd.li/i/12999833',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.netease.mail:id/ll_delete"]',
        snapshotUrls: 'https://i.gkd.li/i/12999841',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.netease.mail:id/ll_delete"]',
        snapshotUrls: 'https://i.gkd.li/i/12999841',
        preKeys: 0,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 5,
      name: '其他-获得成就弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: 'TextView[text="恭喜您获得以下成就"] - @TextView[clickable=true][text=""] <<n [vid="browser_fragment_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13876817',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[text="恭喜您获得以下成就"] - TextView[text=""][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});