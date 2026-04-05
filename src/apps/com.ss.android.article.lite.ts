import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.lite',
  name: '头条搜索极速版',
  groups: [
{
      key: 10,
      name: '其他-首页-红包弹窗',
      enable: false,
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      snapshotUrls: 'https://i.gkd.li/i/12705414',
      rules: [
      {
        key: 0,
        matches: '@[desc="关闭"] + [text$="现金红包"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 11,
      name: '其他-首页-右侧悬浮广告',
      enable: false,
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      snapshotUrls: 'https://i.gkd.li/i/12705452',
      rules: [
      {
        key: 0,
        matches: 'FrameLayout[id!=null] > @ImageView[id!=null][clickable=true] + ImageView[id!=null]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 12,
      name: '其他-首页-你可能感兴趣的人',
      enable: false,
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      snapshotUrls: 'https://i.gkd.li/i/12705427',
      rules: [
      {
        key: 0,
        matches: '[text="你可能感兴趣的人"] + [desc="关闭"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 20,
      name: '其他-任务页面-签到弹窗',
      enable: false,
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: [
      {
        key: 0,
        matches: 'UIView[clickable=false] + LynxFlattenUI[clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/12705439',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 21,
      name: '其他-任务页面-右侧悬浮红包',
      enable: false,
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      snapshotUrls: 'https://i.gkd.li/i/12705447',
      rules: [
      {
        key: 0,
        matches: 'UIScrollView + UIView + UISvg',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 22,
      name: '其他-任务页面-答题弹窗',
      enable: false,
      activityIds: 'com.ss.android.article.lite.activity.SplashActivity',
      rules: [
      {
        key: 0,
        matches: '[text^="答对"][text$="金币"] + FlattenUIImage[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12705456',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 30,
      name: '其他-搜索页面-搜索得金币弹窗',
      enable: false,
      activityIds: 'com.android.bytedance.search.SearchActivity',
      rules: [
      {
        key: 0,
        matches: '[text^="搜索"][text$="金币"] + LynxFlattenUI + UISvg',
        snapshotUrls: 'https://i.gkd.li/i/12705468',
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
  ],
});