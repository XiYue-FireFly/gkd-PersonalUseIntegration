import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video',
  name: '爱奇艺',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    priorityTime: 10000,
    order: -10,
    rules: [
      {
          matches: '@[clickable=true] >(1,2) [text="关闭"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13160866',
              'https://i.gkd.li/i/13379565',
              'https://i.gkd.li/i/18135566',
          ],
      },
      { key: 0, matches: '@LinearLayout > [text="关闭"]' },
    ],
  },
{
    key: 1,
    name: '未分类-青少年弹窗',
    enable: false,
    activityIds: 'org.qiyi.android.video.MainActivity',
    fastQuery: true,
    rules: [
      {
          matches: '[id="com.qiyi.video:id/confirm_btn"][text="我知道了"]',
          exampleUrls: 'https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16',
          snapshotUrls: 'https://i.gkd.li/i/13546555',
      },
    ],
  },
{
    key: 2,
    name: '局部广告-顶部卡片广告',
    fastQuery: true,
    rules: [
      {
          activityIds: [
              'org.qiyi.android.video.MainActivity',
              'org.qiyi.video.PhoneCloudRecordActivity',
              '.qysplashscreen.hotlaunch.HotSplashScreenActivity',
          ],
          anyMatches: [
              '@[vid="unused_res_a"][clickable=true] > [vid="close"][visibleToUser=true]',
              '@[vid="unused_res_a"][clickable=true] - [text="广告"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/69dd60a4-3038-4a8c-8501-33a2d36b3283',
          snapshotUrls: [
              'https://i.gkd.li/i/12495050',
              'https://i.gkd.li/i/16301287',
              'https://i.gkd.li/i/24312658',
              'https://i.gkd.li/i/24314237',
              'https://i.gkd.li/i/24364968',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/24324750',
      },
      { key: 0, matches: '@[id="com.qiyi.video:id/unused_res_a"][clickable=true] > [id="com.qiyi.video:id/close"]' },
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
          activityIds: 'org.qiyi.android.video.MainActivity',
          matches: '[id="com.qiyi.video:id/cancel_btn"][text="暂时不要"]',
          snapshotUrls: 'https://i.gkd.li/i/12838152',
      },
      { key: 0, matches: '[id="com.qiyi.video:id/cancel_btn"][text="暂时不要"]' },
    ],
  },
{
    key: 4,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: [
              'org.qiyi.android.video.MainActivity',
              'org.qiyi.android.search.view.PhoneSearchActivity',
              '.qysplashscreen.hotlaunch.HotSplashScreenActivity',
          ],
          matches: '[text="暂不升级"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/12838158',
              'https://i.gkd.li/i/13684912',
              'https://i.gkd.li/i/19049372',
          ],
      },
      { key: 0, matches: '[id="com.qiyi.video:id/cancel_btn"][text="暂不升级"]' },
    ],
  },
{
    key: 5,
    name: '全屏广告-播放页-插入广告',
    desc: '视频播放前或播放中途插入的广告',
    rules: [
      {
          key: 1,
          fastQuery: true,
          activityIds: 'org.iqiyi.video.activity.PlayerActivity',
          matches: '@[clickable=true] > [text^="关闭广告"]',
          exampleUrls: 'https://e.gkd.li/04622996-5a6d-4577-a1cb-adcae37f62b6',
          snapshotUrls: 'https://i.gkd.li/i/18134230',
      },
      {
          key: 2,
          fastQuery: true,
          activityIds: 'org.iqiyi.video.activity.PlayerActivity',
          matches: '[vid="btn_ads_img_pause_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2cc7688b-f802-4ebe-9eb6-6b9bc6ed5633',
          snapshotUrls: 'https://i.gkd.li/i/18135562',
      },
      {
          matches: '@RelativeLayout[id="com.qiyi.video:id/unused_res_a"] > TextView[text="关闭广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13536669',
              'https://i.gkd.li/i/13536703',
          ],
      },
    ],
  }
  ],
});
