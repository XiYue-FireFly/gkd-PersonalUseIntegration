import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: 0,
      name: '局部广告-首页右侧浮动广告',
      fastQuery: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.android:id/main_ad_broadside_close_real"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12472620',
      ],
      enable: false,
    },
    {
      key: 1,
      name: '局部广告-播放页广告',
      rules: [
        {
          key: 3,
          fastQuery: true,
          activityIds: '.host.activity.MainActivity',
          matches: '@[visibleToUser=true] < ViewGroup[childCount=1] - ViewGroup[childCount=6] > [text="广告"] ',
          exampleUrls: 'https://e.gkd.li/bbf93e2c-08b8-4155-b82c-89a629a62737',
          snapshotUrls: 'https://i.gkd.li/i/18500523',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: '.host.activity.MainActivity',
          matches: '[vid="main_buy_view_yellow_zone_btn_close" || vid="main_play_ad_close_real"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5',
          snapshotUrls: [
            'https://i.gkd.li/i/18683999',
            'https://i.gkd.li/i/24330967',
          ],
        },
        {
          key: 0,
          name: '暂停按钮下方的广告',
          matches: '[id="com.ximalaya.ting.android:id/x_play_ad_banner_close_real"]',
          snapshotUrls: 'https://i.gkd.li/i/12506218',
        },
        {
          key: 1,
          name: '喜马小游戏广告',
          matches: '[id="com.ximalaya.ting.android:id/host_game_close_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/12927110',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-播放页面-底部推荐列表-夹杂广告',
      desc: '点击关闭-点击屏蔽',
      fastQuery: true,
      rules: [
        {
          key: 1,
          preKeys: 0,
          activityIds: [
            'com.ximalaya.ting.android.main.dialog',
            'com.ximalaya.ting.android.host.activity.MainActivity',
          ],
          matches: '@[clickable=true] > [text="屏蔽"] + [text="关闭当前广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12506269',
            'https://i.gkd.li/i/13296565',
          ],
        },
        {
          key: 0,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '@[id="com.ximalaya.ting.android:id/main_close_layout"][visibleToUser=true] > [id="com.ximalaya.ting.android:id/main_mark_text"][text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12506225',
            'https://i.gkd.li/i/12701414',
            'https://i.gkd.li/i/13314183',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '全屏广告-播放页面-播放前广告',
      fastQuery: true,
      activityIds: [
        'com.ximalaya.ting.android.host.activity.MainActivity',
        'com.ximalaya.ting.android.framework.view.dialog',
      ],
      rules: '[id="com.ximalaya.ting.android:id/main_play_ad_close_real"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12506250',
        'https://i.gkd.li/i/12520626',
      ],
      enable: false,
    },
    {
      key: 4,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击屏蔽',
      fastQuery: true,
      activityIds: [
        '.host.activity.MainActivity',
        '.adsdk.view.DislikeDialog.DislikeBottomDialog',
      ],
      rules: [
        {
          key: 0,
          matches: '[vid="xm_ad_close_real" || vid="main_close_layout"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/17112326',
            'https://i.gkd.li/i/17112313',
          ],
        },
        {
          preKeys: [
            0,
          ],
          matches: '@[clickable=true] > [text="屏蔽" || text="直接关闭" || text="不喜欢此内容"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13260487',
            'https://i.gkd.li/i/13275928',
            'https://i.gkd.li/i/17111444',
            'https://i.gkd.li/i/17111452',
            'https://i.gkd.li/i/24589005',
          ],
        },
        {
          key: 0,
          fastQuery: true,
          matches: '[id="com.ximalaya.ting.android:id/xm_ad_close_real"]',
          snapshotUrls: 'https://i.gkd.li/i/12506253',
        },
        {
          key: 1,
          matches: '[id="com.ximalaya.ting.android:id/main_ad_dynamic_lay"] >(4) ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12701374',
        },
        {
          key: 2,
          preKeys: [
            0,
            1,
          ],
          name: '点击关闭原因【屏蔽】',
          fastQuery: true,
          matches: '@[name="android.widget.RelativeLayout" || name="android.widget.LinearLayout"] > [text="屏蔽"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12506258',
            'https://i.gkd.li/i/13260487',
            'https://i.gkd.li/i/13275928',
          ],
        },
        {
          key: 3,
          preKeys: [
            0,
            1,
          ],
          name: '点击【不感兴趣】',
          actionCdKey: 2,
          fastQuery: true,
          matches: '[text="直接关闭"][text.length<=5]',
          snapshotUrls: 'https://i.gkd.li/i/14019835',
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-关闭热播推荐广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
        {
          matches: '[text="热播推荐"] + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12506270',
        },
      ],
      enable: false,
    },
    {
      key: 6,
      name: '更新提示',
      fastQuery: true,
      rules: '[id="com.ximalaya.ting.android:id/host_tv_update_later"]',
      snapshotUrls: 'https://i.gkd.li/i/12506287',
      enable: false,
      order: -9,
    },
    {
      key: 7,
      name: '青少年模式',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.host.activity.MainActivity',
          matches: [
            '[text*="青少年模式"][id="com.ximalaya.ting.android:id/host_btn_set"]',
            '[id="com.ximalaya.ting.android:id/host_dialog_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12506209',
        },
        {
          matches: [
            '[text*="青少年模式"][id="com.ximalaya.ting.android:id/host_btn_set"]',
            '[id="com.ximalaya.ting.android:id/host_dialog_close"]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-评论区广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      fastQuery: true,
      rules: '[id="com.ximalaya.ting.android:id/main_ad_close_real"][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/i/12869426',
      enable: false,
    },
    {
      key: 9,
      name: '分段广告-卡片式广告',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '我的页面-点击卡片右上角关闭按钮',
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[id="com.ximalaya.ting.android:id/main_close_layout"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13194838',
            'https://i.gkd.li/i/13296565',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '我的页面-点击不感兴趣',
          activityIds: 'com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog',
          matches: '[id="com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest"]',
          snapshotUrls: 'https://i.gkd.li/i/13194839',
        },
      ],
      enable: false,
    },
    {
      key: 10,
      name: '全屏广告-首页-专辑订阅推荐弹窗',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[text="你可能感兴趣的专辑"] + [id="com.ximalaya.ting.android:id/main_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13251713',
        },
        '[text="你可能感兴趣的专辑"] + [id="com.ximalaya.ting.android:id/main_iv_close"]',
      ],
    },
    {
      key: 11,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '@[id="com.ximalaya.ting.android:id/host_close_firework"] +2 [id="com.ximalaya.ting.android:id/host_firework_ad_tag"]',
          snapshotUrls: 'https://i.gkd.li/i/13263421',
        },
        '@[id="com.ximalaya.ting.android:id/host_close_firework"] +2 [id="com.ximalaya.ting.android:id/host_firework_ad_tag"]',
      ],
    },
    {
      key: 12,
      name: '权限提示-通知权限',
      desc: '取消推送通知',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.host.activity.MainActivity',
          matches: [
            '[text*="通知权限"][visibleToUser=true]',
            '[text="取消" || text="暂不开启"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/ab40c096-d024-4b7c-9c6f-245beafd373a',
          snapshotUrls: [
            'https://i.gkd.li/i/13389145',
            'https://i.gkd.li/i/18391977',
            'https://i.gkd.li/i/20499323',
          ],
        },
        {
          key: 0,
          actionMaximum: 1,
          fastQuery: true,
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[id="com.ximalaya.ting.android:id/cancel_btn"]',
          exampleUrls: 'https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df',
          snapshotUrls: 'https://i.gkd.li/i/13389145',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-免流提示',
      desc: '关闭[开免流送会员]弹窗',
      rules: [
        {
          fastQuery: true,
          activityIds: '.host.activity.MainActivity',
          matches: '[vid="host_iv_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2a7e189b-b935-4bbd-9672-c18f2bf454e9',
          snapshotUrls: 'https://i.gkd.li/i/18326083',
        },
        '[id="com.ximalaya.ting.android:id/main_iv_close"]',
      ],
    },
    {
      key: 14,
      name: '局部广告-有声书分类页面-信息流广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.SplashAdActivity',
      rules: '[id="com.ximalaya.ting.android:id/main_iv_dislike"]',
      snapshotUrls: 'https://i.gkd.li/i/13334685',
      enable: false,
    },
  ],
});
