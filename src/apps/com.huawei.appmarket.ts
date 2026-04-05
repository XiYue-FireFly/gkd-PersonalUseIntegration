import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
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
        matches: '[vid="clock_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/15523957',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.MarketActivity',
        matches: '@[text="以后再说"] + [text="立即更新"]',
        snapshotUrls: 'https://i.gkd.li/i/13228520',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-应用更新页面-点击[查看更多]-1',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.appmarket.service.appmgr.view.activity.AppUpdateActivity',
        matches: '[text="查看更多"]',
        snapshotUrls: 'https://i.gkd.li/i/14738587',
        exampleUrls: 'https://m.gkd.li/57941037/e2283b1d-3041-49c5-aca2-7c165c83ce37',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '功能类-应用更新页面-点击[查看更多]-1-1-1-1',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.appmarket.service.appmgr.view.activity.AppUpdateActivity',
        matches: '[text="查看更多"]',
        snapshotUrls: 'https://i.gkd.li/i/14738587',
        exampleUrls: 'https://m.gkd.li/57941037/e2283b1d-3041-49c5-aca2-7c165c83ce37',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.huawei.appgallery.upgraderecommendation.ui.UpgradeRecommendActivity',
        matches: '[text="直接进入"]',
        snapshotUrls: 'https://i.gkd.li/i/14861810',
        exampleUrls: 'https://m.gkd.li/57941037/89e6f2eb-b543-4dd8-88ce-6e888d0d8c8a',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-热门应用推荐弹窗',
      desc: '点击[直接进入]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.appgallery.upgraderecommendation.ui.',
        matches: '[text="直接进入" || text="进入主页"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14861810', 'https://i.gkd.li/i/21231632', 'https://i.gkd.li/i/24640204'],
        exampleUrls: 'https://m.gkd.li/57941037/89e6f2eb-b543-4dd8-88ce-6e888d0d8c8a',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.appmarket.MarketActivity',
        matches: '[vid="close_icon"]',
        snapshotUrls: 'https://i.gkd.li/i/15523964',
        exampleUrls: 'https://m.gkd.li/57941037/13a31ae0-10c8-49bc-9154-363498237eff',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '权限提示-通知权限',
      desc: '点击[以后再说]',
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.appgallery.jointmessage.jointmessage.impl.activity.NotificationSwitchDialogActivity',
        matches: '[text="以后再说"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18328929',
        exampleUrls: 'https://e.gkd.li/1a0531ef-a18c-483d-8ac9-b50c96c6431d',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '功能类-自动安装应用',
      activityIds: 'com.huawei.appgallery.systeminstalldistservice.riskcheck.ui.activity.InstallDistActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="hidden_card_checkbox"][checked=false][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18492709',
        exampleUrls: 'https://e.gkd.li/2de4eb7c-964e-4b24-ab5f-1460c7993a0b',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="继续安装"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18492712',
        exampleUrls: 'https://e.gkd.li/6b79c349-8071-4598-a337-20a2f02df2f7',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="完成"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18492760',
        exampleUrls: 'https://e.gkd.li/445fc7d4-8ee3-4f29-a79b-cd4c0d4fd11f',
        preKeys: [1],
        _uniqueKey: 2
      },
      ],
    },
  ],
});