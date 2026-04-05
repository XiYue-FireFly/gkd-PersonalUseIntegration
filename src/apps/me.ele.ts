import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '饿了么',
  groups: [
{
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.afollestad.materialdialogs.MaterialDialog', '.application.ui.Launcher.LauncherActivity'],
        matches: ['[text*="更新应用版本"]', '[text="取消"]'],
        snapshotUrls: ['https://i.gkd.li/i/12650280', 'https://i.gkd.li/i/13206819', 'https://i.gkd.li/i/18096620'],
        exampleUrls: 'https://e.gkd.li/7a0ade81-d2f3-4174-ba6e-9976b8e7ecf5',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="更新应用版本"]',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="取消"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-红包弹窗',
      desc: '关闭各类红包弹窗广告',
      enable: false,
      rules: [
      {
        key: 0,
        name: '红包弹窗1',
        activityIds: ['me.ele.component.pops2.Pops2MistDialog', 'me.ele.component.webcontainer.view.AppUCWebActivity', 'me.ele.application.ui.Launcher.LauncherActivity', 'me.ele.application.ui.GeneralSettingsActivity', 'me.ele.shopdetailv2.ShopDetailV2Activity', 'me.ele.foodchannel.page.WMChannelNativeActivity'],
        snapshotUrls: ['https://i.gkd.li/i/12650238', 'https://i.gkd.li/i/13294893', 'https://i.gkd.li/i/13331361', 'https://i.gkd.li/i/13362974', 'https://i.gkd.li/i/13376008', 'https://i.gkd.li/i/13710581', 'https://i.gkd.li/i/15148480'],
        fastQuery: true,
        anyMatches: ['@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < ViewGroup[childCount=2] < [vid="id_magex_mistview"]', '@ImageView[childCount=0][clickable=true][index=parent.childCount.minus(1)] - ViewGroup[childCount=2] < [vid="id_magex_mistview"]'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/17858192',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '红包弹窗2',
        activityIds: 'me.ele.newretail.pack.ui.activity.PackActivity',
        matches: '[desc$="今日红包"] +n [desc$="关闭"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12650713',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '红包弹窗3',
        matches: '@ViewGroup[index=2][clickable=true][childCount=0][index=parent.childCount.minus(1)] <3 ViewGroup[childCount=3] < ViewGroup[childCount=1] < ViewGroup[vid="id_magex_mist_view"]',
        snapshotUrls: 'https://i.gkd.li/i/14472929',
        fastQuery: true,
        excludeSnapshotUrls: ['https://i.gkd.li/i/16346727', 'https://i.gkd.li/i/17858192'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '红包弹窗3-1',
        matches: '@ViewGroup[index=2][clickable=true][childCount=0][index=parent.childCount.minus(1)] <3 ViewGroup[childCount=3] < ViewGroup[childCount=1] < ViewGroup[vid="id_magex_mist_view"]',
        snapshotUrls: 'https://i.gkd.li/i/14472929',
        exampleUrls: 'https://e.gkd.li/a933d63b-14b2-4c91-bdd9-0ba578da6bff',
        fastQuery: true,
        excludeSnapshotUrls: ['https://i.gkd.li/i/16346727', 'https://i.gkd.li/i/17858192'],
        _uniqueKey: 3,
        _uniqueName: '红包弹窗3-1',
        name: '红包弹窗3-1'
      },
      {
        key: 4,
        name: '红包弹窗1-1',
        activityIds: ['me.ele.component.pops2.Pops2MistDialog', 'me.ele.component.webcontainer.view.AppUCWebActivity', 'me.ele.application.ui.Launcher.LauncherActivity', 'me.ele.application.ui.GeneralSettingsActivity', 'me.ele.shopdetailv2.ShopDetailV2Activity', 'me.ele.foodchannel.page.WMChannelNativeActivity'],
        matches: 'ViewGroup[childCount=2] > @ImageView[index=1][clickable=true] <<n [id="me.ele:id/id_magex_mistview"]',
        snapshotUrls: ['https://i.gkd.li/i/12650238', 'https://i.gkd.li/i/13294893', 'https://i.gkd.li/i/13331361', 'https://i.gkd.li/i/13362974', 'https://i.gkd.li/i/13376008', 'https://i.gkd.li/i/13710581', 'https://i.gkd.li/i/15148480'],
        fastQuery: true,
        _uniqueKey: 4,
        _uniqueName: '红包弹窗1-1',
        name: '红包弹窗1-1'
      },
      {
        key: 5,
        name: '红包弹窗2-1',
        activityIds: 'me.ele.newretail.pack.ui.activity.PackActivity',
        matches: '[desc$="今日红包"] +(n) [desc$="关闭"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12650713',
        _uniqueKey: 5,
        _uniqueName: '红包弹窗2-1',
        name: '红包弹窗2-1'
      },
      {
        key: 6,
        name: '红包弹窗3-2',
        matches: '@ViewGroup[index=2][clickable=true] <3 ViewGroup < ViewGroup < ViewGroup[vid="id_magex_mist_view"]',
        snapshotUrls: 'https://i.gkd.li/i/14472929',
        exampleUrls: 'https://m.gkd.li/57941037/25425b3a-309d-464d-bbb5-091715675fcd',
        fastQuery: true,
        _uniqueKey: 6,
        _uniqueName: '红包弹窗3-2',
        name: '红包弹窗3-2'
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-活动弹窗',
      desc: '关闭各类全屏活动弹窗广告',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: ['me.ele.component.pops2.Pops2MistDialog', 'me.ele.newbooking.checkout.entrypoint.WMCheckoutActivity', 'me.ele.application.ui.Launcher.LauncherActivity', 'me.ele.android.emagex.container.EMagexActivity'],
        matches: '@ImageView[clickable=true] <2 [vid="id_magex_mistview"][childCount=2]',
        snapshotUrls: ['https://i.gkd.li/i/12726709', 'https://i.gkd.li/i/13476719', 'https://i.gkd.li/i/13523508', 'https://i.gkd.li/i/13685037', 'https://i.gkd.li/i/14050401'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
        matches: '[id="me.ele:id/fl_render_e_shop"] + FrameLayout >n ViewGroup[childCount=6] > View[index=5]',
        snapshotUrls: ['https://i.gkd.li/i/13476611', 'https://i.gkd.li/i/13523541'],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
        matches: 'ViewGroup[clickable=true] - TextView[text="放弃"]',
        snapshotUrls: ['https://i.gkd.li/i/13710574', 'https://i.gkd.li/i/13710591'],
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'me.ele.pha.shell.ui.ElePhaActivity',
        matches: 'WebView >4 View[childCount=2] > @View[clickable=true] > Image[childCount=0] <<n [vid="pha_view_pager_root_view"]',
        snapshotUrls: 'https://i.gkd.li/i/15443153',
        _uniqueKey: 4
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-付款后弹窗广告',
      desc: '关闭支付完成后的广告弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'me.ele.component.pops2.TransparentAppWebActivity',
        matches: 'View[childCount=2] > View[childCount=2] > @Button[text="关闭"][clickable=true] <<n [id="me.ele:id/inside_web_view"]',
        snapshotUrls: 'https://i.gkd.li/i/13205301',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'bb Button[text="关闭"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-吃货卡续费弹窗',
      desc: '关闭吃货卡到期续费提示弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
        matches: '@View[clickable=true] + View >2 [visibleToUser=true][text*="立即续费"] <<n [id="me.ele:id/inside_web_view"]',
        snapshotUrls: 'https://i.gkd.li/i/13295007',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@View + View >2 [text="买校园版超级吃货卡"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '局部广告-首页底部浮窗广告',
      desc: '关闭首页底部的悬浮广告',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
        matches: '@ViewGroup[childCount=0][clickable=true][visibleToUser=true] - ViewGroup[childCount=3] <<n [id="me.ele:id/id_magex_mist_view"]',
        snapshotUrls: 'https://i.gkd.li/i/13710588',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/16326917',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.application.ui.Launcher.LauncherActivity',
        matches: '[vid="iv_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17321305',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.application.ui.Launcher.LauncherActivity',
        matches: '[vid="iv_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17321305',
        exampleUrls: 'https://e.gkd.li/f706b801-44ee-4009-8082-75c9d4139065',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@ViewGroup[childCount=0][clickable=true] - ViewGroup[childCount=3] <<n [id="me.ele:id/id_magex_mist_view"]',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 8,
      name: '权限提示-定位权限',
      desc: '点击关闭',
      activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="去开启"] + [id="me.ele:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13710588',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="去开启"] + [id="me.ele:id/close_tips"]',
        snapshotUrls: 'https://i.gkd.li/i/13710585',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
        matches: '[text="去开启"] + [id="me.ele:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13710588',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
        matches: '[text="去开启"] + [id="me.ele:id/close_tips"]',
        snapshotUrls: 'https://i.gkd.li/i/13710585',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 9,
      name: '通知提示-获取订单信息通知',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.message.ui.PushMessageGuideActivity',
        matches: '@View[visibleToUser=true] < * <2 [id="me.ele:id/frame_bottom_bg"]',
        snapshotUrls: 'https://i.gkd.li/i/13931205',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'me.ele.message.ui.PushMessageGuideActivity',
        matches: '@View[visibleToUser=true] < * <2 [id="me.ele:id/frame_bottom_bg"]',
        snapshotUrls: 'https://i.gkd.li/i/13931205',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '评价提示-底部调研邀请卡片-1',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'me.ele.foodchannel.page.WMChannelNativeActivity',
        matches: ['[text*="小调研"]', '[vid="iv_cancel"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/14630370',
        exampleUrls: 'https://m.gkd.li/57941037/350d8f4d-8ab0-4572-8ff0-450ab4729d53',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
        matches: '[vid="layoutFloat"] >3 [vid="id_magex_mist_view"] >3 ViewGroup[index=2][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14473000',
        exampleUrls: 'https://m.gkd.li/101449500/4efc22d1-508e-4b7a-a1c0-efd4e1637277',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '评价提示-底部调研邀请卡片-1-1-1-1',
      desc: '点击关闭',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'me.ele.foodchannel.page.WMChannelNativeActivity',
        matches: ['[text*="小调研"]', '[vid="iv_cancel"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/14630370',
        exampleUrls: 'https://m.gkd.li/57941037/350d8f4d-8ab0-4572-8ff0-450ab4729d53',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 12,
      name: '全屏广告-券包限量抢弹窗',
      enable: false,
      activityIds: 'me.ele.pha.shell.ui.ElePhaActivity',
      snapshotUrls: 'https://i.gkd.li/i/14740515',
      exampleUrls: 'https://m.gkd.li/101449500/a7264d48-cdf6-4f6c-851c-3b6f94f71405',
      rules: [
      {
        key: 0,
        matches: 'View >2 View[childCount=2] > @View[clickable=true] > Image',
        _uniqueKey: 0
      },
      ],
    },
  ],
});