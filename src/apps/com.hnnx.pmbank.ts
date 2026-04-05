import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hnnx.pmbank',
  name: '河南农信',
  groups: [
{
    key: 3,
    name: '未分类-版本更新',
    enable: false,
    activityIds: 'com.yitong.mbank.app.android.activity.SplashActivity',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/i/13536762',
    rules: [
      { key: 0, matches: '[text="是否下载最新版客户端？"] <<n [id="android:id/parentPanel"] Button[text="取消"]' },
    ],
  }
  ],
});
