import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.delicloud.app.smartoffice',
  name: '得力e+',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text="跳过"][childCount=0][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14553055',
        exampleUrls: 'https://m.gkd.li/57941037/23262900-c52d-494a-9b7d-bb821025665a',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [vid="splash_container"]',
        snapshotUrls: ['https://i.gkd.li/i/13840775', 'https://i.gkd.li/i/13944086'],
        _uniqueKey: 1
      },
      ],
    },
  ],
});