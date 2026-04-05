import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.codoon.gps',
  name: '咕咚',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        name: '首页-弹窗广告',
        activityIds: 'com.codoon.gps.ui.SlideActivity',
        matches: '@ImageView[clickable=true][childCount=0] - ImageView[clickable=true][childCount=0] < ViewGroup[childCount=2] < RelativeLayout[childCount=1] < RelativeLayout[childCount=1] < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13358586',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '运动圈-弹窗广告',
        activityIds: 'com.codoon.gps.ui.SlideActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/13348663',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '首页-广告弹窗',
        matches: '[id="android:id/content"] >2 RelativeLayout > ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13358586',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '运动圈-广告弹窗',
        matches: '[id="android:id/content"] >4 FrameLayout > ImageView + FrameLayout > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13348663',
        _uniqueKey: 3
      },
      ],
    },
  ],
});