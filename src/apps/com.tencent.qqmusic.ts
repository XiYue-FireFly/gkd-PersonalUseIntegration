import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
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
        snapshotUrls: 'https://i.gkd.li/i/17056504',
        exampleUrls: 'https://e.gkd.li/bde5c1a5-3259-45d3-a6b8-8482f7818c6f',
        fastQuery: true,
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17068758',
        exampleUrls: 'https://e.gkd.li/6537da92-f5f6-4ee8-9219-5f39f7c5e8a2',
        action: 'clickCenter',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '关闭播放界面、歌单页、我的页等位置的各类卡片广告',
      enable: false,
      rules: [
      {
        key: 1,
        activityIds: 'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
        matches: '[text^="广告"] + [text="跳过"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13985169',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@[desc="关闭"][clickable=true] -(1,2) [text="广告"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13206534', 'https://i.gkd.li/i/13797001'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13206982', 'https://i.gkd.li/i/13218134'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@[clickable=true][visibleToUser=true] > [text="广告"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/15041019', 'https://i.gkd.li/i/18227243'],
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/18219557',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: 'RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15756931',
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: '.activity.AppStarterActivity',
        matches: '@ImageView[clickable=true] - [text="广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17450309',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: '.activity.AppStarterActivity',
        matches: '[text="广告 | 关闭"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18227204',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '播放页[猜你也会喜欢]推荐',
        activityIds: '.business.playernew.view.NewPlayerActivity',
        matches: '@ImageView[childCount=0][clickable=true] -2 [text="猜你也会喜欢"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18410610',
        fastQuery: true,
        _uniqueKey: 8
      },
      {
        key: 9,
        activityIds: '.activity.AppStarterActivity',
        matches: 'RecyclerView > FrameLayout[desc!=null] >3 LinearLayout[id!=null] > ViewPager > FrameLayout[visibleToUser=true] > ImageView[childCount=0][clickable=true][width<150 && height<100][index=parent.childCount.minus(1)]',
        snapshotUrls: ['https://i.gkd.li/i/23623581', 'https://i.gkd.li/i/23623677'],
        matchTime: 10000,
        _uniqueKey: 9
      },
      {
        key: 10,
        activityIds: '.activity.AppStarterActivity',
        matches: 'ImageView[width<80 && height<80] <<2 @ViewGroup[clickable=true] - [text^="hi~"]',
        snapshotUrls: 'https://i.gkd.li/i/23930716',
        _uniqueKey: 10
      },
      {
        key: 11,
        activityIds: '.activity.AppStarterActivity',
        matches: 'RecyclerView > FrameLayout[desc!=null] >3 LinearLayout[id!=null] > ViewPager > FrameLayout[visibleToUser=true] > ImageView[childCount=0][clickable=true][width<150 && height<100][index=parent.childCount.minus(1)]',
        snapshotUrls: ['https://i.gkd.li/i/23623581', 'https://i.gkd.li/i/23623677'],
        exampleUrls: 'https://e.gkd.li/c7b25408-26ed-4010-8506-88f614dccd26',
        matchTime: 10000,
        _uniqueKey: 11
      },
      {
        key: 12,
        activityIds: '.activity.AppStarterActivity',
        matches: 'ImageView[width<80 && height<80] <<2 @ViewGroup[clickable=true] - [text^="hi~"]',
        snapshotUrls: 'https://i.gkd.li/i/23930716',
        _uniqueKey: 12
      },
      {
        key: 13,
        activityIds: 'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
        matches: '[text^="广告"] + [text="跳过"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13985169',
        _uniqueKey: 13
      },
      {
        key: 14,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@[desc="关闭"] -(1,2) [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13206534', 'https://i.gkd.li/i/13797001'],
        _uniqueKey: 14
      },
      {
        key: 15,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@ImageView - ImageView - RelativeLayout >3 [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
        snapshotUrls: ['https://i.gkd.li/i/13206982', 'https://i.gkd.li/i/13218134'],
        _uniqueKey: 15
      },
      {
        key: 16,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@[clickable=true] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/15041019',
        fastQuery: true,
        _uniqueKey: 16
      },
      ],
    },
{
      key: 2,
      name: '全屏广告',
      desc: '关闭各类全屏广告弹窗，包括网页广告、免流弹窗和签到弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        name: '弹窗广告',
        activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
        matches: 'View[id="js_close_btn"][desc="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/13115121', 'https://i.gkd.li/i/14798904'],
        forcedTime: 5000,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '免流弹窗',
        activityIds: ['com.tencent.qqmusic.activity.AppStarterActivity', 'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity'],
        matches: '[text="流量够用"]',
        snapshotUrls: ['https://i.gkd.li/i/13197868', 'https://i.gkd.li/i/15285647'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '签到弹窗',
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '[id="android:id/content"] > FrameLayout > FrameLayout > ViewGroup[childCount=2] > ViewGroup > ViewGroup[clickable=true][childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/15443191',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: ['.activity.TranslucentWebViewActivity', '.activity.AppStarterActivity', '.business.playernew.view.NewPlayerActivity'],
        matches: '[desc="关闭"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13115121', 'https://i.gkd.li/i/14549936', 'https://i.gkd.li/i/14798904', 'https://i.gkd.li/i/15209764', 'https://i.gkd.li/i/15261116', 'https://i.gkd.li/i/17459008', 'https://i.gkd.li/i/23930628', 'https://i.gkd.li/i/23930853'],
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['.activity.AppStarterActivity', 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity'],
        matches: '[desc^="关闭弹窗"][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/17057551', 'https://i.gkd.li/i/23495699'],
        exampleUrls: 'https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: ['.activity.AppStarterActivity', '.business.playernew.view.NewPlayerActivity'],
        matches: '@ImageView[childCount=0][visibleToUser=true][width<130 && height<130] <n FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: ['https://i.gkd.li/i/18439138', 'https://i.gkd.li/i/22924866'],
        exampleUrls: 'https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: '.activity.AppStarterActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true][width<120 && height<120] < FrameLayout < FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/20745872',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: '.activity.AppStarterActivity',
        matches: '@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/22699207',
        exampleUrls: 'https://e.gkd.li/f1c596e5-36b6-485b-aa55-a235d57bddf9',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 7
      },
      {
        key: 8,
        activityIds: '.activity.AppStarterActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true][width<150 && height<150] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/22699223',
        exampleUrls: 'https://e.gkd.li/eb920de7-7f15-4398-b9a9-99ece0ab4ed6',
        fastQuery: true,
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '免流弹窗-1',
        activityIds: ['com.tencent.qqmusic.activity.AppStarterActivity', 'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity'],
        matches: '[text="流量够用"]',
        snapshotUrls: ['https://i.gkd.li/i/13197868', 'https://i.gkd.li/i/15285647'],
        fastQuery: true,
        _uniqueKey: 9,
        _uniqueName: '免流弹窗-1',
        name: '免流弹窗-1'
      },
      {
        key: 10,
        name: '看广告免费听歌弹窗',
        activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
        matches: '@ViewGroup[desc="关闭按钮"] - [desc^="看广告"] <2 ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13806773',
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 11,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13806782',
        fastQuery: true,
        _uniqueKey: 11
      },
      {
        key: 12,
        activityIds: '.activity.AppStarterActivity',
        matches: '[desc$="不再提示"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18428240',
        exampleUrls: 'https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 12
      },
      {
        key: 13,
        matches: 'View[id="js_close_btn"][desc="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/13115121', 'https://i.gkd.li/i/14798904'],
        forcedTime: 5000,
        _uniqueKey: 13
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-看广告免费听歌弹窗',
      desc: '关闭看广告免费听歌的弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
        matches: '@[desc="关闭按钮"] <n * > [desc^="看广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13806773',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.activity.AppStarterActivity',
        matches: '[text="抢先体验"] -2 [text="不再提醒"]',
        snapshotUrls: 'https://i.gkd.li/i/13178485',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="抢先体验"] -2 [text="不再提醒"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-VIP弹窗',
      desc: '关闭VIP会员相关弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13806782',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
        matches: '@View[clickable=true][desc="关闭"] +2 * >2 [desc$="确认协议并开通" || desc="立即开通会员"]',
        snapshotUrls: ['https://i.gkd.li/i/15209764', 'https://i.gkd.li/i/15261116'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.activity.AppStarterActivity',
        matches: '[desc$="不再提示"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18428240',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.activity.AppStarterActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true][width<120 && height<120] < FrameLayout < FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/20745872',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.activity.AppStarterActivity',
        matches: '@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/22699207',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: ['com.tencent.qqmusic.activity.AppStarterActivity', 'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity'],
        matches: '[text="流量够用"]',
        snapshotUrls: ['https://i.gkd.li/i/13197868', 'https://i.gkd.li/i/15285647'],
        fastQuery: true,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-音质音效弹窗',
      desc: '关闭音质音效推广弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
        matches: '[text^="推荐您开启臻品音质"] -3 [desc="关闭"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14549936',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
        matches: '[id="android:id/content"] >4 FrameLayout[childCount=6] > FrameLayout[childCount=1][text=null][index=1] > ImageView[visibleToUser=true][childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/16914135',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['.activity.AppStarterActivity', 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity'],
        matches: '[desc="关闭弹窗"][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/17057551', 'https://i.gkd.li/i/23495699'],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: ['.activity.AppStarterActivity', '.business.playernew.view.NewPlayerActivity'],
        matches: '@ImageView[childCount=0][visibleToUser=true][width<130 && height<130] <n FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: ['https://i.gkd.li/i/18439138', 'https://i.gkd.li/i/22924866'],
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.activity.AppStarterActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true][width<150 && height<150] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/22699223',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[text^="推荐您开启"] -3 [desc="关闭"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14550144',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 6,
      name: '分段广告-评论区广告-1',
      desc: '点击不感兴趣，关闭评论区广告',
      enable: false,
      activityIds: 'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        matches: 'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
        snapshotUrls: 'https://i.gkd.li/i/15010210',
        _uniqueKey: 0
      },
      {
        key: 99,
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/15010226',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 99
      },
      {
        key: 1,
        matches: '[text*="好评"] <4 ViewGroup + [vid="close_btn"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '分段广告-评论区广告-1-1-1-1',
      desc: '点击右下角展开-点击[不感兴趣]',
      enable: false,
      activityIds: 'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        matches: 'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
        snapshotUrls: 'https://i.gkd.li/i/15010210',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/15010226',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '评价提示-好评弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.AppStarterActivity',
        matches: '@[vid="close_btn"] - * > [text*="好评"]',
        snapshotUrls: 'https://i.gkd.li/i/14881903',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[desc="关闭按钮"] <n * > [desc^="看广告"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '分段广告-评论区广告-1-2-2-2',
      desc: '点击右下角展开-点击[不感兴趣]',
      activityIds: 'com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar',
      _suffixCount: 1,
      _dupIndex: 2,
      rules: [
      {
        key: 0,
        matches: 'RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View',
        snapshotUrls: 'https://i.gkd.li/i/15010210',
        _uniqueKey: 0
      },
      {
        key: 99,
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/15010226',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 99
      },
      {
        key: 1,
        activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
        matches: '[id="android:id/content"] >4 ViewGroup[childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/13806782',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
        matches: '@View[clickable=true][desc="关闭"] +2 * >2 [desc$="确认协议并开通" || desc="立即开通会员"]',
        snapshotUrls: ['https://i.gkd.li/i/15209764', 'https://i.gkd.li/i/15261116'],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 11,
      name: '其他-播放页[猜你也会喜欢]推荐',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.business.playernew.view.NewPlayerActivity',
        matches: '@ImageView[childCount=0][clickable=true] -2 [text="猜你也会喜欢"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18410610',
        exampleUrls: 'https://e.gkd.li/40846baf-4638-4740-970a-30924cbd9414',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});