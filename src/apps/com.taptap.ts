import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taptap',
  name: 'TapTap',
  groups: [
{
      key: 1,
      name: '开屏广告',
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13946250'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '分段广告-游戏浏览页面推荐广告',
      desc: '点击[对此内容不感兴趣]',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.taptap.other.basic.impl.TapMainActivity',
        matches: '[id="com.taptap.app.middle:id/decision_layout_mask"] + @[id="com.taptap.app.game:id/app_menu"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12840903', 'https://i.gkd.li/i/12842279', 'https://i.gkd.li/i/12864810'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.taptap.game.discovery.impl.findgame.allgame.dialog.FindGameMenuDialog', 'com.taptap.other.basic.impl.TapMainActivity'],
        matches: '@LinearLayout > [text="对此内容不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12840904', 'https://i.gkd.li/i/13258679'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.taptap.other.basic.impl.TapMainActivity',
        matches: '[id="com.taptap.app.middle:id/decision_layout_mask"] + @[id="com.taptap.app.game:id/app_menu"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12842279', 'https://i.gkd.li/i/12864810'],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: ['com.taptap.game.discovery.impl.findgame.allgame.dialog.FindGameMenuDialog', 'com.taptap.other.basic.impl.TapMainActivity'],
        matches: '@LinearLayout > [text="对此内容不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12840904', 'https://i.gkd.li/i/13258679'],
        preKeys: 0,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.upgrade.library.dialog.UpgradeDialogAct',
        matches: '@[vid="btn_dismiss"] -2 * >2 [text="发现新版本"]',
        snapshotUrls: ['https://i.gkd.li/i/13387479', 'https://i.gkd.li/i/13488702', 'https://i.gkd.li/i/14209268'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[vid="btn_dismiss"] -2 * >2 [text="发现新版本"]',
        snapshotUrls: ['https://i.gkd.li/i/13387479', 'https://i.gkd.li/i/13488702', 'https://i.gkd.li/i/14209268'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '青少年模式-首页顶部横幅提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text*="青少年模式"] + [vid="iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14209309',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="青少年模式"] + [vid="iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});