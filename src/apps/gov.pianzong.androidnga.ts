import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      matchRoot: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="tv_tiaoguo" || vid="iv_tg_ad" || vid="tv_skip"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13798686', 'https://i.gkd.li/i/17082872', 'https://i.gkd.li/i/17082897', 'https://i.gkd.li/i/17082899', 'https://i.gkd.li/i/23432463'],
        exampleUrls: 'https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="gov.pianzong.androidnga:id/iv_tg_ad"]',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="gov.pianzong.androidnga:id/ksad_splash_circle_skip_view"]',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="gov.pianzong.androidnga:id/ksad_skip_view_skip"]',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[vid="tv_tiaoguo"]',
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[text*="跳过"][text.length<=5]',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 1,
      name: '局部广告-首页-推荐-卡片广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.donews.nga.activitys.MainActivity',
        matches: '[id="gov.pianzong.androidnga:id/iv_close_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/12482727',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="gov.pianzong.androidnga:id/iv_close_ad"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-话题-帖子列表广告',
      desc: '点击卡片x按钮关闭广告',
      activityIds: 'gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity',
      rules: [
      {
        key: 1,
        matches: 'Image[text="ams_icon_single_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12655805',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]',
        snapshotUrls: 'https://i.gkd.li/i/12706140',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="广告"] - [id="gov.pianzong.androidnga:id/iv_information_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13303236',
        _uniqueKey: 3
      },
      {
        key: 0,
        matches: '[id="gov.pianzong.androidnga:id/rv_post_list"] > FrameLayout *[childCount=1 || childCount=3] > *[childCount<=4] > [text!="" && text!=null] +(1,2) *[childCount<=3 && childCount!=2] > [name*="Image" || name*="TextView"][text!=""][index=0 || index>1][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12655805', 'https://i.gkd.li/i/12706140', 'https://i.gkd.li/i/14123759', 'https://i.gkd.li/i/14155652'],
        _uniqueKey: 0
      },
      {
        key: 4,
        matches: '[id="gov.pianzong.androidnga:id/iv_information_ad_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13303236',
        actionCdKey: 0,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 3,
      name: '局部广告-社区-顶部广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.donews.nga.activitys.MainActivity',
        matches: '[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
        snapshotUrls: ['https://i.gkd.li/i/12706132'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.donews.nga.activitys.MainActivity',
        matches: '[vid="iv_homedialog_close" || vid="iv_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14126934', 'https://i.gkd.li/i/21158044'],
        exampleUrls: 'https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.hihonor.android.launcher.unihome.UniHomeLauncher',
        matches: '[id="gov.pianzong.androidnga:id/iv_homedialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14126934',
        exampleUrls: 'https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '局部广告-评论区底部广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'gov.pianzong.androidnga.activity.forumdetail.ArticleDetailActivity',
        matches: '[id="advertisementBottom"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17348441',
        exampleUrls: 'https://e.gkd.li/589a4441-4be0-4ebc-90f5-d0dc5cfc84ff',
        excludeSnapshotUrls: 'https://i.gkd.li/i/17348415',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.donews.nga.activitys.MainActivity',
        matches: '[vid="iv_close_notification_guide"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24105952',
        exampleUrls: 'https://e.gkd.li/c6be338c-2a1b-4123-bd8c-51fa35d2b8f2',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});