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
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25094542',
        },
      ],
      order: -10,
    },
    {
      key: 1,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
          matches: '[id="com.miui.player:id/free_mode_tips_layout"] + [id="com.miui.player:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13303283',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[id="com.miui.player:id/cl_floating_promote"] > [id="com.miui.player:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13562649',
        },
        '[id="com.miui.player:id/free_mode_tips_layout"] + [id="com.miui.player:id/iv_close"]',
      ],
    },
    {
      key: 2,
      name: '局部广告-横幅广告',
      desc: '关闭播放页面横幅广告',
      fastQuery: true,
      activityIds: 'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.miui.player:id/ad_skip_text"][text="关闭"]',
          exampleUrls: 'https://m.gkd.li/57941037/d923ba1b-3098-49b0-8593-c84dbaa16612',
          snapshotUrls: [
            'https://i.gkd.li/i/13304347',
            'https://i.gkd.li/i/13304344',
          ],
        },
        {
          key: 1,
          matches: '[text="广告｜跳过"]',
          exampleUrls: 'https://m.gkd.li/57941037/2ae1ca24-fb50-48ff-9343-e5607b512127',
          snapshotUrls: 'https://i.gkd.li/i/14711960',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '关闭各类全屏弹窗广告',
      enable: false,
      activityIds: [
        'com.tencent.qqmusiclite.activity.MainActivity',
        'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      ],
      rules: [
        {
          key: 0,
          name: '类型1',
          fastQuery: true,
          matches: '[id="com.miui.player:id/iv_close_dialog_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13623503',
        },
        {
          key: 1,
          name: '会员过期续费弹窗',
          matches: '[id=null][desc="关闭弹框按钮"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700955',
          ],
        },
        {
          key: 2,
          name: '播放页面底部弹窗',
          matches: 'ViewGroup > @ViewGroup + ViewGroup[childCount=5]',
          snapshotUrls: [
            'https://i.gkd.li/import/13304343',
          ],
        },
        {
          key: 3,
          name: '免费试听弹窗',
          fastQuery: true,
          matches: '@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="webview_container"]',
          snapshotUrls: 'https://i.gkd.li/i/17783777',
        },
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches: '@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="webview_container"]',
          exampleUrls: 'https://e.gkd.li/5e6fd5f8-6ad3-4a46-ab34-c9b6b2d7a112',
          snapshotUrls: 'https://i.gkd.li/i/17783777',
        },
        {
          key: 1,
          activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
          matches: '[id=null][desc~=".*关闭.*按钮.*"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700955',
            'https://i.gkd.li/i/22562104',
          ],
        },
        'ViewGroup > @ViewGroup + ViewGroup[childCount=5]',
      ],
    },
    {
      key: 4,
      name: '分段广告-首页卡片广告',
      desc: '关闭首页分段卡片广告',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_more"]',
          snapshotUrls: 'https://i.gkd.li/i/20420265',
        },
        {
          preKeys: [
            0,
          ],
          key: 20,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_close"][text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/20420322',
        },
        '[id="com.miui.player:id/cl_floating_promote"] > [id="com.miui.player:id/iv_close"]',
      ],
    },
    {
      key: 5,
      name: '全屏广告-弹窗广告（部分误触）',
      desc: '注意：会关闭年度报告邀请函弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[id="com.miui.player:id/iv_close_dialog_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13623503',
        },
        '[id="com.miui.player:id/iv_close_dialog_button"]',
      ],
    },
    {
      key: 10,
      name: '全屏广告-会员过期续费弹窗',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: '[id=null][desc="关闭弹框按钮"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12700955',
      enable: false,
    },
    {
      key: 11,
      name: '局部广告-banner 广告',
      desc: '关闭页面内的 banner 广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12700984',
            'https://i.gkd.li/i/20420253',
          ],
        },
        {
          key: 1,
          matches: '[visibleToUser=true][vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16773614',
        },
        '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
      ],
    },
    {
      key: 12,
      name: '功能类-看广告视频领VIP',
      desc: '等待15s自动点击【退出】',
      enable: false,
      rules: [
        {
          actionDelay: 15000,
          fastQuery: true,
          activityIds: 'com.tencentmusic.ad.tmead.reward.TMERewardActivity',
          matches: '[id="com.miui.player:id/tme_ad_skip_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13610667',
        },
        {
          actionDelay: 15000,
          fastQuery: true,
          activityIds: 'com.tencentmusic.ad.tmead.reward.TMERewardActivity',
          matches: '[id="com.miui.player:id/tme_ad_skip_button"]',
          snapshotUrls: 'https://i.gkd.li/i/13610667',
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-主界面卡片广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_close"][text=null]',
          exampleUrls: 'https://e.gkd.li/32ad4d0f-8992-45b0-9e1f-82ce2cc58dcb',
          snapshotUrls: 'https://i.gkd.li/i/16773614',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="banner_divider"] - * > [vid="close_banner"]',
          exampleUrls: 'https://e.gkd.li/d9b74767-84b6-4668-8a9b-261bd938a8a3',
          snapshotUrls: 'https://i.gkd.li/i/20420253',
        },
      ],
    },
    {
      key: 14,
      name: '分段广告-首页卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_more"]',
          exampleUrls: 'https://e.gkd.li/e7d3d6c3-d8be-4e0f-ac02-e5df2a0615b3',
          snapshotUrls: 'https://i.gkd.li/i/20420265',
        },
        {
          preKeys: [
            0,
          ],
          key: 20,
          fastQuery: true,
          activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
          matches: '[vid="ad_close"][text="不感兴趣"]',
          exampleUrls: 'https://e.gkd.li/6ca7beba-98b8-4892-b275-1a116d040115',
          snapshotUrls: 'https://i.gkd.li/i/20420322',
        },
      ],
    },
  ],
});
