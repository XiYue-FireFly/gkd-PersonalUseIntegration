import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
  groups: [
    {
      key: 1,
      name: '局部广告-浮窗广告',
      desc: '关闭首页右侧的悬浮窗广告',
      fastQuery: true,
      activityIds: 'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules: [
        '[vid="img_close_float_window"]',
        {
          activityIds: [
            '.module.home.view.activity.MainActivity',
            '.module.app.view.customview.dialog.DialogUpdateApk',
          ],
          matches: 'Button[id="com.yitong.mbank.psbc:id/bt_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12685350',
            'https://i.gkd.li/i/13695462',
          ],
        },
      ],
      snapshotUrls: 'https://i.gkd.li/i/16215989',
      enable: false,
    },
    {
      key: 2,
      name: '全屏广告-首页广告弹窗',
      desc: '关闭首页弹出的全屏主题广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules: [
        '[id="com.yitong.mbank.psbc:id/iv_theme"] + [id="com.yitong.mbank.psbc:id/iv_theme_close_btn"]',
        {
          activityIds: 'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
          matches: '[id="com.yitong.mbank.psbc:id/iv_theme"] + [id="com.yitong.mbank.psbc:id/iv_theme_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12755516',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/12755516',
    },
    {
      key: 3,
      name: '局部广告-首页-浮窗广告',
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
          matches: '[id="com.yitong.mbank.psbc:id/img_close_float_window"]',
          snapshotUrls: 'https://i.gkd.li/i/13797314',
        },
        '[id="com.yitong.mbank.psbc:id/img_close_float_window"]',
      ],
    },
  ],
});
