import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
{
      key: 1,
      name: '局部广告-主页面上方广告',
      enable: false,
      activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
      snapshotUrls: 'https://i.gkd.li/i/12668813',
      rules: [
      {
        key: 0,
        matches: '[id="com.intsig.camscanner:id/card_ad_tag"] + [id="com.intsig.camscanner:id/card_close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-开通会员',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[vid="iv_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/16761285',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.guide.CancelAdShowCnGuidePurchaseActivity',
        matches: '[vid="iv_drop_cnl_close"]',
        snapshotUrls: 'https://i.gkd.li/i/17002087',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="iv_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/16761285',
        exampleUrls: 'https://e.gkd.li/5f628895-e214-4a0b-8344-14f3d8c20807',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.guide.CancelAdShowCnGuidePurchaseActivity',
        matches: '[vid="iv_drop_cnl_close"]',
        snapshotUrls: 'https://i.gkd.li/i/17002087',
        exampleUrls: 'https://e.gkd.li/e9a6775a-be51-4aca-b3cd-0b496efe2f0c',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '通知提示-关闭[发现新截图]提示',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: '.mainmenu.mainactivity.MainActivity',
        matches: 'RelativeLayout[vid="rl_screenshot"] + ImageView[vid="iv_esc"]',
        snapshotUrls: 'https://i.gkd.li/i/16975714',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.mainmenu.mainactivity.MainActivity',
        matches: 'RelativeLayout[vid="rl_screenshot"] + ImageView[vid="iv_esc"]',
        snapshotUrls: 'https://i.gkd.li/i/16975714',
        exampleUrls: 'https://e.gkd.li/c66080aa-1758-4a69-9752-aa1373d7f2b5',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});