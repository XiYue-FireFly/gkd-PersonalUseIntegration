import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
{
      key: 1,
      name: '局部广告-消息列表上方广告',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@FrameLayout > [id="com.alibaba.android.rimet:id/icft_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13325125',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-文件即将过期提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@FrameLayout[id="com.alibaba.android.rimet:id/layout_close"] -2 TextView[text="文件即将过期请备份"]',
        snapshotUrls: 'https://i.gkd.li/i/13325125',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '功能类-自动点击原图',
      enable: false,
      activityIds: 'com.alibaba.android.dingtalk.photoui.activitys.AlbumActivity',
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'CheckBox[id="com.alibaba.android.rimet:id/cb_send_origin"][text="原图"][checked=false]',
        snapshotUrls: ['https://i.gkd.li/i/13309648', 'https://i.gkd.li/i/13309845'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '更新提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@Button[text*="暂不更新"] + Button[text*="更新"]',
        snapshotUrls: 'https://i.gkd.li/i/13402478',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[id="com.alibaba.android.rimet:id/dialog_close_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13772151',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'TextView[id="com.alibaba.android.rimet:id/dialog_close_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13772151',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 5,
      name: '功能类-扫码自动登录桌面版',
      enable: false,
      activityIds: 'com.alibaba.android.user.qrcode.WebLoginActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.alibaba.android.rimet:id/btn_login"]',
        snapshotUrls: 'https://i.gkd.li/i/13433981',
        _uniqueKey: 0
      },
      ],
    },
  ],
});