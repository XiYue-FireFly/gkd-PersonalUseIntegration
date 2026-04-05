import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.daysko.safp',
  name: '7天澳門統考',
  groups: [
{
      key: 1,
      name: '全屏广告-谷歌广告',
      activityIds: 'com.google.android.gms.ads.AdActivity',
      rules: [
      {
        key: 1,
        matches: 'View > [text="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/12642909', 'https://i.gkd.li/i/12643316'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="adchoiceWrap"] + [id="mv_close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/12643032',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '右上角白色圆形背景黑色x关闭按钮',
        matches: 'View[clickable=false][childCount=2] > TextView[clickable=true] + View[clickable=true][childCount=1] > Button[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12643039', 'https://i.gkd.li/i/12643246'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-视频广告',
      desc: '点击跳过视频-点击关闭按钮',
      activityIds: ['com.google.android.gms.ads.AdActivity'],
      rules: [
      {
        key: 1,
        matches: '[id=null][text="跳过视频"] < View +(2) @View > Button[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12668269', 'https://i.gkd.li/i/12642913', 'https://i.gkd.li/i/12642932'],
        _uniqueKey: 1
      },
      {
        key: 3,
        matches: ['Button[id=null][clickable=true] < @View - * < View - View >(n) View[desc="安装"]'],
        snapshotUrls: ['https://i.gkd.li/i/12642952', 'https://i.gkd.li/i/12668298'],
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: ['[desc="了解详情"] - View > [text="关闭"]'],
        snapshotUrls: ['https://i.gkd.li/i/12642983'],
        actionCd: 2500,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 3,
      name: '局部广告-页面底部广告',
      activityIds: 'com.daysko.safp.MainActivity',
      rules: [
      {
        key: 0,
        matches: '[!(id="why_this_ad_btn")] -2 View[id="mys-wrapper"] + View >2 Button[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12642993', 'https://i.gkd.li/i/12643229'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'View[desc="Advertisement"] + View >(2) Button',
        snapshotUrls: ['https://i.gkd.li/i/12643001'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id!="why_this_ad_btn"] -2 View[id="mys-wrapper"] + View >2 Button[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12642993', 'https://i.gkd.li/i/12643229'],
        _uniqueKey: 2
      },
      ],
    },
  ],
});