import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.androidqqmail',
  name: 'QQ邮箱',
  groups: [
{
      key: -1,
      name: '开屏广告',
      desc: '点击跳过应用启动时的开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      order: -10,
      snapshotUrls: 'https://i.gkd.li/import/12775855',
      rules: [
      {
        key: 0,
        matches: 'RelativeLayout[childCount=3] > ImageView + @ImageView[clickable=true][visibleToUser=true] + FrameLayout[childCount>0]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 0,
      name: '分段广告-列表卡片广告',
      desc: '自动处理邮件列表中的卡片广告',
      enable: false,
      activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '英文版邮箱广告-点击Ads',
        matches: ['[id="com.tencent.androidqqmail:id/advertise_view_ad"]'],
        snapshotUrls: 'https://i.gkd.li/import/12842757',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[广告]',
        matches: 'LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/import/12775857',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="btn_advertise_click_area"]',
        snapshotUrls: 'https://i.gkd.li/i/17908070',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'ImageView < LinearLayout[width<130 && height<100][id!=null] < @FrameLayout[clickable=true][id!=null] - [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/24559942',
        _uniqueKey: 3
      },
      {
        key: 8,
        name: '点击[不感兴趣]',
        snapshotUrls: ['https://i.gkd.li/import/12775862', 'https://i.gkd.li/import/12842775', 'https://i.gkd.li/i/15051479', 'https://i.gkd.li/i/16824453', 'https://i.gkd.li/i/17908078'],
        preKeys: [0,1,2,3],
        anyMatches: ['[text="不感兴趣"]', '@FrameLayout > TextView[text="Not interested"]'],
        _uniqueKey: 8
      },
      {
        key: 4,
        name: '英文版邮箱广告-点击Ads-1',
        matches: '[id="com.tencent.androidqqmail:id/advertise_view_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/12842757',
        _uniqueKey: 4,
        _uniqueName: '英文版邮箱广告-点击Ads-1',
        name: '英文版邮箱广告-点击Ads-1'
      },
      {
        key: 6,
        name: '英文版邮箱广告-点击Not interested',
        matches: '@FrameLayout > TextView[text="Not interested"]',
        snapshotUrls: 'https://i.gkd.li/i/12842775',
        preKeys: [0],
        _uniqueKey: 6
      },
      {
        key: 5,
        name: '点击[广告]-1',
        matches: 'LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12775857',
        _uniqueKey: 5,
        _uniqueName: '点击[广告]-1',
        name: '点击[广告]-1'
      },
      {
        key: 7,
        matches: '[vid="btn_advertise_click_area"]',
        snapshotUrls: 'https://i.gkd.li/i/17908070',
        exampleUrls: 'https://e.gkd.li/acce3df3-9773-4b42-b468-4724a7851efe',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 9,
        matches: 'ImageView < LinearLayout[width<130 && height<100][id!=null] < @FrameLayout[clickable=true][id!=null] - [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/24559942',
        fastQuery: true,
        _uniqueKey: 9
      },
      {
        key: 10,
        name: '点击[不感兴趣]-1',
        matches: '[text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12775862', 'https://i.gkd.li/i/15051479', 'https://i.gkd.li/i/17908078'],
        preKeys: [0,1,2,3],
        _uniqueKey: 10,
        _uniqueName: '点击[不感兴趣]-1',
        name: '点击[不感兴趣]-1'
      },
      {
        key: 11,
        name: '英文版邮箱广告-点击Ads-2',
        matches: ['[id="com.tencent.androidqqmail:id/advertise_view_ad"]'],
        snapshotUrls: 'https://i.gkd.li/i/12842757',
        _uniqueKey: 11,
        _uniqueName: '英文版邮箱广告-点击Ads-2',
        name: '英文版邮箱广告-点击Ads-2'
      },
      {
        key: 12,
        name: '点击[不感兴趣]-2',
        matches: '[text="赞助商提供的广告"] < * < * >2 [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12775862', 'https://i.gkd.li/i/15051479'],
        preKeys: [0,1],
        _uniqueKey: 12,
        _uniqueName: '点击[不感兴趣]-2',
        name: '点击[不感兴趣]-2'
      },
      ],
    },
{
      key: 1,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
        matches: '[text="立刻开启"] - [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13043069',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="立刻开启"] - [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13043069',
        _uniqueKey: 1
      },
      ],
    },
  ],
});