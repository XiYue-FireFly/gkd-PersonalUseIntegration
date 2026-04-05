import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
{
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16490985',
        exampleUrls: 'https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16490985',
        exampleUrls: 'https://e.gkd.li/983cc392-1b01-4172-bc1d-2df001baeb3d',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: ['[text="版本升级" || id="com.autonavi.minimap:id/update_viewpager"][visibleToUser=true]', '[text="取消" || id="com.autonavi.minimap:id/iv_close"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13379094', 'https://i.gkd.li/i/13379426', 'https://i.gkd.li/i/21981032'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '更新弹窗-1',
        matches: '@[id="com.autonavi.minimap:id/iv_close"] + * > [text^="立即升级"]',
        snapshotUrls: 'https://i.gkd.li/i/13379094',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '更新弹窗-2',
        matches: '@[text="取消"] + * + [text="去下载"]',
        snapshotUrls: 'https://i.gkd.li/i/13379426',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '局部广告-首页签到卡片-1',
      desc: '点击"x"',
      enable: false,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      snapshotUrls: ['https://i.gkd.li/i/12642842', 'https://i.gkd.li/i/12642845', 'https://i.gkd.li/i/12818770', 'https://i.gkd.li/i/13764540'],
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        matches: 'ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*="签到"||text*="成长值"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏后的分享弹窗',
      enable: false,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      snapshotUrls: 'https://i.gkd.li/import/13473388',
      rules: [
      {
        key: 0,
        matches: '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView <<n [id="com.autonavi.minimap:id/fragment_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13473388',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '通知提示-地图横条广告',
      desc: '关闭地图页面的横条广告和弹窗提示',
      enable: false,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '弹窗1',
        matches: 'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
        snapshotUrls: 'https://i.gkd.li/import/12642830',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '弹窗2',
        matches: '@ImageView[text=null] <n [vid="activity_icon_bar"]',
        snapshotUrls: 'https://i.gkd.li/i/17391938',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
        snapshotUrls: 'https://i.gkd.li/i/12642830',
        exampleUrls: 'https://e.gkd.li/a7f72c58-0b31-4b87-9839-567d4d74350a',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@ImageView[clickable=true] - [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/17426322',
        exampleUrls: 'https://e.gkd.li/ca2dae5b-10d8-458e-9d83-fe04652ff074',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: 'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
        _uniqueKey: 4
      },
      ],
    },
{
      key: 11,
      name: '局部广告-首页签到卡片-1-1-1-1',
      desc: '点击"x"',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      snapshotUrls: ['https://i.gkd.li/i/12642842', 'https://i.gkd.li/i/12642845', 'https://i.gkd.li/i/12818770', 'https://i.gkd.li/i/13764540'],
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        matches: 'ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*="签到"||text*="成长值"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 12,
      name: '全屏广告-广告弹窗',
      desc: '关闭欢迎弹窗、签到弹窗和加油优惠券弹窗',
      enable: false,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '【欢迎】弹窗',
        matches: 'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid="fragment_container"]',
        snapshotUrls: ['https://i.gkd.li/i/14800704'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/17079025',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '签到弹窗',
        matches: '[desc="弹窗"] + [vid="main_map_msg_dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14809993',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '加油页面优惠券弹窗',
        matches: '@ImageView < [desc="关闭"][clickable=true] <n * > * >n View[text="立即领取"]',
        snapshotUrls: ['https://i.gkd.li/import/12642857'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@ViewGroup[clickable=true] > View[visibleToUser=true][text^="关闭"] <<n [vid="mapInteractiveRelativeLayout"]',
        snapshotUrls: 'https://i.gkd.li/i/22287641',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@ImageView < [desc="关闭"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text="立即领取"]',
        _uniqueKey: 4
      },
      ],
    },
{
      key: 13,
      name: '局部广告-卡片广告',
      desc: '关闭地图页面的卡片式广告和购票优惠提示',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: ['[vid="btn_qrscan"][desc="扫一扫"]', 'ViewGroup[desc.length>0] < ViewGroup + @[desc="关闭"][clickable=true][visibleToUser=true] <<n [vid="quickservice"]'],
        snapshotUrls: 'https://i.gkd.li/i/14715295',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/25660170',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: 'ViewGroup[desc="图片"][childCount=2] > ViewGroup[clickable=true] > @ImageView[childCount=0] <<n [vid="tab_container_id"]',
        snapshotUrls: 'https://i.gkd.li/i/16960367',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '@ImageView < ViewGroup[clickable=true] -2 * > View[text^="高德购票" && text$="优惠"] <<n [vid="mapInteractiveRelativeLayout"]',
        snapshotUrls: 'https://i.gkd.li/i/16960157',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '@[clickable=true] > [visibleToUser=true][text="关闭"] <<n [vid="ajx_view_container"]',
        snapshotUrls: 'https://i.gkd.li/i/18627401',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: 'ViewGroup > ViewGroup > [desc="关闭"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14715295',
        exampleUrls: 'https://m.gkd.li/57941037/071a07d2-c760-4f15-9359-f54bf51b6205',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: 'ViewGroup[desc="图片"][childCount=2] > ViewGroup[clickable=true] > @ImageView[childCount=0] <<n [vid="tab_container_id"]',
        snapshotUrls: 'https://i.gkd.li/i/16960367',
        exampleUrls: 'https://e.gkd.li/132266f7-b7b8-4cac-9549-bcbe4314c893',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '@ImageView[childCount=0] < ViewGroup[clickable=true] -2 * > View[text^="高德购票" && text$="优惠"] <<n [vid="mapInteractiveRelativeLayout"]',
        snapshotUrls: 'https://i.gkd.li/i/16960157',
        exampleUrls: 'https://e.gkd.li/59408741-4847-4395-ace5-b1e14ee24cec',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '@[clickable=true] > [visibleToUser=true][text="关闭"] <<n [vid="ajx_view_container"]',
        snapshotUrls: 'https://i.gkd.li/i/18627401',
        exampleUrls: 'https://e.gkd.li/018aa83b-3f0a-46b4-b084-a5e7a397ca68',
        fastQuery: true,
        _uniqueKey: 7
      },
      ],
    },
{
      key: 14,
      name: '权限提示-授权蓝牙-1',
      desc: '关闭室内定位蓝牙授权提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '@ImageView[clickable=true] -2 [text="授权蓝牙"]',
        snapshotUrls: 'https://i.gkd.li/i/17002003',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '[欢迎]弹窗',
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: 'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView[clickable=true] + View[text!=null] <<n [vid="fragment_container"]',
        snapshotUrls: ['https://i.gkd.li/i/14800704', 'https://i.gkd.li/i/17079025'],
        exampleUrls: 'https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '签到弹窗',
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '[vid="main_map_msg_dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14809993',
        exampleUrls: 'https://m.gkd.li/57941037/e059109b-f4bb-4ed6-81a8-6010b51ebfd5',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '@ViewGroup[clickable=true] > View[visibleToUser=true][text^="关闭"] <<n [vid="mapInteractiveRelativeLayout"]',
        snapshotUrls: 'https://i.gkd.li/i/22287641',
        exampleUrls: 'https://e.gkd.li/0a4e847f-b1b0-4667-982a-43f313305139',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '[欢迎]弹窗-1',
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: 'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView + View[text!=null] <<n [vid="fragment_container"]',
        snapshotUrls: 'https://i.gkd.li/i/14800704',
        exampleUrls: 'https://m.gkd.li/57941037/660ef360-eee8-4fb8-9764-7a1822ccb6e9',
        fastQuery: true,
        _uniqueKey: 4,
        _uniqueName: '[欢迎]弹窗-1',
        name: '[欢迎]弹窗-1'
      },
      ],
    },
{
      key: 15,
      name: '功能类-一键点亮角落',
      desc: '点击[一键点亮]',
      rules: [
      {
        key: 0,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '[text="一键点亮"] <2 @[clickable=true] <<n [vid="mapInteractiveRelativeLayout"]',
        snapshotUrls: 'https://i.gkd.li/i/14881505',
        exampleUrls: 'https://m.gkd.li/57941037/1fd33208-e81d-4da6-a23c-4d562a8e0ae0',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 16,
      name: '权限提示-授权蓝牙-1-1-1-1',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.autonavi.map.activity.NewMapActivity',
        matches: '@ImageView[clickable=true] -2 [text="授权蓝牙"]',
        snapshotUrls: 'https://i.gkd.li/i/17002003',
        exampleUrls: 'https://e.gkd.li/8aef9184-d2b6-4c49-b729-82e6e76decdc',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});