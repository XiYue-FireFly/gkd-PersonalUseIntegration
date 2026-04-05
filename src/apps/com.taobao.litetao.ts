import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.litetao',
  name: '淘特',
  groups: [
{
      key: 0,
      name: '开屏广告',
      activityIds: 'com.taobao.ltao.maintab.MainFrameActivity',
      order: -10,
      snapshotUrls: 'https://i.gkd.li/i/12774851',
      rules: [
      {
        key: 0,
        matches: '[id="com.taobao.litetao:id/root_layout"] > TextView[text^="还剩"&&text$="秒"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '更新提示-版本升级弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: ['com.taobao.ltao.maintab.MainFrameActivity', '.launcher.ALiFlutterActivityCompat'],
        matches: '[id = "com.taobao.litetao:id/update_imageview_cancel_v2"]',
        snapshotUrls: ['https://i.gkd.li/i/12843615', 'https://i.gkd.li/i/12843614'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id = "com.taobao.litetao:id/update_imageview_cancel_v2"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});