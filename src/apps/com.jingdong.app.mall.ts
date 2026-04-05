import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16323111',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        _uniqueKey: 0
      },
      {
        key: 1,
        excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17602356',
        excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '局部广告-购物车页面砸金蛋',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.jingdong.app.mall.MainFrameActivity',
        matches: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14731003',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '局部广告-悬浮广告',
      desc: '关闭首页悬浮广告、参与调研提示、红包弹窗和购物车砸金蛋',
      enable: false,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
      {
        key: 0,
        name: '参与调研',
        snapshotUrls: ['https://i.gkd.li/import/12642270', 'https://i.gkd.li/i/21793011'],
        anyMatches: ['FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + ImageView[!(desc="返回")][visibleToUser=true]', 'FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + *[childCount=1] > ImageView[!(desc="返回")][visibleToUser=true]'],
        excludeSnapshotUrls: ['https://i.gkd.li/import/12774910', 'https://i.gkd.li/i/15110548'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '邀好友得红包',
        matches: '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
        snapshotUrls: 'https://i.gkd.li/import/13242002',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '首页贴边广告',
        matches: 'RelativeLayout >n * > [desc^="关闭" && !(id*="egg")][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/import/13165659', 'https://i.gkd.li/import/12837870', 'https://i.gkd.li/import/13072091', 'https://i.gkd.li/import/12837870', 'https://i.gkd.li/i/17690650'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/15077913',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '购物车页面砸金蛋',
        matches: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
        snapshotUrls: ['https://i.gkd.li/import/12642266', 'https://i.gkd.li/i/14731003'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '推推红包',
        matches: '@ImageView[id^="com.jd.lib.personal.feature"][index=parent.childCount.minus(1)] <<(3,4) RelativeLayout > LinearLayout[id=null][childCount=2] > ImageView[id^="com.jd.lib.personal.feature"][index=0]',
        snapshotUrls: ['https://i.gkd.li/i/20532279', 'https://i.gkd.li/i/20532280', 'https://i.gkd.li/i/23693918'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/21343338'],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: 'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc=null][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12642270', 'https://i.gkd.li/i/12774910'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/15110548',
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
        snapshotUrls: 'https://i.gkd.li/i/13242002',
        _uniqueKey: 6
      },
      {
        key: 7,
        matches: '[desc="关闭浮层icon"][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13165659', 'https://i.gkd.li/i/12837870', 'https://i.gkd.li/i/13072091', 'https://i.gkd.li/i/12837870', 'https://i.gkd.li/i/15077913'],
        _uniqueKey: 7
      },
      {
        key: 8,
        matches: 'FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc=null][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12642270', 'https://i.gkd.li/i/12774910', 'https://i.gkd.li/i/15110548'],
        _uniqueKey: 8
      },
      ],
    },
{
      key: 4,
      name: '通知提示',
      desc: '关闭消息通知开启提示',
      enable: false,
      activityIds: ['com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew', 'com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity', 'com.jd.lib.message.messagecenter3.MessageCenterActivity', 'com.jingdong.app.mall.MainFrameActivity'],
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text="开启消息通知"]',
        snapshotUrls: ['https://i.gkd.li/import/12839864', 'https://i.gkd.li/import/13772299', 'https://i.gkd.li/import/13917163', 'https://i.gkd.li/i/13463618', 'https://i.gkd.li/i/14692570', 'https://i.gkd.li/i/18060234'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView < FrameLayout[clickable=true] + TextView[text^="打开系统通知"]',
        snapshotUrls: 'https://i.gkd.li/import/12839865',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['.MainFrameActivity', 'com.jd.lib.message.messagecenter'],
        matches: '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text="开启消息通知"]',
        snapshotUrls: ['https://i.gkd.li/i/13917163', 'https://i.gkd.li/i/13463618', 'https://i.gkd.li/i/14692570', 'https://i.gkd.li/i/18060234'],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.jd.lib.message.messagecenter',
        matches: '@[clickable=true] + [text^="打开系统通知"]',
        snapshotUrls: 'https://i.gkd.li/i/12839865',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@ImageView[clickable=true][visibleToUser=true] <n * > [text="开启消息通知"]',
        snapshotUrls: ['https://i.gkd.li/i/13917163', 'https://i.gkd.li/i/13463618', 'https://i.gkd.li/i/14692570'],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '@[clickable=true] + [text^="打开系统通知"]',
        snapshotUrls: 'https://i.gkd.li/i/12839865',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-广告弹窗',
      desc: '关闭各种全屏广告弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: ['com.jingdong.app.mall.MainFrameActivity', 'com.jd.lib.jshop.jshop.JshopMainShopActivity', 'com.jd.lib.cashier.complete.view.CashierCompleteActivity'],
        matches: '[name$="Layout"][childCount=2][text=null][desc=null][visibleToUser=true] > @ImageView[desc*="关闭"][visibleToUser=true] - [name$="Layout"||desc="弹窗"]',
        excludeMatches: ['ImageView[desc="关闭页面"] - [text="优惠券"]', 'TextView[text="退换/售后"][id=null]', '[text="立即购买"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/import/13258996', 'https://i.gkd.li/import/13218034', 'https://i.gkd.li/import/14162769', 'https://i.gkd.li/import/13241883', 'https://i.gkd.li/import/13259029', 'https://i.gkd.li/i/15416926', 'https://i.gkd.li/i/15862131', 'https://i.gkd.li/i/14927060', 'https://i.gkd.li/i/14445257'],
        resetMatch: 'activity',
        matchTime: 10000,
        excludeSnapshotUrls: ['https://i.gkd.li/import/13336847', 'https://i.gkd.li/i/18455760', 'https://i.gkd.li/i/16818580', 'https://i.gkd.li/i/24170046'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.jingdong.app.mall.MainFrameActivity',
        snapshotUrls: ['https://i.gkd.li/i/14612925', 'https://i.gkd.li/i/17974166', 'https://i.gkd.li/i/15364514', 'https://i.gkd.li/i/13165721'],
        anyMatches: ['[id="android:id/content"] > RelativeLayout > RelativeLayout > *[childCount=2] > ImageView[index=1][clickable=true][!(desc="拍照购")]', 'ViewGroup[childCount>=2] > FrameLayout + FrameLayout > ImageView[desc="关闭"]'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '购物车页面支付成功广告弹窗',
        activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
        matches: ['@ImageView - ViewGroup >2 TextView[text="查看订单"]'],
        snapshotUrls: 'https://i.gkd.li/import/13446362',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '加入购物车后出现的弹窗',
        activityIds: 'com.jd.lib.productdetail.ProductDetailActivity',
        matches: ['[text="继续逛"][clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/15047243',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.jingdong.app.mall.MainFrameActivity',
        matches: '@FrameLayout[clickable=true] > [desc="关闭"]',
        excludeMatches: '[text="确定" || text="加入购物车" || text*="购买" || text*="下单"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13165721', 'https://i.gkd.li/i/15364514'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/18455760',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: ['com.jd.lib.cashier.complete.view.CashierCompleteActivity', 'com.jd.lib.jshop.jshop.JshopMainShopActivity'],
        matches: '[vid="close"][desc="关闭页面"]',
        snapshotUrls: ['https://i.gkd.li/i/13218034', 'https://i.gkd.li/i/14927060'],
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: ['com.jingdong.app.mall.MainFrameActivity', 'com.jd.lib.jshop.jshop.JshopMainShopActivity'],
        matches: '[desc="关闭页面" || desc="关闭按钮"][clickable=true][visibleToUser=true]',
        excludeMatches: ['ImageView[desc="关闭页面"] - [text="优惠券"]', 'TextView[text="退换/售后"][id=null]', '[text="立即购买"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13241883', 'https://i.gkd.li/i/13258996', 'https://i.gkd.li/i/13336847', 'https://i.gkd.li/i/15416926', 'https://i.gkd.li/i/15862131', 'https://i.gkd.li/i/16818580', 'https://i.gkd.li/i/24170046'],
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: '.MainFrameActivity',
        matches: '[text^="惊喜福利来袭"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17974166',
        exampleUrls: 'https://e.gkd.li/580d3cb5-503e-47a9-ba88-056e91c2f084',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        action: 'back',
        _uniqueKey: 7
      },
      {
        key: 8,
        activityIds: 'com.jingdong.app.mall.MainFrameActivity',
        matches: 'FrameLayout > [desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13165721',
        _uniqueKey: 8
      },
      {
        key: 9,
        activityIds: ['com.jd.lib.cashier.complete.view.CashierCompleteActivity', 'com.jd.lib.jshop.jshop.JshopMainShopActivity'],
        matches: '[vid="webview"] + [vid="close"][desc="关闭页面"]',
        snapshotUrls: ['https://i.gkd.li/i/13218034', 'https://i.gkd.li/i/14927060'],
        fastQuery: true,
        _uniqueKey: 9
      },
      {
        key: 10,
        activityIds: 'com.jingdong.app.mall.MainFrameActivity',
        matches: '@[desc="关闭按钮"] <n * >n [desc="弹窗"]',
        snapshotUrls: ['https://i.gkd.li/i/13241883', 'https://i.gkd.li/i/132599029'],
        _uniqueKey: 10
      },
      {
        key: 11,
        activityIds: 'com.jingdong.app.mall.MainFrameActivity',
        matches: 'RelativeLayout > ImageView[desc="关闭页面"]',
        excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]',
        snapshotUrls: ['https://i.gkd.li/i/13258996', 'https://i.gkd.li/i/13336847'],
        fastQuery: true,
        _uniqueKey: 11
      },
      ],
    },
{
      key: 6,
      name: '局部广告-横幅广告',
      desc: '关闭页面顶部横幅广告和吸顶广告',
      enable: false,
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
      {
        key: 0,
        snapshotUrls: ['https://i.gkd.li/import/13258973', 'https://i.gkd.li/import/13258980', 'https://i.gkd.li/import/13258981', 'https://i.gkd.li/i/22319329', 'https://i.gkd.li/i/26164414'],
        anyMatches: ['ImageView < FrameLayout[index=0] < ViewGroup[childCount>=3] > FrameLayout[index=parent.childCount.minus(1)||index=parent.childCount.minus(2)][childCount=1] > ImageView[desc="关闭"]', 'View + FrameLayout[index=1] <2 ViewGroup[childCount>=3] > FrameLayout[index=parent.childCount.minus(1)||index=parent.childCount.minus(2)][childCount=1] > ImageView[desc="关闭"]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@View[desc.length=null][clickable=true][longClickable=false][visibleToUser=true][id=null] -n ImageView[id=null] <n RelativeLayout[id=null]',
        snapshotUrls: 'https://i.gkd.li/import/14163014',
        _uniqueKey: 1
      },
      {
        key: 2,
        snapshotUrls: ['https://i.gkd.li/i/15047238', 'https://i.gkd.li/i/17001455', 'https://i.gkd.li/i/21344132', 'https://i.gkd.li/i/23694139'],
        anyMatches: ['ImageView +n ViewGroup >2 [text.length>0] < ViewGroup + @ViewGroup > ImageView', '@ViewGroup[index=parent.childCount.minus(1)] -2 ViewGroup[childCount<=1][index=0] + ViewGroup[childCount=2] >2 [text.length>0&&text.length<=3]'],
        _uniqueKey: 2
      },
      {
        key: 3,
        snapshotUrls: ['https://i.gkd.li/i/15112953', 'https://i.gkd.li/i/26164445'],
        anyMatches: ['[desc="吸顶楼层"] > [desc="关闭按钮"][clickable=true][visibleToUser=true]', 'ImageView[clickable=false] < @ViewGroup[clickable=true] <<4 [desc="吸顶楼层"]'],
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[id="com.jd.lib.cart.feature:id/plus_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15229577',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: 'ImageView < FrameLayout - FrameLayout > ImageView[desc="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/13258973', 'https://i.gkd.li/i/13258980', 'https://i.gkd.li/i/13258981'],
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: '@ViewGroup[clickable=true] - * > [text="去续费"]',
        snapshotUrls: 'https://i.gkd.li/i/15047238',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        matches: '[desc="吸顶楼层"] > [desc="关闭按钮"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15112953',
        _uniqueKey: 7
      },
      {
        key: 8,
        matches: '[id="com.jd.lib.cart.feature:id/plus_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15229577',
        fastQuery: true,
        _uniqueKey: 8
      },
      ],
    },
{
      key: 10,
      name: '功能类-京东账号登录授权',
      desc: '点击确认登录按钮',
      enable: false,
      activityIds: 'com.jingdong.app.mall.WebActivity',
      snapshotUrls: 'https://i.gkd.li/import/12901734',
      rules: [
      {
        key: 0,
        matches: '@[desc="确认登录"][clickable=true] > [text="确认登录"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="京东登录"] > [desc="确认登录"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '局部广告-支付页面产品推荐',
      desc: '关闭支付页面的推荐商品广告',
      enable: false,
      activityIds: 'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      snapshotUrls: 'https://i.gkd.li/import/13191146',
      rules: [
      {
        key: 0,
        matches: 'ImageView[clickable=true && desc="关闭"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 12,
      name: '全屏广告-购物车页面支付成功弹窗广告',
      desc: '自动点击正下方的"x"',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
        matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
        snapshotUrls: 'https://i.gkd.li/i/13446362',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 13,
      name: '功能类-支付订单后点击[完成]',
      desc: '点击支付完成后的完成按钮',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: '.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
        matches: '[vid="lib_cashier_finish_back_page_text"]',
        snapshotUrls: 'https://i.gkd.li/i/17358003',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.jd.lib.productdetail.ProductDetailActivity',
        matches: '[text="继续逛"]',
        snapshotUrls: 'https://i.gkd.li/i/15047243',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 14,
      name: '通知提示-关闭支付时各类开通弹窗',
      desc: '关闭支付时弹出的免密、快付、人脸等弹窗',
      enable: false,
      activityIds: ['com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity', 'com.jingdong.manto.card.MantoLightActivity', 'com.jd.lib.jdpaysdk.JDPayActivity'],
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: ['[text*="《"&&text*="协议"]', '[text*="暂不"||desc="关闭"]'],
        snapshotUrls: ['https://i.gkd.li/i/19918601', 'https://i.gkd.li/i/20033983', 'https://i.gkd.li/i/20265504', 'https://i.gkd.li/i/20709175'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[id!=""][clickable=true] <n * > [(text*="京东快付"||text="设置默认支付工具")&&text.length<=8]',
        snapshotUrls: ['https://i.gkd.li/i/20516256', 'https://i.gkd.li/i/23832919'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
        matches: '[vid="lib_cashier_finish_back_page_text"]',
        snapshotUrls: 'https://i.gkd.li/i/17358003',
        exampleUrls: 'https://e.gkd.li/ab886df0-2b34-4804-be7d-742a06fadda9',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 15,
      name: '功能类-支付订单后跳过开通[刷脸支付]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
      {
        key: 0,
        activityIds: 'com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity',
        matches: '[text="开启刷脸支付"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20709175',
        exampleUrls: 'https://e.gkd.li/bad5489e-0ec6-4039-8e4e-52b4b444f019',
        fastQuery: true,
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 16,
      name: '功能类-展开全部订单信息',
      desc: '订单已完成-点击全部订单信息',
      rules: [
      {
        key: 0,
        matches: '[text="全部订单信息"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24372039',
        exampleUrls: 'https://e.gkd.li/e1a3b6f7-b6cb-4379-90b5-cb4b927dacc4',
        actionMaximum: 1,
        resetMatch: 'match',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});