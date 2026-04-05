import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.mediacenter',
  name: '华为音乐',
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
          key: 0,
          action: 'clickCenter',
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
              'https://i.gkd.li/i/12901417',
              'https://i.gkd.li/i/12908742',
          ],
      },
      {
          key: 0,
          action: 'clickCenter',
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
              'https://i.gkd.li/i/12901417',
              'https://i.gkd.li/i/12908742',
          ],
          exampleUrls: [
              'https://github.com/gkd-kit/inspect/assets/38517192/6c34cd13-cfda-4462-99ed-2a2534a6fdf5',
              'https://github.com/gkd-kit/inspect/assets/38517192/c71bb14d-cd1f-4f9e-8ee9-6a1e11e56901',
          ],
      },
    ],
  },
{
    key: 1,
    name: '全屏广告-VIP弹窗广告',
    desc: '点击底部圆形x图标关闭弹窗',
    activityIds: 'com.android.mediacenter.MainActivity',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/i/12914026',
    rules: [
      { key: 0, matches: '[id="com.android.mediacenter:id/iv_close"]' },
    ],
  },
{
    key: 2,
    name: '局部广告-推荐卡片广告',
    desc: '点击卡片右上角[广告],点击不感兴趣[直接关闭]',
    fastQuery: true,
    rules: [
      {
          key: 0,
          name: '点击卡片右上角[广告]',
          activityIds: 'com.android.mediacenter.MainActivity',
          matches: '[id="com.android.mediacenter:id/ad_more_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/12914077',
      },
      {
          key: 1,
          name: '点击不感兴趣[直接关闭]',
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches: '[id="com.android.mediacenter:id/label_title"][text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12914078',
      },
      {
          key: 0,
          name: '点击卡片右上角[广告]',
          activityIds: 'com.android.mediacenter.MainActivity',
          matches: '[id="com.android.mediacenter:id/ad_more_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/12914077',
          exampleUrls: 'https://github.com/gkd-kit/inspect/assets/38517192/37ee4a9b-2518-41e6-8227-7b204ed1bf61',
      },
      {
          key: 1,
          name: '点击不感兴趣[直接关闭]',
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches: '[id="com.android.mediacenter:id/label_title"][text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12914078',
          exampleUrls: 'https://github.com/gkd-kit/inspect/assets/38517192/d098a194-80ff-49a1-b80e-191f7574a816',
      },
    ],
  }
  ],
});
