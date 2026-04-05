import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    actionMaximumKey: 0,
    resetMatch: 'app',
    fastQuery: true,
    priorityTime: 10000,
    order: -10,
    rules: [
      {
          key: 0,
          matches: '@LinearLayout[clickable=true] > TextView[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12472630',
      },
      {
          key: 1,
          matches: '@View[clickable=true][childCount=0] +2 * >3 [text^="向上滑动"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/14819586',
              'https://i.gkd.li/i/23743205',
          ],
      },
      {
          key: 1,
          matches: '@View[clickable=true] +2 * >3 [text="向上滑动查看"]',
          snapshotUrls: 'https://i.gkd.li/i/14819586',
      },
    ],
  },
{
    key: 10,
    name: '分段广告-小说阅读页面-卡片广告',
    activityIds: 'com.tencent.mtt.MainActivity',
    rules: [
      {
          actionCd: 3000,
          key: 0,
          name: '点击广告按钮',
          excludeMatches: '[desc="屏蔽此广告"||desc="不感兴趣"]',
          matches: '@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc="广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12907446',
              'https://i.gkd.li/i/12907445',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          name: '点击[屏蔽此广告]/[直接关闭]',
          forcedTime: 10000,
          matches: '@ViewGroup[childCount=1 || childCount=3] > [desc="屏蔽此广告" || desc="直接关闭"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12907654',
              'https://i.gkd.li/i/12907651',
              'https://i.gkd.li/i/12907655',
              'https://i.gkd.li/i/12907653',
          ],
      },
      {
          preKeys: 0,
          key: 1,
          name: '点击[屏蔽此广告]',
          matches: '@ViewGroup > [desc="屏蔽此广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12907654',
              'https://i.gkd.li/i/12907651',
          ],
      },
      {
          preKeys: 1,
          key: 2,
          name: '点击[不感兴趣]',
          matches: '@ViewGroup > [desc="不感兴趣"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12907655',
              'https://i.gkd.li/i/12907653',
          ],
      },
    ],
  },
{
    key: 11,
    name: '分段广告-小说阅读页面-视频广告',
    activityIds: 'com.qq.e.tg.RewardvideoPortraitADActivity',
    rules: [
      {
          key: 0,
          matches: '[text="腾讯广告"] >n [id^="button_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12909822',
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          matches: '[id="com.tencent.mtt:id/reward_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12908955',
      },
      {
          preKeys: 0,
          key: 1,
          matches: '[id="com.tencent.mtt:id/reward_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12908955',
      },
    ],
  }
  ],
});
