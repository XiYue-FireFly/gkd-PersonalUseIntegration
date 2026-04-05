import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: ['com.xiaomi.shop2.activity.MainActivity', 'com.xiaomi.shop.plugin.homepage.utils.AdDialog'],
        matches: '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id="android:id/content"]',
        snapshotUrls: ['https://i.gkd.li/i/12649330', 'https://i.gkd.li/i/14393039'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.xiaomi.shop2.activity.MainActivity',
        matches: '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 FrameLayout[childCount=2] < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/22550140',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="android:id/content"] > RelativeLayout > LinearLayout[childCount=2] > ImageView[index=1][clickable=true]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '局部广告-悬浮广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.xiaomi.shop2.activity.MainActivity',
        matches: '[id="com.xiaomi.shop.plugin.homepage:id/home_bottom_float_close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/15528092',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.lib.ForceUpdateActivity',
        matches: '@LinearLayout[childCount=0] < [id="android:id/content"][childCount=1] < [vid="action_bar_root"]',
        snapshotUrls: 'https://i.gkd.li/i/19547338',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '评价提示-客服',
      rules: [
      {
        key: 0,
        activityIds: 'com.xiaomi.miot.store.mirn.RNMainActivity',
        matches: 'ImageView < @ViewGroup[clickable=true] - [text^="请对"][text$="进行评价"]',
        snapshotUrls: 'https://i.gkd.li/i/23206873',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});