import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
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
        matches: '[vid="splash_skip_text"]',
        snapshotUrls: 'https://i.gkd.li/i/17631261',
        exampleUrls: 'https://e.gkd.li/5d393b9b-c327-4429-9759-8c18a097453a',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-红包弹窗-1',
      enable: false,
      _suffixCount: 1,
      rules: [
      {
        key: 1,
        activityIds: 'com.yxcorp.gifshow.HomeActivity',
        matches: '@ImageView[clickable=true] -n ViewGroup >2 [text~="[0-9]+.?[0-9]*"] + ViewGroup > [text$="元"]',
        snapshotUrls: ['https://i.gkd.li/i/14879912', 'https://i.gkd.li/i/15061662'],
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-朋友推荐弹窗',
      rules: [
      {
        key: 0,
        activityIds: 'com.yxcorp.gifshow.HomeActivity',
        matches: '[vid="popup_view" || vid="content_wrapper"] > [vid="close_btn"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14310639', 'https://i.gkd.li/i/15061832'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[vid="close_btn"] <n * > [text="朋友推荐"]',
        snapshotUrls: 'https://i.gkd.li/i/15061832',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-红包弹窗-1-1-1-1',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.yxcorp.gifshow.HomeActivity',
        matches: '@ImageView[clickable=true] -(1,2) ViewGroup > [text="点击立得奖励" || text^="邀请"]',
        snapshotUrls: ['https://i.gkd.li/i/14879912', 'https://i.gkd.li/i/15061662', 'https://i.gkd.li/i/25200787'],
        exampleUrls: 'https://m.gkd.li/101449500/f7bbd1db-f519-4ff9-96cb-4cb5b2f483a2',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.yxcorp.gifshow.HomeActivity',
        matches: '[vid="close_icon"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15747381',
        exampleUrls: 'https://m.gkd.li/57941037/12059549-21c2-47b7-9acf-ec221cc14f25',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '分段广告-悬浮广告',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="close_pendant"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23431963',
        exampleUrls: 'https://e.gkd.li/8f56e57f-b2d7-457c-8376-6351568ec14a',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="确定"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23431964',
        exampleUrls: 'https://e.gkd.li/89294dbb-4398-4561-91b7-4943ec7c98c7',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '评价提示',
      desc: 'x掉',
      rules: [
      {
        key: 0,
        activityIds: 'com.yxcorp.gifshow.HomeActivity',
        matches: '@[vid="close"][clickable=true] +2 * > [text*="给个好评吧"]',
        snapshotUrls: 'https://i.gkd.li/i/22851896',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});