import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddyc.lotterytool',
  name: '彩虹多多',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.ddyc.lotterytool.module.main.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '@ImageButton[clickable=true][childCount=0] < LinearLayout < FrameLayout < [parent=null]',
        snapshotUrls: 'https://i.gkd.li/i/13324555',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView - ImageButton[id="com.ddyc.lotterytool:id/arg"][text=null]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[text^="开启推送通知"] +2 LinearLayout [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13325888',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text^="开启推送通知"] +2 LinearLayout [text="以后再说"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});