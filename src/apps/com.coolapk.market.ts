import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
{
      key: -1,
      name: '开屏广告',
      excludeActivityIds: ['.view.search.', '.view.feed.', '.view.node.DynamicNodePageActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        snapshotUrls: ['https://i.gkd.li/i/12503773', 'https://i.gkd.li/i/13247610', 'https://i.gkd.li/i/13264779', 'https://i.gkd.li/i/13826359', 'https://i.gkd.li/i/13827095'],
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[!(id="com.coolapk.market:id/item_view") && !(vid="card_view")] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12917990', 'https://i.gkd.li/i/13211392', 'https://i.gkd.li/i/23097140'],
        fastQuery: true,
        excludeSnapshotUrls: ['https://i.gkd.li/i/13247733', 'https://i.gkd.li/i/13296816', 'https://i.gkd.li/i/18245546'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id$="tt_splash_skip_btn"] <<n [id="com.coolapk.market:id/ad_container"]',
        snapshotUrls: ['https://i.gkd.li/i/12503773', 'https://i.gkd.li/i/13247610', 'https://i.gkd.li/i/13264779'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text^="跳过"][text.length<=4]',
        excludeMatches: '[id="com.coolapk.market:id/item_view"]',
        snapshotUrls: ['https://i.gkd.li/i/12917990', 'https://i.gkd.li/i/13211392', 'https://i.gkd.li/i/13247733', 'https://i.gkd.li/i/13247782', 'https://i.gkd.li/i/13296816'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@View[clickable=true] <(2,3) FrameLayout <2 FrameLayout <<n FrameLayout[id="com.coolapk.market:id/ad_container"]',
        snapshotUrls: ['https://i.gkd.li/i/13826359', 'https://i.gkd.li/i/13827095'],
        fastQuery: true,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 0,
      name: '分段广告-卡片广告',
      desc: '关闭信息流中的卡片广告',
      enable: false,
      activityIds: ['com.coolapk.market.view.main.MainActivity', 'com.coolapk.market.view.base.SimpleAlphaActivity', 'com.coolapk.market.view.node.DynamicNodePageActivity', 'com.coolapk.market.view.feed.FeedDetailActivityV8', '.view.search.SuperSearchResultActivity'],
      fastQuery: true,
      matchRoot: true,
      rules: [
      {
        key: 1,
        name: '点击右上角x按钮',
        matches: 'TextView[text!="编辑"] + [vid="close_view"][childCount=0]',
        snapshotUrls: ['https://i.gkd.li/import/12707506', 'https://i.gkd.li/import/12642094', 'https://i.gkd.li/import/12642148', 'https://i.gkd.li/import/12774771', 'https://i.gkd.li/import/13257987', 'https://i.gkd.li/i/19004644', 'https://i.gkd.li/i/19004652', 'https://i.gkd.li/i/19004663', 'https://i.gkd.li/i/19005176', 'https://i.gkd.li/i/20776874', 'https://i.gkd.li/i/21693917'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/14996359', 'https://i.gkd.li/i/15259305', 'https://i.gkd.li/i/15159886', 'https://i.gkd.li/i/15587119', 'https://i.gkd.li/i/20768037'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击[不感兴趣]/[关闭]',
        snapshotUrls: ['https://i.gkd.li/import/12707509', 'https://i.gkd.li/import/12642132', 'https://i.gkd.li/import/12642155', 'https://i.gkd.li/import/12774753', 'https://i.gkd.li/i/14959519', 'https://i.gkd.li/i/14964859', 'https://i.gkd.li/i/14549551', 'https://i.gkd.li/i/21693916', 'https://i.gkd.li/i/23046625'],
        preKeys: [1],
        anyMatches: ['@[text="不感兴趣" || text="关闭"] <n * > [text*="广告"]', '@[clickable=true] >(1,2) [text="不感兴趣"][visibleToUser=true]'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '选择关闭原因-点击不感兴趣',
        snapshotUrls: ['https://i.gkd.li/import/12472633', 'https://i.gkd.li/import/12655713', 'https://i.gkd.li/import/12660759', 'https://i.gkd.li/import/12706437', 'https://i.gkd.li/import/13786886', 'https://i.gkd.li/i/19004649', 'https://i.gkd.li/i/19004661', 'https://i.gkd.li/i/19643258', 'https://i.gkd.li/i/19643262', 'https://i.gkd.li/i/19534649', 'https://i.gkd.li/i/20776872'],
        preKeys: [1,2],
        anyMatches: ['@[clickable=true] > [text="不感兴趣"][visibleToUser=true]', '[text="不感兴趣"][clickable=true][visibleToUser=true]'],
        _uniqueKey: 3
      },
      {
        key: 0,
        matches: '@[vid="close_view"] <<n [vid="coolapk_card_view"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/19004644', 'https://i.gkd.li/i/19004652', 'https://i.gkd.li/i/19004663', 'https://i.gkd.li/i/19005176', 'https://i.gkd.li/i/20776874', 'https://i.gkd.li/i/21693917'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/14996359', 'https://i.gkd.li/i/15159886', 'https://i.gkd.li/i/15587119', 'https://i.gkd.li/i/20768037'],
        _uniqueKey: 0
      },
      {
        key: 4,
        snapshotUrls: ['https://i.gkd.li/i/19004649', 'https://i.gkd.li/i/19643258', 'https://i.gkd.li/i/19643262', 'https://i.gkd.li/i/19534649', 'https://i.gkd.li/i/20776872', 'https://i.gkd.li/i/21693916', 'https://i.gkd.li/i/23046625'],
        preKeys: [0,2],
        anyMatches: ['@[clickable=true] >(1,2) [text="不感兴趣"][visibleToUser=true]', '[text="不感兴趣"][clickable=true][visibleToUser=true]'],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[text="不感兴趣"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21036817',
        preKeys: [0,1],
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '点击右上角x按钮-1',
        matches: '[id="com.coolapk.market:id/close_view"]',
        excludeMatches: ['[text="回复"] + [text="发布"]', '[text="创建收藏单"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/12707506', 'https://i.gkd.li/i/12642094', 'https://i.gkd.li/i/12642148', 'https://i.gkd.li/i/12774771', 'https://i.gkd.li/i/13257987', 'https://i.gkd.li/i/14996359', 'https://i.gkd.li/i/15159886'],
        _uniqueKey: 6,
        _uniqueName: '点击右上角x按钮-1',
        name: '点击右上角x按钮-1'
      },
      {
        key: 7,
        name: '点击[不感兴趣]/[关闭]-1',
        matches: '@[text="不感兴趣" || text="关闭"] <n * > [text*="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/14959519', 'https://i.gkd.li/i/14964859'],
        preKeys: [1],
        _uniqueKey: 7,
        _uniqueName: '点击[不感兴趣]/[关闭]-1',
        name: '点击[不感兴趣]/[关闭]-1'
      },
      {
        key: 8,
        name: '选择关闭原因-点击不感兴趣-1',
        matches: '@LinearLayout > TextView[text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12472633', 'https://i.gkd.li/i/12655713', 'https://i.gkd.li/i/12660759', 'https://i.gkd.li/i/12706437'],
        preKeys: [1,2],
        _uniqueKey: 8,
        _uniqueName: '选择关闭原因-点击不感兴趣-1',
        name: '选择关闭原因-点击不感兴趣-1'
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.view.main.MainActivity',
        matches: '[text="立即更新"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15511206',
        action: 'back',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.view.main.MainActivity',
        matches: '[text="立即更新"]',
        snapshotUrls: 'https://i.gkd.li/i/23096630',
        exampleUrls: 'https://e.gkd.li/19b5d743-3632-4c64-8e51-b55c85070512',
        matchTime: 10000,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.view.main.MainActivity', '.view.splash.SplashActivity'],
        matches: '[text="去开启"] - [text="以后再说"]',
        snapshotUrls: ['https://i.gkd.li/i/13296465', 'https://i.gkd.li/i/20708984'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="去开启"] - [text="以后再说"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '功能类-自动查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      activityIds: 'com.coolapk.market.view.photo.PhotoViewActivity',
      fastQuery: true,
      snapshotUrls: ['https://i.gkd.li/i/14913023'],
      rules: [
      {
        key: 0,
        matches: '[vid="load_source_button"][checked=false]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['.view.search.SuperSearchResultActivity', '.view.node.DynamicNodePageActivity'],
        matches: '[text="大家还下载了"] + [vid="close_view"]',
        snapshotUrls: ['https://i.gkd.li/i/16448265', 'https://i.gkd.li/i/16448385'],
        exampleUrls: 'https://e.gkd.li/0cfa8038-dc74-46c3-9e06-998965d73711',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '局部广告-应用推荐',
      desc: '关闭搜索结果页面的应用推荐广告',
      enable: false,
      rules: [
      {
        key: 1,
        activityIds: ['.view.search.SuperSearchResultActivity', '.view.node.DynamicNodePageActivity'],
        matches: '[text="大家还下载了"] + [vid="close_view"]',
        snapshotUrls: ['https://i.gkd.li/i/16448265', 'https://i.gkd.li/i/16448385'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['.view.search.SuperSearchResultActivity'],
        matches: '@[desc="关闭"] <<n [vid="item_view"] <<n [vid="to_native_ad_view"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/19643150',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.view.search.SuperSearchResultActivity',
        matches: '@[desc="关闭"] <<n [vid="item_view"] <<n [vid="to_native_ad_view"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/19643150',
        exampleUrls: 'https://e.gkd.li/efd366d9-1c66-4c35-b164-6f91a623e2f2',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
  ],
});