import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhaopin.social',
  name: '智联招聘',
  groups: [
{
      key: 2,
      name: '局部广告-我的页面卡片广告',
      desc: '关闭我的页面中的卡片式广告',
      enable: false,
      activityIds: 'com.zhaopin.social.homepage.ZSC_MainTabActivity',
      snapshotUrls: ['https://i.gkd.li/import/12706181'],
      rules: [
      {
        key: 0,
        matches: '[id="com.zhaopin.social:id/rl_banner_close"][visibleToUser=true][clickable=true]',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.zhaopin.social:id/rl_banner_close"][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-社区页面弹窗广告',
      desc: '关闭社区页面弹出的全屏推广弹窗',
      enable: false,
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      snapshotUrls: 'https://i.gkd.li/import/13063442',
      rules: [
      {
        key: 0,
        matches: 'ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '通知提示-消息-开启消息通知',
      desc: '自动点击关闭',
      enable: false,
      activityIds: ['com.zhaopin.social.homepage.ZSC_MainTabActivity'],
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/i/13063427',
      rules: [
      {
        key: 0,
        matches: '[id="com.zhaopin.social:id/message_pushlayout_close"]',
        _uniqueKey: 0
      },
      ],
    },
  ],
});