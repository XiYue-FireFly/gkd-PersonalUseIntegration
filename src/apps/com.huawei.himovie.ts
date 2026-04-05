import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.himovie',
  name: '华为视频',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="hiad_skip_text"]',
        snapshotUrls: 'https://i.gkd.li/i/15523945',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]) || ([visibleToUser=true][text*="跳过"][text.length<10][width<500 && height<200])',
        snapshotUrls: ['https://i.gkd.li/i/20745477', 'https://i.gkd.li/i/20773665'],
        exampleUrls: 'https://e.gkd.li/ec00ceef-3930-4240-92f5-56816fc90be2',
        action: 'clickCenter',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
        action: 'clickCenter',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.huawei.video.content.impl.explore.main.activity.MainActivity',
        matches: '[vid="advert_dialog_close_image_view"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20775878',
        exampleUrls: 'https://e.gkd.li/c842b073-bbea-4a37-a45b-4d2a86cfa6c5',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});