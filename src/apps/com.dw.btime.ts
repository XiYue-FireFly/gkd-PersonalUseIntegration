import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dw.btime',
  name: '亲宝宝',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.dw.btime.MainHomeTabActivity',
        matches: '[id="com.dw.btime:id/iv_overlay_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12889448',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.dw.btime:id/iv_overlay_close"][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-横幅广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.dw.btime.MainHomeTabActivity',
        matches: '[id="com.dw.btime:id/old_baby_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12889450',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.dw.btime:id/old_baby_close"][clickable=true]',
        _uniqueKey: 1
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
        activityIds: '.base_library.dialog.DWBaseDialog',
        matches: '[id="com.dw.btime:id/iv_upgrade_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12911011',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[text="立即更新"] -3 [id="com.dw.btime:id/iv_upgrade_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});