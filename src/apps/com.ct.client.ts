import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
{
      key: -1,
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
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/15084759', 'https://i.gkd.li/i/15079224'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/15084759', 'https://i.gkd.li/i/15079224'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-软件更新/安装后的用户引导',
      desc: '自动点击更新或安装后的引导页面跳过按钮',
      enable: false,
      activityIds: 'com.ct.client.activity.UserGuideActivity',
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/import/12508971'],
      rules: [
      {
        key: 0,
        matches: '[id="com.ct.client:id/tvSkip"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ct.client.activity.UserGuideActivity',
        matches: '[id="com.ct.client:id/tvSkip"]',
        snapshotUrls: 'https://i.gkd.li/i/12508971',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.MainActivity', '.activity.SplashActivity', '.common.ConfirmDialogActivity'],
        matches: 'LinearLayout > [text="取消升级"]',
        snapshotUrls: ['https://i.gkd.li/i/12819594', 'https://i.gkd.li/i/13316168', 'https://i.gkd.li/i/13695096'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-浮窗广告',
      desc: '关闭首页和查询办理页面的浮窗广告',
      enable: false,
      activityIds: ['com.ct.client.common.ConfirmDialogActivity', 'com.ct.client.activity.MainActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'ImageView[id="com.ct.client:id/close"]',
        snapshotUrls: ['https://i.gkd.li/import/12819676', 'https://i.gkd.li/import/12913735', 'https://i.gkd.li/i/15104434'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.ct.client:id/ivFloatClose"]',
        snapshotUrls: ['https://i.gkd.li/import/13043345', 'https://i.gkd.li/i/15137220'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['com.ct.client.common.ConfirmDialogActivity', 'com.ct.client.activity.MainActivity'],
        matches: '[vid="rlActivity"] > [vid="close"]',
        snapshotUrls: ['https://i.gkd.li/i/12819676', 'https://i.gkd.li/i/15104434'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="rlActivity"] > [vid="close"]',
        snapshotUrls: ['https://i.gkd.li/i/12819676', 'https://i.gkd.li/i/15104434'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '关闭业务办理页面的全屏推广弹窗',
      enable: false,
      activityIds: ['com.ct.client.common.webview.OnlineBusinessWebkitActivity'],
      snapshotUrls: ['https://i.gkd.li/import/12913804'],
      rules: [
      {
        key: 0,
        matches: 'Image[text="tishi-close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '权限提示-通知权限',
      desc: '自动点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: 'ImageView[id="com.ct.client:id/msg_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13043522',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ct.client.activity.MainActivity',
        matches: '[text^="开启消息通知"] - [vid="ivClose"]',
        snapshotUrls: 'https://i.gkd.li/i/15209597',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.ct.client.activity.MainActivity',
        matches: '[text^="开启消息通知"] <n * > [vid="ivClose"]',
        snapshotUrls: 'https://i.gkd.li/i/15209597',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 6,
      name: '功能类-右下角客服悬浮窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.ct.client.MainActivity',
        matches: '[id="com.ct.client:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/14133742',
        exampleUrls: 'https://m.gkd.li/57941037/3a14e0ac-ce6a-411d-9f92-e50da5165119',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ct.client.activity.MainActivity',
        matches: '[id="com.ct.client:id/ivFloatClose"]',
        snapshotUrls: 'https://i.gkd.li/i/13043345',
        exampleUrls: 'https://m.gkd.li/57941037/a97bf7a2-6e35-4922-ad0d-8677fca79f7c',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.ct.client.activity.MainActivity',
        matches: '[vid="ivFloatClose"]',
        snapshotUrls: 'https://i.gkd.li/i/15137220',
        exampleUrls: 'https://m.gkd.li/57941037/5dd9c9e3-f290-4b73-abdd-dc5e97a99772',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '功能类-英文版未登录时自动一键登录',
      desc: '仅在使用该卡移动数据时可用',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.international.homepage.InternationalHomePageActivity',
        matches: '[text="Login"]',
        snapshotUrls: ['https://i.gkd.li/i/22843837', 'https://i.gkd.li/i/22846926'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.international.login.InternationalLoginActivity',
        matches: '@CheckBox[checked=false] + [text^="I agree that I have read and accepted"]',
        snapshotUrls: ['https://i.gkd.li/i/22843889', 'https://i.gkd.li/i/22843896'],
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.international.login.InternationalLoginActivity',
        matches: '[text="Login with Current Number"]',
        snapshotUrls: 'https://i.gkd.li/i/22843896',
        preKeys: [1],
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
  ],
});