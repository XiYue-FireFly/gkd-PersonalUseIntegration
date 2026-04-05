import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
{
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="tobid_splash_skip_text" || vid="ms_skipView"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/17004919', 'https://i.gkd.li/i/22056539'],
        exampleUrls: 'https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22861457',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@View[clickable=true][childCount=0][visibleToUser=true] +2 LinearLayout >2 [vid="sig_ad_privacy_ll"]',
        snapshotUrls: 'https://i.gkd.li/i/22863334',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 0,
      name: '全屏广告-瓜子会员弹窗',
      desc: '点击右上角[关闭]',
      rules: [
      {
        key: 0,
        activityIds: ['com.oray.sunlogin.application.Main', '.dialog.ShareDialog'],
        matches: '[id="com.oray.sunlogin:id/close"][text="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/13195950', 'https://i.gkd.li/i/12910411', 'https://i.gkd.li/i/13197454'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.oray.sunlogin:id/close"][text="关闭"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '更新提示-版本更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.application.Main',
        matches: '[text="立即更新"] <2 * > [id="com.oray.sunlogin:id/button_cancel"][text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/13195560',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '分段广告-卡片广告',
      activityIds: '.application.Main',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.oray.sunlogin:id/fl_close_advertise" || vid="iv_dislike"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13207785', 'https://i.gkd.li/i/17159821'],
        exampleUrls: 'https://e.gkd.li/2cad526b-1691-45e9-826b-eb92299cb8ee',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        snapshotUrls: ['https://i.gkd.li/i/22865433', 'https://i.gkd.li/i/22941348'],
        exampleUrls: 'https://e.gkd.li/55f927c7-edb5-4324-a73a-ad6dfa090eb6',
        preKeys: [0],
        anyMatches: ['@[clickable=true] > [text="不感兴趣"][clickable=false][visibleToUser=true]', '[text="不感兴趣"][clickable=true][visibleToUser=true]'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.oray.sunlogin:id/fl_close_advertise"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '功能类-退出app提示',
      rules: [
      {
        key: 0,
        matches: '[text="是否确认退出向日葵？"] + LinearLayout > [vid="button_ok"]',
        snapshotUrls: 'https://i.gkd.li/i/13927148',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="是否确认退出向日葵？"] + LinearLayout > [vid="button_ok"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-远程控制结束后的广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.application.Main',
        matches: '@[vid="close"][visibleToUser=true] - [vid="ll_remote_end"]',
        snapshotUrls: 'https://i.gkd.li/i/17782893',
        exampleUrls: 'https://e.gkd.li/104ba188-b4cd-4922-b27e-f654085eb163',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});