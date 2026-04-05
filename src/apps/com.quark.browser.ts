import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克浏览器',
  groups: [
{
      key: 2,
      name: '其他-设置默认浏览器提示',
      desc: '点击取消',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.ucpro.BrowserActivity',
        matches: '@Button[text="取消"] + Button[text="去设置"]',
        snapshotUrls: 'https://i.gkd.li/i/13249469',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@Button[text="取消"] + Button[text="去设置"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      desc: '点击取消',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'com.ucpro.BrowserActivity',
        matches: ['[text*="版本更新" || text^="优化升级" || text^="发现新版本"]', '[text="取消" || text="暂不更新"][clickable=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13292512', 'https://i.gkd.li/i/13455360', 'https://i.gkd.li/i/24786251', 'https://i.gkd.li/i/16643051'],
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.ucpro.BrowserActivity',
        matches: 'ImageView[id="com.quark.browser:id/close_img"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/13292571',
        fastQuery: true,
        actionMaximum: 1,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.quark.browser:id/close_img"][clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 5,
      name: '局部广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.ucpro.BrowserActivity',
        matches: '[vid="ad_close_layout_container" || vid="rel_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/21967140', 'https://i.gkd.li/i/21967204'],
        exampleUrls: 'https://e.gkd.li/77db7983-bfe0-4701-a580-d5d77a017624',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ucpro.BrowserActivity',
        matches: '[vid="append_element_view_remove_ad_ll"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21967126',
        exampleUrls: 'https://e.gkd.li/3a89486e-83c4-4032-bc07-4531921c9d09',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});