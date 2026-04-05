import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hanweb.android.zhejiang.activity',
  name: '浙里办',
  groups: [
{
      key: 1,
      name: '更新提示',
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[id="com.hanweb.android.zhejiang.activity:id/iv_cancel"] -2 * >2 [text="发现新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/13402048',
        actionMaximum: 1,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'LinearLayout[childCount=2] > LinearLayout[childCount=2] > [text="立即升级"]',
        snapshotUrls: 'https://i.gkd.li/i/13520598',
        actionMaximumKey: 0,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="版本更新"] - [id="com.hanweb.android.zhejiang.activity:id/rl_back"]',
        snapshotUrls: 'https://i.gkd.li/i/13521059',
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="版本更新"] - [id="com.hanweb.android.zhejiang.activity:id/rl_back"]',
        snapshotUrls: 'https://i.gkd.li/i/13521059',
        preKeys: 1,
        _uniqueKey: 3
      },
      ],
    },
  ],
});