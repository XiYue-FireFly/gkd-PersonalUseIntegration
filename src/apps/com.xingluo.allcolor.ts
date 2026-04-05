import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingluo.allcolor',
  name: '一起来涂色',
  groups: [
{
      key: 1,
      name: '分段广告-底部穿山甲广告',
      desc: '点击卡片广告x关闭按钮-关闭反馈理由弹窗',
      activityIds: ['com.cccgame.android.MainActivity', 'com.bytedance.sdk.openadsdk.core.dislike.ui.c'],
      rules: [
      {
        key: 1,
        matches: '@Image[childCount=0][visibleToUser=true] < View[childCount=1] + View[childCount=2] >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12640359',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@Image[id=null] < View -2 View > View > View > TextView[text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12640362',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^="dislike"] + FrameLayout >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12640374',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@Image[id=null] < View - View > View + View > TextView[text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12640406',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '穿山甲广告-反馈理由',
        matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/12640358',
        preKeys: [1,2,3,4],
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: ['[text="广告"] < * - View < * - View > Image[id=null]'],
        snapshotUrls: ['https://i.gkd.li/i/12640359'],
        _uniqueKey: 6
      },
      {
        key: 7,
        matches: ['@Image[id=null] < View -(2) View > View > View > TextView[text="广告"]'],
        snapshotUrls: ['https://i.gkd.li/i/12640362'],
        _uniqueKey: 7
      },
      {
        key: 8,
        matches: ['@View[id=null] < FrameLayout[desc^="dislike"] + FrameLayout >(2) TextView[text="广告"]'],
        snapshotUrls: ['https://i.gkd.li/i/12640374'],
        _uniqueKey: 8
      },
      {
        key: 9,
        matches: ['@Image[id=null] < View - View > View + View > TextView[text="广告"]'],
        snapshotUrls: ['https://i.gkd.li/i/12640406'],
        _uniqueKey: 9
      },
      ],
    },
  ],
});