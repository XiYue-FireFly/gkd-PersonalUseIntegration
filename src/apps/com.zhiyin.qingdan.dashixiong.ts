import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiyin.qingdan.dashixiong',
  name: '大师兄影视',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        name: '快手广告-1',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: '@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12843281',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '快手广告-2',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: '@ImageView[clickable=true] <3 * -2 * >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13521143',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '快手广告-3',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: ['[text="广告"]', '[text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13521140',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '腾讯广告-1',
        activityIds: ['com.zhiyin.qingdan.dashixiong.MainActivity', 'com.qq.e.ads.ADActivity'],
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/12843282', 'https://i.gkd.li/i/12843345', 'https://i.gkd.li/i/12843333', 'https://i.gkd.li/i/13400656'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 5,
        name: '字节广告',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: '@Image < View +n View > View > View > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12843323',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
        matches: '[id="close_btn"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13887500',
        _uniqueKey: 6
      },
      {
        key: 4,
        name: '快手广告-1-1',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: '@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12843281',
        fastQuery: true,
        _uniqueKey: 4,
        _uniqueName: '快手广告-1-1',
        name: '快手广告-1-1'
      },
      {
        key: 7,
        name: '快手广告-2-1',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: ['ViewGroup[childCount=2] > ImageView + [text="广告"]', 'ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView'],
        snapshotUrls: 'https://i.gkd.li/i/13521143',
        _uniqueKey: 7,
        _uniqueName: '快手广告-2-1',
        name: '快手广告-2-1'
      },
      {
        key: 8,
        name: '快手广告-3-1',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: '[text="广告"] <2 ViewGroup -3 ViewGroup >2 [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/13521140',
        _uniqueKey: 8,
        _uniqueName: '快手广告-3-1',
        name: '快手广告-3-1'
      },
      {
        key: 9,
        name: '腾讯广告-1-1',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: 'ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/12843282',
        _uniqueKey: 9,
        _uniqueName: '腾讯广告-1-1',
        name: '腾讯广告-1-1'
      },
      {
        key: 10,
        name: '腾讯广告-2',
        activityIds: ['com.zhiyin.qingdan.dashixiong.MainActivity', 'com.qq.e.ads.ADActivity'],
        matches: 'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: ['https://i.gkd.li/i/12843345', 'https://i.gkd.li/i/12843333', 'https://i.gkd.li/i/13400656'],
        _uniqueKey: 10
      },
      {
        key: 11,
        name: '字节广告-1',
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: '@Image < View +n View > View > View > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12843323',
        fastQuery: true,
        _uniqueKey: 11,
        _uniqueName: '字节广告-1',
        name: '字节广告-1'
      },
      ],
    },
{
      key: 10,
      name: '通知提示-公告弹窗',
      desc: '点击[我知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '[desc^="必读通告"] +n [desc="我知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/12843280',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc^="必读通告"] +n [desc="我知道了"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
        matches: 'WebView[text="快手"] >3 View[childCount=5] >2 @TextView[clickable=true][text=""] <<n [vid="ksad_container"]',
        snapshotUrls: 'https://i.gkd.li/i/15371800',
        exampleUrls: 'https://m.gkd.li/57941037/122d8544-ccdd-42df-8618-f98f4433ee50',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
        matches: '[id="close_btn"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13887500',
        _uniqueKey: 1
      },
      ],
    },
  ],
});