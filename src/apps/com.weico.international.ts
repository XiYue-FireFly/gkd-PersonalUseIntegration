import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
{
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        snapshotUrls: ['https://i.gkd.li/i/14549281', 'https://i.gkd.li/i/14549328', 'https://i.gkd.li/i/18792649', 'https://i.gkd.li/i/20990401'],
        order: -1,
        anyMatches: ['@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]', '@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        excludeMatches: ['@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]', '@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]'],
        snapshotUrls: ['https://i.gkd.li/i/14661654', 'https://i.gkd.li/i/14661622'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[clickable=true] + * > [text="跳过"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14549281', 'https://i.gkd.li/i/14549328'],
        order: -1,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14661654', 'https://i.gkd.li/i/14661622'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 0,
      name: '分段广告-信息流广告',
      desc: '关闭主页、搜索页的信息流广告',
      enable: false,
      activityIds: ['com.weico.international.activity.MainFragmentActivity', 'com.weico.international.ui.search.SearchActivity', 'com.weico.international.ui.detail.StatusDetailV3Activity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击广告卡片右上角[x]',
        matches: '[vid="item_timeline_ad_action"]',
        snapshotUrls: ['https://i.gkd.li/import/12505753', 'https://i.gkd.li/import/12505763', 'https://i.gkd.li/import/12857202', 'https://i.gkd.li/i/14444744', 'https://i.gkd.li/i/16667201'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击不感兴趣',
        matches: '[text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/import/12505755', 'https://i.gkd.li/import/12505764', 'https://i.gkd.li/i/14798365', 'https://i.gkd.li/i/16667202', 'https://i.gkd.li/i/19226502', 'https://i.gkd.li/i/19310848'],
        preKeys: [0],
        action: 'clickCenter',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击卡片广告右上角[x]',
        matches: '[vid="item_timeline_ad_action"]',
        snapshotUrls: ['https://i.gkd.li/i/12857202', 'https://i.gkd.li/i/14444744', 'https://i.gkd.li/i/16667201'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击不感兴趣-1',
        matches: '@View[clickable=true] > [visibleToUser=true][text="不感兴趣"] <<n [vid="design_bottom_sheet"]',
        snapshotUrls: ['https://i.gkd.li/i/12505755', 'https://i.gkd.li/i/12505764', 'https://i.gkd.li/i/14798365', 'https://i.gkd.li/i/16667202'],
        preKeys: [0],
        _uniqueKey: 3,
        _uniqueName: '点击不感兴趣-1',
        name: '点击不感兴趣-1'
      },
      {
        key: 4,
        name: '点击广告卡片右上角[x]-1',
        matches: '[vid="item_timeline_ad_action"]',
        snapshotUrls: ['https://i.gkd.li/i/12857202', 'https://i.gkd.li/i/14444744'],
        _uniqueKey: 4,
        _uniqueName: '点击广告卡片右上角[x]-1',
        name: '点击广告卡片右上角[x]-1'
      },
      {
        key: 5,
        name: '点击不感兴趣-2',
        matches: '@View[clickable=true] > [text="不感兴趣"] <<n [vid="design_bottom_sheet"]',
        snapshotUrls: ['https://i.gkd.li/i/12505755', 'https://i.gkd.li/i/12505764', 'https://i.gkd.li/i/14798365'],
        preKeys: [0],
        _uniqueKey: 5,
        _uniqueName: '点击不感兴趣-2',
        name: '点击不感兴趣-2'
      },
      ],
    },
  ],
});