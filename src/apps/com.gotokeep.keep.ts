import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gotokeep.keep',
  name: 'Keep',
  groups: [
{
      key: 2,
      name: '全屏广告-首页广告弹窗',
      desc: '关闭首页弹出的全屏广告',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
        matches: '[id="com.gotokeep.keep:id/layoutLottie"] +(1,2) [id="com.gotokeep.keep:id/imgCloseHomePageDialog"]',
        snapshotUrls: ['https://i.gkd.li/import/12706102', 'https://i.gkd.li/import/13761641'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
        matches: '[id="com.gotokeep.keep:id/imgCloseHomePageDialog"]',
        snapshotUrls: 'https://i.gkd.li/i/13761641',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
        matches: '[id="com.gotokeep.keep:id/layoutLottie"] +(1,2) [id="com.gotokeep.keep:id/imgCloseHomePageDialog"]',
        snapshotUrls: ['https://i.gkd.li/i/12706102', 'https://i.gkd.li/i/13761641'],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '局部广告-首页信息流广告',
      desc: '关闭首页信息流中的广告卡片',
      enable: false,
      activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
      snapshotUrls: 'https://i.gkd.li/import/12706115',
      rules: [
      {
        key: 0,
        matches: '[id="com.gotokeep.keep:id/textAdTag"] + [id="com.gotokeep.keep:id/imgClose"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-运动购页面广告弹窗',
      desc: '关闭运动购物页面的弹窗广告',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
        matches: 'ImageView + LinearLayout > ImageView[id=null][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/import/12706111',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
        matches: '[id="com.gotokeep.keep:id/contentContainer"] + [id="com.gotokeep.keep:id/closeImageView"]',
        snapshotUrls: 'https://i.gkd.li/import/13766358',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
        matches: 'ImageView + LinearLayout > ImageView[id=null][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12706111',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.gotokeep.keep.refactor.business.main.activity.MainActivity',
        matches: '[id="com.gotokeep.keep:id/contentContainer"] + [id="com.gotokeep.keep:id/closeImageView"]',
        snapshotUrls: 'https://i.gkd.li/i/13766358',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-请求开启通知权限弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/13761671',
      rules: [
      {
        key: 0,
        matches: '@[text="暂不开启"] +2 [text="开启通知权限"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '更新提示',
      desc: '点击"暂不升级"',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.gotokeep.keep:id/text_secondary_action"]',
        snapshotUrls: 'https://i.gkd.li/i/14126005',
        exampleUrls: 'https://m.gkd.li/57941037/6b0091e9-1bf1-49bd-be5c-e6997bc9accb',
        _uniqueKey: 0
      },
      ],
    },
  ],
});