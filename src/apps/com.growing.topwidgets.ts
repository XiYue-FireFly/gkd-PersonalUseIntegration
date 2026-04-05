import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.growing.topwidgets',
  name: '万能小组件 Top Widgets',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      activityIds: 'com.growing.topwidgets.home.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@ImageView < * - * > [text="立即打开"]',
        snapshotUrls: 'https://i.gkd.li/i/14892835',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView < * - * > [text="查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/14945536',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="ms_item_pre_render_large_iamge_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15137361',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] <(2,3,4) * >(2,3,4) [text="反馈"]',
        snapshotUrls: ['https://i.gkd.li/i/14945552', 'https://i.gkd.li/i/15286451', 'https://i.gkd.li/i/16703279'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^="立即" || text$="应用" || text="了解更多" || text="查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/14964868',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] <(2,3) * >(2,3) [text="反馈"]',
        snapshotUrls: ['https://i.gkd.li/i/14945552', 'https://i.gkd.li/i/15286451'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="android:id/content"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/14964868', 'https://i.gkd.li/i/14969910'],
        _uniqueKey: 3
      },
      ],
    },
  ],
});