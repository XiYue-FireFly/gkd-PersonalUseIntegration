import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
{
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16556555',
        exampleUrls: 'https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="ms_skipView"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23742641',
        exampleUrls: 'https://e.gkd.li/cd89ffb7-6cd3-4978-b3d6-ef5ece2769d0',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '局部广告-各类局部广告',
      enable: false,
      rules: [
      {
        key: 1,
        name: '地图上方黄页横幅',
        activityIds: ['com.baidu.baidumaps.MapsActivity', 'com.android.packageinstaller.permission.ui.GrantPermissionsActivity', 'com.lbe.security.ui.CountdownDialogActivity'],
        matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12642301', 'https://i.gkd.li/i/12801465', 'https://i.gkd.li/i/12909281', 'https://i.gkd.li/i/24633179'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '局部广告-打车界面右侧悬浮球',
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
        snapshotUrls: 'https://i.gkd.li/i/12642307',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '路线广告-1',
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: '[vid="banner_ad_close_icon"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22656085',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '路线广告-2',
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: 'ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/22616267',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 0,
        matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '局部广告-打车界面右侧悬浮球',
      enable: false,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12642307',
      rules: [
      {
        key: 0,
        matches: 'RelativeLayout[id="com.baidu.BaiduMap:id/rl_close_content"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-各类弹窗广告',
      enable: false,
      rules: [
      {
        key: 0,
        name: '美食大礼包弹窗',
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12642310',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '酒店提前订弹窗',
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: '[id="lottie_box"] + TextView[id=null][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12642319',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '打车界面弹窗广告',
        activityIds: ['com.baidu.baidumaps.MapsActivity', 'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'],
        matches: 'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12909300', 'https://i.gkd.li/i/12930699'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: '[vid="img_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22616256',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[text="美食大礼包"] +(6) TextView[id=null][clickable=true]',
        _uniqueKey: 4
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-酒店提前订弹窗',
      enable: false,
      activityIds: 'com.baidu.baidumaps.MapsActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12642319',
      rules: [
      {
        key: 0,
        matches: '[id="lottie_box"] + TextView[id=null][clickable=true]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '权限提示-定位权限',
      activityIds: ['com.baidu.mapframework.widget.BMBaseDialog', 'com.baidu.baidumaps.MapsActivity'],
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text^="开启位置服务"] + RelativeLayout > [id="com.baidu.BaiduMap:id/tv_notip_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/12660884',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="需开启系统定位服务开关"] +2 [id="com.baidu.BaiduMap:id/ll_dialog_btn"] > [id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/12660883',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'ImageView[id="com.baidu.BaiduMap:id/location_dialog_close_iv"]',
        snapshotUrls: 'https://i.gkd.li/i/12909299',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-打车界面弹窗广告',
      enable: false,
      activityIds: ['com.baidu.baidumaps.MapsActivity', 'com.android.packageinstaller.permission.ui.GrantPermissionsActivity'],
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/i/12909300', 'https://i.gkd.li/i/12930699'],
      rules: [
      {
        key: 0,
        matches: 'ImageView[id="com.baidu.BaiduMap:id/operational_activities_content_close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
        snapshotUrls: 'https://i.gkd.li/i/12909385',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.baidu.BaiduMap:id/cancel_update"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: '[vid="push_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15284736',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="push_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '功能类-通勤卡添加至桌面',
      desc: '点击取消',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: ['[text="添加至桌面"]', '[text="取消"]'],
        snapshotUrls: ['https://i.gkd.li/i/13439258', 'https://i.gkd.li/i/16920986'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: 'TextView[id="com.baidu.BaiduMap:id/tv_dialog_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/13439258',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '全屏广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: '[vid="img_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22616256',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 11,
      name: '局部广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: '[vid="banner_ad_close_icon"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22656085',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: 'ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/22616267',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.baidu.baidumaps.MapsActivity',
        matches: 'ImageView[id="com.baidu.BaiduMap:id/yellow_banner_close"]',
        snapshotUrls: 'https://i.gkd.li/i/24633179',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
  ],
});