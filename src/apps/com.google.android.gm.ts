import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gm',
  name: 'Gmail',
  groups: [
{
      key: 2,
      name: '分段广告-信息流广告',
      desc: '点击广告选项并完成屏蔽操作',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 1,
        matches: '[vid="basic_ad_teaser_info_icon" || vid="button_chip_ad_teaser_info_icon"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13255698', 'https://i.gkd.li/i/25542293'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '②点击[屏蔽]',
        matches: '@Button[clickable=true][text="屏蔽此广告" || text^="Block" || desc="屏蔽"] <<n [vid="my_ad_center_dialog"]',
        snapshotUrls: ['https://i.gkd.li/i/13255700', 'https://i.gkd.li/i/13724271', 'https://i.gkd.li/i/20585351'],
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '③点击[继续]',
        matches: '@Button[clickable=true][text="继续" || text="Continue"] <<n [id="com.google.android.gm:id/my_ad_center_dialog"]',
        snapshotUrls: ['https://i.gkd.li/i/13255701', 'https://i.gkd.li/i/13724287'],
        preKeys: [2],
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '④x掉',
        matches: '[vid="my_ad_center_close_icon"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13263279', 'https://i.gkd.li/i/25543406'],
        preKeys: [3],
        _uniqueKey: 4
      },
      {
        key: 0,
        matches: '[id="com.google.android.gm:id/basic_ad_teaser_info_icon" || id="com.google.android.gm:id/button_chip_ad_teaser_info_icon"]',
        snapshotUrls: ['https://i.gkd.li/i/13255698', 'https://i.gkd.li/i/13255698'],
        _uniqueKey: 0
      },
      {
        key: 5,
        matches: 'Button[visibleToUser=true][text="屏蔽此广告" || text^="Block" || desc="屏蔽"] <<n [vid="my_ad_center_dialog"]',
        snapshotUrls: ['https://i.gkd.li/i/13255700', 'https://i.gkd.li/i/13724271', 'https://i.gkd.li/i/20585351'],
        preKeys: [0],
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: 'Button[visibleToUser=true][text="继续" || text="Continue"] <<n [id="com.google.android.gm:id/my_ad_center_dialog"]',
        snapshotUrls: ['https://i.gkd.li/i/13255701', 'https://i.gkd.li/i/13724287'],
        preKeys: [1],
        _uniqueKey: 6
      },
      {
        key: 7,
        matches: '[id="com.google.android.gm:id/my_ad_center_close_icon"]',
        snapshotUrls: 'https://i.gkd.li/i/13263279',
        preKeys: [2],
        _uniqueKey: 7
      },
      {
        key: -1,
        name: '点击广告扩展-1',
        matches: '[id="com.google.android.gm:id/button_chip_ad_teaser_info_icon"]',
        snapshotUrls: 'https://i.gkd.li/i/13255698',
        fastQuery: true,
        _uniqueKey: -1
      },
      {
        key: 8,
        name: '点击广告扩展-2',
        matches: '[id="com.google.android.gm:id/basic_ad_teaser_info_icon"]',
        snapshotUrls: 'https://i.gkd.li/i/13255698',
        fastQuery: true,
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '广告中心-点击屏蔽',
        matches: 'Button[text="屏蔽此广告"||text^="Block"]',
        snapshotUrls: ['https://i.gkd.li/i/13255700', 'https://i.gkd.li/i/13724271'],
        preKeys: [-1,0],
        _uniqueKey: 9
      },
      {
        key: 10,
        name: '点击继续确认屏蔽',
        matches: 'Button[text="继续"||text="Continue"]',
        snapshotUrls: ['https://i.gkd.li/i/13255701', 'https://i.gkd.li/i/13724287'],
        preKeys: 1,
        _uniqueKey: 10
      },
      {
        key: 11,
        name: '关闭弹窗',
        matches: '[id="com.google.android.gm:id/my_ad_center_close_icon"]',
        snapshotUrls: 'https://i.gkd.li/i/13263279',
        preKeys: 2,
        fastQuery: true,
        _uniqueKey: 11
      },
      ],
    },
  ],
});