import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
{
      key: 2,
      name: '局部广告-右下角小广告',
      activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12498315',
      rules: [
      {
        key: 0,
        matches: '[id="com.cmcc.cmvideo:id/iv_right_bottom_close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.cmcc.cmvideo:id/btn_update_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13276116',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.cmcc.cmvideo:id/btn_update_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13276127',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.cmcc.cmvideo:id/base_dialog_left_btn"][text="以后再说"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
        matches: '[vid="iv_big_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16503612',
        exampleUrls: 'https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb',
        matchRoot: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
        matches: '[vid="iv_big_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16503612',
        exampleUrls: 'https://e.gkd.li/ece7eb54-9b9b-40e2-9402-fc350f4734bb',
        fastQuery: true,
        matchRoot: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});