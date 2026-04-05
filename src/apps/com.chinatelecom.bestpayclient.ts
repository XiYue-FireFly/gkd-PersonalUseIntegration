import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
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
        activityIds: '.ui.MainActivity',
        matches: '[id="com.chinatelecom.bestpayclient:id/bupdate_tv_bottom_tip"]',
        snapshotUrls: 'https://i.gkd.li/i/13391544',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        name: '权益页',
        activityIds: '.ui.MainActivity',
        matches: '[name$="Dialog"] >4 @[clickable=true][visibleToUser=true] - View >(1,2) [childCount=0][text=""] + Image[text!=null][childCount=0] <<n [vid="best_h5_container"]',
        snapshotUrls: ['https://i.gkd.li/i/13402692', 'https://i.gkd.li/i/24428096'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '首页1',
        activityIds: '.ui.MainActivity',
        matches: '[vid="iv_dialog_close_one" || vid="iv_sky_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13455790', 'https://i.gkd.li/i/15369212', 'https://i.gkd.li/i/18160066'],
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '首页2',
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '[text="甜橙信用卡"] >2  View[childCount=2] > @Image[clickable=true][text!=null] <<n [id="com.chinatelecom.bestpayclient:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13626324',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '借贷页',
        activityIds: '.ui.MainActivity',
        matches: '@[clickable=true][text=""][visibleToUser=true] <<n [vid="best_h5_container"]',
        snapshotUrls: ['https://i.gkd.li/i/13455929', 'https://i.gkd.li/i/24427912'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '信用卡页面',
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '[id="com.chinatelecom.bestpayclient:id/h5_pc_container"] >2 bc >5 View > View >3 View[childCount=3] > @[clickable=true][width<150 && height<150][visibleToUser=true] + * + View[childCount=0]',
        snapshotUrls: ['https://i.gkd.li/i/13696322', 'https://i.gkd.li/i/13696323'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/24420758',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '权益页-1',
        activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
        matches: 'Image < @View[clickable=true][index=1] <<n Dialog <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13402692',
        fastQuery: true,
        _uniqueKey: 5,
        _uniqueName: '权益页-1',
        name: '权益页-1'
      },
      {
        key: 6,
        name: '首页1-1',
        activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
        matches: '[id="com.chinatelecom.bestpayclient:id/iv_dialog_close_one"]',
        snapshotUrls: 'https://i.gkd.li/i/13455790',
        fastQuery: true,
        _uniqueKey: 6,
        _uniqueName: '首页1-1',
        name: '首页1-1'
      },
      {
        key: 7,
        name: '首页2-1',
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '[text="甜橙信用卡"] >2 View[childCount=2] > @Image[clickable=true][text!=null] <<n [id="com.chinatelecom.bestpayclient:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13626324',
        fastQuery: true,
        _uniqueKey: 7,
        _uniqueName: '首页2-1',
        name: '首页2-1'
      },
      {
        key: 8,
        name: '借贷页-1',
        activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
        matches: '@View[clickable=true][text=""] <<n [id="com.chinatelecom.bestpayclient:id/best_h5_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13455929',
        fastQuery: true,
        _uniqueKey: 8,
        _uniqueName: '借贷页-1',
        name: '借贷页-1'
      },
      {
        key: 9,
        name: '信用卡页面-1',
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '[childCount=0] -2 @[clickable=true] <n View[childCount=3] <<n [vid="h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/14603126',
        fastQuery: true,
        _uniqueKey: 9,
        _uniqueName: '信用卡页面-1',
        name: '信用卡页面-1'
      },
      ],
    },
{
      key: 4,
      name: '局部广告-悬浮窗小广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
        matches: '[id="com.chinatelecom.bestpayclient:id/best_h5_container"] View[childCount=2] > @View[clickable=true] + View[clickable=true] > Image[text!=null]',
        snapshotUrls: 'https://i.gkd.li/i/13402711',
        exampleUrls: 'https://m.gkd.li/57941037/4457a342-5750-45d8-ad8e-233dd1da3de3',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.chinatelecom.bestpayclient.ui.MainActivity',
        matches: '[vid="iv_market_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14456159',
        exampleUrls: 'https://m.gkd.li/57941037/14326e73-6c7c-4659-8493-d4b196746b2a',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.chinatelecom.bestpayclient:id/best_h5_container"] View[childCount=2] > @View[clickable=true] +  View[clickable=true] > Image[text!=null]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-年底积分活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: 'View[childCount=2] > @View[index=1][clickable=true][childCount=1] > Image[childCount=0] <<n [id="com.chinatelecom.bestpayclient:id/h5_pc_container"]',
        snapshotUrls: ['https://i.gkd.li/i/13543032', 'https://i.gkd.li/i/13625037'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'View > View[index=1][clickable=true][childCount=1] > Image',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '功能类-自动签到',
      desc: '点击[立即打卡]-关闭弹窗',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '[text^="已连续签到"] +12 * >2 Image[visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14459643',
        exampleUrls: 'https://m.gkd.li/57941037/8fd8a0ce-90a3-460b-9882-33fdb55cbca4',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '[text="明日签到可得惊喜盲盒"] <2 View + View > Image',
        snapshotUrls: 'https://i.gkd.li/i/14459494',
        exampleUrls: 'https://m.gkd.li/57941037/31296e53-7d32-405b-b8ae-25855a02291d',
        preKeys: 0,
        _uniqueKey: 1
      },
      ],
    },
  ],
});