import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.apkpure.aegon',
  name: 'APKPure',
  groups: [
{
      key: 1,
      name: '全屏广告-热门推荐关闭',
      desc: '关闭应用推广',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
        matches: '@RelativeLayout[clickable=true][visibleToUser=true] - [text="精选必备好应用"] <2 RelativeLayout < LinearLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13466647',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
        matches: '[text="精选必备好应用"] + [name="android.widget.RelativeLayout"] > [name="android.widget.ImageView"]',
        snapshotUrls: 'https://i.gkd.li/i/13466647',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '功能类-更新与已安装界面-点击[查看更多]',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.apkpure.aegon.main.activity.MainTabActivity', 'com.apkpure.aegon.main.activity.AppManagerActivity', 'com.apkpure.aegon.cms.activity.CommonActivity', 'com.apkpure.aegon.main.activity.AppMoreActivity'],
        matches: '@ViewGroup[clickable=true] > [text="查看更多"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15469126',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.apkpure.aegon.main.activity.MainTabActivity', 'com.apkpure.aegon.main.activity.AppManagerActivity', 'com.apkpure.aegon.cms.activity.CommonActivity', 'com.apkpure.aegon.main.activity.AppMoreActivity'],
        matches: 'ViewGroup > [text="查看更多"]',
        snapshotUrls: 'https://i.gkd.li/i/13466329',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '分段广告-更新界面软件推荐',
      activityIds: ['com.apkpure.aegon.main.activity.MainTabActivity', 'com.apkpure.aegon.main.activity.AppManagerActivity', 'com.apkpure.aegon.cms.activity.CommonActivity', 'com.apkpure.aegon.main.activity.AppMoreActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击三点图标',
        matches: '@ImageView - RelativeLayout >3 [text="AD"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13466329',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击关闭',
        matches: '@LinearLayout[clickable=true] >n [text="关闭"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13466610', 'https://i.gkd.li/i/15542026'],
        preKeys: 0,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击三点图标-1',
        matches: '@ImageView - RelativeLayout >3 [text="AD"]',
        snapshotUrls: 'https://i.gkd.li/i/13466329',
        _uniqueKey: 2,
        _uniqueName: '点击三点图标-1',
        name: '点击三点图标-1'
      },
      {
        key: 3,
        name: '点击关闭-1',
        matches: 'TextView[text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13466610',
        preKeys: 0,
        _uniqueKey: 3,
        _uniqueName: '点击关闭-1',
        name: '点击关闭-1'
      },
      ],
    },
{
      key: 4,
      name: '功能类-添加桌面快捷方式',
      desc: '下次添加',
      rules: [
      {
        key: 0,
        activityIds: 'com.apkpure.aegon.main.activity.MainTabActivity',
        matches: '[id="com.apkpure.aegon:id/arg"][text="下次添加"]',
        snapshotUrls: 'https://i.gkd.li/i/13416401',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.main.activity.MainTabActivity',
        matches: 'ImageView[childCount=0][text=null] < @LinearLayout[clickable=true][visibleToUser=true] < LinearLayout < LinearLayout < LinearLayout < RelativeLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/18587607',
        exampleUrls: 'https://e.gkd.li/10d6f26e-cbd1-4159-914b-68c39ff05436',
        fastQuery: true,
        matchTime: 10000,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.main.activity.AppManagerActivity',
        matches: '@ImageView[index=0][childCount=0][clickable=true][visibleToUser=true] < ViewGroup[childCount=2] < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/18587646',
        exampleUrls: 'https://e.gkd.li/b8201abb-359e-4fc8-82de-0e3784278cd2',
        fastQuery: true,
        matchTime: 10000,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.v2.app.detail.AppDetailV2Activity',
        matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text="正在下载" || text="正在更新"]',
        snapshotUrls: ['https://i.gkd.li/i/18587702', 'https://i.gkd.li/i/18587507'],
        exampleUrls: 'https://e.gkd.li/214effcb-76c5-4cc0-b4c8-40c805331fe8',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.plugin.runtime.PluginDefaultProxyActivity',
        matches: '@ImageView[clickable=true] <2 RelativeLayout[childCount=2] - FrameLayout >5 [text="广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24605359',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 6,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.main.activity.MainTabActivity',
        matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] <3 RelativeLayout[childCount=4] < FrameLayout <2 FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/18587501',
        exampleUrls: 'https://e.gkd.li/1ba2de53-b533-47dc-87a4-a701d2bcacd7',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.main.activity.AppManagerActivity',
        matches: '@[desc="closeButton"][visibleToUser=true] - WebView >3 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/18587514',
        exampleUrls: 'https://e.gkd.li/afc307a6-8271-4776-b7d5-60bd999d0fe5',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.main.activity.AppManagerActivity',
        matches: '[vid="anythink_myoffer_banner_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18587745',
        exampleUrls: 'https://e.gkd.li/ce6a779c-454d-4a71-9d54-1401e615bbf7',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '局部广告-电报频道推广横幅',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['.main.activity.MainTabActivity', '.main.activity.AppManagerActivity', '.v2.app.detail.AppDetailV2Activity'],
        matches: '@LinearLayout[clickable=true][visibleToUser=true] - LinearLayout >3 [text="Join"]',
        snapshotUrls: ['https://i.gkd.li/i/18587504', 'https://i.gkd.li/i/18587515', 'https://i.gkd.li/i/18587775'],
        exampleUrls: 'https://e.gkd.li/088ca8e8-5442-4b60-9ce9-0e6dd7d94304',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});