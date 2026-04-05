import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sjm.xiaodesecond.mw',
  name: '喵物次元',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭/跳过',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/14353263',
        exampleUrls: 'https://e.gkd.li/5332e99f-d47b-44ad-b8df-fcd9ec564df4',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
        matches: '@[clickable=true] > [text="跳过"]',
        snapshotUrls: ['https://i.gkd.li/i/14203087', 'https://i.gkd.li/i/14354395'],
        exampleUrls: 'https://m.gkd.li/57941037/a52ba4bb-0838-4c08-b771-78205786b016',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
        matches: '@ViewGroup[clickable=true][childCount=1] < ViewGroup +2 ViewGroup[childCount=2] > [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/14203600', 'https://i.gkd.li/i/14203327'],
        exampleUrls: 'https://m.gkd.li/57941037/46e28728-570e-4fef-9c38-d561813d1c63',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.MainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <(2,3) FrameLayout[childCount=4] +(1,2) FrameLayout[childCount=2] >2 [text^="立即" || text="去逛逛"]',
        snapshotUrls: 'https://i.gkd.li/i/14345580',
        exampleUrls: 'https://e.gkd.li/0b695e8c-c998-49bb-a416-27cf0f3a8f30',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '全屏广告-1',
        matches: 'TextView[text="跳过"] <4 @ViewGroup <<n ViewGroup >n TextView[text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/14203319', 'https://i.gkd.li/i/14203087'],
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '全屏广告-2',
        matches: '@ViewGroup < ViewGroup +2 ViewGroup > TextView[text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/14203327', 'https://i.gkd.li/i/14203600'],
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '全屏广告-3',
        matches: '[id="android:id/content"] >(3,4) FrameLayout[childCount>3 && childCount!=5] >2 ImageView[visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14345580', 'https://i.gkd.li/i/14353263'],
        _uniqueKey: 6
      },
      ],
    },
  ],
});