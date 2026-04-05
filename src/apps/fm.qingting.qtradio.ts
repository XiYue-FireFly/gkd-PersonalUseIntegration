import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'fm.qingting.qtradio',
  name: '蜻蜓FM',
  groups: [
{
      key: 1,
      name: '局部广告-播放界面的广告',
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: '.QTRadioActivity',
        matches: '[id="fm.qingting.qtradio:id/view_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12640438',
        exampleUrls: 'https://e.gkd.li/bef1954c-a0c8-441e-ab77-6967089e906c',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.QTRadioActivity',
        matches: '@[id="fm.qingting.qtradio:id/iv_close"] + RelativeLayout >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12640981',
        exampleUrls: 'https://e.gkd.li/1562b618-074d-4f10-a1ae-c62c5390fd1a',
        _uniqueKey: 2
      },
      {
        key: 0,
        matches: '[id="fm.qingting.qtradio:id/view_ad_close"]',
        _uniqueKey: 0
      },
      {
        key: 3,
        matches: '@[id="fm.qingting.qtradio:id/iv_close"] + RelativeLayout > LinearLayout > TextView[text="广告"]',
        _uniqueKey: 3
      },
      ],
    },
  ],
});