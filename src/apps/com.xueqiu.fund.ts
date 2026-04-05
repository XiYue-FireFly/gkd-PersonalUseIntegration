import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xueqiu.fund',
  name: '雪球基金',
  groups: [
{
      key: 1,
      name: '全屏广告-基金页面弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.xueqiu.fund.commonlib.FundHomeActivityV2',
        matches: '[id="com.xueqiu.fund:id/image_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/14163901',
        exampleUrls: 'https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="image_cancel"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});