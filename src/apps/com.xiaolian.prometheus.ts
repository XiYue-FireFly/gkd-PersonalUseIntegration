import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaolian.prometheus',
  name: '智慧笑联',
  groups: [
{
    key: 1,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.xiaolian.home.ui.HomeActivity',
          matches: '@[vid="close_rel"] - * > [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/14292788',
      },
      { key: 0, matches: '@[vid="close_rel"] - * > [text="发现新版本"]' },
    ],
  },
{
    key: 2,
    name: '全屏广告-关注公众号弹窗',
    desc: '点击关闭',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.xiaolian.home.ui.HomeActivity',
          matches: '@[vid="close_img"] + [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/i/14292789',
      },
      { key: 0, matches: '@[vid="close_img"] + [text="关注"]' },
    ],
  }
  ],
});
