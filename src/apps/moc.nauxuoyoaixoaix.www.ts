import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'moc.nauxuoyoaixoaix.www',
  name: '晓晓优选',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      actionCdKey: 0,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[id$="tt_splash_skip_btn"] <<n [vid="adsFl"]',
        snapshotUrls: 'https://i.gkd.li/i/13476862',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[vid="adsFl"]', '[text^="跳过"][text.length<=10]'],
        snapshotUrls: 'https://i.gkd.li/i/13625367',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@View <3 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [vid="adsFl"]',
        snapshotUrls: 'https://i.gkd.li/i/13820450',
        _uniqueKey: 2
      },
      ],
    },
  ],
});