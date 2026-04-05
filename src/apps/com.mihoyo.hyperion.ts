import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
{
      key: 3,
      name: '功能类-自动打卡',
      desc: '点击[打卡],切换板块自动签到',
      rules: [
      {
        key: 0,
        activityIds: 'com.mihoyo.hyperion.main.HyperionMainActivity',
        matches: 'TextView[id="com.mihoyo.hyperion:id/signTv"][text="打卡"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13721772', 'https://i.gkd.li/i/13721776'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[id="com.mihoyo.hyperion:id/signTv"][text="打卡"][visibleToUser=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '功能类-原神自动签到',
      desc: '点击签到-关闭弹窗-返回',
      enable: false,
      activityIds: 'com.mihoyo.hyperion.web2.MiHoYoWebActivity',
      forcedTime: 5000,
      rules: [
      {
        key: 0,
        name: '点击签到',
        matches: '[text="米游社原神每日签到"] >4 View[childCount=11] > @View[childCount=3] > Image[index=0]',
        snapshotUrls: ['https://i.gkd.li/i/14967627', 'https://i.gkd.li/i/14371469'],
        exampleUrls: 'https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '关闭签到后的弹窗',
        matches: '[text="米游社原神每日签到"] >3 TextView[index=2][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14371439',
        exampleUrls: 'https://m.gkd.li/57941037/b02eca70-f7d3-4169-99d6-9906c534392a',
        preKeys: 0,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '返回上一个页面',
        matches: '[text="米游社原神每日签到"] - View > TextView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14371469',
        exampleUrls: 'https://m.gkd.li/57941037/c232ba4c-d50e-4887-85ab-91739928119e',
        preKeys: 1,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 5,
      name: '功能类-星穹铁道自动签到',
      desc: '点击签到-关闭弹窗-返回',
      enable: false,
      activityIds: 'com.mihoyo.hyperion.web2.MiHoYoWebActivity',
      forcedTime: 5000,
      rules: [
      {
        key: 0,
        name: '点击签到',
        matches: '[text="《崩坏：星穹铁道》签到福利"] >4 View[childCount=10] > View + TextView',
        snapshotUrls: 'https://i.gkd.li/i/14376296',
        exampleUrls: 'https://m.gkd.li/57941037/a9f426c4-3184-4525-b283-ad77d6f83d02',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '关闭签到后的弹窗',
        matches: '[text="《崩坏：星穹铁道》签到福利"] >3 TextView[index=1]',
        snapshotUrls: 'https://i.gkd.li/i/14967631',
        exampleUrls: 'https://m.gkd.li/57941037/3babb231-30a7-4891-9c4a-c11946838741',
        preKeys: 0,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '返回上一个页面',
        matches: '[text="《崩坏：星穹铁道》签到福利"] > View > View[index=0] >3 TextView[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14371790',
        exampleUrls: 'https://m.gkd.li/57941037/d8031907-105b-4d37-8542-b71e854b3b8a',
        preKeys: 1,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-游戏版本活动',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.main.popup.HomePopupDialogActivity',
        matches: '[vid="closeIv"]',
        snapshotUrls: 'https://i.gkd.li/i/16818949',
        exampleUrls: 'https://e.gkd.li/5c54c1cc-95ae-420d-b3af-37e8553a6327',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '分段广告-游戏版本活动',
      desc: '点击关闭',
      activityIds: '.main.HyperionMainActivity',
      fastQuery: true,
      exampleUrls: 'https://e.gkd.li/197dfb66-6b42-4fbd-b60c-4d801a8c729c',
      rules: [
      {
        key: 0,
        name: '点击关闭',
        matches: '[vid="bottomBarBgIv"] + * > [vid="close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/16996311',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击确定',
        matches: '[vid="rootLayout"] > [vid="confirmTv"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/16996319',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '功能类-米游自动签到全家桶',
      desc: '包含崩坏3、绝区零、原神、星穹铁道',
      activityIds: '.web2.MiHoYoWebActivity',
      forcedTime: 10000,
      rules: [
      {
        key: 0,
        name: '点击签到',
        excludeMatches: '[text^="请在此绑定你的"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/17601269', 'https://i.gkd.li/i/17601338', 'https://i.gkd.li/i/17611619', 'https://i.gkd.li/i/17611613', 'https://i.gkd.li/i/14967627', 'https://i.gkd.li/i/19586048', 'https://i.gkd.li/i/19586142'],
        exampleUrls: 'https://e.gkd.li/53d22dc7-b368-46c0-85d2-fe132b0832a9',
        anyMatches: ['WebView[text*="签到"] >4 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0][text!=null]', 'WebView[text*="签到"] >4 View[childCount=10] > View + TextView[childCount=0][visibleToUser=true]'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/17601295', 'https://i.gkd.li/i/17601347', 'https://i.gkd.li/i/17611621', 'https://i.gkd.li/i/19581359', 'https://i.gkd.li/i/17611617', 'https://i.gkd.li/i/19586048', 'https://i.gkd.li/i/19586142', 'https://i.gkd.li/i/19587714'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '关闭签到后的弹窗',
        matches: '@TextView[visibleToUser=true][text=""] - View[childCount=2] >2 [text*="签到成功"]',
        snapshotUrls: ['https://i.gkd.li/i/17601273', 'https://i.gkd.li/i/17601340', 'https://i.gkd.li/i/17611620', 'https://i.gkd.li/i/17611616', 'https://i.gkd.li/i/14967631'],
        exampleUrls: 'https://e.gkd.li/ef30277a-bd5d-444a-a9d5-ce63406d1269',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '关闭签到提醒',
        matches: '[text="不用了"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/17601283', 'https://i.gkd.li/i/17601345'],
        exampleUrls: 'https://e.gkd.li/56299b94-01fb-4d83-9796-ec9bd6bbae64',
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '从签到页返回',
        matches: 'WebView[text*="签到"] > View >3 View[index=0][childCount=1] > TextView[childCount=0][text=""][visibleToUser=true]',
        excludeMatches: '[text="不用了"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/17601295', 'https://i.gkd.li/i/17601347', 'https://i.gkd.li/i/17611621', 'https://i.gkd.li/i/17611617', 'https://i.gkd.li/i/17629453'],
        exampleUrls: 'https://e.gkd.li/cc68f623-5dc7-4703-9768-28826c4f16f6',
        preKeys: [1,2],
        excludeSnapshotUrls: ['https://i.gkd.li/i/17601283', 'https://i.gkd.li/i/17601345'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 9,
      name: '权限提示-通知权限',
      rules: [
      {
        key: 0,
        activityIds: '.main.HyperionMainActivity',
        matches: ['[text^="开启通知提醒"]', '@[clickable=true] > [text$="拒绝"]'],
        snapshotUrls: 'https://i.gkd.li/i/24489020',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});