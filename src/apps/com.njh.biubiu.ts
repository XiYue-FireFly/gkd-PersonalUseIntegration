import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.njh.biubiu',
  name: 'biubiu加速器',
  groups: [
{
    key: 0,
    name: '开屏广告',
    desc: '点击跳过',
    matchTime: 10000,
    actionMaximum: 1,
    actionMaximumKey: 0,
    resetMatch: 'app',
    order: -10,
    rules: [
      {
          key: 0,
          fastQuery: true,
          matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id="android:id/content"]',
          exampleUrls: 'https://m.gkd.li/57941037/5c2f4dfe-d7ff-415d-81f0-bca6b5b628cb',
          snapshotUrls: 'https://i.gkd.li/i/14214392',
      },
      {
          key: 1,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f96cc8d8-602e-4d96-a8f3-19088656121b',
          snapshotUrls: [
              'https://i.gkd.li/i/16486468',
              'https://i.gkd.li/i/16486469',
          ],
      },
    ],
  },
{
    key: 1,
    name: '全屏广告-弹窗广告',
    desc: '点击关闭',
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.njh.ping.speedup.detail.fragment.LaunchVPNActivity',
          matches: '[vid="iv_listitem_dislike"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/13a828c7-b94d-463f-bceb-a92fa7ff069a',
          snapshotUrls: 'https://i.gkd.li/i/19603369',
      },
    ],
  }
  ],
});
