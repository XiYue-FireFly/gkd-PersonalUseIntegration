import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaofeiji.app.disk',
  name: '小飞机网盘',
  groups: [
{
      key: 1,
      name: '分段广告',
      desc: '点击关闭-点击不感兴趣',
      rules: [
      {
        key: 0,
        activityIds: 'com.xiaofeiji.app.disk.MainActivity',
        matches: '@Image[visibleToUser=true] < View + View >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13857392',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.xiaofeiji.app.disk.MainActivity',
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13857537',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.xiaofeiji.app.disk.MainActivity',
        matches: '[id="android:id/content"] >5 [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13857537',
        preKeys: 0,
        _uniqueKey: 2
      },
      ],
    },
  ],
});