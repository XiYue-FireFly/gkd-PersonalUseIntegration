import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
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
        matches: '[text*="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/12673680'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="fl_third_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/13826577',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id$="tt_splash_skip_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13224627',
        _uniqueKey: 2
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
        activityIds: ['.activity.MainActivity', '.activity.SetActivity'],
        matches: '[id="net.csdn.csdnplus:id/update"] -2 [id="net.csdn.csdnplus:id/cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/12673693', 'https://i.gkd.li/i/12673654'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="net.csdn.csdnplus:id/update"] -2 [id="net.csdn.csdnplus:id/cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/12673693', 'https://i.gkd.li/i/12673654'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '分段广告-信息流广告',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 1,
        matches: '[text="广告"] + [id="net.csdn.csdnplus:id/iv_more"]',
        snapshotUrls: ['https://i.gkd.li/i/12673738', 'https://i.gkd.li/i/13224538'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[clickable=true] > [id="net.csdn.csdnplus:id/img_feedback_title"][text="重复推荐该广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12673787', 'https://i.gkd.li/i/13224551'],
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@[clickable=true] > [id="net.csdn.csdnplus:id/img_feedback_title"][text="重复推荐该广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12673787', 'https://i.gkd.li/i/13224551'],
        preKeys: 1,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '评价提示-软件好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
        snapshotUrls: 'https://i.gkd.li/i/13251085',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="net.csdn.csdnplus:id/tv_cancel"][text="残忍拒绝"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击【x】',
      rules: [
      {
        key: 0,
        activityIds: 'net.csdn.csdnplus.activity.MainActivity',
        matches: 'LinearLayout[childCount=2] > [vid="img_cancel"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/25171470',
        exampleUrls: 'https://e.gkd.li/3debb965-7773-4160-b172-15dc052ac6c9',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: ['[text="开启推送通知"]', '[id="net.csdn.csdnplus:id/iv_close"]'],
        snapshotUrls: 'https://i.gkd.li/i/12673638',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text="开启推送通知"]', '[id="net.csdn.csdnplus:id/iv_close"]'],
        snapshotUrls: ['https://i.gkd.li/i/12673638'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '分段广告-底部广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
        matches: 'ViewGroup > ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][childCount=0][visibleToUser=true] <<n [vid="fl_template_container" || vid="fl_bottom_ad_container"]',
        snapshotUrls: ['https://i.gkd.li/i/13830821', 'https://i.gkd.li/i/14312501'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
        matches: '@LinearLayout[clickable=true] >(1,2) [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/13830858', 'https://i.gkd.li/i/14312349', 'https://i.gkd.li/i/24376480'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
        matches: '@ImageView[clickable=true] <<2 ViewGroup <<2 ViewGroup - FrameLayout <<6 FrameLayout[id="net.csdn.csdnplus:id/fl_template_container"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13830821',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity',
        matches: 'FrameLayout[id="android:id/content"] [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13830858',
        preKeys: 0,
        _uniqueKey: 3
      },
      ],
    },
  ],
});