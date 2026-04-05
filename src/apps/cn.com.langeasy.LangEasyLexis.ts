import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.langeasy.LangEasyLexis',
  name: '不背单词',
  groups: [
{
      key: 1,
      name: '功能类-自动签到',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
        matches: '[id="cn.com.langeasy.LangEasyLexis:id/bb_checkin"]',
        snapshotUrls: 'https://i.gkd.li/i/13610321',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-右下角年度报告弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
        matches: '[id="cn.com.langeasy.LangEasyLexis:id/close_float_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13759025',
        _uniqueKey: 0
      },
      ],
    },
  ],
});