import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.microsoft.emmx',
  name: 'Edge',
  groups: [
{
      key: 3,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
        matches: '[text="允许通知"] + [text="不，谢谢"]',
        snapshotUrls: 'https://i.gkd.li/i/13646187',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="允许通知"] + [text="不，谢谢"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '功能类-[关闭所有标签？]弹窗',
      desc: '点击[确定]',
      rules: [
      {
        key: 0,
        activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
        matches: '[text="关闭所有标签页?"] + * > [text="确定"]',
        snapshotUrls: 'https://i.gkd.li/i/14325653',
        exampleUrls: 'https://m.gkd.li/57941037/487f4236-676c-4fb3-bcac-17b4644edd46',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '功能类-关闭标签页',
      rules: [
      {
        key: 0,
        activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
        matches: '[text="关闭标签页"]',
        snapshotUrls: 'https://i.gkd.li/i/14614992',
        exampleUrls: 'https://m.gkd.li/57941037/81f9a737-a111-4630-898b-4f2b5de0623b',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '功能类-[前往CSDN APP阅读全文]弹窗',
      desc: '点击[继续]',
      rules: [
      {
        key: 0,
        activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
        matches: '[text="前往CSDN APP阅读全文"] < * > [desc="继续"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14610025',
        exampleUrls: 'https://m.gkd.li/57941037/fea75b5a-010d-4f67-8998-6cf794eda975',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
        matches: '[text="前往 CSDN APP 阅读全文"] < * > [desc="继续"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14610025',
        exampleUrls: 'https://m.gkd.li/57941037/fea75b5a-010d-4f67-8998-6cf794eda975',
        _uniqueKey: 1
      },
      ],
    },
  ],
});