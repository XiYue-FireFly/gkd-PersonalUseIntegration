import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.space',
  name: 'vivo 官网',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="timer" || vid="jump_over"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/16775800', 'https://i.gkd.li/i/19499311'],
        exampleUrls: 'https://e.gkd.li/e531ea4e-874f-4da4-bcf1-f585887f753c',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-活动广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.vivo.space.ui.VivoSpaceTabActivity',
        matches: 'View[childCount=2] > @[index=1][clickable=true][visibleToUser=true][childCount=0] <<n [id="com.vivo.space:id/floating_window_web"]',
        snapshotUrls: ['https://i.gkd.li/i/13218155', 'https://i.gkd.li/i/13292907'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'Image[text=""] + [text=""][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '权限提示-通知权限',
      desc: '点击取消',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.VivoSpaceTabActivity',
        matches: 'Button[id="com.vivo.space:id/vbutton_title"][text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/13771581',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'Button[id="com.vivo.space:id/vbutton_title"][text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/13771581',
        _uniqueKey: 1
      },
      ],
    },
  ],
});