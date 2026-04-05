import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
{
    key: 1,
    name: '全屏广告-弹窗广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.smzdm.client.android.app.HomeActivity',
          matches: '[id="com.smzdm.client.android:id/dialog_home_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12695751',
      },
      { key: 0, matches: '[id="com.smzdm.client.android:id/dialog_home_close"]' },
    ],
  },
{
    key: 2,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: '.app.HomeActivity',
          matches: '[id="com.smzdm.client.android:id/tv_version"] +2 [id="com.smzdm.client.android:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13198016',
      },
      { key: 0, matches: '[id="com.smzdm.client.android:id/tv_version"] +2 [id="com.smzdm.client.android:id/iv_close"]' },
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
          activityIds: [
              '.module.haojia.detail.HaojiaDetailActivity',
              '.module.community.module.bask.BaskDetailActivity',
              '.app.HomeActivity',
          ],
          matches: [
              'TextView[text^="开启推送通知"]',
              '[vid="iv_close" || id="com.smzdm.client.android:id/ib_close"][visibleToUser=true]',
          ],
          exampleUrls: [
              'https://e.gkd.li/2e979f31-7498-497f-a4ed-b82b884e2d8d',
              'https://e.gkd.li/a52462c1-e3bf-45ad-8639-6fa764f2135d',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13438810',
              'https://i.gkd.li/i/13626746',
              'https://i.gkd.li/i/18150286',
          ],
      },
      { key: 0, matches: 'ImageView[id="com.smzdm.client.android:id/ib_close"]' },
    ],
  },
{
    key: 10,
    name: '权限提示-请求读取剪贴板权限弹窗',
    desc: '点击暂不允许',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.smzdm.client.android.app.HomeActivity',
          matches: '@[text="暂不允许"] + [text="允许"]',
          snapshotUrls: 'https://i.gkd.li/i/13198020',
      },
      { key: 0, matches: '@[text="暂不允许"] + [text="允许"]' },
    ],
  }
  ],
});
