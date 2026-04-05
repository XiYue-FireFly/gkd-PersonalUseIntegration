import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zuoyebang.knowledge',
  name: '作业帮家长版',
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
        matches: '[id="com.zuoyebang.knowledge:id/cancel_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13695522',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.zuoyebang.knowledge:id/cancel_button"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '评价提示-赏好评弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.homework.activity.init.InitActivity',
        matches: 'TextView[id="com.zuoyebang.knowledge:id/btn_cancle"]',
        snapshotUrls: 'https://i.gkd.li/i/13043228',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[id="com.zuoyebang.knowledge:id/btn_cancle"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});