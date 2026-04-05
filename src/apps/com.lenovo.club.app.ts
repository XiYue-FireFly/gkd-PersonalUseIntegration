import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.club.app',
  name: '联想',
  groups: [
{
    key: 2,
    name: '未分类-版本更新',
    enable: false,
    activityIds: 'com.lenovo.club.app.AdActivity',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    snapshotUrls: 'https://i.gkd.li/i/13498778',
    rules: [
      { key: 0, matches: '[id="com.lenovo.club.app:id/tv_title"][text="发现新版本"] < LinearLayout [text="下次再说"]' },
    ],
  }
  ],
});
