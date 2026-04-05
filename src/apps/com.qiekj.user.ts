import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
{
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qiekj.user.MainActivity',
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[id="com.qiekj.user:id/native_splash_view"] >n [text^="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/12903088',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/12903086',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12903095',
        _uniqueKey: 2
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
        key: 0,
        activityIds: '.MainActivity',
        matches: '[id="com.qiekj.user:id/btn_cancelUpdate"][text*="暂不更新"]',
        snapshotUrls: 'https://i.gkd.li/i/13435011',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-开启[自动抵扣]开关',
      rules: [
      {
        key: 0,
        activityIds: '.ui.activity.scan.AfterPayUseAct',
        matches: '@[vid="switchView"][checked=false] - [vid="tv_automatic_use"]',
        snapshotUrls: 'https://i.gkd.li/i/17260785',
        exampleUrls: 'https://e.gkd.li/85bbfba2-5011-4f48-a08a-45386836ebd6',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="tv_automatic_use"] + [vid="switchView"][checked=false]',
        snapshotUrls: 'https://i.gkd.li/i/17260785',
        exampleUrls: 'https://e.gkd.li/23e3fc7e-1668-448d-824e-3e7238b18972',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 1,
        activityIds: '.ui.activity.home.MyDeviceAct',
        matches: ['[text*="广告"][visibleToUser=true]', '[text="关闭"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18032031',
        exampleUrls: 'https://e.gkd.li/bccff301-de1c-4d70-8b99-f9acf8e04efa',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.tianmu.biz.activity.InterstitialActivity',
        matches: '[vid="tianmu_widget_iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/18033023',
        exampleUrls: 'https://e.gkd.li/3f3d3462-7121-4f37-8252-1ef82e74f626',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.MainActivity',
        matches: '@ImageView[clickable=true] - [text="|"] - [text$="s"]',
        snapshotUrls: 'https://i.gkd.li/i/12903095',
        exampleUrls: 'https://e.gkd.li/343016ff-dd8f-4a19-8e3c-63520b087e98',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true][childCount=0] + RelativeLayout >2 [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/18094642',
        exampleUrls: 'https://e.gkd.li/501c8360-a261-40fb-b361-f1c6493289d7',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: '.MainActivity',
        matches: '[vid="iv_cancel" || vid="ad_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/24045175', 'https://i.gkd.li/i/24100793'],
        exampleUrls: 'https://e.gkd.li/13b65be1-e126-4a32-a4d8-efc0f20623bc',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.octopus.ad.AdActivity',
        matches: '@ImageView[clickable=true][childCount=0][width<100 && height<100] - [text="反馈"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24100775',
        exampleUrls: 'https://e.gkd.li/c5363e69-4206-4266-9e45-3ce1cc650bd2',
        fastQuery: true,
        _uniqueKey: 6
      },
      ],
    },
  ],
});