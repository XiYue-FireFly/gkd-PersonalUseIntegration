import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        name: '腾讯广告',
        activityIds: 'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/13055837',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '快手广告-1',
        activityIds: 'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
        matches: '[id="client.android.yixiaotong:id/ksad_tk_view"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13060116',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '快手广告-2',
        matches: 'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13625511',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '腾讯广告-1',
        activityIds: 'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
        matches: 'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/13055837',
        _uniqueKey: 3,
        _uniqueName: '腾讯广告-1',
        name: '腾讯广告-1'
      },
      {
        key: 4,
        name: '快手广告-2-1',
        activityIds: [],
        matches: ['ViewGroup[childCount=2] > ImageView + [text="广告"]', 'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView[childCount=0]'],
        snapshotUrls: 'https://i.gkd.li/i/13625511',
        _uniqueKey: 4,
        _uniqueName: '快手广告-2-1',
        name: '快手广告-2-1'
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      activityIds: ['client.android.yixiaotong.v3.ui.V3MainActivity', 'client.android.yixiaotong.v3.ui.appcontrol.bath.BathControlActivity', 'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity'],
      rules: [
      {
        key: 0,
        name: '腾讯广告',
        matches: 'ImageView - FrameLayout - FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/13451010',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '快手广告',
        matches: '@TextView[clickable=true][childCount=0][visibleToUser=true] + View > [visibleToUser=true][text="广告"] <<n [id="client.android.yixiaotong:id/ksad_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13450887',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14469848',
        exampleUrls: 'https://m.gkd.li/57941037/ad8a1bbf-61b5-4a7e-8e16-5e0092f04b8c',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="native_ad_tpbt_image_iv"]',
        snapshotUrls: ['https://i.gkd.li/i/14469800', 'https://i.gkd.li/i/14469876', 'https://i.gkd.li/i/14469878'],
        exampleUrls: 'https://m.gkd.li/57941037/ed6c2c12-ac17-40cc-9842-3dbc2a477d15',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '腾讯广告-1',
        activityIds: ['client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity', 'client.android.yixiaotong.v3.ui.appcontrol.bath.BathControlActivity'],
        matches: 'ImageView + * + FrameLayout[childCount=1] > ImageView[childCount=0]',
        snapshotUrls: ['https://i.gkd.li/i/13451010', 'https://i.gkd.li/i/14469739'],
        _uniqueKey: 4,
        _uniqueName: '腾讯广告-1',
        name: '腾讯广告-1'
      },
      {
        key: 5,
        name: '快手广告-1',
        activityIds: 'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
        matches: '[id="client.android.yixiaotong:id/ksad_container"] >n @TextView + View > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13450887',
        _uniqueKey: 5,
        _uniqueName: '快手广告-1',
        name: '快手广告-1'
      },
      ],
    },
  ],
});