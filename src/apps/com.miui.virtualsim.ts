import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.virtualsim',
  name: '全球上网',
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
        activityIds: 'com.mobile.businesshall.ui.common.RecommendPopupActivity',
        matches: '[vid="img_close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/15981731',
        exampleUrls: 'https://m.gkd.li/57941037/76a7cf39-06f1-4e1b-9bb6-fd8b1ad25e8e',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.miui.virtualsim:id/img_close_btn"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});