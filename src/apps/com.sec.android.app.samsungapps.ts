import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sec.android.app.samsungapps',
  name: '应用商店',
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
        matches: '[vid="skip"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14810528', 'https://i.gkd.li/i/18329468'],
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14810528',
        action: 'clickCenter',
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        matchTime: 10000,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '其他-[您是否年满 18 岁？]弹窗',
      desc: '点击[是]',
      rules: [
      {
        key: 0,
        activityIds: 'com.sec.android.app.samsungapps.SearchResultActivity',
        matches: '[text="您是否年满 18 岁？"] +4 @[clickable=true] > [text="是"]',
        snapshotUrls: 'https://i.gkd.li/i/14473690',
        exampleUrls: 'https://m.gkd.li/57941037/cee78493-fbe1-46a0-8dcf-a8b1f1f61f19',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="您是否年满 18 岁？"] +4 [vid="positive"][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-[大家还下载了]弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.detail.activity.ContentDetailActivity',
        matches: '@[desc="关闭"][clickable=true] - [vid="tv_detail_related_other_opp_title_layout"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18209149',
        exampleUrls: 'https://e.gkd.li/de1b9cc4-c47e-456a-b975-5eefaedb5e42',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});