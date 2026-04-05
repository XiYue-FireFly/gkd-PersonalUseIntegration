import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiliaoapp.musically',
  name: 'TikTok',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        matches: 'RelativeLayout[childCount=2] > @ImageView[index=1][clickable=true] <<n [id="android:id/custom"]',
        snapshotUrls: 'https://i.gkd.li/i/15144780',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        matches: '@UIView[clickable=true] -3 FlattenUIText[text="Get products"]',
        snapshotUrls: 'https://i.gkd.li/i/16190364',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        matches: 'RelativeLayout[childCount=2] > @ImageView[index=1][clickable=true] <<n [id="android:id/custom"]',
        snapshotUrls: 'https://i.gkd.li/i/15144780',
        exampleUrls: 'https://m.gkd.li/57941037/13316f83-eaca-4081-9757-33730338a033',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击[暂时不要/稍后再说]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        matches: ['[text*="通知"][visibleToUser=true]', '[text="暂时不要" || text="稍后再说"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/15944175', 'https://i.gkd.li/i/17963945'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        matches: 'FrameLayout[childCount=1] >3 FrameLayout[childCount=3] > ImageView[clickable=true][childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/16188665',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-好友推荐弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
        matches: '@ImageView[clickable=true] - [text="关注你的好友"]',
        snapshotUrls: 'https://i.gkd.li/i/16247893',
        exampleUrls: 'https://e.gkd.li/32069d2d-032c-4278-9ead-a48a464ecdd0',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});