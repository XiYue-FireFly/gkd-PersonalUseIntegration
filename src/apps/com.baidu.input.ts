import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
{
      key: 1,
      name: '全屏广告-创作祝福弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ImeAppMainActivity',
        matches: '[id="android:id/content"] >2 [vid="button_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14179064',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="android:id/content"] >2 [vid="button_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-底部会员悬浮卡片',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.input.layout.store.subshop.activity.SkinShopActivity',
        matches: '@[desc="开会员，全部皮肤免费用"] <<n [vid="shop_content_container"]',
        snapshotUrls: 'https://i.gkd.li/i/15320905',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.baidu.input.ImeAppMainActivity',
        matches: '[vid="close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/15320990',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[desc="开会员，全部皮肤免费用"] +5 View[clickable=true]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '局部广告-皮肤试用页-卡片广告',
      enable: false,
      activityIds: 'com.baidu.input.ImeSkinTryActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/14205945',
      rules: [
      {
        key: 0,
        matches: '[vid="close_btn"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});