import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
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
        key: 0,
        matches: '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        excludeMatches: '[vid="iv_search_back"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/16401878', 'https://i.gkd.li/i/16401899'],
        exampleUrls: 'https://e.gkd.li/49015bf7-6513-40b2-a436-d3c386ef1891',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 1,
      name: '局部广告-卡片广告',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ruanmei.ithome.ui.MainActivity',
        matches: '@[visibleToUser=true][text="关闭"] <<n [vid="ll_web"][visibleToUser=true] + [vid="shadowLayout"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15413491',
        actionMaximum: 1,
        resetMatch: 'app',
        excludeSnapshotUrls: ['https://i.gkd.li/i/15603266', 'https://i.gkd.li/i/17516358'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ruanmei.ithome.ui.NewsInfoV8Activity',
        matches: '[vid="iv_dislike"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16972394',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="hongbaotips"] +n @View > [text="关闭"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '分段广告-信息流广告',
      desc: '长按广告-点击[屏蔽]-点击[不喜欢此条]',
      activityIds: 'com.ruanmei.ithome.ui.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[longClickable=true] >4 [text="广告 "][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14734964',
        action: 'longClick',
        excludeSnapshotUrls: 'https://i.gkd.li/i/19340823',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="屏蔽"]',
        snapshotUrls: 'https://i.gkd.li/i/14734962',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="rl_dislike"]',
        snapshotUrls: 'https://i.gkd.li/i/14734987',
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@[longClickable=true] >4 [text*="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14734964',
        action: 'longClick',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.ruanmei.ithome.ui.MainActivity',
        matches: '[vid="btn_dialog_upgrade_ignore"]',
        snapshotUrls: 'https://i.gkd.li/i/15413494',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});