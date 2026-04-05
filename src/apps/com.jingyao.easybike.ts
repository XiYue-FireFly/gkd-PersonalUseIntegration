import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
{
      key: 1,
      name: '更新提示',
      desc: '点击关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
        matches: '@ImageView + [vid="contentContainer"] >2 [text*="新版本"]',
        snapshotUrls: 'https://i.gkd.li/i/16108173',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.yanzhenjie.permission.PermissionActivity', 'com.hellobike.atlas.business.portal.PortalActivity'],
        matches: ['[text*="开启通知"]', '[text="取消"]'],
        snapshotUrls: ['https://i.gkd.li/i/13228735', 'https://i.gkd.li/i/13402675'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="开启通知"] < FrameLayout + FrameLayout >2 [text="取消"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '权限提示-定位权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
        matches: ['[text="系统定位服务已关闭"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/13228677',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="系统定位服务已关闭"] < FrameLayout +n FrameLayout >2 [text="取消"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: ['com.hellobike.ads.widget.insert.dialog.HBAdvertDialog', 'com.hellobike.atlas.business.portal.PortalActivity', 'com.hellobike.hitch.business.homenew.HitchHomeActivity'],
        matches: '[vid="actionDialogClose"]',
        snapshotUrls: ['https://i.gkd.li/i/12650090', 'https://i.gkd.li/i/16503613', 'https://i.gkd.li/i/23407810'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
        matches: '[id="com.jingyao.easybike:id/lottie_view"] < ViewGroup + [id="com.jingyao.easybike:id/btn_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12650163',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '[text="订单完成"] >(2) View[childCount=2] > Image[id=null][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12684673',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
        matches: '[desc="去使用"] + Button[text=null][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12739316',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
        matches: '@Image[childCount=0][text!=null] - View[childCount=1] > Image[childCount=0][text!=null] <<n [vid="webContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/23415363',
        exampleUrls: 'https://e.gkd.li/c6364646-6d3c-4b2e-80b9-0b356d4cd8b7',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: ['com.hellobike.ads.widget.insert.dialog.HBAdvertDialog', 'com.hellobike.atlas.business.portal.PortalActivity'],
        matches: '[vid="actionDialogClose"]',
        snapshotUrls: ['https://i.gkd.li/i/12650090', 'https://i.gkd.li/i/16503613'],
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
        matches: '[id="com.jingyao.easybike:id/lottie_view"] < ViewGroup + [id="com.jingyao.easybike:id/btn_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12650163',
        fastQuery: true,
        _uniqueKey: 6
      },
      ],
    },
{
      key: 12,
      name: '局部广告-右侧悬浮广告',
      activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12650071',
      rules: [
      {
        key: 0,
        matches: '@[id="com.jingyao.easybike:id/closeFloatArea"] + [id="com.jingyao.easybike:id/floatADContainer"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 15,
      name: '其他-新人教学弹窗',
      desc: '点击跳过',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
        matches: '@View[text="跳过"] <2 View <2 View <<n FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/13837543',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@View[text="跳过"] <2 View <2 View <<n FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});