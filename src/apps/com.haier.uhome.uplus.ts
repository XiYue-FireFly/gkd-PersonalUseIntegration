import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.haier.uhome.uplus',
  name: '海尔智家',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.upgradeui.ui.UpgradeDialogActivity',
        matches: '@[text="取消"] + [text="立即更新"||text="立即安装"]',
        snapshotUrls: ['https://i.gkd.li/i/12726844', 'https://i.gkd.li/i/12726801'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[text="取消"] + [text="立即更新"||text="立即安装"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      activityIds: '.ui.widget.MPermissionCheckDialog',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '@[checked=false] + [text="禁止后不在询问"]',
        snapshotUrls: 'https://i.gkd.li/i/12726829',
        exampleUrls: 'https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/12726829',
        exampleUrls: 'https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text*="通知栏权限"] +n LinearLayout > [text="取消"]',
        _uniqueKey: 2
      },
      ],
    },
  ],
});