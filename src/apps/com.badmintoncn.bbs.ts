import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.badmintoncn.bbs',
  name: '中羽在线',
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
        name: '红包弹窗',
        activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
        matches: '[id="com.badmintoncn.bbs:id/iv_close_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/13635224',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '红包弹窗-1',
        activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
        matches: '[id="com.badmintoncn.bbs:id/iv_close_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/13635224',
        fastQuery: true,
        _uniqueKey: 1,
        _uniqueName: '红包弹窗-1',
        name: '红包弹窗-1'
      },
      ],
    },
  ],
});