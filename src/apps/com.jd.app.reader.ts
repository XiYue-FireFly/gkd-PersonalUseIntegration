import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.app.reader',
  name: '京东读书',
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
        snapshotUrls: 'https://i.gkd.li/i/14189228',
        exampleUrls: 'https://m.gkd.li/57941037/6f4561e5-b998-43f9-8848-b6b43d045a3d',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="mJumpBtn"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16486457',
        exampleUrls: 'https://e.gkd.li/28a83ffc-ba28-4d0e-8f28-b48a4a542f23',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.jd.app.reader:id/animation_view"]',
        snapshotUrls: 'https://i.gkd.li/i/13264389',
        exampleUrls: 'https://m.gkd.li/57941037/ab677b66-4681-4672-a1d6-3b5938e7f374',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14189228',
        exampleUrls: 'https://m.gkd.li/57941037/6f4561e5-b998-43f9-8848-b6b43d045a3d',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[vid="mJumpBtn"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16486457',
        exampleUrls: 'https://e.gkd.li/28a83ffc-ba28-4d0e-8f28-b48a4a542f23',
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[id="com.jd.app.reader:id/animation_view"]',
        snapshotUrls: 'https://i.gkd.li/i/13264389',
        exampleUrls: 'https://m.gkd.li/57941037/ab677b66-4681-4672-a1d6-3b5938e7f374',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-首页弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.jingdong.app.reader.main.ui.JdMainActivity',
        matches: '[vid="mCloseBtn"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16486458',
        exampleUrls: 'https://e.gkd.li/ac85ef54-5180-4740-b12d-608b37ad5502',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-阅读页面弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.jd.read.engine.activity.EngineReaderActivity',
        matches: '[id$="ad_read_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12881810', 'https://i.gkd.li/i/12893631'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id$="ad_read_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});