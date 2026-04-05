import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.antutu.ABenchMark',
  name: '安兔兔评测',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.android.module.app.ui.test.activity.ActivityTestResult',
        matches: '[text="广告"] +2 View > @TextView[childCount=0][index=1][clickable=true][visibleToUser=true] <<n [id="com.antutu.ABenchMark:id/ksad_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13234012',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="广告"] + TextView + View > TextView',
        _uniqueKey: 1
      },
      ],
    },
  ],
});