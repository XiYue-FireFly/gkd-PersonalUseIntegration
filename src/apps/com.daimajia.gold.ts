import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.daimajia.gold',
  name: '稀土掘金',
  groups: [
{
    key: 1,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          matches: [
              '[text="发现新版本"]',
              '[id="com.daimajia.gold:id/iv_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13498703',
      },
      { key: 0, matches: '@[id="com.daimajia.gold:id/iv_close"] -n LinearLayout [id="com.daimajia.gold:id/tv_title"][text="发现新版本"]' },
    ],
  }
  ],
});
