import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.bmac.nfc',
  name: '北京一卡通',
  groups: [
{
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击[此广告不再提示]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.activity.MainActivity',
        matches: '[vid="ad_content"] < * - [clickable=true][vid="not_prompt_again"]',
        snapshotUrls: 'https://i.gkd.li/i/19718306',
        exampleUrls: 'https://e.gkd.li/34995c89-e659-4a38-b4ed-9cb1514323b2',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-跳过协议',
      desc: '点击[同意]',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.activity.MainActivity',
        matches: '@[vid="Agree_and_continue"] <<2 * - [vid="layout_title"] >2 [vid="tv_privacy_content"]',
        snapshotUrls: 'https://i.gkd.li/i/21133268',
        exampleUrls: 'https://e.gkd.li/9c0ec080-3156-4276-b556-47cf20e08150',
        _uniqueKey: 0
      },
      ],
    },
  ],
});