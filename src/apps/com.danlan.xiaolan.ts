import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.danlan.xiaolan',
  name: 'Blued极速版',
  groups: [
{
      key: 1,
      name: '青少年模式-附近的人-广告卡片',
      enable: false,
      activityIds: 'com.soft.blued.ui.home.HomeActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.danlan.xiaolan:id/ad_container"] >n [id="com.danlan.xiaolan:id/img_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13421613',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13421622',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '分段广告-卡片广告',
      activityIds: ['com.blued.android.core.ui.TerminalActivity', 'com.soft.blued.ui.home.HomeActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.danlan.xiaolan:id/img_close"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13421613', 'https://i.gkd.li/i/13421923'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/13421622', 'https://i.gkd.li/i/13422170'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.danlan.xiaolan:id/img_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13421923',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13422170',
        preKeys: [0],
        _uniqueKey: 3
      },
      ],
    },
  ],
});