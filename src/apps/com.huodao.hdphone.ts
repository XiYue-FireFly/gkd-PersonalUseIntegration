import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huodao.hdphone',
  name: '找靓机',
  groups: [
{
      key: 1,
      name: '全屏广告-超级补贴日弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="iv_adv"] + [vid="dialog_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13927567',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="android:id/content"] >2 [id="com.huodao.hdphone:id/dialog_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.huodao.hdphone.mvp.view.main.NewMainActivity',
        matches: '[vid="iv_recycle_close"]',
        snapshotUrls: 'https://i.gkd.li/i/15052025',
        exampleUrls: 'https://m.gkd.li/57941037/dc1534ca-9ab1-4d7b-8da4-6c7992882c94',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="iv_recycle_close"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});