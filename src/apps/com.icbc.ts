import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
{
      key: 0,
      name: '开屏广告-第一次启动提示',
      enable: false,
      activityIds: 'com.icbc.activity.init.SplashActivity',
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[id="com.icbc:id/close_btn"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.main.MainActivity',
        matches: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
        snapshotUrls: 'https://i.gkd.li/i/13330431',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.icbc:id/tv_time"][text*="跳过"][text.length<=6]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-右下角浮标广告-1',
      enable: false,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.icbc.activity.web.ICBCWebView',
        matches: '[vid="iv_close_task_center"]',
        snapshotUrls: 'https://i.gkd.li/i/22616307',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text^="觉得“中国工商银行”好用吗"]', '[text="下次再说"][clickable=true]'],
        snapshotUrls: ['https://i.gkd.li/i/18296892', 'https://i.gkd.li/i/24981859'],
        exampleUrls: 'https://e.gkd.li/85e48265-4269-4122-a70f-5361698954c0',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '局部广告-右下角浮标广告-1-1-1-1',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.web.ICBCWebView', '.activity.main.MainActivity'],
        matches: '[vid="iv_close_task_center"]',
        snapshotUrls: ['https://i.gkd.li/i/22616307', 'https://i.gkd.li/i/23227312'],
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '功能类-未登录时自动点击登录',
      desc: '仅限老年版和英文版可用',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.activity.main.MainActivity',
        matches: '[vid="rl_remit_login_button_background"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/23227516', 'https://i.gkd.li/i/23227551'],
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});