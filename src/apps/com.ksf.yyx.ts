import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ksf.yyx',
  name: 'OMOFUN',
  groups: [
{
      key: 0,
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
        matches: '[id="com.ksf.yyx:id/ksad_splash_circle_skip_view"]',
        snapshotUrls: 'https://i.gkd.li/i/12775918',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.ksf.yyx:id/ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
        snapshotUrls: 'https://i.gkd.li/i/12775919',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text^="跳过 "][text.length<=4][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12775926',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.ksf.yyx:id/ksad_splash_circle_skip_view"]',
        snapshotUrls: 'https://i.gkd.li/i/12775918',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[id="com.ksf.yyx:id/ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
        snapshotUrls: ['https://i.gkd.li/i/12775919'],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: 'FrameLayout > FrameLayout > [text^="跳过 "][text.length<=4][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12775926',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 1,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[desc="了解更多"] - [desc="我知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/12775920',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-插屏广告',
      desc: '点击关闭',
      rules: [
      {
        key: 1,
        activityIds: '.MainActivity',
        matches: '[id="com.ksf.yyx:id/ksad_container"] [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/12775922',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.MainActivity',
        matches: 'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12775923',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
        matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12775925', 'https://i.gkd.li/i/12775924'],
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.MainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/12775921', 'https://i.gkd.li/i/12776903'],
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[id="com.ksf.yyx:id/ksad_container"] [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/12775922',
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: '[id="com.ksf.yyx:id/ksad_container"] TextView[text="广告"] <2 ViewGroup -n ViewGroup[childCount=1] > @ViewGroup[childCount=1 && clickable=true] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/12775923', 'https://i.gkd.li/i/12998899'],
        _uniqueKey: 6
      },
      {
        key: 7,
        matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12775925', 'https://i.gkd.li/i/12775924'],
        _uniqueKey: 7
      },
      {
        key: 8,
        matches: '[text^="去"][text$="看看"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/12775921', 'https://i.gkd.li/i/12776903'],
        action: 'clickCenter',
        _uniqueKey: 8
      },
      {
        key: 9,
        matches: 'TextView[text="查看详情"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12789196',
        action: 'clickCenter',
        _uniqueKey: 9
      },
      {
        key: 10,
        matches: 'TextView[text="立即下载"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12789928',
        action: 'clickCenter',
        _uniqueKey: 10
      },
      ],
    },
  ],
});