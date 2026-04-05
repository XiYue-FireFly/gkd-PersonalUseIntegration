import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="skip"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/16828031', 'https://i.gkd.li/i/16828053'],
        exampleUrls: 'https://e.gkd.li/670b95f6-12d0-4787-9158-98ac52eb1641',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
        matches: 'FrameLayout >2 View[childCount=2] >2 View[childCount=2] > @ImageView[clickable=true][index=0][visibleToUser=true] <<n [vid="flutter_container"]',
        snapshotUrls: 'https://i.gkd.li/i/16828039',
        exampleUrls: 'https://e.gkd.li/9d8a1bb4-40ab-4312-8f5b-ef224e18720e',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});