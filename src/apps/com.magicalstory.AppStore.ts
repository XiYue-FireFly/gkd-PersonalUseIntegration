import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 0,
        name: '软件详情页',
        activityIds: ['com.magicalstory.AppStore.appDetails.AppDetailsActivity', 'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity'],
        matches: ['[vid="itemUser"][visibleToUser=true]', 'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid="bannerLayout"]'],
        snapshotUrls: ['https://i.gkd.li/i/14771070', 'https://i.gkd.li/i/14771175'],
        fastQuery: true,
        actionDelay: 300,
        excludeSnapshotUrls: ['https://i.gkd.li/i/14771110', 'https://i.gkd.li/i/17879219'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '搜索页面',
        activityIds: 'com.magicalstory.AppStore.search.searchActivity',
        matches: 'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14771429',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '首页',
        activityIds: 'com.magicalstory.AppStore.main.MainActivity',
        matches: '[vid="button_close_ad"]',
        snapshotUrls: 'https://i.gkd.li/i/14668408',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '评论区顶部',
        activityIds: 'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
        matches: ['[vid="title_browse"][visibleToUser=true]', 'FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid="banner"]'],
        snapshotUrls: ['https://i.gkd.li/i/14758809', 'https://i.gkd.li/i/14783076'],
        fastQuery: true,
        actionDelay: 300,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '软件详情页-1',
        activityIds: ['com.magicalstory.AppStore.appDetails.AppDetailsActivity', 'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity'],
        matches: '@ImageView < FrameLayout[childCount=1] <3 [childCount=5] <<n [vid="bannerLayout"] + [vid="itemUser"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14771070', 'https://i.gkd.li/i/14771175', 'https://i.gkd.li/i/14771110'],
        fastQuery: true,
        actionDelay: 300,
        _uniqueKey: 4,
        _uniqueName: '软件详情页-1',
        name: '软件详情页-1'
      },
      {
        key: 5,
        name: '评论区顶部-1',
        activityIds: 'com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity',
        matches: '@ImageView < FrameLayout[childCount=1] <<n [vid="banner"] +2 [vid="title_browse"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14758809', 'https://i.gkd.li/i/14783076'],
        fastQuery: true,
        actionDelay: 300,
        _uniqueKey: 5,
        _uniqueName: '评论区顶部-1',
        name: '评论区顶部-1'
      },
      ],
    },
{
      key: 2,
      name: '通知提示-公告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.main.MainActivity',
        matches: '[text="隐藏"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17892865',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="隐藏"][id="com.magicalstory.AppStore:id/btn_selectNegative"]',
        snapshotUrls: 'https://i.gkd.li/i/13437553',
        _uniqueKey: 1
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
        activityIds: 'com.cretin.www.cretinautoupdatelibrary.activity.UpdateType10Activity',
        matches: '[id="com.magicalstory.AppStore:id/tv_update"] <2 * + * > [id="com.magicalstory.AppStore:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13459373',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '局部广告-首页横幅广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.main.MainActivity',
        matches: '[vid="item_broadcast"] >2 [vid="button_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20259691',
        exampleUrls: 'https://e.gkd.li/c885f80c-9fd5-4fcc-9117-e8fed04ee300',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '功能类-签到页-自动签到',
      desc: '签到页自动点击【签到】按钮',
      enable: false,
      activityIds: 'com.magicalstory.AppStore.user.sign.signActivity',
      actionMaximum: 1,
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/14168441',
      rules: [
      {
        key: 0,
        matches: '[text="签到"][vid="button"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});