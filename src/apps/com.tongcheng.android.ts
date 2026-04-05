import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
{
    key: 1,
    name: '未分类-应用内卡片广告',
    enable: false,
    activityIds: 'com.tongcheng.android.TongchengMainActivity',
    rules: [
      {
          key: 0,
          matches: 'ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13167070',
      },
      {
          preKeys: 0,
          key: 1,
          matches: '@* > * > [id="com.tongcheng.android:id/tv_home_banner_pop_up"][text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13167149',
      },
    ],
  },
{
    key: 2,
    name: '全屏广告-弹窗广告',
    desc: '点击关闭',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
          fastQuery: true,
          activityIds: '.TongchengMainActivity',
          matches: '[vid="iv_home_ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/25369e74-1527-4ca5-9f39-77930ee84d1e',
          snapshotUrls: 'https://i.gkd.li/i/20921290',
      },
    ],
  },
{
    key: 3,
    name: '评价提示',
    matchTime: 10000,
    actionMaximum: 1,
    rules: [
      {
          fastQuery: true,
          activityIds: '.TongchengMainActivity',
          matches: [
              '[text="给个好评鼓励下吧"][visibleToUser=true]',
              '[vid="iv_close"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/60949e51-3d07-4eda-ab2d-9ff561d8b58c',
          snapshotUrls: 'https://i.gkd.li/i/20921292',
      },
    ],
  }
  ],
});
