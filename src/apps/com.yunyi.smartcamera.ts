import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yunyi.smartcamera',
  name: '云蚁物联',
  groups: [
{
      key: 1,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.ants360.yicamera.activity.MainActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/24979355',
        exampleUrls: 'https://e.gkd.li/ad388d03-bb0a-44a4-92ee-af37b83776da',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.xiaoyi.yiplayer.ui.PlayerActivity',
        matches: '@[vid="ivClose"] - [text="专属福利"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24979364',
        exampleUrls: 'https://e.gkd.li/248a2243-5323-4a21-bed2-25f6afc8a88b',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: ['[text*="广告"][visibleToUser=true]', '[text="关闭"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/24989298',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/24989256',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[vid="iv_ad_logo"] - [vid="iv_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/25016571',
        fastQuery: true,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 2,
      name: '局部广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.ants360.yicamera.activity.MainActivity',
        matches: 'ImageView[childCount=0] < @* - * > [text^="立即" || text*="了解更多" || text*="快手"][visibleToUser=true] <<n [vid="native_ad_container"]',
        snapshotUrls: ['https://i.gkd.li/i/24979363', 'https://i.gkd.li/i/24989254', 'https://i.gkd.li/i/24989255'],
        exampleUrls: 'https://e.gkd.li/0f5246d3-42c4-486d-9694-f90dd19a22d2',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '权限提示-通知权限',
      rules: [
      {
        key: 0,
        activityIds: 'com.ants360.yicamera.activity.MainActivity',
        matches: '[text="开启通知"][childCount=0] +n [text="暂不开启"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/25017451',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});