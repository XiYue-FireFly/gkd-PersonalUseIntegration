import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sohu.inputmethod.sogou',
  name: '搜狗输入法',
  groups: [
{
    key: 1,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    priorityTime: 10000,
    order: -10,
    rules: [
      {
          fastQuery: true,
          matches: '@[clickable=true] > [text="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d310d2a0-4795-421d-82da-f3855fb7288b',
          snapshotUrls: 'https://i.gkd.li/i/20138053',
      },
    ],
  }
  ],
});
