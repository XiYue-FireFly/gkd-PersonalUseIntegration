import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/25207240',
        exampleUrls: 'https://e.gkd.li/6bbf28ed-9e78-4006-9225-49c07954ee45',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '通知提示-通知弹窗',
      desc: '关闭消息推送开启提示',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.tmri.app.ui.activity.main.MainTabHostNewActivity', 'com.tmri.app.ui.activity.login.FingerLockActivity', 'com.tmri.app.ui.activity.main.TmriNewActivity'],
        matches: 'ImageButton[id="com.tmri.app.main:id/btn_cancel"]',
        snapshotUrls: ['https://i.gkd.li/import/13315944', 'https://i.gkd.li/import/13779215', 'https://i.gkd.li/i/20239810'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.tmri.app.ui.activity.main.MainTabHostNewActivity', 'com.tmri.app.ui.activity.main.TmriNewActivity'],
        matches: 'ImageButton[id="com.tmri.app.main:id/btn_cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/13315944', 'https://i.gkd.li/i/13779215'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '通知提示-公告通知弹窗',
      desc: '关闭公告通知弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.tmri.app.ui.activity.main.MainTabHostNewActivity', 'com.tmri.app.ui.activity.main.TmriNewActivity'],
        matches: '[vid="dialog_content_layout"]',
        snapshotUrls: ['https://i.gkd.li/i/18810054'],
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
        matches: ['[text="是否确认退出?"]', '[text="确认"]'],
        snapshotUrls: 'https://i.gkd.li/i/15597285',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
        matches: ['[text="立即更新"]', '[text="以后再说"]'],
        snapshotUrls: 'https://i.gkd.li/i/15751656',
        _uniqueKey: 0
      },
      ],
    },
  ],
});