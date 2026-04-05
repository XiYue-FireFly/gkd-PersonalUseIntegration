import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.TuHu.android',
  name: '途虎养车',
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
        activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
        matches: '@[id="cn.TuHu.android:id/imgClose"] - [id="cn.TuHu.android:id/rlContent"] > [id="cn.TuHu.android:id/img_jump"]',
        snapshotUrls: 'https://i.gkd.li/i/13228818',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="cn.TuHu.android:id/imgClose"] - [id="cn.TuHu.android:id/rlContent"] > [id="cn.TuHu.android:id/img_jump"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'cn.TuHu.Activity.tuhutab.TuHuTabActivity',
        matches: '[id="cn.TuHu.android:id/imgClose"]',
        snapshotUrls: ['https://i.gkd.li/i/13228796', 'https://i.gkd.li/i/13256535'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="cn.TuHu.android:id/imgClose"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});