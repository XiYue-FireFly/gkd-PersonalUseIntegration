import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
{
      key: 0,
      name: '全屏广告-云存储空间不足弹窗',
      desc: '点击云存储空间不足提示弹窗中的"以后再说"按钮',
      enable: false,
      activityIds: 'com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity',
      snapshotUrls: 'https://i.gkd.li/import/12847374',
      rules: [
      {
        key: 0,
        matches: 'View > [text="以后再说"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '云存储空间不足弹窗',
        activityIds: 'com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity',
        matches: '[text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/12847374',
        exampleUrls: 'https://m.gkd.li/57941037/df5f7c28-a1fa-4d1b-87b8-2f592e5a8423',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '会员打折弹窗',
        activityIds: 'com.miui.cloudservice.ad.AdPopupActivity',
        matches: '[vid="ad_popup_close_iv"]',
        snapshotUrls: 'https://i.gkd.li/i/14320937',
        exampleUrls: 'https://m.gkd.li/57941037/fbb8a877-4e69-4d72-b31d-85ad87ab34af',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 1,
      name: '更新提示',
      desc: '点击[以后再说]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.MiCloudMainActivity',
        matches: '@[text="以后再说"] + [text="立即升级"]',
        snapshotUrls: 'https://i.gkd.li/i/14476801',
        exampleUrls: 'https://m.gkd.li/57941037/789b4472-f989-4d32-aff2-6b657b6e0deb',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      rules: [
      {
        key: 0,
        activityIds: '.ui.MiCloudMainActivity',
        matches: ['[text$="开启“通知”权限。"]', '[text="取消"][clickable=true]'],
        snapshotUrls: 'https://i.gkd.li/i/23165486',
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      ],
    },
  ],
});