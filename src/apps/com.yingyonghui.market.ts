import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yingyonghui.market',
  name: '应用汇',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          fastQuery: true,
          activityIds: 'com.yingyonghui.market.ui.MainActivity',
          matches: [
            '[text="广告"]',
            '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13538316',
        },
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.yingyonghui.market.ui.MainActivity',
          matches: [
            'ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13538316',
        },
      ],
    },
  ],
});
