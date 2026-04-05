import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '@[clickable=true] > [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/14668997',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<=5]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.heytap.upgrade.ui.UpgradeActivity', 'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity'],
        matches: '[text="发现软件商店新版本"]',
        snapshotUrls: ['https://i.gkd.li/i/13455965', 'https://i.gkd.li/i/23688317'],
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.heytap.market:id/tv_titile"][text="发现软件商店新版本"]',
        snapshotUrls: ['https://i.gkd.li/i/13455965', 'https://i.gkd.li/i/14583583'],
        action: 'back',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-右下角广告悬浮卡片',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
        matches: '@[desc="关闭"] <2 [vid="view_id_float_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/14469932',
        exampleUrls: 'https://m.gkd.li/57941037/51493144-2758-4bc7-b2b7-cc85c04c6cc1',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[desc="关闭"][clickable=true] <2 [vid="view_id_float_ad"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});