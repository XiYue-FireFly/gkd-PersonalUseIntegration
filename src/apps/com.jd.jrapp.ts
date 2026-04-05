import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
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
        activityIds: '.bm.mainbox.main.MainActivity',
        matches: 'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13249998',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.bm.common.web.ui.WebActivity',
        matches: '@View - * > [visibleToUser=true][text="开启并订阅通知"] <<n [id="com.jd.jrapp:id/webview"]',
        snapshotUrls: 'https://i.gkd.li/i/13255656',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
        matches: 'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13249998',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.jd.jrapp.bm.common.web.ui.WebActivity',
        matches: 'View[text="开启并订阅通知"] < View + View[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13255656',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.bm.mainbox.main.MainActivity',
        matches: '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/13628364',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '评价提示-满意度打分弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.dy.api.JRDynamicPickerActivity',
        matches: '@ImageView[clickable=true] - [text$="满意度打几分？"]',
        snapshotUrls: 'https://i.gkd.li/i/13804561',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="满意度打几分"] + ImageView',
        _uniqueKey: 1
      },
      ],
    },
  ],
});