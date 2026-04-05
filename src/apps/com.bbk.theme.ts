import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.theme',
  name: 'i 主题',
  groups: [
{
      key: 1,
      name: '全屏广告-推广弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.bbk.theme.Theme',
        matches: '[vid="card_close_img"]',
        snapshotUrls: 'https://i.gkd.li/i/14904298',
        exampleUrls: 'https://m.gkd.li/57941037/8207ec80-6e9d-4b9e-9880-7370d826c405',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-[添加主题卡片至桌面]弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        matches: '@[vid="cancel"] + * > [text="智慧桌面"]',
        snapshotUrls: 'https://i.gkd.li/i/14904036',
        exampleUrls: 'https://m.gkd.li/57941037/45df70c2-55bc-428a-91cf-40dff23ae2af',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});