import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
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
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14667409',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.sup.superb.m_teenager.view.EnterTeenagerModeDialogActivity',
        matches: '[text$="青少年模式"] + [text="我知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/13796869',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-信息流广告',
      desc: '伪装正常内容广告',
      enable: false,
      activityIds: 'com.sup.android.base.MainActivity',
      rules: [
      {
        key: 0,
        matches: '@[text="关闭广告"] + RelativeLayout > [text="立即下载"]',
        snapshotUrls: 'https://i.gkd.li/i/14471889',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'RecyclerView > FrameLayout[id!=null] >6 ImageView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14886478',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@RelativeLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/14886477',
        preKeys: 1,
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 5,
      name: '权限提示-通知权限',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="开启推送通知"] +2 * > [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13691081',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启推送通知"] +2 * > [text="以后再说"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '局部广告-右上角红包悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.sup.android.base.MainActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] < RelativeLayout[childCount=2] < FrameLayout - [id="com.sup.android.superb:id/tab_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13624220',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '更新提示',
      desc: '点击[我再想想]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="发现新版本"] +2 * > [text="我再想想"]',
        snapshotUrls: 'https://i.gkd.li/i/13858490',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '评价提示',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.sup.android.base.MainActivity', 'com.sup.android.base.praise.PraiseDialogActivity'],
        matches: ['[text^="喜欢皮皮虾吗"]', '[text="取消"]'],
        snapshotUrls: ['https://i.gkd.li/i/14005608', 'https://i.gkd.li/i/15285383'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text^="喜欢皮皮虾吗"]', '[text="取消"]'],
        snapshotUrls: ['https://i.gkd.li/i/14005608', 'https://i.gkd.li/i/15285383'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '全屏广告-集五福弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.sup.android.base.MainActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14151026',
        exampleUrls: 'https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.sup.android.base.MainActivity',
        matches: '[id="com.sup.android.superb:id/afa"]',
        snapshotUrls: 'https://i.gkd.li/i/14151026',
        exampleUrls: 'https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '局部广告-卡片广告',
      desc: '点击[关闭广告]',
      rules: [
      {
        key: 0,
        activityIds: 'com.sup.android.base.MainActivity',
        matches: '[text="关闭广告"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14471869',
        exampleUrls: 'https://m.gkd.li/57941037/af1e7624-540b-4646-b812-3b748966e903',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 11,
      name: '分段广告-信息流广告',
      desc: '点击展开-点击[不感兴趣]',
      activityIds: 'com.sup.android.base.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'RecyclerView > FrameLayout[id!=null] >4 FrameLayout[childCount=5] > ViewGroup[childCount=1] > @ImageView[clickable=true][childCount=0] <<n [vid="view_pager"]',
        snapshotUrls: 'https://i.gkd.li/i/14886478',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/14886477',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});