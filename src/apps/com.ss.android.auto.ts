import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.auto',
  name: '懂车帝',
  groups: [
{
      key: 1,
      name: '分段广告-首页推荐卡片广告',
      desc: '需二次点击关闭原因',
      activityIds: ['com.ss.android.auto.activity.SplashActivity', 'com.ss.android.auto.policy.AutoPrivacyActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击关闭',
        matches: 'TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12660816', 'https://i.gkd.li/i/13959610'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击"不感兴趣"1',
        matches: '@ViewGroup[clickable=true] TextView[text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13538627',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击"不感兴趣"2',
        matches: '[text="不感兴趣"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12711589', 'https://i.gkd.li/i/13959613'],
        preKeys: [0],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击【x】',
        matches: 'TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12660816',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击【不感兴趣】1',
        matches: '@ViewGroup[clickable=true] TextView[text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13538627',
        preKeys: 1,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '点击【不感兴趣】2',
        matches: '[text="不感兴趣"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12711589',
        preKeys: 1,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.SplashActivity',
        matches: '@TextView[text="以后再说"] - FrameLayout >2 TextView[text$="升级"]',
        snapshotUrls: 'https://i.gkd.li/i/13534445',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@TextView[text="以后再说"] - FrameLayout >2 TextView[text$="升级"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '局部广告-右下角悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: ['com.ss.android.auto.activity.SplashActivity', 'com.ss.android.auto.activity.ConcernDetailActivity'],
        matches: 'FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12798338', 'https://i.gkd.li/i/13535531', 'https://i.gkd.li/i/13535933', 'https://i.gkd.li/i/13535932'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '局部广告-文章底部卡片广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
        matches: 'FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12811597',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text="广告"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '局部广告-评论区信息流广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.ss.android.article.base.feature.detail2.view.NewDetailActivity', 'com.ss.android.auto.ugc.video.activity.UgcLongPostActivity', 'com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity'],
        matches: '@ImageView[clickable=true] - LinearLayout > [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12811459', 'https://i.gkd.li/i/12825865', 'https://i.gkd.li/i/12900666', 'https://i.gkd.li/i/14321293'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'FrameLayout > * > @ImageView[clickable=true] - LinearLayout > [text="广告"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '权限提示-通知权限',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.SplashActivity', 'com.bytedance.im.auto.conversation.activity.ConversationListActivity'],
        matches: 'TextView[text*="推送通知"]',
        snapshotUrls: ['https://i.gkd.li/i/12840664', 'https://i.gkd.li/i/14060897', 'https://i.gkd.li/i/14546563'],
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@TextView[clickable=true] + [text^="打开推送通知"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '局部广告-选车页卡片广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.auto.activity.ConcernDetailActivity',
        matches: '@FrameLayout[clickable=true][id!=null] -2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13686928',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] -2 [text="广告"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '局部广告-车型页面右下角直播悬浮窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.auto.activity.ConcernDetailActivity',
        matches: 'FrameLayout[childCount=8] > TextView[text=""]',
        snapshotUrls: 'https://i.gkd.li/i/14034740',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 9,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.SplashActivity',
        matches: '[text="去评价"]',
        snapshotUrls: 'https://i.gkd.li/i/14810042',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
  ],
});