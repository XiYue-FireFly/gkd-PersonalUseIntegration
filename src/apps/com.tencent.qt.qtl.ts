import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
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
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16568456',
        exampleUrls: 'https://e.gkd.li/8e923c51-48e7-431c-abf8-e564761b772e',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.tencent.qt.module_appupdate.soft_update.impl.SoftUpdateConfirmActivity',
        matches: '[id="com.tencent.qt.qtl:id/btn_update_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/13611286',
        _uniqueKey: 0
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
        key: 0,
        activityIds: 'com.tencent.zone.main.MainZoneHomeActivity',
        matches: '[vid="notice_close_pic"]',
        snapshotUrls: 'https://i.gkd.li/i/16581606',
        exampleUrls: 'https://e.gkd.li/d1747892-c416-4877-a706-fb3c16e5b049',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});