import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
{
      key: 3,
      name: '局部广告-直播间广告',
      enable: false,
      activityIds: ['tv.douyu.view.activity.PlayerActivity', 'com.douyu.module.player.p.rambobase.RamboPlayerActivity'],
      rules: [
      {
        key: 5,
        name: '右下方悬浮广告-1',
        matches: 'ViewGroup[childCount=8] > ViewGroup[index=5] >4 RelativeLayout[visibleToUser=true] > ImageView[clickable=true][index=1]',
        snapshotUrls: 'https://i.gkd.li/i/13948990',
        excludeSnapshotUrls: 'https://i.gkd.li/i/14310474',
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '视频下方横幅广告-1',
        matches: '[id="android:id/content"] > RelativeLayout >2 FrameLayout > ViewGroup[childCount=4] > ImageView[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]',
        snapshotUrls: 'https://i.gkd.li/i/14667860',
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '右下方悬浮广告-2',
        matches: '@ImageView[visibleToUser=true][childCount=0] -(1,2) * >3 [text="推荐"]',
        snapshotUrls: ['https://i.gkd.li/i/14668232', 'https://i.gkd.li/i/17978451'],
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '右下方悬浮广告-3',
        matches: '@ImageView[clickable=true][visibleToUser=true] +(1,2) ViewGroup >2 [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16939767', 'https://i.gkd.li/i/24661966'],
        fastQuery: true,
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '右下方悬浮广告-4',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0][index=1] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="big_live_actions_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/16939767',
        fastQuery: true,
        _uniqueKey: 9
      },
      {
        key: 10,
        name: '视频下方横幅广告-2',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] - FrameLayout >2 [text="去看看" || text^="立即"]',
        snapshotUrls: ['https://i.gkd.li/i/14668232', 'https://i.gkd.li/i/18032754', 'https://i.gkd.li/i/24661966'],
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 11,
        name: '右下方悬浮广告-3-1',
        matches: '@ImageView[clickable=true][visibleToUser=true] +(1,2) ViewGroup >2 [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16939767', 'https://i.gkd.li/i/24661966'],
        exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
        fastQuery: true,
        _uniqueKey: 11,
        _uniqueName: '右下方悬浮广告-3-1',
        name: '右下方悬浮广告-3-1'
      },
      {
        key: 12,
        name: '右下方悬浮广告-4-1',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0][index=1] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid="big_live_actions_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/16939767',
        exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
        fastQuery: true,
        _uniqueKey: 12,
        _uniqueName: '右下方悬浮广告-4-1',
        name: '右下方悬浮广告-4-1'
      },
      {
        key: 13,
        name: '视频下方横幅广告-2-1',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] - FrameLayout >2 [text="去看看" || text^="立即"]',
        snapshotUrls: ['https://i.gkd.li/i/14668232', 'https://i.gkd.li/i/18032754', 'https://i.gkd.li/i/24661966'],
        exampleUrls: 'https://e.gkd.li/942ee7a5-43e1-4709-b967-7af1a6900e4c',
        fastQuery: true,
        _uniqueKey: 13,
        _uniqueName: '视频下方横幅广告-2-1',
        name: '视频下方横幅广告-2-1'
      },
      {
        key: 0,
        matches: 'ImageView < ViewGroup + @ViewGroup[childCount=1][clickable=true] > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/12892825', 'https://i.gkd.li/i/13037239', 'https://i.gkd.li/i/14692807'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ViewPager[childCount=3] + @View + ImageView + View',
        snapshotUrls: 'https://i.gkd.li/i/12892825',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'RelativeLayout[childCount=3] > ViewPager + @View + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13056107',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'ViewGroup[childCount=4] > View + ImageView + FrameLayout + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13056107',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: 'FrameLayout[childCount=2] > @ImageView - FrameLayout > RelativeLayout > WebView',
        snapshotUrls: 'https://i.gkd.li/i/13056107',
        _uniqueKey: 4
      },
      {
        key: 14,
        matches: 'ViewGroup[childCount=8] > ViewGroup[index=5] >4 RelativeLayout[visibleToUser=true] > ImageView[clickable=true][index=1]',
        snapshotUrls: ['https://i.gkd.li/i/13948990', 'https://i.gkd.li/i/14310474'],
        _uniqueKey: 14
      },
      {
        key: 15,
        matches: '[id="android:id/content"] > RelativeLayout >4 FrameLayout + ImageView',
        snapshotUrls: ['https://i.gkd.li/i/14668232', 'https://i.gkd.li/i/14668248', 'https://i.gkd.li/i/14667860'],
        _uniqueKey: 15
      },
      {
        key: 16,
        matches: '@ImageView[visibleToUser=true] -2 * >3 [text="推荐"]',
        snapshotUrls: 'https://i.gkd.li/i/14668232',
        fastQuery: true,
        _uniqueKey: 16
      },
      ],
    },
  ],
});