import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.lark',
  name: '飞书',
  groups: [
{
      key: 1,
      name: '功能类-桌面端登录确认',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity',
        matches: '[text="飞书 桌面端登录确认"] +2 [id="com.ss.android.lark:id/login_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13494960',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="飞书 桌面端登录确认"] +2 [id="com.ss.android.lark:id/login_button"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击"查看原图"',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.lark.widget.photo.preview.PhotoPagerActivity',
        matches: '[id="com.ss.android.lark:id/look_origin_icon"]',
        snapshotUrls: 'https://i.gkd.li/i/12840528',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.ss.android.lark:id/look_origin_icon"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '功能类-自动发送原图',
      desc: '发送图片时自动勾选"原图"',
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: '.chatwindow.ChatWindowActivity',
        matches: '[vid="layout_original_photo"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17711351',
        exampleUrls: 'https://e.gkd.li/c985a1e9-ea40-4911-a73f-8ef098909bce',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@View[id$="original_photo"][checked=false] + [id="com.ss.android.lark:id/original_label"][text="原图"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});