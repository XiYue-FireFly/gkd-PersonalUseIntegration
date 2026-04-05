import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
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
        activityIds: '.ui.MainActivity',
        matches: '@[text="暂不更新"] + [text="立即更新"]',
        snapshotUrls: 'https://i.gkd.li/i/12701217',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: ['com.ecitic.bank.mobile.ui.MainActivity', 'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity'],
        matches: '[id="com.ecitic.bank.mobile:id/close_product_send"]',
        snapshotUrls: ['https://i.gkd.li/i/12701230', 'https://i.gkd.li/i/13402746'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.ecitic.bank.mobile:id/id_cordova_view"] + [id="com.ecitic.bank.mobile:id/close_product_send"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.MainActivity',
        matches: '@[text="取消"] + [text="立即开启"]',
        snapshotUrls: 'https://i.gkd.li/i/13399102',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[text="取消"] + [text="立即开启"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '局部广告-理财产品悬浮广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
        matches: '@[clickable=true] +2 [visibleToUser=true][text="恭喜您关注到宝藏基金"] <<n [vid="cordova_view"]',
        snapshotUrls: 'https://i.gkd.li/i/14208637',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] +2 [text="恭喜您关注到宝藏基金"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});