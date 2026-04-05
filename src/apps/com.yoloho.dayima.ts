import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yoloho.dayima',
  name: '大姨妈',
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
        snapshotUrls: ['https://i.gkd.li/i/14665571', 'https://i.gkd.li/i/13800282'],
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        name: '腾讯SDK',
        activityIds: '.activity.MainPageActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/13800255',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '腾讯SDK-1',
        matches: '[id="android:id/content"] >n FrameLayout[index=2] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13800255',
        _uniqueKey: 1,
        _uniqueName: '腾讯SDK-1',
        name: '腾讯SDK-1'
      },
      ],
    },
  ],
});