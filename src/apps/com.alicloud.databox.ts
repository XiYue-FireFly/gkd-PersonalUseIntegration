import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
{
      key: 0,
      name: '功能类-自动签到',
      desc: '自动点击签到按钮并关闭签到后的弹窗',
      enable: false,
      activityIds: ['com.alicloud.databox.MainActivity', 'com.alicloud.databox.navigation.NavigationFragmentContainerActivity', 'com.alicloud.databox.account.login.LoginActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '自动点击签到',
        matches: '[text="领取"][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/import/12929318', 'https://i.gkd.li/i/15942837', 'https://i.gkd.li/i/15573070', 'https://i.gkd.li/i/15573233'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '在签到后，关闭弹窗',
        snapshotUrls: ['https://i.gkd.li/i/18108340', 'https://i.gkd.li/i/19515122'],
        action: 'back',
        anyMatches: ['[text="保存至"]', '[vid="ivCardBackBackground"][visibleToUser=true]', '[vid="cvCardFront"] > [vid="ivClose"][visibleToUser=true]'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="领取"][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/15573070', 'https://i.gkd.li/i/15573233'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="ivCardBackBackground"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15144565',
        preKeys: [0],
        action: 'back',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '自动点击签到-1',
        matches: '[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]',
        snapshotUrls: 'https://i.gkd.li/i/12929318',
        _uniqueKey: 4,
        _uniqueName: '自动点击签到-1',
        name: '自动点击签到-1'
      },
      {
        key: 5,
        name: '关闭弹窗',
        matches: '[vid="ivClose"]',
        snapshotUrls: ['https://i.gkd.li/i/13038304', 'https://i.gkd.li/i/14235221', 'https://i.gkd.li/i/15119433'],
        preKeys: [0],
        actionMaximum: 2,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-活动弹窗',
      desc: '关闭全屏活动弹窗广告',
      enable: false,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
      {
        key: 0,
        snapshotUrls: ['https://i.gkd.li/import/13228610', 'https://i.gkd.li/import/14161216', 'https://i.gkd.li/import/14235204', 'https://i.gkd.li/i/14414446', 'https://i.gkd.li/i/18108117'],
        anyMatches: ['WebView[text!=null && text!=""] > View[id="root"] >2 View > TextView[index=parent.childCount.minus(2)]', 'WebView[text=null || text=""] > View[id="root"] >2 View > TextView[index=parent.childCount.minus(1)]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.MainActivity',
        matches: '@TextView[clickable=true][visibleToUser=true] - Image[text!=null] < View < View < View < WebView < WebView < [vid="webContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/14235204',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text^="好运盲盒"] >n View > Image + TextView[clickable=true]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '功能类-时光设备间-自动点击',
      desc: '自动点击“开心收下”',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      matchTime: 10000,
      actionMaximum: 1,
      snapshotUrls: 'https://i.gkd.li/import/13596924',
      rules: [
      {
        key: 0,
        matches: 'View[childCount=9] > @Image -2 View[childCount=5]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      activityIds: 'com.alicloud.databox.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text^="立即了解"] -3 @View[clickable=true] <<n [vid="webContainer"]',
        snapshotUrls: 'https://i.gkd.li/import/13806865',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.MainActivity',
        matches: '[text^="立即了解"] -3 @View[clickable=true] <<n [vid="webContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/13806865',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text^="立即了解"] -3 View[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13806865',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 4,
      name: '通知提示-顶端横幅”',
      desc: '出现在首页、备份盘、资源库',
      enable: false,
      activityIds: ['com.alicloud.databox.MainActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '首页',
        matches: ['[id="com.alicloud.databox:id/ivTitleAction"]'],
        excludeMatches: '[vid="layoutBanner"] > [text$=">>"]',
        snapshotUrls: 'https://i.gkd.li/import/14161399',
        excludeSnapshotUrls: 'https://i.gkd.li/i/17556779',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '备份盘、资源库',
        matches: ['[id="com.alicloud.databox:id/notice_view_icon_button"]'],
        snapshotUrls: ['https://i.gkd.li/import/14161340', 'https://i.gkd.li/import/14161336'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.MainActivity',
        matches: '@TextView[childCount=0][clickable=true][visibleToUser=true] <4 View[childCount=4] < View < View < WebView < WebView < [vid="webContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/14414446',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="layoutLuckyBottle"] >3 [vid="ivClose"]',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 5,
      name: '功能类-自动授权',
      desc: '包括扫码登录',
      enable: false,
      activityIds: 'com.taobao.login4android.scan.QrScanActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="确认并登录"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14414503',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.taobao.login4android.scan.QrScanActivity',
        matches: '[text="确认并登录"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14414503',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-[容量使用超限]提示',
      desc: '点击关闭',
      enable: false,
      activityIds: 'com.alicloud.databox.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: ['[text="容量使用超限"]', '[vid="layout_close"]'],
        snapshotUrls: 'https://i.gkd.li/i/15158788',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alicloud.databox.MainActivity',
        matches: ['[text="容量使用超限"]', '[vid="layout_close"]'],
        snapshotUrls: 'https://i.gkd.li/i/15158788',
        exampleUrls: 'https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '局部广告-卡片广告',
      desc: '关闭卡片式广告',
      enable: false,
      activityIds: 'com.alicloud.databox.transferpage.TransferListActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="close"]',
        snapshotUrls: 'https://i.gkd.li/i/15433289',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alicloud.databox.transferpage.TransferListActivity',
        matches: '[vid="close"]',
        snapshotUrls: 'https://i.gkd.li/i/15433289',
        _uniqueKey: 1
      },
      ],
    },
  ],
});