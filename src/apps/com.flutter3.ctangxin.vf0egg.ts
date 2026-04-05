import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.flutter3.ctangxin.vf0egg',
  name: '糖心Vlog',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      activityIds: 'com.example.flutter3_frame.MainActivity',
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: 'FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]',
        snapshotUrls: 'https://i.gkd.li/i/12836891',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-公告弹窗',
      activityIds: 'com.example.flutter3_frame.MainActivity',
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '[desc="公告"] +2 [desc="取消"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12836854',
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
  ],
});