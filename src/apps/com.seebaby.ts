import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.seebaby',
  name: '掌通家园',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.login.ui.activity.LauncherActivity',
        matches: '@[id="com.seebaby:id/btn_later"] + [text$="新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/12705351',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.seebaby:id/btn_later"] + [text$="新版本"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '分段广告-信息流、文章底部广告',
      activityIds: ['com.seebaby.login.ui.activity.LauncherActivity', 'com.seebaby.parent.article.ui.activity.NativeArticleDetailActivity'],
      rules: [
      {
        key: 1,
        matches: '[id="com.seebaby:id/tv_ad_detail"] + [id="com.seebaby:id/ic_delad"]',
        snapshotUrls: ['https://i.gkd.li/i/12705353', 'https://i.gkd.li/i/12705363'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.seebaby:id/ad_tv_advertiser"] + [id="com.seebaby:id/ad_iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12705372',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.seebaby:id/tv_un_instrest"]',
        snapshotUrls: 'https://i.gkd.li/i/12705358',
        preKeys: [1,2],
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[id="com.seebaby:id/ad_tv_advertiser"] + [id="com.seebaby:id/ad_iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12705372'],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[id="com.seebaby:id/tv_un_instrest"]',
        snapshotUrls: ['https://i.gkd.li/i/12705358'],
        preKeys: [1,2],
        _uniqueKey: 5
      },
      ],
    },
{
      key: 3,
      name: '全屏广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['com.ranfeng.adranfengsdk.biz.activity.InterstitialActivity', 'com.tianmu.biz.activity.InterstitialActivity'],
        matches: '[vid="ranfeng_widget_iv_close" || vid="tianmu_widget_iv_close"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/23981370', 'https://i.gkd.li/i/24360340'],
        exampleUrls: 'https://e.gkd.li/0ae7b19f-6fa1-4eaf-a5b9-0dfb214541b4',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});