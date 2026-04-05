import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
{
      key: 2,
      name: '分段广告-支付完成界面广告卡片',
      desc: '关闭支付完成页面底部的广告卡片',
      enable: false,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
      {
        key: 0,
        matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/import/13070564',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="关闭广告"]',
        snapshotUrls: 'https://i.gkd.li/import/13070974',
        preKeys: 0,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13070564',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="关闭广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13070974',
        preKeys: [0],
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[text="关闭广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13070974',
        preKeys: 0,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 3,
      name: '局部广告-浮窗广告',
      desc: '点击关闭浮窗广告',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.unionpay.activity.UPActivityMain',
        matches: '[vid="close_view"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20239453',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-各类全屏弹窗广告',
      desc: '点击关闭各类全屏弹窗广告，例如获得新勋章提示、我的页面广告弹窗、领取优惠弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        name: '天天签到-获得新勋章提示',
        activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
        matches: 'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/import/13440341',
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '我的页面-广告弹窗',
        activityIds: 'com.unionpay.activity.UPActivityMain',
        matches: '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/import/13440341',
        matchTime: 10000,
        actionMaximum: 1,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '领取优惠弹窗',
        activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
        matches: '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/import/13848688',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 9,
      name: '局部广告-右侧悬浮广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.unionpay.activity.UPActivityMain',
        matches: '@[vid="frog_float"][visibleToUser=true] >2 [vid="close_view"]',
        snapshotUrls: 'https://i.gkd.li/i/14586427',
        exampleUrls: 'https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '权限提示-定位权限-1',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: '.activity.UPActivityMain',
        matches: '[id="com.unionpay:id/view_locate_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13634882',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['.activity.UPActivityMain', '.base.UPDialog'],
        matches: ['[text*="访问您的位置信息"]', '[text="不允许"]'],
        snapshotUrls: ['https://i.gkd.li/i/12695773', 'https://i.gkd.li/i/14209001'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '权限提示-定位权限-1-1-1-1',
      desc: '自动点击"不允许"',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        matches: '[text*="访问您的位置信息"] < * +n * > [text="不允许"]',
        snapshotUrls: ['https://i.gkd.li/i/12695773', 'https://i.gkd.li/i/14209001'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.unionpay:id/view_locate_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13634882',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 12,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.base.UPDialog',
        matches: '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12695736',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12695736',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 13,
      name: '全屏广告-天天签到-获得新勋章提示',
      desc: '点击左上角返回',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
        matches: 'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13440341',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 14,
      name: '其他-我的页面-广告弹窗',
      enable: false,
      activityIds: 'com.unionpay.activity.UPActivityMain',
      matchTime: 10000,
      actionMaximum: 1,
      snapshotUrls: 'https://i.gkd.li/i/13440341',
      rules: [
      {
        key: 0,
        matches: '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 15,
      name: '全屏广告-领取优惠弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
        matches: '@View[clickable=true][text="关闭按钮"] <<n [vid="view_content_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13848688',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
        matches: '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13848688',
        _uniqueKey: 1
      },
      ],
    },
  ],
});