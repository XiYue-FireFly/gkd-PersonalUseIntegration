import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xuexiaoyi.xxy',
  name: '学小易',
  groups: [
{
      key: 1,
      name: '分段广告-首页信息流广告',
      desc: '关闭首页信息流中的广告',
      enable: false,
      activityIds: ['com.xuexiaoyi.entrance.main.MainActivity', 'com.xuexiaoyi.platform.base.arch.RouterFragmentActivity', 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T'],
      rules: [
      {
        key: 0,
        name: '点击在下方的X',
        matches: ['[text="广告"] < View <2 View <n View[childCount>4] > View[childCount=1] > Image[text.length=0]'],
        snapshotUrls: ['https://i.gkd.li/import/13068836', 'https://i.gkd.li/import/13375502', 'https://i.gkd.li/import/13375559', 'https://i.gkd.li/i/14472483', 'https://i.gkd.li/i/15521090'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击在下方的X-2',
        matches: ['[text="广告"] <<n FrameLayout > [desc^="dislike"] > View'],
        snapshotUrls: ['https://i.gkd.li/i/15782668'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击在上方的X-类型1',
        matches: ['Image[text.length>=20] < View < View + View > Image[text.length=0]'],
        snapshotUrls: ['https://i.gkd.li/import/13068811', 'https://i.gkd.li/import/13202990', 'https://i.gkd.li/import/13266356', 'https://i.gkd.li/import/13266362', 'https://i.gkd.li/import/13457114', 'https://i.gkd.li/import/13457204'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击在上方的X-类型2',
        matches: ['[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View'],
        snapshotUrls: ['https://i.gkd.li/import/13266689'],
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击在内部的X',
        matches: 'View[text.length=4] - View > View > Image[text.length=0]',
        snapshotUrls: ['https://i.gkd.li/import/13457210', 'https://i.gkd.li/import/13457302'],
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '点击[反馈]',
        matches: '[text="广告"][visibleToUser=true] < * <n View +n [text="反馈"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14965789'],
        _uniqueKey: 5
      },
      {
        key: 10,
        name: '点击不感兴趣',
        matches: 'TextView[text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/import/13068819', 'https://i.gkd.li/import/13457380', 'https://i.gkd.li/i/14965790'],
        preKeys: [0,1,2,3,4,5],
        fastQuery: true,
        _uniqueKey: 10
      },
      {
        key: 6,
        name: '点击在下方的X-1',
        matches: 'View[text="广告"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]',
        snapshotUrls: ['https://i.gkd.li/i/13068836', 'https://i.gkd.li/i/13375502', 'https://i.gkd.li/i/13375559'],
        _uniqueKey: 6,
        _uniqueName: '点击在下方的X-1',
        name: '点击在下方的X-1'
      },
      {
        key: 7,
        name: '点击在上方的X-类型1-1',
        matches: 'Image[text.length>=20] < View < View + View > Image[text.length=0]',
        snapshotUrls: ['https://i.gkd.li/i/13068811', 'https://i.gkd.li/i/13202990', 'https://i.gkd.li/i/13266356', 'https://i.gkd.li/i/13266362', 'https://i.gkd.li/i/13457114', 'https://i.gkd.li/i/13457204'],
        _uniqueKey: 7,
        _uniqueName: '点击在上方的X-类型1-1',
        name: '点击在上方的X-类型1-1'
      },
      {
        key: 8,
        name: '点击在上方的X-类型2-1',
        matches: '[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View',
        snapshotUrls: 'https://i.gkd.li/i/13266689',
        _uniqueKey: 8,
        _uniqueName: '点击在上方的X-类型2-1',
        name: '点击在上方的X-类型2-1'
      },
      {
        key: 9,
        name: '点击在内部的X-1',
        matches: 'View[text.length=4] - View > View > Image[text.length=0]',
        snapshotUrls: ['https://i.gkd.li/i/13457210', 'https://i.gkd.li/i/13457302'],
        _uniqueKey: 9,
        _uniqueName: '点击在内部的X-1',
        name: '点击在内部的X-1'
      },
      {
        key: 11,
        name: '点击不感兴趣-1',
        matches: 'TextView[text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/13068819', 'https://i.gkd.li/i/13457380'],
        preKeys: [0,1,2,3],
        _uniqueKey: 11,
        _uniqueName: '点击不感兴趣-1',
        name: '点击不感兴趣-1'
      },
      {
        key: 12,
        name: '点击在下方的X-2-1',
        matches: ['View[text="广告"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]'],
        snapshotUrls: ['https://i.gkd.li/i/13068836', 'https://i.gkd.li/i/13375502', 'https://i.gkd.li/i/13375559'],
        _uniqueKey: 12,
        _uniqueName: '点击在下方的X-2-1',
        name: '点击在下方的X-2-1'
      },
      {
        key: 13,
        name: '点击在上方的X-类型1-2',
        matches: ['Image[text.length>=20] < View < View + View > Image[text.length=0]'],
        snapshotUrls: ['https://i.gkd.li/i/13068811', 'https://i.gkd.li/i/13202990', 'https://i.gkd.li/i/13266356', 'https://i.gkd.li/i/13266362', 'https://i.gkd.li/i/13457114', 'https://i.gkd.li/i/13457204'],
        _uniqueKey: 13,
        _uniqueName: '点击在上方的X-类型1-2',
        name: '点击在上方的X-类型1-2'
      },
      {
        key: 14,
        name: '点击在上方的X-类型2-2',
        matches: ['[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View'],
        snapshotUrls: ['https://i.gkd.li/i/13266689'],
        _uniqueKey: 14,
        _uniqueName: '点击在上方的X-类型2-2',
        name: '点击在上方的X-类型2-2'
      },
      ],
    },
{
      key: 10,
      name: '更新提示',
      desc: '点击以后再说',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.xuexiaoyi.entrance.main.MainActivity',
        matches: '[text="立即体验"] + [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13203105',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="立即体验"] + [text="以后再说"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});