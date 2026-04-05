import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huabenapp',
  name: '话本小说',
  groups: [
{
    key: 1,
    name: '更新提示',
    enable: false,
    activityIds: 'com.huabenapp.MainActivity',
    actionMaximum: 1,
    resetMatch: 'app',
    order: -9,
    snapshotUrls: 'https://i.gkd.li/i/14072723',
    rules: [
      { key: 0, matches: '[text="发现新版本"] <n ViewGroup < ScrollView +n ViewGroup[clickable=true]' },
    ],
  },
{
    key: 2,
    name: '功能类-阅读界面-底部社区问答',
    enable: false,
    activityIds: 'com.huabenapp.MainActivity',
    snapshotUrls: 'https://i.gkd.li/i/14076166',
    rules: [
      { key: 0, matches: '[text*="社区问答"] +2 ViewGroup' },
    ],
  }
  ],
});
