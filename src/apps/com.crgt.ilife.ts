import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.crgt.ilife',
  name: '国铁吉讯',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.crgt.ilife.ui.main.MainPageView',
        matches: 'FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > @FrameLayout[childCount=1][visibleToUser=true] > ImageView[childCount=0][text=null] <<n [vid="home_banner"]',
        snapshotUrls: 'https://i.gkd.li/i/16450332',
        exampleUrls: 'https://e.gkd.li/3026504f-acb7-4f58-b171-ab664b2caf27',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.crgt.ilife.ui.main.MainPageView',
        matches: '@FrameLayout[childCount=1] - LinearLayout > [text="查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/16485384',
        exampleUrls: 'https://e.gkd.li/15dc994f-ab27-481f-afbe-f6b3f18dde11',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.crgt.ilife.ui.main.MainPageView',
        matches: 'FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > @FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
        snapshotUrls: 'https://i.gkd.li/i/16450332',
        exampleUrls: 'https://e.gkd.li/3026504f-acb7-4f58-b171-ab664b2caf27',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.crgt.ilife.ui.main.MainPageView',
        matches: '[vid="iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16581549',
        exampleUrls: 'https://e.gkd.li/43ccfd78-67d7-4dba-a25f-a2f5d62f9c40',
        _uniqueKey: 0
      },
      ],
    },
  ],
});