import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
{
      key: 1,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.bytedance.ies.outertest.cn.OuterTestGuideDialogActivity', 'com.ss.android.article.base.feature.ugc.story.StoryVideoActivity'],
        matches: '@[desc="关闭"] -(2,3) [text*="版本更新" || text*="升级版本"]',
        snapshotUrls: ['https://i.gkd.li/i/13316081', 'https://i.gkd.li/i/17681710'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.activity.MainActivity',
        matches: '[text="以后再说"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18194356',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.activity.MainActivity',
        matches: '[text="以后再说"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18194356',
        exampleUrls: 'https://e.gkd.li/79b75132-9d6f-4e4c-a95b-56dbaca1965d',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="升级版本"] +n [desc="关闭"][clickable=true]',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '局部广告-浮窗广告',
      desc: '关闭各页页的浮窗广告',
      enable: false,
      rules: [
      {
        key: 0,
        name: '首页-浮窗广告',
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: 'FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13762123',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '视频页-浮窗广告',
        activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
        matches: 'FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13761236',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '功能类-[下次打开APP默认进入发现频道]弹窗-1',
      desc: '点击取消',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '[text^="下次打开APP默认进入"]',
        snapshotUrls: 'https://i.gkd.li/i/15102876',
        exampleUrls: 'https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      activityIds: '.activity.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[text^="开启通知"] + LinearLayout > [text="暂不开启"]',
        snapshotUrls: 'https://i.gkd.li/i/12706699',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text^="开启通知"] < LinearLayout +2 ImageView[desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/12840217',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '全屏广告-竖屏视频广告',
      desc: '关闭竖屏视频广告',
      enable: false,
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
      {
        key: 0,
        name: '点击右上角[更多]图标按钮',
        matches: 'ImageView[clickable=true][desc="更多"]',
        snapshotUrls: ['https://i.gkd.li/i/12679280', 'https://i.gkd.li/i/12733282', 'https://i.gkd.li/i/12763251', 'https://i.gkd.li/i/12763252', 'https://i.gkd.li/i/12733281', 'https://i.gkd.li/i/13185633', 'https://i.gkd.li/i/13186082', 'https://i.gkd.li/i/13930050'],
        _uniqueKey: 0
      },
      {
        key: -1,
        name: '点击不感兴趣',
        matches: '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/12679277',
        preKeys: [0],
        actionCd: 35000,
        _uniqueKey: -1
      },
      {
        key: 1,
        name: '点击不感兴趣-1',
        matches: '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/12679277',
        preKeys: [0,1,2,3],
        actionCd: 35000,
        _uniqueKey: 1,
        _uniqueName: '点击不感兴趣-1',
        name: '点击不感兴趣-1'
      },
      {
        key: 2,
        name: '点击右上角[更多]图标按钮-1',
        matches: '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text="头条优惠券无门槛全平台通用"]',
        snapshotUrls: ['https://i.gkd.li/i/12679280', 'https://i.gkd.li/i/12733282', 'https://i.gkd.li/i/12763251', 'https://i.gkd.li/i/12763252'],
        _uniqueKey: 2,
        _uniqueName: '点击右上角[更多]图标按钮-1',
        name: '点击右上角[更多]图标按钮-1'
      },
      {
        key: 3,
        name: '点击右上角[更多]图标按钮-抖音直播',
        matches: '@ImageView[clickable=true][desc="更多"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$="广告"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12733281'],
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '第二种广告界面；点击右上角[更多]图标按钮',
        matches: '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >n TextView[text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13185633'],
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '第三种广告界面；点击右上角[更多]图标按钮',
        matches: '@ImageView[clickable=true][desc="更多"] <n RelativeLayout +2 LinearLayout > TextView[text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13186082'],
        _uniqueKey: 5
      },
      ],
    },
{
      key: 12,
      name: '分段广告-信息流广告',
      desc: '关闭信息流广告',
      enable: false,
      activityIds: ['com.ss.android.article.news.activity.MainActivity', 'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击右上角x按钮',
        matches: 'UIView[text^="不感兴趣"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12836272', 'https://i.gkd.li/i/13093576', 'https://i.gkd.li/i/16624480'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击不感兴趣',
        matches: '@[clickable=true] >(1,2) [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12733152', 'https://i.gkd.li/i/12755265', 'https://i.gkd.li/i/16624474', 'https://i.gkd.li/i/16624395', 'https://i.gkd.li/i/17893117'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击右上角x按钮-1',
        activityIds: ['com.ss.android.article.news.activity.MainActivity', 'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity'],
        matches: 'UIView[text^="不感兴趣"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12733098', 'https://i.gkd.li/i/12755264', 'https://i.gkd.li/i/12836272', 'https://i.gkd.li/i/12840162', 'https://i.gkd.li/i/13093576', 'https://i.gkd.li/i/12733098'],
        exampleUrls: ['https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif'],
        action: 'clickCenter',
        _uniqueKey: 2,
        _uniqueName: '点击右上角x按钮-1',
        name: '点击右上角x按钮-1'
      },
      {
        key: 3,
        name: '点击不感兴趣-1',
        activityIds: ['com.ss.android.article.news.activity.MainActivity', 'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity'],
        matches: '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12733152', 'https://i.gkd.li/i/12755265'],
        preKeys: 0,
        action: 'clickCenter',
        _uniqueKey: 3,
        _uniqueName: '点击不感兴趣-1',
        name: '点击不感兴趣-1'
      },
      ],
    },
{
      key: 13,
      name: '局部广告-底部话题推荐弹窗',
      desc: '关闭底部话题推荐弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        name: '话题谈论',
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: 'FlattenUIText[text="参与讨论"] + FlattenUIImage[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12706699',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '话题谈论-1',
        matches: 'FlattenUIText[text="参与讨论"] + FlattenUIImage[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12706699'],
        _uniqueKey: 1,
        _uniqueName: '话题谈论-1',
        name: '话题谈论-1'
      },
      ],
    },
{
      key: 14,
      name: '功能类-自动观看广告视频',
      desc: '自动观看广告并等待30s后关闭',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击"看视频"',
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '[id="com.bytedance.novel.api:id/component_ad_dialog_button_video"]',
        snapshotUrls: 'https://i.gkd.li/i/13402468',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '等待30s点击"关闭"',
        activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
        matches: 'UIText[text="广告"] +n UIText[text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13402480',
        preKeys: [0],
        actionDelay: 30000,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击【看视频】',
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '[id="com.bytedance.novel.api:id/component_ad_dialog_button_video"]',
        snapshotUrls: 'https://i.gkd.li/i/13402468',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '等待30s点击【关闭】',
        activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
        matches: 'UIText[text="广告"] +n UIText[text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13402480',
        actionDelay: 30000,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 15,
      name: '局部广告-底部热榜弹窗',
      desc: '关闭底部热榜弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: 'FrameLayout[childCount=8] > FlattenUIImage[index=7]',
        snapshotUrls: 'https://i.gkd.li/i/13828331',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '@FlattenUIImage[clickable=true] <n FrameLayout <<2 FrameLayout - LinearLayout [text="首页"]',
        snapshotUrls: 'https://i.gkd.li/i/13828331',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 16,
      name: '全屏广告-广告弹窗',
      desc: '关闭各种广告弹窗，包括关联抖音账号、默认进入发现频道、全屏广告弹窗等',
      enable: false,
      rules: [
      {
        key: 0,
        name: '关联抖音账号弹窗',
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '@[desc="关闭"] + [text^="关联"]',
        snapshotUrls: 'https://i.gkd.li/i/14717889',
        actionMaximum: 1,
        resetMatch: 'app',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '默认进入发现频道弹窗',
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '[text^="下次打开APP默认进入"]',
        snapshotUrls: 'https://i.gkd.li/i/15102876',
        actionMaximum: 1,
        resetMatch: 'app',
        fastQuery: true,
        action: 'back',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '全屏广告弹窗-类型1',
        activityIds: '.activity.MainActivity',
        matches: '[id="android:id/content"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]',
        snapshotUrls: 'https://i.gkd.li/i/15314921',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '全屏广告弹窗-类型2',
        activityIds: '.activity.MainActivity',
        matches: '@FlattenUIImage[text=""] -10 FlattenUIText[text="恭喜获得惊喜奖励"]',
        snapshotUrls: 'https://i.gkd.li/i/17681713',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '@[desc="关闭"] + [text^="关联"]',
        snapshotUrls: 'https://i.gkd.li/i/14717889',
        exampleUrls: 'https://m.gkd.li/57941037/c938001e-f39b-4ece-ad0e-2c93ba41aa94',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '评论广告',
        activityIds: 'com.bytedance.ugc.UgcDetailInfoActivity',
        matches: '[text="点击查看"] < LinearLayout +n FrameLayout > [desc="举报"]',
        snapshotUrls: ['https://i.gkd.li/i/13915287', 'https://i.gkd.li/i/13817019'],
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '活动横幅广告',
        activityIds: 'com.bytedance.ugc.UgcDetailInfoActivity',
        matches: 'TextView[text.length>0] < LinearLayout - ImageView +n ImageView',
        snapshotUrls: ['https://i.gkd.li/i/13825373'],
        _uniqueKey: 6
      },
      ],
    },
{
      key: 17,
      name: '功能类-[下次打开APP默认进入发现频道]弹窗-1-1-1-1',
      desc: '点击取消',
      actionMaximum: 1,
      resetMatch: 'app',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '[text^="下次打开APP默认进入"]',
        snapshotUrls: 'https://i.gkd.li/i/15102876',
        exampleUrls: 'https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ss.android.article.news.activity.MainActivity',
        matches: '@[desc="关闭"] + [text^="关联"]',
        snapshotUrls: 'https://i.gkd.li/i/14717889',
        exampleUrls: 'https://m.gkd.li/57941037/c938001e-f39b-4ece-ad0e-2c93ba41aa94',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 18,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: '[id="android:id/content"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]',
        snapshotUrls: 'https://i.gkd.li/i/15314921',
        exampleUrls: 'https://e.gkd.li/c3889d29-7260-4ab1-8070-75a6a68e4e2c',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.activity.MainActivity',
        matches: '@FlattenUIImage[text=""] -10 FlattenUIText[text="恭喜获得惊喜奖励"]',
        snapshotUrls: 'https://i.gkd.li/i/17681713',
        exampleUrls: 'https://e.gkd.li/057d40f6-f94e-4b54-857f-b5b11de245a5',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      ],
    },
  ],
});