import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingcai.apps.qualitydev',
  name: '到梦空间',
  groups: [
{
    key: 1,
    name: '功能类-学习活动',
    enable: false,
    activityIds: 'com.jingcai.apps.qualitydev.qualitync.activity_home.ActivityMainTab',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/i/14054117',
    rules: [
      { key: 0, matches: '[text="立即参与"][vid="tv_next"] -2 [text="关闭"][vid="tv_step"]' },
    ],
  }
  ],
});
