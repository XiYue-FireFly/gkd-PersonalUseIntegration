import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'dxwt.questionnaire.ui',
  name: '10000社区',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    priorityTime: 10000,
    order: -10,
    rules: [
      {
          matches: '@View[desc^="关闭"][visibleToUser=true] <3 FrameLayout < FrameLayout < FrameLayout < [id="dxwt.questionnaire.ui:id/container"]',
          snapshotUrls: 'https://i.gkd.li/i/13255491',
          excludeSnapshotUrls: 'https://i.gkd.li/i/13259475',
      },
      { key: 0, matches: '[desc^="关闭"][desc.length<=10][visibleToUser=true]' },
    ],
  }
  ],
});
