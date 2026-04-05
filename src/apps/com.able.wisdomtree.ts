import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.able.wisdomtree',
  name: '知到',
  groups: [
{
      key: 2,
      name: '权限提示-通知权限',
      desc: '点击[暂不开启]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.widget.MyAlertDialog', '.login.MainGroupActivity', 'com.example.advertisement_business.advertisement.AdvertisementActivity'],
        matches: ['[text="开启消息推送通知"][visibleToUser=true]', '[text="暂不开启"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13458779', 'https://i.gkd.li/i/13623441', 'https://i.gkd.li/i/13695447'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[id="com.able.wisdomtree:id/negativeButton"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      desc: '点击[忽略]',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.login.StartActivity', 'com.example.advertisement_business.advertisement.AdvertisementActivity'],
        matches: ['[text="更新"] ', ' [text="忽略"]'],
        snapshotUrls: ['https://i.gkd.li/i/13458796', 'https://i.gkd.li/i/13797285'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="更新"] -n [text="忽略"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '通知提示-课程提醒',
      desc: '点击[已绑定，不再提示]',
      rules: [
      {
        key: 0,
        matches: ['[text="课程提醒"][visibleToUser=true]', '[text="已绑定，不再提示"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/23122012',
        exampleUrls: 'https://e.gkd.li/cceb9974-935d-496b-9b26-431864364433',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '通知提示-AI分析',
      rules: [
      {
        key: 0,
        activityIds: 'com.able.wisdomtree.course.course.studycourse.activity.StudyCourseVideoActivity',
        matches: '@[vid="im_close"][clickable=true] - [text$="同学"]',
        snapshotUrls: 'https://i.gkd.li/i/24230330',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});