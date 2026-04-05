import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.livelab',
  name: '纷玩岛',
  groups: [
{
    key: 1,
    name: '全屏广告-弹窗广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'cn.com.livelab.MainActivity',
          matches: '@Button[clickable=true][childCount=0][visibleToUser=true] <2 View < View < View < View < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/13258873',
      },
      { key: 0, matches: 'View >n View[childCount=2] > ImageView + Button' },
    ],
  }
  ],
});
