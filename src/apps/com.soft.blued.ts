import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.soft.blued',
  name: 'Blued',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        activityIds: ['com.blued.android.core.ui.TerminalActivity', 'com.soft.blued.ui.home.HomeActivity'],
        matches: '[id="com.soft.blued:id/fl_main"] [id="com.soft.blued:id/img_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12777097', 'https://i.gkd.li/i/13694950', 'https://i.gkd.li/i/13699455'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.soft.blued.ui.home.HomeActivity',
        matches: '[id="com.soft.blued:id/ad_option"]',
        snapshotUrls: 'https://i.gkd.li/i/14149470',
        exampleUrls: 'https://m.gkd.li/57941037/65ee5632-c54b-4ef6-95e9-e57582ff7017',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.blued.android.core.ui.TerminalActivity',
        matches: '[id="com.soft.blued:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14157519',
        exampleUrls: 'https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.ui.home.HomeActivity',
        matches: '[vid="nearby_common_guide_close_iv"]',
        snapshotUrls: 'https://i.gkd.li/i/17172243',
        exampleUrls: 'https://e.gkd.li/04e78fd8-9d78-48d7-b1f0-eddde80f5c52',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="blued_ad_layout"] +n [vid="img_close"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-会员活动弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.blued.android.core.ui.TransparentActivity',
        matches: '[vid="blued_ad_layout"] + [vid="img_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14310618',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="fl_main"] > [vid="iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-购买动态投放弹窗',
      desc: '点击X',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.blued.android.core.ui.TerminalActivity',
        matches: '[id="com.soft.blued:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14157519',
        exampleUrls: 'https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});