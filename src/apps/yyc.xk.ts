import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'yyc.xk',
  name: '星空视频壁纸',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: '[vid="gm信息流广告关闭"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20863704',
        exampleUrls: 'https://e.gkd.li/972de09c-a399-4b7d-b7c4-e03c072a7170',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '腾讯SDK',
        matches: '[vid="XK"] >n FrameLayout[childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/14011298',
        _uniqueKey: 1
      },
      ],
    },
  ],
});