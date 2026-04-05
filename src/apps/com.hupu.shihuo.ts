import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
{
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="去开启"] + [id="com.hupu.shihuo:id/ivClose"]',
        snapshotUrls: 'https://i.gkd.li/i/13704887',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text^="通知分类"] +n ImageView[id="com.hupu.shihuo:id/ivClose"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
        matches: '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13115664',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '更新提示',
      desc: '点击[以后再说]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.shizhi.shihuoapp.module.main.ui.main.MainActivity',
        matches: '[text="发现新版本"] +2 ViewGroup > [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/14052208',
        _uniqueKey: 0
      },
      ],
    },
  ],
});