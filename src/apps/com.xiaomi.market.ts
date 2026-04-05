import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
{
      key: 0,
      name: '全屏广告-首页悬浮窗广告',
      desc: '关闭首页的全屏悬浮广告',
      enable: false,
      activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
      snapshotUrls: 'https://i.gkd.li/import/13248808',
      rules: [
      {
        key: 0,
        matches: '[id="com.xiaomi.market:id/webview_container"] >n [text="关闭"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['.ui.FloatWebActivity', '.ui.HomeFloatWebActivity'],
        matches: '@Button[text="关闭" || desc="关闭"][clickable=true][visibleToUser=true] <<n [vid="webview"]',
        snapshotUrls: ['https://i.gkd.li/i/16323123', 'https://i.gkd.li/i/20946336', 'https://i.gkd.li/i/23249365'],
        action: 'clickCenter',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
        matches: '@Button[text="关闭"] <<n [id="com.xiaomi.market:id/webview"]',
        snapshotUrls: 'https://i.gkd.li/i/13248808',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 9,
      name: '局部广告-应用升级界面顶部广告横幅',
      desc: '关闭应用升级页面顶部的广告横幅',
      enable: false,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/import/13197334',
      rules: [
      {
        key: 0,
        matches: '[id="com.xiaomi.market:id/iv_close_tip"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
        matches: '[id="com.xiaomi.market:id/iv_close_tip"]',
        snapshotUrls: 'https://i.gkd.li/i/13197334',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '功能类-忽略升级',
      desc: '点击应用升级提示的[忽略本次]按钮',
      enable: false,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.xiaomi.market:id/fold_text"][text^="查看全部升级"]',
        snapshotUrls: 'https://i.gkd.li/import/12674261',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="expand_button"][visibleToUser=true]',
        excludeMatches: '[text="忽略本次"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/import/12674264', 'https://i.gkd.li/i/14931577'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="忽略本次"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/import/12674269', 'https://i.gkd.li/i/14931578'],
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="expand_button"][visibleToUser=true]',
        excludeMatches: '[text="忽略本次"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14931577',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[text="忽略本次"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14931578',
        preKeys: [1],
        _uniqueKey: 4
      },
      ],
    },
{
      key: 11,
      name: '权限提示-通知权限',
      desc: '自动点击关闭按钮',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '升级软件后的"开启推送"弹窗',
        activityIds: '.ui.UpdateListActivity',
        matches: '[vid="dialog_cancel" || text="不再提醒"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14814456', 'https://i.gkd.li/i/19643114'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '开启通知栏提醒',
        activityIds: '.business_ui.main.MarketTabActivity',
        matches: ['[text="开启通知栏提醒"]', '[text="不了，谢谢"]'],
        snapshotUrls: 'https://i.gkd.li/i/13691701',
        matchTime: 10000,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '升级软件后的"开启推送"弹窗-1',
        activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
        matches: '[vid="dialog_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/14814456',
        _uniqueKey: 2,
        _uniqueName: '升级软件后的"开启推送"弹窗-1',
        name: '升级软件后的"开启推送"弹窗-1'
      },
      {
        key: 3,
        name: '开启通知栏提醒-1',
        matches: ['[text="开启通知栏提醒"]', '[text="不了，谢谢"]'],
        snapshotUrls: ['https://i.gkd.li/i/13197306', 'https://i.gkd.li/i/13691701'],
        matchTime: 10000,
        _uniqueKey: 3,
        _uniqueName: '开启通知栏提醒-1',
        name: '开启通知栏提醒-1'
      },
      ],
    },
{
      key: 12,
      name: '局部广告-个性化推荐卡片',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.xiaomi.market.business_ui.main.MarketTabActivity',
        matches: '[id="com.xiaomi.market:id/close_float_recommend"]',
        snapshotUrls: 'https://i.gkd.li/i/13624971',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.xiaomi.market:id/close_float_recommend"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 13,
      name: '功能类-自动点击[查看全部升级]',
      desc: '自动展开应用升级页面的完整更新列表',
      enable: false,
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/14782814',
      rules: [
      {
        key: 0,
        matches: '@[clickable=true] > [text^="查看全部升级"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.xiaomi.market.ui.UpdateListActivity', '.ui.UpdateAppsActivity'],
        matches: '@[clickable=true] > [text^="查看全部升级" || text^="查看全部更新"]',
        snapshotUrls: ['https://i.gkd.li/i/14782814', 'https://i.gkd.li/i/24461973'],
        exampleUrls: ['https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a', 'https://e.gkd.li/e1a4d832-e582-4185-b93e-08ca41f46d92'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
        matches: '@[clickable=true] > [text^="查看全部升级"]',
        snapshotUrls: 'https://i.gkd.li/i/14782814',
        exampleUrls: 'https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 14,
      name: '功能类-移动数据更新弹窗点击继续',
      rules: [
      {
        key: 0,
        activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
        matches: '@[text="继续"] <n * - * >4 [text^="您在使用数据网络，升级应用可能产生流量费用"]',
        snapshotUrls: 'https://i.gkd.li/i/22927652',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});