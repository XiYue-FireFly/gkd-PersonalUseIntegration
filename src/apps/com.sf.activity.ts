import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
{
    key: 1,
    name: '更新提示',
    activityIds: '.MainActivity',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
          key: 0,
          matches: '@[text="取消"] < ViewGroup - ScrollView >(2) [text*="新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/12642445',
      },
      {
          key: 1,
          fastQuery: true,
          matches: '@Button[desc="取消"] - ViewGroup >3 [visibleToUser=true][text="立即升级"] <<n [id="com.sf.activity:id/rnRootLayout"]',
          snapshotUrls: 'https://i.gkd.li/i/13291144',
      },
      {
          key: 1,
          matches: '@[desc="取消"] - ViewGroup >n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13291144',
      },
    ],
  },
{
    key: 2,
    name: '其他-专属月报弹窗',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
          activityIds: 'com.sf.activity.MainActivity',
          matches: '[id="MonthReportDialogCloseBtn"] > ImageView',
          exampleUrls: 'https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a',
          snapshotUrls: 'https://i.gkd.li/i/12642441',
      },
      { key: 0, matches: '[id="MonthReportDialogCloseBtn"] > ImageView' },
    ],
  },
{
    key: 3,
    name: '全屏广告-弹窗广告',
    desc: '点击关闭',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          key: 0,
          activityIds: 'com.sf.activity.MainActivity',
          matches: '@Button[id="BmsAdDialogViewCloseButton"] <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid="rnRootLayout"]',
          exampleUrls: 'https://e.gkd.li/3be50f7b-5696-47c9-95cc-ef46f8531967',
          snapshotUrls: [
              'https://i.gkd.li/i/14502128',
              'https://i.gkd.li/i/17869485',
          ],
      },
    ],
  }
  ],
});
