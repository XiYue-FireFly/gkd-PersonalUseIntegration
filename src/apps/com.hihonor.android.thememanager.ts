import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.android.thememanager',
  name: '主题',
  groups: [
{
      key: 1,
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
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16573695',
        exampleUrls: 'https://e.gkd.li/f9821020-292c-454d-8e04-83ca73b38358',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: '.HwThemeManagerActivity',
        matches: '[vid="mtDialogClose"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/17158049',
        exampleUrls: 'https://e.gkd.li/7ceeb371-e7a5-4c94-8afd-d2c5b56744a6',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      ],
    },
  ],
});