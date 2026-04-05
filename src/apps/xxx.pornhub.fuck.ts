import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'xxx.pornhub.fuck',
  name: 'JavDB',
  groups: [
{
      key: 1,
      name: '通知提示-公告弹窗',
      desc: '点击[知道了]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.MainActivity',
        matches: '@Button[desc="知道了"][visibleToUser=true] <3 View < View < View < View < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14559882',
        exampleUrls: 'https://m.gkd.li/57941037/ae1792dd-210b-4ac2-bfce-c2081ed03498',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="公告"] + * + [desc="知道了"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});