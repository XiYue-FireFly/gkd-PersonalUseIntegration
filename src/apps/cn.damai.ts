import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
{
      key: 0,
      name: '开屏广告',
      desc: '该规则需要在高级设置中开启[启用优化]才能生效',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="homepage_advert_pb"]',
        snapshotUrls: 'https://i.gkd.li/i/14585402',
        exampleUrls: 'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
        fastQuery: true,
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="homepage_advert_pb"]',
        snapshotUrls: 'https://i.gkd.li/i/14585402',
        exampleUrls: 'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
        action: 'clickCenter',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '全屏广告-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'cn.damai.homepage.MainActivity',
        matches: '[id="cn.damai:id/homepage_popup_window_close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13627900',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'cn.damai.homepage.MainActivity',
        matches: '[id="cn.damai:id/homepage_popup_window_image"] + [id="cn.damai:id/homepage_popup_window_close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13627900',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.homepage.MainActivity',
        matches: '[vid="damai_theme_dialog_close_layout"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24213790',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="通知权限"] +2 LinearLayout > [text="不开启"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});