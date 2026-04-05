import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
{
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        snapshotUrls: 'https://i.gkd.li/i/15981630',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="ad_parent"][visibleToUser=true][width>=1200 && width!=1224]',
        snapshotUrls: ['https://i.gkd.li/i/13601755', 'https://i.gkd.li/i/16054268', 'https://i.gkd.li/i/23324118', 'https://i.gkd.li/i/23324139', 'https://i.gkd.li/i/23652259', 'https://i.gkd.li/i/24191638', 'https://i.gkd.li/i/24362806'],
        fastQuery: true,
        excludeSnapshotUrls: ['https://i.gkd.li/i/23283060', 'https://i.gkd.li/i/23382528', 'https://i.gkd.li/i/23982586'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="ad_parent"][visibleToUser=true][width<1200 || width=1224]',
        snapshotUrls: ['https://i.gkd.li/i/13575257', 'https://i.gkd.li/i/13575547', 'https://i.gkd.li/i/18423724', 'https://i.gkd.li/i/23982586'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        excludeMatches: '[text="去绑定邮箱"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17687115',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/23283375',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[vid="ad_parent"][visibleToUser=true][width=1216]',
        snapshotUrls: 'https://i.gkd.li/i/23283060',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[vid="ad_parent"][visibleToUser=true][width=1440]',
        snapshotUrls: 'https://i.gkd.li/i/23382528',
        fastQuery: true,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 1,
      name: '青少年模式-不分享/同步作品短评',
      desc: '书影音-作品-状态-不分享/同步短评(5s后可手动)',
      enable: false,
      activityIds: 'com.douban.frodo.subject.activity.RatingActivity',
      matchTime: 5000,
      resetMatch: 'activity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '不分享到微信、微博',
        matches: '@LinearLayout > [id="com.douban.frodo:id/check_weibo_wechat"][visibleToUser=true][checked=true]',
        snapshotUrls: ['https://i.gkd.li/i/12508777'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '不同步到动态',
        matches: '@LinearLayout > [id="com.douban.frodo:id/check_status"][visibleToUser=true][checked=true]',
        snapshotUrls: ['https://i.gkd.li/i/12508777'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示-剧照广告',
      enable: false,
      activityIds: 'com.douban.frodo.baseproject.image.SociableImageActivity',
      rules: [
      {
        key: 0,
        matches: 'TextView[id="com.douban.frodo:id/ad_not_interest"][text="广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12509475',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/12509476',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: ['.activity.SplashActivity', '.subject.structure.activity.MovieActivity', '.group.activity.GroupTopicActivity', '.fangorns.topic.TopicsActivity', '.subject.struct2.MovieActivity2'],
        matches: '[vid="ad_header_new"] > [vid="menu_item"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18424402', 'https://i.gkd.li/i/18424418', 'https://i.gkd.li/i/18424924', 'https://i.gkd.li/i/19615325', 'https://i.gkd.li/i/23982599'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['.group.activity.GroupDetailActivity', '.group.activity.GroupTopicActivity'],
        matches: '[vid="ad_not_interest" || vid="ad_tag" || vid="group_ad_not_interest"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18424568', 'https://i.gkd.li/i/18424574', 'https://i.gkd.li/i/18424681', 'https://i.gkd.li/i/18424818'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/18422533',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.group.activity.GroupTopicActivity',
        matches: '@Image[childCount=0][visibleToUser=true][text=""] < View[childCount=1] -2 View >2 [childCount=0][text="广告"] <<n [vid="structure_header_container"]',
        snapshotUrls: 'https://i.gkd.li/i/18424747',
        actionMaximum: 1,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.group.activity.GroupTopicActivity',
        matches: '@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^="dislike"] -2 FrameLayout >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/19621152',
        exampleUrls: 'https://e.gkd.li/11d3ea75-c640-4b91-942e-3bf83b2e5f5e',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: ['.activity.SplashActivity', '.subject.structure.activity.MovieActivity', '.group.activity.GroupDetailActivity', '.group.activity.GroupTopicActivity', '.fangorns.topic.TopicsActivity'],
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/18424404', 'https://i.gkd.li/i/18424419', 'https://i.gkd.li/i/18424568', 'https://i.gkd.li/i/18424674', 'https://i.gkd.li/i/18424711', 'https://i.gkd.li/i/19615333', 'https://i.gkd.li/i/19621163'],
        preKeys: [1,2,3,4],
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '首页-动态-信息流广告',
        activityIds: ['com.douban.frodo.activity.SplashActivity', 'com.douban.frodo.status.activity.StatusDetailActivity'],
        matches: 'ImageView[id="com.douban.frodo:id/avatar"][index=0] +n ImageView[id="com.douban.frodo:id/menu_item"]',
        snapshotUrls: ['https://i.gkd.li/i/12547964', 'https://i.gkd.li/i/12548011', 'https://i.gkd.li/i/12548046'],
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '小组-帖子列表信息流广告',
        activityIds: ['com.douban.frodo.group.activity.GroupDetailActivity', 'com.douban.frodo.activity.SplashActivity'],
        matches: '[id="com.douban.frodo:id/ad_tag"][text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12723569', 'https://i.gkd.li/i/13347455'],
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '点击不感兴趣',
        matches: '@LinearLayout[clickable=true] > [id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12548016', 'https://i.gkd.li/i/12723422'],
        preKeys: [1,2],
        _uniqueKey: 8
      },
      ],
    },
{
      key: 4,
      name: '通知提示-卡片广告',
      desc: '书影音-卡片广告-点击卡片右下角"广告"文字',
      enable: false,
      activityIds: 'com.douban.frodo.activity.SplashActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/12548160',
      rules: [
      {
        key: 0,
        name: '点击【广告】',
        matches: '@View[clickable=true] > Image - TextView[text="广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12548131',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击【不感兴趣】',
        matches: '[text="广告"] < * + * > [text="不感兴趣"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12548116',
        preKeys: 0,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '评价提示-关闭评分反馈弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.SplashActivity',
        matches: ['[text^="喜欢豆瓣吗"][visibleToUser=true]', '[text="下次再说"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18424257',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="下次再说"][id="com.douban.frodo:id/neutral"]',
        snapshotUrls: 'https://i.gkd.li/i/12548314',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: '.group.activity.GroupTopicActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18424415',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.group.activity.GroupTopicActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout >2 [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"]',
        snapshotUrls: 'https://i.gkd.li/i/18424859',
        exampleUrls: 'https://e.gkd.li/735decb0-7f08-4c7d-8199-a38faf213f77',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.activity.SplashActivity',
        matches: '[vid="venue_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18717693',
        exampleUrls: 'https://e.gkd.li/86f2589d-87eb-4b9a-83aa-4248b905f7b2',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击【x】关闭型',
        activityIds: ['com.douban.frodo.group.activity.GroupTopicActivity'],
        matches: 'ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]',
        snapshotUrls: ['https://i.gkd.li/i/12674798', 'https://i.gkd.li/i/12674842', 'https://i.gkd.li/i/12723462', 'https://i.gkd.li/i/12723800', 'https://i.gkd.li/i/13402399', 'https://i.gkd.li/i/12548476'],
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击【广告】选原因型',
        activityIds: ['com.douban.frodo.subject.structure.activity.MovieActivity', 'com.douban.frodo.subject.activity.ForumTopicActivity', 'com.douban.frodo.group.activity.GroupTopicActivity', 'com.douban.frodo.activity.SplashActivity', 'com.douban.frodo.search.activity.NewSearchActivity'],
        matches: '[text="广告"][id$="ad_not_interest"]',
        snapshotUrls: ['https://i.gkd.li/i/12548064', 'https://i.gkd.li/i/12548450', 'https://i.gkd.li/i/12723751', 'https://i.gkd.li/i/13062693', 'https://i.gkd.li/i/13692895'],
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '点击【不感兴趣】',
        matches: '@LinearLayout[clickable=true] > [id="com.douban.frodo:id/mainText"][text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12548016', 'https://i.gkd.li/i/12723422'],
        preKeys: 1,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 10,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.douban.frodo.subject.structure.activity.MovieActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/13195565',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/13328126',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^="扭动或点击"]',
        snapshotUrls: 'https://i.gkd.li/i/13328126',
        exampleUrls: 'https://e.gkd.li/f8b1e031-3ec1-422c-9214-8350195642cd',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.subject.structure.activity.MovieActivity',
        matches: ['[text="广告"][visibleToUser=true]', '[vid="close"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18631520',
        exampleUrls: 'https://e.gkd.li/208939d0-9d7f-4a44-8e7d-5070478c15df',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.subject.structure.activity.MovieActivity',
        matches: ['[text="你发现了一枚徽章"][visibleToUser=true]', '[vid="confirmLayout"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18717771',
        exampleUrls: 'https://e.gkd.li/ca74a922-fb47-4fc8-8111-b6a66c2465ff',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '腾讯广告-1',
        activityIds: 'com.douban.frodo.subject.structure.activity.MovieActivity',
        matches: 'ImageView - FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13195565',
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '腾讯广告-2',
        matches: 'ImageView -n FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView',
        snapshotUrls: ['https://i.gkd.li/i/13296656', 'https://i.gkd.li/i/13328126'],
        _uniqueKey: 6
      },
      ],
    },
{
      key: 11,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.BetaApkDialogActivity', '.activity.SplashActivity'],
        matches: ['[text="新版试用邀请"][visibleToUser=true]', '[text="取消"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13228832', 'https://i.gkd.li/i/13659160'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.douban.frodo.activity.BetaApkDialogActivity', 'com.douban.frodo.activity.SplashActivity'],
        matches: ['[text="新版试用邀请"]', '@[text="取消"] + [text="下载"]'],
        snapshotUrls: ['https://i.gkd.li/i/13228832', 'https://i.gkd.li/i/13659160'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 13,
      name: '其他-标记看过的影视弹窗',
      desc: '点击[取消]',
      rules: [
      {
        key: 0,
        activityIds: '.subject.structure.activity.MovieActivity',
        matches: ['[text="标记看过的影视"][visibleToUser=true]', '[vid="cancelLayout"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18717798',
        exampleUrls: 'https://e.gkd.li/8067419c-a902-4750-9e1e-655bfc5c7342',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});