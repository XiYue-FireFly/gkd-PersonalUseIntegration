import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
{
      key: 1,
      name: '通知提示',
      desc: '关闭消息推送开启提示',
      enable: false,
      activityIds: ['com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity', '.maincontainer.activity.MainActivity'],
      actionMaximum: 1,
      resetMatch: 'app',
      snapshotUrls: 'https://i.gkd.li/import/13538351',
      rules: [
      {
        key: 0,
        matches: '[desc^="开启系统通知"||desc^="开启消息通知"] > ImageView[clickable=true][desc=null]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
        matches: '@ImageView[clickable=true][desc=null] < [desc^="开启系统通知"]',
        snapshotUrls: 'https://i.gkd.li/i/13538351',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[desc^="开启系统通知"] > ImageView[clickable=true][desc=null]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '通知提示-开启个性化',
      desc: '关闭开启个性化提示',
      enable: false,
      activityIds: ['.maincontainer.activity.MainActivity'],
      resetMatch: 'app',
      snapshotUrls: 'https://i.gkd.li/i/22319225',
      rules: [
      {
        key: 0,
        matches: '[text*="开启个性化"] +n View[childCount=1] > Image[text.length>20]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.maincontainer.activity.MainActivity',
        matches: ['[text*="手机信息权限"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/13620277',
        exampleUrls: 'https://e.gkd.li/81e3e4d8-f297-4476-b22c-73f0b97879ee',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@Button[text="取消"] <<n FrameLayout >n TextView[text*="手机信息"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.maincontainer.activity.MainActivity',
        matches: '[text="立即升级"] -2 [text="暂不升级"]',
        snapshotUrls: 'https://i.gkd.li/i/13832272',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '全屏广告',
      desc: '关闭首页各种全屏弹窗广告',
      enable: false,
      rules: [
      {
        key: 0,
        name: '红包弹窗',
        activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
        matches: 'WebView[text="Rax App"] > [id="root"] >(3,6) View[index=parent.childCount.minus(1)][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14551046', 'https://i.gkd.li/i/24981766'],
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '夜市弹窗',
        activityIds: '.maincontainer.activity.MainActivity',
        matches: '@[clickable=true][width<200] <<(4,6) View[id="root"] <<(5,8) [vid="fish_layer_container_id"]',
        snapshotUrls: ['https://i.gkd.li/i/23694103', 'https://i.gkd.li/i/23183586', 'https://i.gkd.li/i/25796344'],
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.taobao.idlefish.search_implement.SearchResultActivity',
        matches: '@[index=parent.childCount.minus(1)][clickable=true][width<250][height<250] <n View <<6 m0 <<6 [vid="fish_layer_container_id"]',
        snapshotUrls: 'https://i.gkd.li/i/23125419',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
        matches: 'WebView[text="Rax App"] > [id="root"] >(3,6) View[index=parent.childCount.minus(1)][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14551046', 'https://i.gkd.li/i/24981766'],
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.taobao.idlefish.search_implement.SearchResultActivity',
        matches: '@TextView[width<250 && height<250] - [childCount=0][text="收下红包"] <<n [vid="fish_layer_container_id"]',
        snapshotUrls: 'https://i.gkd.li/i/23125419',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '夜市氛围广告',
        activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
        matches: '@TextView[width<210 && height<210][clickable=true] <<n WebView[childCount!=0][text="夜市氛围弹框"] <<n [vid="fish_layer_container_id"]',
        snapshotUrls: 'https://i.gkd.li/i/23183586',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
        matches: 'WebView[text="Rax App"] > [id="root"] >6 View[index=2][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14551046',
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 6
      },
      ],
    },
{
      key: 5,
      name: '分段广告-信息流广告',
      desc: '通过长按然后点击关闭按钮来移除信息流中的广告',
      enable: false,
      activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
      rules: [
      {
        key: 0,
        matches: '@[clickable=true] > [desc$="广告"]',
        excludeMatches: '@[clickable=true] > [desc^="反馈成功"]',
        snapshotUrls: ['https://i.gkd.li/i/14723597', 'https://i.gkd.li/i/14723718'],
        action: 'longClick',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'View[childCount=6] > ImageView[index=1][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14723632', 'https://i.gkd.li/i/16486792'],
        preKeys: 0,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
        matches: '@[clickable=true] > [desc$="广告"]',
        excludeMatches: '@[clickable=true] > [desc^="反馈成功"]',
        snapshotUrls: ['https://i.gkd.li/i/14723597', 'https://i.gkd.li/i/14723718'],
        action: 'longClick',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
        matches: '[desc^="不喜欢该商品"] > ImageView[index=1][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14723632',
        preKeys: 0,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 6,
      name: '功能类-自动查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
      rules: [
      {
        key: 0,
        matches: '[desc="查看原图"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15463399',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
        matches: '[desc="查看原图"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15463399',
        exampleUrls: 'https://m.gkd.li/57941037/12b60303-4fb8-4786-b636-4efef10f3d78',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      enable: false,
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
        matches: 'View[childCount=2] > @View[clickable=true] + [desc="原图"]',
        snapshotUrls: 'https://i.gkd.li/i/18824808',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '@CheckBox[clickable=true][checked=true] < * - [text$="免密支付"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/23455398', 'https://i.gkd.li/i/23455378'],
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '功能类-登录授权',
      desc: '点击确认授权按钮',
      enable: false,
      activityIds: 'com.taobao.login4android.scan.QrScanActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[clickable=true] > [vid="confirm"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/25619592', 'https://i.gkd.li/i/25620240'],
        actionMaximum: 1,
        resetMatch: 'match',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text="服务协议及隐私保护"]', '[text="同意"][clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/25620304',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: ['[text="扫码登录"]', '[text="确认登录"][clickable=true][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/25619659', 'https://i.gkd.li/i/25620267'],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 9,
      name: '功能类-关闭小额免密支付',
      desc: '关闭支付时的小额免密支付选项',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '@CheckBox[clickable=true][checked=true] < * - [text$="免密支付"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/22656242', 'https://i.gkd.li/i/23455398', 'https://i.gkd.li/i/23455378'],
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});