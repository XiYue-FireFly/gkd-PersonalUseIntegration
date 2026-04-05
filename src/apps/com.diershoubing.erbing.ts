import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.diershoubing.erbing',
  name: '二柄',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '@[id$="tt_splash_skip_btn"] <<n [vid="containerV"]',
        snapshotUrls: ['https://i.gkd.li/i/13378853', 'https://i.gkd.li/i/13546165'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/13538207',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid="containerV"]',
        snapshotUrls: 'https://i.gkd.li/i/13857307',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 6,
      name: '分段广告',
      activityIds: '.activity.MainReActivity',
      fastQuery: true,
      rules: [
      {
        key: 1,
        matches: '[text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13868396',
        exampleUrls: 'https://e.gkd.li/921d559f-6535-4d54-9bb2-8bbc82a6f2e1',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13868401',
        exampleUrls: 'https://e.gkd.li/e6818e93-3fab-4afa-95b9-0ba38ea7f2db',
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.diershoubing.erbing:id/mainV"] >n [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13868396',
        exampleUrls: 'https://m.gkd.li/47232102/5498dc61-9f29-42c6-a75b-ac8471e48328',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13868401',
        preKeys: 1,
        _uniqueKey: 4
      },
      ],
    },
  ],
});