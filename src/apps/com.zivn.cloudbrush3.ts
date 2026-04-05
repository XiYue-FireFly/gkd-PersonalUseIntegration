import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zivn.cloudbrush3',
  name: '书法字典大全',
  groups: [
{
      key: 3,
      name: '分段广告-信息流广告',
      activityIds: 'com.zivn.cloudbrush3.app.HomeActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击关闭',
        matches: '@View[clickable=true] < FrameLayout  -2 FrameLayout [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13425305',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[不感兴趣]',
        matches: '@LinearLayout > [id="com.byted.pangle.m:id/tt_item_tv"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13425306',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击【x】',
        matches: '@View[clickable=true] < FrameLayout  -2 FrameLayout [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13425305',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击【不感兴趣】',
        matches: '@LinearLayout > [id="com.byted.pangle.m:id/tt_item_tv"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13425306',
        preKeys: 0,
        _uniqueKey: 3
      },
      ],
    },
  ],
});