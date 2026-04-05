import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/25094542',
        fastQuery: true,
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
        matches: '[id="com.miui.player:id/free_mode_tips_layout"] + [id="com.miui.player:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13303283',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[id="com.miui.player:id/cl_floating_promote"] > [id="com.miui.player:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13562649',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.miui.player:id/free_mode_tips_layout"] + [id="com.miui.player:id/iv_close"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '局部广告-横幅广告',
      desc: '关闭播放页面横幅广告',
      activityIds: 'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.miui.player:id/ad_skip_text"][text="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/13304347', 'https://i.gkd.li/i/13304344'],
        exampleUrls: 'https://m.gkd.li/57941037/d923ba1b-3098-49b0-8593-c84dbaa16612',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="广告｜跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/14711960',
        exampleUrls: 'https://m.gkd.li/57941037/2ae1ca24-fb50-48ff-9343-e5607b512127',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '关闭各类全屏弹窗广告',
      enable: false,
      activityIds: ['com.tencent.qqmusiclite.activity.MainActivity', 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity'],
      rules: [
      {
        key: 0,
        name: '类型1',
        matches: '[id="com.miui.player:id/iv_close_dialog_button"]',
        snapshotUrls: 'https://i.gkd.li/import/13623503',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '会员过期续费弹窗',
        matches: '[id=null][desc="关闭弹框按钮"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/import/12700955'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '播放页面底部弹窗',
        matches: 'ViewGroup > @ViewGroup + ViewGroup[childCount=5]',
        snapshotUrls: ['https://i.gkd.li/import/13304343'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '免费试听弹窗',
        matches: '@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="webview_container"]',
        snapshotUrls: 'https://i.gkd.li/i/17783777',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
        matches: '@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="webview_container"]',
        snapshotUrls: 'https://i.gkd.li/i/17783777',
        exampleUrls: 'https://e.gkd.li/5e6fd5f8-6ad3-4a46-ab34-c9b6b2d7a112',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
        matches: '[id=null][desc~=".*关闭.*按钮.*"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12700955', 'https://i.gkd.li/i/22562104'],
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: 'ViewGroup > @ViewGroup + ViewGroup[childCount=5]',
        _uniqueKey: 6
      },
      ],
    },
{
      key: 4,
      name: '分段广告-首页卡片广告-1',
      desc: '关闭首页分段卡片广告',
      enable: false,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[vid="ad_more"]',
        snapshotUrls: 'https://i.gkd.li/i/20420265',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 20,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[vid="ad_close"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/20420322',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 20
      },
      {
        key: 1,
        matches: '[id="com.miui.player:id/cl_floating_promote"] > [id="com.miui.player:id/iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-弹窗广告（部分误触）',
      desc: '注意：会关闭年度报告邀请函弹窗',
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[id="com.miui.player:id/iv_close_dialog_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13623503',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.miui.player:id/iv_close_dialog_button"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '全屏广告-会员过期续费弹窗',
      enable: false,
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      snapshotUrls: 'https://i.gkd.li/i/12700955',
      rules: [
      {
        key: 0,
        matches: '[id=null][desc="关闭弹框按钮"][clickable=true]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 11,
      name: '局部广告-banner 广告',
      desc: '关闭页面内的 banner 广告',
      enable: false,
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
        snapshotUrls: ['https://i.gkd.li/import/12700984', 'https://i.gkd.li/i/20420253'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[visibleToUser=true][vid="ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16773614',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 12,
      name: '功能类-看广告视频领VIP',
      desc: '等待15s自动点击【退出】',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencentmusic.ad.tmead.reward.TMERewardActivity',
        matches: '[id="com.miui.player:id/tme_ad_skip_button"]',
        snapshotUrls: 'https://i.gkd.li/import/13610667',
        actionDelay: 15000,
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.tencentmusic.ad.tmead.reward.TMERewardActivity',
        matches: '[id="com.miui.player:id/tme_ad_skip_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13610667',
        actionDelay: 15000,
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 13,
      name: '局部广告-主界面卡片广告',
      rules: [
      {
        key: 1,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[vid="ad_close"][text=null]',
        snapshotUrls: 'https://i.gkd.li/i/16773614',
        exampleUrls: 'https://e.gkd.li/32ad4d0f-8992-45b0-9e1f-82ce2cc58dcb',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[vid="banner_divider"] - * > [vid="close_banner"]',
        snapshotUrls: 'https://i.gkd.li/i/20420253',
        exampleUrls: 'https://e.gkd.li/d9b74767-84b6-4668-8a9b-261bd938a8a3',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 14,
      name: '分段广告-首页卡片广告-1-1-1-1',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[vid="ad_more"]',
        snapshotUrls: 'https://i.gkd.li/i/20420265',
        exampleUrls: 'https://e.gkd.li/e7d3d6c3-d8be-4e0f-ac02-e5df2a0615b3',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 20,
        activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
        matches: '[vid="ad_close"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/20420322',
        exampleUrls: 'https://e.gkd.li/6ca7beba-98b8-4892-b275-1a116d040115',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 20
      },
      ],
    },
  ],
});