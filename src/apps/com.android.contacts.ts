import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.contacts',
  name: '通讯录与拨号',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.mobile.businesshall.ui.common.RecommendPopupActivity',
        matches: '[vid="img_close_btn"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14321032',
        exampleUrls: 'https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.mobile.businesshall.ui.common.RecommendPopupActivity',
        matches: '[vid="img_close_btn"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14321032',
        exampleUrls: 'https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      desc: '点击[取消]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[text="取消"] +2 [text="更新"]',
        snapshotUrls: 'https://i.gkd.li/i/14469082',
        exampleUrls: 'https://m.gkd.li/57941037/803695f8-48e1-43e8-8841-ec0288393489',
        _uniqueKey: 0
      },
      ],
    },
  ],
});