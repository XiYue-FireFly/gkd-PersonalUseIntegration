import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shuqi.controller',
  name: '书旗小说',
  groups: [
{
    key: 0,
    name: '局部广告',
    rules: [
      {
          key: 0,
          fastQuery: true,
          activityIds: 'com.shuqi.home.MainActivity',
          anyMatches: [
              '[vid="promotion_close"][visibleToUser=true]',
              '[visibleToUser=true][vid="promotion_close"]',
          ],
          exampleUrls: 'https://e.gkd.li/a634cd5a-7b84-44ad-b65b-99f5e8769eeb',
          snapshotUrls: [
              'https://i.gkd.li/i/23831955',
              'https://i.gkd.li/i/24859977',
          ],
      },
      { key: 0, matches: '[id="com.shuqi.controller:id/promotion_close"]' },
    ],
  },
{
    key: 1,
    name: '全屏广告',
    rules: [
      {
          key: 0,
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.shuqi.home.MainActivity',
          matches: '[vid="bottomCloseImg"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9cfc90dc-9afe-45ff-8ee2-f8e173af9bd9',
          snapshotUrls: 'https://i.gkd.li/i/23831956',
      },
      { key: 0, matches: '[id="com.shuqi.controller:id/bottomCloseImg"]' },
    ],
  },
{
    key: 2,
    name: '未分类-阅读页面底部广告',
    desc: '点击关闭x图标-关闭优惠券弹窗-关闭当前广告',
    enable: false,
    rules: [
      {
          key: 0,
          activityIds: 'com.shuqi.android.ui.dialog',
          matches: '[id="com.shuqi.controller:id/right_close_ad_text"]',
          snapshotUrls: 'https://i.gkd.li/i/12513893',
      },
      {
          key: 1,
          activityIds: 'com.shuqi.monthlypay.view',
          matches: [
              '[text*="优惠券"]',
              '[id="com.shuqi.controller:id/close_btn"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12513908',
      },
      {
          key: 2,
          activityIds: 'com.shuqi.reader.ShuqiReaderActivity',
          matches: '@ImageView[clickable=true] - RelativeLayout [id="com.shuqi.controller:id/noah_tv_stencil_native_source"]',
          snapshotUrls: 'https://i.gkd.li/i/12513860',
      },
      {
          key: 3,
          activityIds: 'com.shuqi.reader.ShuqiReaderActivity',
          matches: '[id="com.shuqi.controller:id/banner_container_ad"] >n RelativeLayout + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12901429',
      },
    ],
  },
{
    key: 3,
    name: '未分类-听书页面底部广告',
    desc: '点击卡片右上角关闭按钮-点击底部中间<关闭当前广告>',
    enable: false,
    activityIds: 'com.shuqi.audio.online.view.AudioBookActivity',
    rules: [
      {
          matches: '[id="com.shuqi.controller:id/remove_current_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/12513959',
      },
      {
          matches: '[id="com.shuqi.controller:id/ad_close_but"]',
          snapshotUrls: 'https://i.gkd.li/i/12513944',
      },
    ],
  }
  ],
});
