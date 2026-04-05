import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rytong.hnair',
  name: '海南航空',
  groups: [
{
    key: 1,
    name: '全屏广告-首页弹窗广告',
    desc: '关闭APP首页出现的全屏弹窗广告',
    enable: false,
    activityIds: 'com.hnair.airlines.ui.main.MainActivity',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/import/12846381',
    rules: [
      { key: 0, matches: 'ImageView[id="com.rytong.hnair:id/iv_cloes"]' },
      {
          activityIds: 'com.hnair.airlines.ui.main.MainActivity',
          matches: 'ImageView[id*="com.rytong.hnair:id/iv_cloes"]',
          snapshotUrls: 'https://i.gkd.li/i/12846381',
      },
      { key: 0, matches: 'ImageView[id*="com.rytong.hnair:id/iv_cloes"]' },
    ],
  }
  ],
});
