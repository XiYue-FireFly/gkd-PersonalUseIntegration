import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.instagram.android',
  name: 'Instagram',
  groups: [
{
      key: 1,
      name: '分段广告-信息流广告',
      desc: '但是步骤较多, 影响app使用',
      enable: false,
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击"更多"按钮',
        matches: '[text="赞助内容"] + [id="com.instagram.android:id/feed_more_button_stub"]',
        snapshotUrls: 'https://i.gkd.li/i/12798562',
        actionCd: 4000,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击"隐藏广告"按钮',
        matches: '@ViewGroup >n [text="隐藏广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12798571', 'https://i.gkd.li/i/12829448'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击"广告不相关"按钮',
        matches: '@ViewGroup > [text="广告不相关"]',
        snapshotUrls: ['https://i.gkd.li/i/12798590', 'https://i.gkd.li/i/12829464'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '关闭[你不会再看到这条广告]',
        matches: '[text="你不会再看到这条广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12829492',
        action: 'back',
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击【更多】按钮',
        matches: '[text="赞助内容"] + [id="com.instagram.android:id/feed_more_button_stub"]',
        snapshotUrls: 'https://i.gkd.li/i/12798562',
        actionCd: 4000,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '点击【隐藏广告】按钮',
        matches: '@ViewGroup >n [text="隐藏广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12798571', 'https://i.gkd.li/i/12829448'],
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '点击【广告不相关】按钮',
        matches: '@ViewGroup > [text="广告不相关"]',
        snapshotUrls: ['https://i.gkd.li/i/12798590', 'https://i.gkd.li/i/12829464'],
        _uniqueKey: 6
      },
      ],
    },
{
      key: 2,
      name: '功能类-自动点击[查看翻译]',
      enable: false,
      activityIds: 'com.instagram.mainactivity.InstagramMainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="查看翻译"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14093211',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text$="查看翻译"][clickable=false][desc!=null][visibleToUser=true]',
        excludeMatches: '[text="查看翻译"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14784095', 'https://i.gkd.li/i/16776676'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="查看翻译"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14093211',
        exampleUrls: 'https://m.gkd.li/57941037/e92702d8-8349-4718-aa4d-664bf3d2f6e5',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text$="查看翻译"][clickable=false][desc!=null][visibleToUser=true]',
        excludeMatches: '[text="查看翻译"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14784095', 'https://i.gkd.li/i/16776676'],
        exampleUrls: 'https://m.gkd.li/57941037/7d6da15b-1c3f-4160-a2d3-d8223bc55132',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[text="查看翻译"]',
        snapshotUrls: 'https://i.gkd.li/i/14093211',
        exampleUrls: 'https://m.gkd.li/57941037/e92702d8-8349-4718-aa4d-664bf3d2f6e5',
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[text$="查看翻译"][desc!=null]',
        excludeMatches: '[text="查看翻译"]',
        snapshotUrls: 'https://i.gkd.li/i/14784095',
        exampleUrls: 'https://m.gkd.li/57941037/7d6da15b-1c3f-4160-a2d3-d8223bc55132',
        _uniqueKey: 5
      },
      ],
    },
  ],
});