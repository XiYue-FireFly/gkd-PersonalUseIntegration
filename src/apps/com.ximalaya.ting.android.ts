import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
{
      key: 0,
      name: '局部广告-首页右侧浮动广告',
      enable: false,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/i/12472620'],
      rules: [
      {
        key: 0,
        matches: '[id="com.ximalaya.ting.android:id/main_ad_broadside_close_real"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '局部广告-播放页广告',
      rules: [
      {
        key: 3,
        activityIds: '.host.activity.MainActivity',
        matches: '@[visibleToUser=true] < ViewGroup[childCount=1] - ViewGroup[childCount=6] > [text="广告"] ',
        snapshotUrls: 'https://i.gkd.li/i/18500523',
        exampleUrls: 'https://e.gkd.li/bbf93e2c-08b8-4155-b82c-89a629a62737',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.host.activity.MainActivity',
        matches: '[vid="main_buy_view_yellow_zone_btn_close" || vid="main_play_ad_close_real"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18683999', 'https://i.gkd.li/i/24330967'],
        exampleUrls: 'https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 0,
        name: '暂停按钮下方的广告',
        matches: '[id="com.ximalaya.ting.android:id/x_play_ad_banner_close_real"]',
        snapshotUrls: 'https://i.gkd.li/i/12506218',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '喜马小游戏广告',
        matches: '[id="com.ximalaya.ting.android:id/host_game_close_tv"]',
        snapshotUrls: 'https://i.gkd.li/i/12927110',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '分段广告-播放页面-底部推荐列表-夹杂广告',
      desc: '点击关闭-点击屏蔽',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: ['com.ximalaya.ting.android.main.dialog', 'com.ximalaya.ting.android.host.activity.MainActivity'],
        matches: '@[clickable=true] > [text="屏蔽"] + [text="关闭当前广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12506269', 'https://i.gkd.li/i/13296565'],
        preKeys: 0,
        _uniqueKey: 1
      },
      {
        key: 0,
        activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
        matches: '@[id="com.ximalaya.ting.android:id/main_close_layout"][visibleToUser=true] > [id="com.ximalaya.ting.android:id/main_mark_text"][text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12506225', 'https://i.gkd.li/i/12701414', 'https://i.gkd.li/i/13314183'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-播放页面-播放前广告',
      enable: false,
      activityIds: ['com.ximalaya.ting.android.host.activity.MainActivity', 'com.ximalaya.ting.android.framework.view.dialog'],
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/i/12506250', 'https://i.gkd.li/i/12520626'],
      rules: [
      {
        key: 0,
        matches: '[id="com.ximalaya.ting.android:id/main_play_ad_close_real"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击屏蔽',
      activityIds: ['.host.activity.MainActivity', '.adsdk.view.DislikeDialog.DislikeBottomDialog'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="xm_ad_close_real" || vid="main_close_layout"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/17112326', 'https://i.gkd.li/i/17112313'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] > [text="屏蔽" || text="直接关闭" || text="不喜欢此内容"]',
        snapshotUrls: ['https://i.gkd.li/i/13260487', 'https://i.gkd.li/i/13275928', 'https://i.gkd.li/i/17111444', 'https://i.gkd.li/i/17111452', 'https://i.gkd.li/i/24589005'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.ximalaya.ting.android:id/xm_ad_close_real"]',
        snapshotUrls: 'https://i.gkd.li/i/12506253',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.ximalaya.ting.android:id/main_ad_dynamic_lay"] >(4) ImageView + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12701374',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击关闭原因【屏蔽】',
        matches: '@[name="android.widget.RelativeLayout" || name="android.widget.LinearLayout"] > [text="屏蔽"]',
        snapshotUrls: ['https://i.gkd.li/i/12506258', 'https://i.gkd.li/i/13260487', 'https://i.gkd.li/i/13275928'],
        preKeys: [0,1],
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '点击【不感兴趣】',
        matches: '[text="直接关闭"][text.length<=5]',
        snapshotUrls: 'https://i.gkd.li/i/14019835',
        preKeys: [0,1],
        actionCdKey: 2,
        fastQuery: true,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 5,
      name: '局部广告-关闭热播推荐广告',
      enable: false,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
      {
        key: 0,
        matches: '[text="热播推荐"] + ImageView + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12506270',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '更新提示',
      enable: false,
      fastQuery: true,
      order: -9,
      snapshotUrls: 'https://i.gkd.li/i/12506287',
      rules: [
      {
        key: 0,
        matches: '[id="com.ximalaya.ting.android:id/host_tv_update_later"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '青少年模式',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.host.activity.MainActivity',
        matches: ['[text*="青少年模式"][id="com.ximalaya.ting.android:id/host_btn_set"]', '[id="com.ximalaya.ting.android:id/host_dialog_close"]'],
        snapshotUrls: 'https://i.gkd.li/i/12506209',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text*="青少年模式"][id="com.ximalaya.ting.android:id/host_btn_set"]', '[id="com.ximalaya.ting.android:id/host_dialog_close"]'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '局部广告-评论区广告',
      enable: false,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12869426',
      rules: [
      {
        key: 0,
        matches: '[id="com.ximalaya.ting.android:id/main_ad_close_real"][visibleToUser=true]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 9,
      name: '分段广告-卡片式广告',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '我的页面-点击卡片右上角关闭按钮',
        activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
        matches: '[id="com.ximalaya.ting.android:id/main_close_layout"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13194838', 'https://i.gkd.li/i/13296565'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '我的页面-点击不感兴趣',
        activityIds: 'com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog',
        matches: '[id="com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest"]',
        snapshotUrls: 'https://i.gkd.li/i/13194839',
        preKeys: 0,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '全屏广告-首页-专辑订阅推荐弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
        matches: '[text="你可能感兴趣的专辑"] + [id="com.ximalaya.ting.android:id/main_iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13251713',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="你可能感兴趣的专辑"] + [id="com.ximalaya.ting.android:id/main_iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
        matches: '@[id="com.ximalaya.ting.android:id/host_close_firework"] +2 [id="com.ximalaya.ting.android:id/host_firework_ad_tag"]',
        snapshotUrls: 'https://i.gkd.li/i/13263421',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.ximalaya.ting.android:id/host_close_firework"] +2 [id="com.ximalaya.ting.android:id/host_firework_ad_tag"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 12,
      name: '权限提示-通知权限',
      desc: '取消推送通知',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.host.activity.MainActivity',
        matches: ['[text*="通知权限"][visibleToUser=true]', '[text="取消" || text="暂不开启"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13389145', 'https://i.gkd.li/i/18391977', 'https://i.gkd.li/i/20499323'],
        exampleUrls: 'https://e.gkd.li/ab40c096-d024-4b7c-9c6f-245beafd373a',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
        matches: '[id="com.ximalaya.ting.android:id/cancel_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13389145',
        exampleUrls: 'https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df',
        actionMaximum: 1,
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 13,
      name: '全屏广告-免流提示',
      desc: '关闭[开免流送会员]弹窗',
      rules: [
      {
        key: 0,
        activityIds: '.host.activity.MainActivity',
        matches: '[vid="host_iv_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18326083',
        exampleUrls: 'https://e.gkd.li/2a7e189b-b935-4bbd-9672-c18f2bf454e9',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.ximalaya.ting.android:id/main_iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 14,
      name: '局部广告-有声书分类页面-信息流广告',
      enable: false,
      activityIds: 'com.ximalaya.ting.android.host.activity.SplashAdActivity',
      snapshotUrls: 'https://i.gkd.li/i/13334685',
      rules: [
      {
        key: 0,
        matches: '[id="com.ximalaya.ting.android:id/main_iv_dislike"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});