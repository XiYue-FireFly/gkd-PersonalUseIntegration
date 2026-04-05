import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tuying.kuimg.rjm',
  name: '热剧猫',
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
          key: 0,
          activityIds: 'com.tuying.kuimg.rjm.MainActivity',
          matches: 'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13166088',
      },
      {
          key: 1,
          activityIds: 'com.tuying.kuimg.rjm.MainActivity',
          matches: [
              '[text="广告"]',
              '@ViewGroup > [text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13166086',
      },
      {
          key: 0,
          matches: '[id="com.tuying.kuimg.rjm:id/ksad_tk_view"] >n @ViewGroup[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13166088',
      },
      {
          key: 1,
          matches: '[id="com.tuying.kuimg.rjm:id/ksad_tk_view"] >n @ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/13166086',
      },
    ],
  }
  ],
});
