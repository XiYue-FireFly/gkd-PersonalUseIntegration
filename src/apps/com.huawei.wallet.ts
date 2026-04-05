import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.wallet',
  name: '华为钱包',
  groups: [
{
      key: 1,
      name: '局部广告-钱包扩展服务提示',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="开启钱包扩展服务"] +2 [id="com.huawei.wallet:id/linear_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13441814',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-小额免密支付弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.petalpay.userapp.function.withhold.view.activity.PetalPayGuideSmallFreePwdActivity',
        matches: ['[text="开通小额免密支付"]', '[vid="title_close_btn"]'],
        snapshotUrls: 'https://i.gkd.li/i/16397908',
        exampleUrls: 'https://e.gkd.li/7fcdf7d8-d9db-4b30-840d-3f656f645fe3',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '分段广告-首页卡片广告',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.view.MainActivity',
        matches: '[vid="ad_sign_text_and_feedback"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16833449',
        exampleUrls: 'https://e.gkd.li/11edaf9a-f54c-489c-99e0-78da25a5cc9b',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
        matches: '[text="直接关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/16833452',
        exampleUrls: 'https://e.gkd.li/f0d67fb4-ccdb-443b-8e4e-9dff2242a84f',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '功能类-支付成功后点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.nfc.carrera.ui.swipe.SwipeResultActivity',
        matches: '[vid="btn_completed"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18146717',
        exampleUrls: 'https://e.gkd.li/984fd805-ad50-4ffc-adce-fffe42109e98',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '权限提示-NFC权限',
      desc: '点击取消',
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.nfc.carrera.ui.swipe.SetDefaultPayServiceActivity',
        matches: ['[text*="是否每次使用华为钱包都自动开启 NFC"][visibleToUser=true]', '[text="取消"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/20918311',
        exampleUrls: 'https://e.gkd.li/87466a06-2169-4808-971e-d347cd40ac66',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});