import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flutter3.ctangxin.vf0egg',
  name: '糖心Vlog',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionCd: 100,
      resetMatch: 'app',
      activityIds: 'com.example.flutter3_frame.MainActivity',
      rules: [
        {
          action: 'back',
          matches: 'FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]',
          snapshotUrls: 'https://i.gkd.li/i/12836891',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-公告弹窗',
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: 'com.example.flutter3_frame.MainActivity',
      rules: [
        {
          action: 'back',
          matches: '[desc="公告"] +2 [desc="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12836854',
        },
      ],
    },
  ],
});
