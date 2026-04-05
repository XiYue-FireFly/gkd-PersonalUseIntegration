import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.music',
  name: '华为音乐',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20773821',
        fastQuery: true,
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
        snapshotUrls: ['https://i.gkd.li/i/12745222'],
        action: 'clickCenter',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示-广告反馈下拉窗',
      enable: false,
      activityIds: ['com.huawei.openalliance.ad.activity.FeedbackActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'TextView[id="com.huawei.music:id/label_title"][text="直接关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/13067574', 'https://i.gkd.li/i/13067572', 'https://i.gkd.li/i/13067571', 'https://i.gkd.li/i/13067659', 'https://i.gkd.li/i/13067665', 'https://i.gkd.li/i/13067820'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '局部广告-播放界面直播浮窗',
      activityIds: 'com.android.mediacenter.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'TextView[id="com.huawei.music:id/live_info"] < LinearLayout -2 [id="com.huawei.music:id/close_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13067649',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[id="com.huawei.music:id/live_info"] < LinearLayout -2 [id="com.huawei.music:id/close_button"]',
        snapshotUrls: ['https://i.gkd.li/i/13067649'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '通知提示-播放（音乐、视频）页面广告',
      enable: false,
      activityIds: ['com.android.mediacenter.MainActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'TextView[id="com.huawei.music:id/ad_icon"&&visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13067956', 'https://i.gkd.li/i/13067978', 'https://i.gkd.li/i/13067387'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '权限提示-评论区广告',
      enable: false,
      activityIds: ['com.android.mediacenter.comment.ui.CommentListMainActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.huawei.music:id/ad_icon"]',
        snapshotUrls: ['https://i.gkd.li/i/13067937'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '局部广告-视频播放页广告反馈',
      enable: false,
      activityIds: ['com.android.mediacenter.MainActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'TextView[text="不感兴趣"][id$="title"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13067986', 'https://i.gkd.li/i/13067981'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 7,
      name: '全屏广告-播放器上滑广告',
      enable: false,
      activityIds: ['com.android.mediacenter.MainActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'ViewGroup > TextView[text="广告"][id$="ad_icon"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13068935', 'https://i.gkd.li/i/13194163', 'https://i.gkd.li/i/13263590'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['com.android.mediacenter.PageActivity', 'com.android.mediacenter.MainActivity'],
        matches: 'ImageView[vid="campaign_dialog_close_image_view" || vid="iv_close"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14193738', 'https://i.gkd.li/i/15523958', 'https://i.gkd.li/i/24676040'],
        exampleUrls: 'https://m.gkd.li/57941037/00c83449-9809-4de8-9c7c-c6ce1b9fa2c3',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 9,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.android.mediacenter.MainActivity',
        matches: 'RelativeLayout[childCount=2] + * [vid="close_radio_camp_button"]',
        snapshotUrls: 'https://i.gkd.li/i/14193767',
        exampleUrls: 'https://m.gkd.li/57941037/b205c209-07c9-49e1-b72d-f9b31d9bc2d9',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.android.mediacenter.MainActivity',
        matches: '[vid="ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/16812666',
        exampleUrls: 'https://e.gkd.li/586d860f-7f7c-41c7-af0f-bc17ac695a1a',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '分段广告-首页横幅广告',
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: 'com.android.mediacenter.MainActivity',
        matches: '[vid="ad_more_layout"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20745787',
        exampleUrls: 'https://e.gkd.li/c64216a4-46bc-461d-9973-9ffcfab2fd51',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
        matches: '[text="直接关闭"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20745789',
        exampleUrls: 'https://e.gkd.li/9c4da3cf-897d-4b4a-bda0-e5e35af19b1d',
        preKeys: [1],
        _uniqueKey: 2
      },
      ],
    },
  ],
});