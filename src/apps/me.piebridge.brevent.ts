import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.piebridge.brevent',
  name: '黑阈',
  groups: [
{
      key: 1,
      name: '权限提示-权限不足弹窗',
      desc: '点击取消',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'me.piebridge.brevent.ui.BreventActivity',
        matches: ['[text^="黑阈服务权限不足"]', '[text="取消"]'],
        snapshotUrls: 'https://i.gkd.li/i/13218439',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[id="android:id/message"][text^="黑阈服务权限不足"]', '[text="取消"][id^="android:id/button"]'],
        snapshotUrls: 'https://i.gkd.li/i/13218439',
        _uniqueKey: 1
      },
      ],
    },
  ],
});