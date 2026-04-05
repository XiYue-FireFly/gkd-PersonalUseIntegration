import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.pdj',
  name: '京东到家',
  groups: [
{
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: 'pdj.main.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'WebView[text="京东到家"] >5 @View[clickable=true][childCount=1][visibleToUser=true] > View[childCount=1] > TextView[childCount=0] <<n [id="com.jingdong.pdj:id/mWebView"]',
        snapshotUrls: 'https://i.gkd.li/i/13217796',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.jingdong.pdj:id/ivClose"][desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13223282',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'WebView[text="京东到家"] >7 TextView[text=""]',
        snapshotUrls: 'https://i.gkd.li/i/13217796',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.jingdong.pdj:id/ivClose"][desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13223282',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.plunginupdate.update.UpdateDialogActivity',
        matches: 'Button[text="暂不安装"]',
        snapshotUrls: 'https://i.gkd.li/i/13217634',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'Button[text="暂不安装"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});