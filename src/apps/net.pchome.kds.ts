import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.pchome.kds',
  name: 'kds宽带山',
  groups: [
{
      key: 1,
      name: '分段广告-应用内卡片广告',
      activityIds: 'net.pchome.kds.View.activity.TopicActivity2',
      rules: [
      {
        key: 0,
        matches: '@Image[text=""] < View +2 View > View > View > TextView',
        snapshotUrls: 'https://i.gkd.li/i/13043221',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13049609',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@LinearLayout > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13049609',
        preKeys: 0,
        _uniqueKey: 2
      },
      ],
    },
  ],
});