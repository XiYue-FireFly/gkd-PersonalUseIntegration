import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.studio',
  name: '必剪',
  groups: [
{
      key: 0,
      name: '权限提示-通知权限',
      desc: '点击[不开启]',
      activityIds: 'com.bcut.homepage.widget.MainActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'TextView[text="开启设置"] - TextView[text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/12867401',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.bilibili.studio:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12908880',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'ImageView[id="com.bilibili.studio:id/iv_push_tips_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12908886',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'TextView[text="开启设置"] - TextView[text="取消"]',
        snapshotUrls: 'https://i.gkd.li/i/12867401',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: 'ImageView[id="com.bilibili.studio:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12908880',
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: 'ImageView[id="com.bilibili.studio:id/iv_push_tips_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12908886',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      desc: '勾选"忽略"-点击"以后再说"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '勾选"忽略"',
        matches: '[text="忽略此版本的更新"][checked=false]',
        snapshotUrls: 'https://i.gkd.li/i/13496049',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击"以后再说"',
        matches: '[id="com.bilibili.studio:id/update_btn_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/13496049',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '勾选【忽略】',
        matches: '[id="com.bilibili.studio:id/update_cbx_ignore_version"][checked=false]',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击【以后再说】',
        matches: '[id="com.bilibili.studio:id/update_btn_cancel"]',
        preKeys: 0,
        _uniqueKey: 3
      },
      ],
    },
  ],
});