import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
{
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 1,
        matches: '[id="android:id/content"] > FrameLayout[childCount=4] >3 FrameLayout[childCount=4] > RelativeLayout[childCount=1] > View[childCount=0][text=null][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13197655',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.UCMobile.adn_jingdong_sdk:id/animation_view"]',
        snapshotUrls: 'https://i.gkd.li/i/16494884',
        exampleUrls: 'https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 0,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13188653',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 3,
        activityIds: 'com.uc.browser.InnerUCMobile',
        matches: '[id="com.UCMobile.adn_jingdong_sdk:id/animation_view"]',
        snapshotUrls: 'https://i.gkd.li/i/16494884',
        exampleUrls: 'https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 0,
      name: '分段广告-信息流广告',
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: [
      {
        key: 0,
        matches: 'TextView[text="广告"] +n ImageView[desc="不感兴趣"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12880737', 'https://i.gkd.li/i/12881751'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text^="屏蔽"][text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12880772', 'https://i.gkd.li/i/12881307'],
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.uc.browser.InnerUCMobile',
        matches: '@ImageView - LinearLayout >n [text="开启消息通知"]',
        snapshotUrls: 'https://i.gkd.li/i/12880812',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView - LinearLayout >n [text="开启消息通知"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '其他-请求添加桌面快捷方式弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.uc.browser.InnerUCMobile',
        matches: '@ImageView + [text^="添加"][text$="到桌面"]',
        snapshotUrls: 'https://i.gkd.li/i/12880983',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView + [text^="添加"][text$="到桌面"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});