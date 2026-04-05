import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.ailabs.tg',
  name: '天猫精灵',
  groups: [
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
        activityIds: '.activity.HomeActivity',
        matches: '[id="com.alibaba.ailabs.tg:id/ll_download"] + [id="com.alibaba.ailabs.tg:id/va_dialog_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/13296332',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.alibaba.ailabs.tg:id/ll_download"] + [id="com.alibaba.ailabs.tg:id/va_dialog_cancel"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-超级会员弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.alibaba.ailabs.flutter.container.FlutterPaymentActivity',
        matches: 'FrameLayout > LinearLayout > [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/14443874',
        exampleUrls: 'https://m.gkd.li/57941037/4a823639-f400-4249-81ea-f920d09317f4',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});