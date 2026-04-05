import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16335136',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@FrameLayout[childCount=2] > [vid="ll_top_right"][childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/20903074',
        exampleUrls: 'https://e.gkd.li/6fca95f1-d672-4d1d-bcf5-e71f1865dd52',
        excludeSnapshotUrls: 'https://i.gkd.li/i/16335136',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '[text="暂不更新"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18271745',
        exampleUrls: 'https://e.gkd.li/130e0c2e-f568-4a96-9c06-9876a21e0466',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-首页弹窗广告',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/12662361',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/12662361',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      desc: '请求推送通知弹窗，点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.mc10086.cmcc.base.StartPageActivity',
        matches: ['[text*="开启推送通知"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/13327880',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '[text="授权提醒"] +3 [text="拒绝"]',
        snapshotUrls: 'https://i.gkd.li/i/13775652',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text*="开启推送通知"] +(2) LinearLayout > [text="取消"]',
        snapshotUrls: ['https://i.gkd.li/i/12662213', 'https://i.gkd.li/i/13327880'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="授权提醒"] +3 [text="拒绝"]',
        snapshotUrls: 'https://i.gkd.li/i/13775652',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 11,
      name: '权限提示-请求获取剪贴板权限弹窗',
      desc: '请求获取剪贴板权限弹窗，点击不允许',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment', 'com.mc10086.cmcc.base.StartPageActivity'],
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
        snapshotUrls: ['https://i.gkd.li/i/12662251', 'https://i.gkd.li/i/13775651', 'https://i.gkd.li/i/15944173'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
        snapshotUrls: ['https://i.gkd.li/i/12662251', 'https://i.gkd.li/i/13775651'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 12,
      name: '局部广告-右侧悬浮小图标',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '[vid="close_btn" || vid="close_btn_bottom" || vid="cmcc_digital_delete_float_icon_ll"]',
        snapshotUrls: ['https://i.gkd.li/i/12662265', 'https://i.gkd.li/i/14570369', 'https://i.gkd.li/i/25768816'],
        actionCd: 300,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '[vid="tab_ai_tag"] >2 [vid="ai_floatingBar_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/25768547',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
        matches: '@Image[clickable=true][text!=null] <<3 WebView[text="余量查询"] <<2 [vid="patmentwebview"]',
        snapshotUrls: 'https://i.gkd.li/i/14738550',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '[id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/12662265',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '[vid="close_btn_bottom"]',
        snapshotUrls: 'https://i.gkd.li/i/14570369',
        exampleUrls: 'https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
        matches: '[text="余量查询"] > View > View > @Image[clickable=true][text!=null] <<n [vid="patmentwebview"]',
        snapshotUrls: 'https://i.gkd.li/i/14738550',
        exampleUrls: 'https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 13,
      name: '评价提示-请求好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
        snapshotUrls: 'https://i.gkd.li/i/12662345',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
        snapshotUrls: 'https://i.gkd.li/i/12662345',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 14,
      name: '权限提示-通讯录权限申请弹窗',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.cmccit.paycenter.PayCenterActivity',
        matches: ['[text="通讯录权限申请"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/16369235',
        exampleUrls: 'https://e.gkd.li/7d332325-497f-47a4-a322-729ffa5dd121',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 15,
      name: '权限提示-定位权限',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
        matches: ['[text^="位置权限" || text$="定位权限"]', '[text="取消"][clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/23445705',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});