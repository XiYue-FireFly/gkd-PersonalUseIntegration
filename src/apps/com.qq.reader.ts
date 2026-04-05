import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      order: -10,
      rules: [
      {
        key: 0,
        matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14978239',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '青少年模式',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      order: -8,
      snapshotUrls: 'https://i.gkd.li/i/13194867',
      rules: [
      {
        key: 0,
        matches: '[id="com.qq.reader:id/tv_i_know"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '局部广告-右下角悬浮卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['com.qq.reader.activity.MainActivity', 'com.qq.reader.activity.MainFlutterActivity'],
        matches: '[vid="operating_activity_close_view"]',
        snapshotUrls: ['https://i.gkd.li/i/14140100', 'https://i.gkd.li/i/16517211'],
        exampleUrls: 'https://e.gkd.li/29b1cea7-6984-4d51-b1a0-f5ffd1b0d727',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '更新提示-内测邀请弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.upgrade.ui.UpgradeDialogActivity',
        matches: '[vid="upgrade_dialog_close_btn"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14376088',
        exampleUrls: 'https://m.gkd.li/57941037/03e35d57-5f40-4ccb-911a-5f9061eab46e',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="upgrade_dialog_close_btn"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14376088',
        exampleUrls: 'https://m.gkd.li/57941037/03e35d57-5f40-4ccb-911a-5f9061eab46e',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '分段广告-阅读页面广告',
      desc: '点击关闭-点击[关闭本条广告]',
      activityIds: 'com.qq.reader.activity.ReaderPageActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[clickable=true] > [text="关闭广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14767123',
        exampleUrls: 'https://m.gkd.li/57941037/70e15d7d-0911-44e7-b0d6-a8e74c00b8b1',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="adv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14767126',
        exampleUrls: 'https://m.gkd.li/57941037/eb2bca3c-abbc-4666-b505-cdaeeec6a839',
        _uniqueKey: 1
      },
      {
        key: 50,
        matches: '[vid="view_close_ad_btn_bg"]',
        snapshotUrls: ['https://i.gkd.li/i/14767165', 'https://i.gkd.li/i/14767124'],
        exampleUrls: 'https://m.gkd.li/57941037/c985da66-c2cc-4400-bb61-8f7ee6dbba11',
        preKeys: [0,1],
        _uniqueKey: 50
      },
      ],
    },
  ],
});