import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jym.mall',
  name: '交易猫',
  groups: [
{
      key: 0,
      name: '开屏广告-升级弹窗',
      enable: false,
      order: -10,
      snapshotUrls: 'https://i.gkd.li/i/12496974',
      rules: [
      {
        key: 0,
        matches: '[id="com.jym.mall:id/tv_cancel"][text="下次再说"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});