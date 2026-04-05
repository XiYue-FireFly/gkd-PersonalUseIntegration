import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hyww.wisdomtree',
  name: '智慧树',
  groups: [
{
      key: 1,
      name: '全屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        name: '百度广告',
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '@ImageView[clickable=true][childCount=0] + RelativeLayout >(1,2) [text="反馈"]',
        snapshotUrls: ['https://i.gkd.li/i/13799876', 'https://i.gkd.li/i/13852024'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '百度广告-1',
        activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        matches: '[id="android:id/content"] >n RelativeLayout[childCount<=3] > ImageView[clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13799876', 'https://i.gkd.li/i/13852024'],
        _uniqueKey: 1,
        _uniqueName: '百度广告-1',
        name: '百度广告-1'
      },
      ],
    },
{
      key: 2,
      name: '局部广告',
      rules: [
      {
        key: 0,
        name: '信息流广告',
        matches: '@[vid="rl_down"] <<n [vid="tt_ad_content"]',
        snapshotUrls: 'https://i.gkd.li/i/13852023',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '信息流广告-1',
        matches: '[vid="time_line_type"] <<n * > * > [vid="rl_down"]',
        snapshotUrls: 'https://i.gkd.li/i/13852023',
        fastQuery: true,
        _uniqueKey: 1,
        _uniqueName: '信息流广告-1',
        name: '信息流广告-1'
      },
      ],
    },
  ],
});