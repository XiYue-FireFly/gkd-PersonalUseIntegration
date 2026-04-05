import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    actionMaximumKey: 0,
    resetMatch: 'app',
    actionCdKey: 0,
    order: -10,
    rules: [
      {
          key: 0,
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
          key: -1,
          matches: '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead" && vid!*="time")]',
      },
      {
          key: 1,
          matches: '[vid="LinearLayoutSplAd"] >4 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14548642',
      },
    ],
  },
{
    key: 1,
    name: '分段广告-卡片广告',
    activityIds: 'com.mvvm.view.LazyMapStrategyActivity_TengXun',
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: '@View[clickable=true][childCount=0] < FrameLayout[desc^="dislike"] + FrameLayout >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13258021',
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13258015',
      },
      {
          key: 0,
          matches: '[desc^="dislike"] > View',
          snapshotUrls: 'https://i.gkd.li/i/13258021',
      },
      {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13258015',
      },
      {
          key: 2,
          matches: '@Image < View -2 View >2 View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13258018',
      },
      {
          key: 3,
          matches: '[vid="relativeLayout3AdContainer"] >7 [desc^="close-fill"] > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14548514',
      },
    ],
  },
{
    key: 2,
    name: '权限提示-通知权限',
    desc: '点击[以后再说]',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.mvc.activity.HomepageActivity2',
          matches: '[id="com.fan.app:id/tv_nj_later"]',
          snapshotUrls: 'https://i.gkd.li/i/13601734',
      },
      { key: 0, matches: '[id="com.fan.app:id/tv_nj_later"]' },
    ],
  }
  ],
});
