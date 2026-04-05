import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        excludeActivityIds: ['.music.biz.setting.activity.SettingActivity', '.music.biz.search.activity.SearchActivity'],
        matches: '[text*="跳过" || text*="Skip"][text.length<10][width<500 && height<200][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/15092772', 'https://i.gkd.li/i/17892200'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/15092814', 'https://i.gkd.li/i/16318423'],
        _uniqueKey: 0
      },
      {
        key: 1,
        excludeActivityIds: 'com.netease.cloudmusic.music.biz.setting.activity.SettingActivity',
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/15092772', 'https://i.gkd.li/i/15092814'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '分段广告-卡片广告',
      desc: '点击[关闭]-点击[直接关闭]/[不感兴趣]',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.MainActivity', '.music.biz.comment.activity.CommentActivity', '.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1'],
        matches: '[vid="tag_ad_banner" || vid="adTagView" || vid="closeAction"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13859634', 'https://i.gkd.li/i/13927753', 'https://i.gkd.li/i/14549836', 'https://i.gkd.li/i/14275955', 'https://i.gkd.li/i/16047087'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.music.biz.comment.activity.CommentActivity',
        matches: '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0] <<n [vid="recyclerView"]',
        snapshotUrls: 'https://i.gkd.li/i/23771616',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.music.biz.comment.activity.CommentActivity',
        matches: '@ViewGroup[clickable=true][childCount=1] + ViewGroup[childCount=1] > [text="艺人相关"]',
        snapshotUrls: 'https://i.gkd.li/i/23771678',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 90,
        activityIds: ['.activity.MainActivity', '.music.biz.comment.activity.CommentActivity', '.music.biz.voice.player.revisionV1.ProgramPlayerActivityV1'],
        snapshotUrls: ['https://i.gkd.li/i/13859635', 'https://i.gkd.li/i/14932659', 'https://i.gkd.li/i/16047089', 'https://i.gkd.li/i/23771645'],
        fastQuery: true,
        anyMatches: ['[text="直接关闭"][clickable=true]', '@[clickable=true] > [text="不感兴趣"]'],
        _uniqueKey: 90
      },
      {
        key: 3,
        activityIds: ['com.netease.cloudmusic.music.biz.search.activity.SearchActivity', 'com.netease.cloudmusic.activity.MainActivity'],
        excludeActivityIds: 'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
        matches: '[vid="adTagView"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14277140', 'https://i.gkd.li/i/13859634', 'https://i.gkd.li/i/12829964', 'https://i.gkd.li/i/12829953'],
        exampleUrls: 'https://m.gkd.li/57941037/a603ceca-7e89-4b1f-9e17-508c583b32d8',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '推荐页广告',
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '[vid="tag_ad_banner"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13927753',
        exampleUrls: 'https://m.gkd.li/57941037/b14cda2e-27e5-4a91-8037-3ccbf1f9d0da',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '评论区内容推荐',
        activityIds: 'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
        matches: '@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]',
        snapshotUrls: ['https://i.gkd.li/i/13526986', 'https://i.gkd.li/i/13526711'],
        _uniqueKey: 5
      },
      {
        key: 91,
        activityIds: ['com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet', 'com.netease.cloudmusic.music.biz.search.activity.SearchActivity', 'com.netease.cloudmusic.activity.MainActivity'],
        matches: '[text="直接关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/12829967', 'https://i.gkd.li/i/14277137', 'https://i.gkd.li/i/13859635'],
        fastQuery: true,
        _uniqueKey: 91
      },
      {
        key: 92,
        activityIds: 'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
        matches: '@[id="com.netease.cloudmusic:id/artist_container"] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13526712',
        preKeys: 2,
        fastQuery: true,
        _uniqueKey: 92
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.PlayerActivity',
        matches: '[vid="iv_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15282417',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.music.biz.search.activity.SearchActivity',
        matches: '[vid="adCloseIV"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16385547',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.activity.MainActivity',
        matches: '[vid="v_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23982125',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '[我的]页面广告',
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '[id="com.netease.cloudmusic:id/resource_view"] > [id="com.netease.cloudmusic:id/close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/12745666',
        exampleUrls: 'https://m.gkd.li/57941037/827ebe8b-f3c6-4068-8d31-11d5b2578680',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '首页卡片广告',
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '[vid="adTagView"]',
        snapshotUrls: 'https://i.gkd.li/i/15047096',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
        matches: '[vid="iv_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15282417',
        fastQuery: true,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭各类弹窗广告',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: ['.activity.MainActivity', '.activity.PlayerActivity', '.music.biz.rn.activity.LayerReactNativeActivity', '.music.biz.comment.activity.CommentActivity'],
        matches: '[vid="dsl_dialog_root" || text^="邀您开通VIP" || text^="本周已免费试听" || text^="免费听模式体验中" || text$="立即续费" || text*="小组件到桌面"][visibleToUser=true]',
        excludeMatches: '[text="当前场景"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13804534', 'https://i.gkd.li/i/13848913', 'https://i.gkd.li/i/13962214', 'https://i.gkd.li/i/14036940', 'https://i.gkd.li/i/15047126', 'https://i.gkd.li/i/15125892', 'https://i.gkd.li/i/15244091', 'https://i.gkd.li/i/20097535', 'https://i.gkd.li/i/20097609', 'https://i.gkd.li/i/20115012', 'https://i.gkd.li/i/22451511', 'https://i.gkd.li/i/23770986', 'https://i.gkd.li/i/23770978'],
        action: 'back',
        excludeSnapshotUrls: ['https://i.gkd.li/i/15404777', 'https://i.gkd.li/i/20115204', 'https://i.gkd.li/i/20159204'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['.activity.MainActivity', '.activity.PlayerActivity', '.music.biz.rn.activity.LayerReactNativeActivity', '.music.biz.comment.activity.CommentActivity'],
        matches: '[vid="dsl_dialog_root" || text^="邀您开通VIP" || text^="本周已免费试听" || text^="免费听模式体验中" || text^="续费后，即可畅听" || text*="小组件到桌面"][visibleToUser=true]',
        excludeMatches: '[text="当前场景" || vid="mainDrawerContainer"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13804534', 'https://i.gkd.li/i/13848913', 'https://i.gkd.li/i/13962214', 'https://i.gkd.li/i/14036940', 'https://i.gkd.li/i/15047126', 'https://i.gkd.li/i/15125892', 'https://i.gkd.li/i/15244091', 'https://i.gkd.li/i/20097535', 'https://i.gkd.li/i/20097609', 'https://i.gkd.li/i/20115012', 'https://i.gkd.li/i/22451511', 'https://i.gkd.li/i/23770986', 'https://i.gkd.li/i/23770978'],
        action: 'back',
        excludeSnapshotUrls: ['https://i.gkd.li/i/15404777', 'https://i.gkd.li/i/20115204', 'https://i.gkd.li/i/20159204', 'https://i.gkd.li/i/24157914'],
        _uniqueKey: 2
      },
      {
        key: 0,
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: 'WebView >n View > TextView + TextView + TextView',
        snapshotUrls: 'https://i.gkd.li/i/13188737',
        _uniqueKey: 0
      },
      {
        key: 3,
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '@ImageView[visibleToUser=true] - * > [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13229016', 'https://i.gkd.li/i/13962214'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['com.netease.cloudmusic.activity.MainActivity', 'com.netease.cloudmusic.activity.PlayerActivity'],
        matches: 'ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][visibleToUser=true] <<n [vid="dsl_dialog_root"]',
        snapshotUrls: ['https://i.gkd.li/i/14036940', 'https://i.gkd.li/i/15244091'],
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
        matches: '[text="赞赏功能全新升级啦"]',
        snapshotUrls: 'https://i.gkd.li/i/13848913',
        fastQuery: true,
        action: 'back',
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
        matches: '[text="立即限免体验"]',
        snapshotUrls: 'https://i.gkd.li/i/15125892',
        fastQuery: true,
        action: 'back',
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: 'View[childCount=4] > @TextView[index=2][visibleToUser=true] <<n [vid="popLayerWebViewContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/15160018',
        fastQuery: true,
        _uniqueKey: 7
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-VIP弹窗',
      desc: '点击关闭VIP类弹窗广告',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.music.biz.rn.activity.MainProcessLayerReactNativeActivity', '.activity.MainActivity', '.activity.PlayListActivity', '.music.biz.rn.activity.LayerReactNativeActivity'],
        matches: ['[text="支付宝"][visibleToUser=true]', '[text^="确认协议并" || text="立即开通"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13189055', 'https://i.gkd.li/i/13260416', 'https://i.gkd.li/i/13996787', 'https://i.gkd.li/i/13230605', 'https://i.gkd.li/i/14268181', 'https://i.gkd.li/i/13391498', 'https://i.gkd.li/i/14045917', 'https://i.gkd.li/i/14926722', 'https://i.gkd.li/i/16242200', 'https://i.gkd.li/i/20097276', 'https://i.gkd.li/i/20218350'],
        action: 'back',
        excludeSnapshotUrls: 'https://i.gkd.li/i/20097306',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.CashierRNActivity',
        matches: '[text="忍痛离开"] < @ViewGroup[clickable=true] -n * > [text$="VIP可畅享千万曲库"]',
        snapshotUrls: 'https://i.gkd.li/i/24548104',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.CashierRNActivity',
        matches: '[text="忍痛离开"] < @ViewGroup[clickable=true] -n * > [text$="VIP可畅享千万曲库"]',
        snapshotUrls: 'https://i.gkd.li/i/24548104',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: ['com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity', 'com.netease.cloudmusic.activity.MainActivity'],
        matches: ['[text="支付宝"]', '[text^="确认协议并"]'],
        snapshotUrls: ['https://i.gkd.li/i/13189055', 'https://i.gkd.li/i/13260416', 'https://i.gkd.li/i/13996787', 'https://i.gkd.li/i/13230605', 'https://i.gkd.li/i/14268181', 'https://i.gkd.li/i/13391498', 'https://i.gkd.li/i/14045917', 'https://i.gkd.li/i/14926722'],
        action: 'back',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['com.netease.cloudmusic.activity.MainActivity', 'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity'],
        matches: '[text$="千万级会员曲库"]',
        snapshotUrls: ['https://i.gkd.li/i/13228955', 'https://i.gkd.li/i/14956768'],
        action: 'back',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
        matches: '[text="搭配沉浸环绕声，享受空间音感"]',
        snapshotUrls: 'https://i.gkd.li/i/13230603',
        action: 'back',
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: ['com.netease.cloudmusic.activity.MainActivity', 'com.netease.cloudmusic.activity.PlayerActivity'],
        matches: '[text*="免费听30分钟"]',
        snapshotUrls: ['https://i.gkd.li/i/12843383', 'https://i.gkd.li/i/13804534', 'https://i.gkd.li/i/15047126'],
        action: 'back',
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '[vid="view_button_main"][text*="立即续费"]',
        snapshotUrls: 'https://i.gkd.li/i/14969806',
        action: 'back',
        _uniqueKey: 7
      },
      ],
    },
{
      key: 6,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: ['[text*="新版本"]', '[text="近期不再提示"]'],
        snapshotUrls: 'https://i.gkd.li/i/13233790',
        excludeSnapshotUrls: 'https://i.gkd.li/i/15092457',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.activity.MainActivity',
        matches: ['[vid="updateVersionTitle"][visibleToUser=true]', '[vid="md_dialog_cm_close_btn"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18492805',
        exampleUrls: 'https://e.gkd.li/8827aa5a-a105-4910-981c-d9ecc036a87d',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: ['[text*="新版本"]', '[text="近期不再提示"]'],
        snapshotUrls: ['https://i.gkd.li/i/13233790', 'https://i.gkd.li/i/13197457', 'https://i.gkd.li/i/13228878', 'https://i.gkd.li/i/15092457'],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 7,
      name: '局部广告-播放界面广告',
      desc: '右上角 VIP 小悬浮、巨幅卡片式广告',
      enable: false,
      activityIds: 'com.netease.cloudmusic.activity.PlayerActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '右上角 VIP 小悬浮',
        matches: 'TextView[text!=null] + ImageView[id="com.netease.cloudmusic:id/close"]',
        snapshotUrls: ['https://i.gkd.li/i/13402634', 'https://i.gkd.li/i/13402635', 'https://i.gkd.li/i/13402636'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '巨幅卡片式广告1',
        matches: '[text^="跳过广告"][text.length<=10]',
        snapshotUrls: 'https://i.gkd.li/i/13527105',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '巨幅卡片式广告2',
        matches: '@TextView[index=2] <3 ViewGroup[childCount=3] <<n [id="com.netease.cloudmusic:id/container"]',
        snapshotUrls: 'https://i.gkd.li/i/14045424',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 8,
      name: '局部广告-发现页顶部视频广告',
      desc: '自动点击跳过。',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '[id="com.netease.cloudmusic:id/skipBannerAd"]',
        snapshotUrls: 'https://i.gkd.li/i/13768367',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '功能类-功能升级弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        name: '"我的"升级-下次再说',
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '[text="下次再说"] < ViewGroup',
        snapshotUrls: 'https://i.gkd.li/i/13804541',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '"社区广场"升级-点击右上角x',
        activityIds: 'com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity',
        matches: '[text="社区广场全新升级"] + ViewGroup > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13804544',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 13,
      name: '分段广告-评论区广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      enable: false,
      activityIds: ['com.netease.cloudmusic.music.biz.comment.activity.CommentActivity', 'com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击关闭-1',
        matches: '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentVHRootId"] [vid="closeAction"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14549836',
        _uniqueKey: 0
      },
      {
        key: 2,
        name: '点击关闭-2',
        matches: '[vid="commentVHRootId"][visibleToUser=true] - [vid="commentAdContainer"] >n [vid="adTagView"]',
        snapshotUrls: ['https://i.gkd.li/i/14275571', 'https://i.gkd.li/i/14275955', 'https://i.gkd.li/i/14070500', 'https://i.gkd.li/i/14964827', 'https://i.gkd.li/i/14964828'],
        _uniqueKey: 2
      },
      {
        key: 98,
        name: '点击[直接关闭]',
        matches: '[text="直接关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/14932659', 'https://i.gkd.li/i/14964832'],
        preKeys: [2],
        _uniqueKey: 98
      },
      {
        key: 99,
        name: '点击[不感兴趣]',
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/14549856',
        preKeys: [0],
        _uniqueKey: 99
      },
      ],
    },
{
      key: 14,
      name: '功能类-扫码后自动点击[授权登录]',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: '.module.login.LoginPermissionActivity',
        matches: '[text="授权登录"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14830218',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.netease.cloudmusic.module.login.LoginPermissionActivity',
        matches: '[text="授权登录"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14830218',
        exampleUrls: 'https://m.gkd.li/57941037/f2aa603b-d1d1-4f92-86ae-e311e79a011d',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 15,
      name: '全屏广告-[获得新徽章]弹窗',
      desc: '点击关闭',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.netease.cloudmusic.activity.MainActivity',
        matches: '@ImageView[clickable=true] <n * > [text="查看我的勋章"]',
        snapshotUrls: 'https://i.gkd.li/i/14926750',
        exampleUrls: 'https://m.gkd.li/57941037/39e34e7d-eae3-4a54-9794-97c2528d13fb',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 16,
      name: '分段广告-搜索页广告',
      desc: '该规则触发时会导致输入法收起',
      enable: false,
      activityIds: '.music.biz.search.activity.SearchActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="adTagView" || vid="adTagViewNew"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/16357208', 'https://i.gkd.li/i/16357111'],
        exampleUrls: 'https://e.gkd.li/afb3fc72-7a69-489a-ac5a-7a70f5685667',
        _uniqueKey: 0
      },
      {
        key: 90,
        matches: '[text="直接关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/16357210',
        exampleUrls: 'https://e.gkd.li/1e2b2822-01dd-455f-8991-1b746c61c07c',
        preKeys: [0],
        _uniqueKey: 90
      },
      ],
    },
  ],
});