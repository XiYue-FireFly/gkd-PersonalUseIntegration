import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alcidae.smarthome',
  name: '海雀',
  groups: [
{
      key: 1,
      name: '全屏广告-首页通知弹窗',
      desc: '点击[不再提醒]并关闭弹窗',
      activityIds: 'com.danale.video.mainpage.main.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="cb_not_show"][checked=false][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18291310',
        exampleUrls: 'https://e.gkd.li/02d8846c-6753-4efe-b944-ea024f7485ad',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="ibtn_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18291310',
        exampleUrls: 'https://e.gkd.li/02d8846c-6753-4efe-b944-ea024f7485ad',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.danale.video.mainpage.main.MainActivity',
        matches: ['[text*="开启通知"][visibleToUser=true]', '[text="取消"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/18059150',
        exampleUrls: 'https://e.gkd.li/5f19c508-d4d3-4221-aafe-ab19845b3d4b',
        _uniqueKey: 0
      },
      ],
    },
  ],
});