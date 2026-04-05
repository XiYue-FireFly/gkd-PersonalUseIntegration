import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibolite',
  name: '微博极速版',
  groups: [
{
      key: 1,
      name: '分段广告-信息流广告',
      desc: '点击卡片广告右上角x图标,点击[不感兴趣]',
      activityIds: ['com.weico.international.activity.MainFragmentActivity', 'com.weico.international.ui.search.SearchActivity', 'com.weico.international.ui.detail.StatusDetailV3Activity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击卡片广告右上角x图标',
        matches: '[vid="item_timeline_ad_action"]',
        snapshotUrls: ['https://i.gkd.li/i/12738110', 'https://i.gkd.li/i/14996673', 'https://i.gkd.li/i/23097171'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[不感兴趣]',
        matches: '@View[clickable=true][childCount=1] > TextView[visibleToUser=true][text="不感兴趣"||text$="interest"] <<n [vid="design_bottom_sheet"]',
        snapshotUrls: ['https://i.gkd.li/i/12738132', 'https://i.gkd.li/i/13727657', 'https://i.gkd.li/i/14996679'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击广告卡片右上角x图标',
        matches: '[vid="item_timeline_ad_action"]',
        snapshotUrls: ['https://i.gkd.li/i/12738110', 'https://i.gkd.li/i/14996673'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击[不感兴趣]-1',
        matches: '@View[clickable=true][childCount=1] > TextView[text="不感兴趣"||text$="interest"] <<n [vid="design_bottom_sheet"]',
        snapshotUrls: ['https://i.gkd.li/i/12738132', 'https://i.gkd.li/i/13727657', 'https://i.gkd.li/i/14996679'],
        preKeys: 0,
        _uniqueKey: 3,
        _uniqueName: '点击[不感兴趣]-1',
        name: '点击[不感兴趣]-1'
      },
      ],
    },
{
      key: 2,
      name: '评价提示-APP评分弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.weico.international.activity.MainFragmentActivity',
        matches: '[id="com.sina.weibolite:id/ed_btn_negative"]',
        snapshotUrls: 'https://i.gkd.li/i/13727728',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.sina.weibolite:id/ed_btn_negative"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});