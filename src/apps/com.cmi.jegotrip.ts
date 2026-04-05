import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmi.jegotrip',
  name: '无忧行',
  groups: [
{
      key: 2,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.BottomTabsActivity',
        matches: '[id="com.cmi.jegotrip:id/ig_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13631904',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.cmi.jegotrip:id/ig_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13631904',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '权限提示-定位权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.cmi.jegotrip.ui.BottomTabsActivity',
        matches: ['[text="申请定位权限说明"]', '[id="com.cmi.jegotrip:id/btn_cancel"]'],
        snapshotUrls: 'https://i.gkd.li/i/13232766',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="申请定位权限说明"] < LinearLayout +2 LinearLayout [id="com.cmi.jegotrip:id/btn_cancel"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '权限提示-权限申请弹窗',
      desc: '点击[取消]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'pub.devrel.easypermissions.AppSettingsDialogHolderActivity',
        matches: ['[text="权限申请"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/16233246',
        _uniqueKey: 0
      },
      ],
    },
  ],
});