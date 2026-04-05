import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.woapp.hebei',
  name: '联通智家',
  groups: [
{
      key: 1,
      name: '更新提示',
      enable: false,
      activityIds: 'net.smartont.we.wohome.ui.main.view.MainActivity',
      order: -9,
      snapshotUrls: ['https://i.gkd.li/i/12707746'],
      rules: [
      {
        key: 0,
        matches: '@[text="忽略更新"] + [text="立即更新"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});