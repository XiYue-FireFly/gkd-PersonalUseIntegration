import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.myapp.app.xaoorti',
  name: '天天视频',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '快手广告-1',
        activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
        matches: ['[text="广告"]', '@ImageView[clickable=true] - [text="|"] - [text$="s"]'],
        snapshotUrls: 'https://i.gkd.li/i/13520475',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '快手广告-2',
        activityIds: 'com.ys.resemble.ui.MainActivity',
        matches: ['[text="广告"]', '@ViewGroup > [text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13546700',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '快手广告-3',
        activityIds: 'com.ys.resemble.ui.MainActivity',
        matches: 'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13546701',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '腾讯广告',
        activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/13520477',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '快手广告-1-1',
        activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
        matches: ['ViewGroup > ViewGroup > [text="广告"]', 'ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/13520475',
        _uniqueKey: 4,
        _uniqueName: '快手广告-1-1',
        name: '快手广告-1-1'
      },
      {
        key: 5,
        name: '快手广告-2-1',
        activityIds: 'com.ys.resemble.ui.MainActivity',
        matches: ['ViewGroup > ViewGroup > [text="广告"]', '@ViewGroup > [text="跳过"]'],
        snapshotUrls: 'https://i.gkd.li/i/13546700',
        _uniqueKey: 5,
        _uniqueName: '快手广告-2-1',
        name: '快手广告-2-1'
      },
      {
        key: 6,
        name: '快手广告-3-1',
        activityIds: 'com.ys.resemble.ui.MainActivity',
        matches: ['ViewGroup > ViewGroup > [text="广告"]', 'ViewGroup > @ViewGroup[childCount=1] > ImageView[childCount=0]'],
        snapshotUrls: 'https://i.gkd.li/i/13546701',
        _uniqueKey: 6,
        _uniqueName: '快手广告-3-1',
        name: '快手广告-3-1'
      },
      {
        key: 7,
        name: '腾讯广告-1',
        activityIds: 'com.ys.resemble.ui.login.splash.SplashADSetActivity',
        matches: 'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/13520477',
        _uniqueKey: 7,
        _uniqueName: '腾讯广告-1',
        name: '腾讯广告-1'
      },
      ],
    },
  ],
});