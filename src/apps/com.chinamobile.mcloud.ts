import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: '.client.ui.setting.UpgradeActivity',
        matches: ['[text="发现新版本"]', '[vid="bn_cancel"]'],
        snapshotUrls: 'https://i.gkd.li/i/14297700',
        _uniqueKey: 1
      },
      {
        key: 0,
        matches: '@[id="com.chinamobile.mcloud:id/bn_cancel"] + [id="com.chinamobile.mcloud:id/upgrade_title"]',
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
        activityIds: ['com.chinamobile.mcloud.client.ui.MenuActivity', 'com.chinamobile.mcloud.client.ui.CustomScanActivity', 'com.mcloud.login.ui.ConfirmLoginTvActivity'],
        matches: '[id="com.chinamobile.mcloud:id/iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/13627826', 'https://i.gkd.li/i/14549523', 'https://i.gkd.li/i/14732062'],
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
        matches: '@Image[clickable=true] < View -3 [text="马上领取"] < View < View < View < WebView < WebView < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/13627832',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['com.chinamobile.mcloud.client.ui.MenuActivity', 'com.chinamobile.mcloud.client.ui.CustomScanActivity', 'com.mcloud.login.ui.ConfirmLoginTvActivity'],
        matches: '[vid="rl_container"] + [vid="iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/13627826', 'https://i.gkd.li/i/14549477', 'https://i.gkd.li/i/14732062'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
        matches: '[text="马上领取"] +n View > Image[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13627832',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
        matches: '[id="com.chinamobile.mcloud:id/iv_logo"] + [id="com.chinamobile.mcloud:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13627834',
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
        matches: '[id="com.chinamobile.mcloud:id/iv_logo"] + [id="com.chinamobile.mcloud:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13627834',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-请求开启自动备份弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.client.ui.MenuActivity',
        matches: '[text="开启自动备份"] +4 [text="暂不设置"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13627830',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="开启自动备份"] +n [id="com.chinamobile.mcloud:id/tv_skip"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.client.ui.MenuActivity',
        matches: '[vid="btn_push_notice_close_dialog"]',
        snapshotUrls: 'https://i.gkd.li/i/14882447',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="btn_push_notice_close_dialog"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});