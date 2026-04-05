import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
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
        excludeActivityIds: 'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
        excludeMatches: '[text="开启安全备份"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/23549481', 'https://i.gkd.li/i/23549490'],
        exampleUrls: 'https://e.gkd.li/5185bf9d-70f7-4841-991e-55b1b6768e97',
        fastQuery: true,
        anyMatches: ['[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]', '[text.length<10][text*="跳过"][visibleToUser=true]'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/23549097', 'https://i.gkd.li/i/23567868'],
        _uniqueKey: 0
      },
      {
        key: 1,
        snapshotUrls: ['https://i.gkd.li/i/23549504', 'https://i.gkd.li/i/23549553'],
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示-软件升级提醒',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.home.view.HomeActivity',
        matches: '[id="com.baidu.youavideo:id/tv_upgrade"] < LinearLayout +2 [id="com.baidu.youavideo:id/img_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12597916'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.baidu.youavideo:id/tv_upgrade"] < LinearLayout +2 [id="com.baidu.youavideo:id/img_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12597916'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '局部广告-悬浮窗广告',
      desc: '关闭广告悬浮窗',
      rules: [
      {
        key: 0,
        activityIds: '.home.view.HomeActivity',
        matches: '[id="com.baidu.youavideo:id/img_operation_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12970088',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.baidu.youavideo:id/img_operation_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12970088'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '评价提示',
      desc: '点击下次再说',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.home.view.HomeActivity',
        matches: '[id="com.baidu.youavideo:id/tv_next_time"]',
        snapshotUrls: 'https://i.gkd.li/i/12970094',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.baidu.youavideo:id/tv_next_time"]',
        snapshotUrls: ['https://i.gkd.li/i/12970094'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.vip.ui.VipPayWebDialogActivity',
        matches: '[text^="恭喜获得会员"] - View[text=""] > @Image[text!=null][visibleToUser=true] <<n [vid="fl_web_view"]',
        snapshotUrls: 'https://i.gkd.li/i/17576805',
        exampleUrls: 'https://e.gkd.li/c149b068-7f00-4173-9000-a41fa1603ba7',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.baidu.youavideo:id/tv_confirm_pay"] -5 [id="com.baidu.youavideo:id/img_close_dialog"]',
        snapshotUrls: ['https://i.gkd.li/i/12970094'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 1,
        activityIds: ['.preview.ui.search.SearchPreviewActivity', '.preview.ui.hometimeline.TimelinePreviewActivity', '.preview.ui.album.AlbumPreviewActivity'],
        matches: '[vid="fl_ad"] - [vid="iv_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14133595', 'https://i.gkd.li/i/14217352', 'https://i.gkd.li/i/17580816'],
        exampleUrls: 'https://e.gkd.li/6b628b65-214f-4dc0-b0b8-805ea566464b',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/15750684',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.home.view.HomeActivity',
        matches: '[vid="dialog_home_pop_close_button"]',
        snapshotUrls: 'https://i.gkd.li/i/17732139',
        exampleUrls: 'https://e.gkd.li/c83b5006-1b0d-478e-ab0a-d2f3f4957162',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 2
      },
      {
        key: 0,
        matches: '[id="com.baidu.youavideo:id/dialog_home_pop_close_button"] ',
        snapshotUrls: ['https://i.gkd.li/i/13048700'],
        _uniqueKey: 0
      },
      {
        key: 3,
        matches: '[id="com.baidu.youavideo:id/iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/14133595', 'https://i.gkd.li/i/14217352'],
        exampleUrls: 'https://m.gkd.li/57941037/3aa0e107-e31f-4e5a-8969-1fcd8310281d',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 7,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.app.ui.HomeActivity',
        matches: '[id="com.baidu.youavideo:id/dialog_open_guide_notification_root"] > [id="com.baidu.youavideo:id/img_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13413819',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.baidu.youavideo:id/dialog_open_guide_notification_root"] > [id="com.baidu.youavideo:id/img_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '局部广告-照片页底部浮窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.youavideo.home.view.HomeActivity',
        matches: '[id="com.baidu.youavideo:id/cl_root"] + [id="com.baidu.youavideo:id/img_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13711475',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.baidu.youavideo:id/cl_root"] + [id="com.baidu.youavideo:id/img_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        matches: '[vid="riv_banner"] + [vid="iv_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13874124', 'https://i.gkd.li/i/15220559'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="riv_banner"] < * > [vid="iv_close"][visibleToUser=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '权限提示-忽略电池优化',
      desc: '点击【取消】',
      enable: false,
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/14065510',
      rules: [
      {
        key: 0,
        matches: '[text*="电池优化权限"] < * +n [vid="bottom_two_button_layout"] >n [vid="cancel"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 12,
      name: '功能类-展示精选回忆故事',
      desc: '点击x',
      enable: false,
      activityIds: 'com.baidu.youavideo.story.ui.view.activity.CloudStorySetActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/14138907',
      rules: [
      {
        key: 0,
        matches: '[text="在桌面展示精选回忆故事"] - [vid="iv_close"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});