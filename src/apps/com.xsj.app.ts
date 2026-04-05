import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xsj.app',
  name: '星影视频',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        name: '腾讯广告',
        activityIds: ['com.xsj.app.MainActivity', 'com.qq.e.ads.ADActivity'],
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: ['https://i.gkd.li/i/13625504', 'https://i.gkd.li/i/13761165'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.qq.e.ads.ADActivity',
        matches: '@ImageView[clickable=true][childCount=0] - [text*="送福利啦"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13670176',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '腾讯广告-1',
        activityIds: ['com.xsj.app.MainActivity', 'com.qq.e.ads.ADActivity'],
        matches: 'ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: ['https://i.gkd.li/i/13625504', 'https://i.gkd.li/i/13761165'],
        _uniqueKey: 2,
        _uniqueName: '腾讯广告-1',
        name: '腾讯广告-1'
      },
      {
        key: 3,
        activityIds: 'com.qq.e.ads.ADActivity',
        matches: 'FrameLayout[childCount=3] > TextView[text!=""] + @ImageView[clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13670176',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '[desc="我知道了"]',
        snapshotUrls: 'https://i.gkd.li/i/13875711',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="我知道了"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});