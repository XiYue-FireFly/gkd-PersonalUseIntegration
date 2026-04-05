import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'zhongxinjiantou.szkingdom.android.newphone',
  name: '蜻蜓点金',
  groups: [
{
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击放弃通知',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.szkingdom.android.phone.ZXJTUserMainActivity',
        matches: '[id="zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off"][text="放弃通知"]',
        snapshotUrls: 'https://i.gkd.li/i/12924466',
        exampleUrls: 'https://m.gkd.li/57941037/642582b1-f0f1-446c-b3f4-287eac62d108',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="zhongxinjiantou.szkingdom.android.newphone:id/tv_notify_confirm_off"][text="放弃通知"]',
        snapshotUrls: 'https://i.gkd.li/i/12924466',
        _uniqueKey: 1
      },
      ],
    },
  ],
});