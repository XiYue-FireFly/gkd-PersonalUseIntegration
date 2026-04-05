import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.dict',
  name: '网易有道词典',
  groups: [
{
      key: 1,
      name: '分段广告-单词页面卡片广告',
      activityIds: ['.activity.MainActivity', '.activity.DictQueryActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: ['[text="广告"]', '[vid="close"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13800055', 'https://i.gkd.li/i/16278151', 'https://i.gkd.li/i/17963902'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="close_pop"][text="收起广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13800056', 'https://i.gkd.li/i/16278150', 'https://i.gkd.li/i/17963904'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.youdao.dict.activity.MainActivity',
        matches: '[text="广告"] - [vid="close"]',
        snapshotUrls: ['https://i.gkd.li/i/12668574', 'https://i.gkd.li/i/13800055'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.youdao.dict.activity.MainActivity',
        matches: '[vid="close_pop"][text="收起广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12668583', 'https://i.gkd.li/i/13800056'],
        preKeys: 0,
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        name: '首页-弹窗广告',
        activityIds: ['com.youdao.dict.activity.MainActivity', 'com.youdao.dict.activity.DictSplashActivity'],
        matches: '@ImageView[id="com.youdao.dict:id/iv_close_bt"]',
        snapshotUrls: ['https://i.gkd.li/i/12893419', 'https://i.gkd.li/i/13263801'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '学习页面-弹窗广告',
        activityIds: ['com.youdao.dict.edu.main.MainPopDialog', 'com.youdao.dict.activity.MainActivity', '.activity.DictQueryActivity'],
        matches: '[vid="iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12893450', 'https://i.gkd.li/i/16859556', 'https://i.gkd.li/i/20602998'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '抽奖机会-弹窗广告',
        activityIds: ['com.youdao.dict.activity.DictSplashActivity', 'com.youdao.dict.activity.DictHotBootSplashActivity'],
        matches: '[vid="skip_bottom_view"]',
        snapshotUrls: ['https://i.gkd.li/i/13931202', 'https://i.gkd.li/i/14064647'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '首页-礼包弹窗',
        activityIds: 'com.youdao.dict.activity.MainActivity',
        matches: '[vid="image"] + [vid="close"]',
        snapshotUrls: 'https://i.gkd.li/i/14296482',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.activity.DictQueryActivity',
        matches: '@[vid="iv_cancel"][visibleToUser=true] - [vid="fl_video_container"]',
        snapshotUrls: 'https://i.gkd.li/i/18051512',
        exampleUrls: 'https://e.gkd.li/342a587e-bf0d-42e9-8c16-3c0b53240e5a',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '首页-弹窗广告-1',
        activityIds: ['com.youdao.dict.activity.MainActivity', 'com.youdao.dict.activity.DictSplashActivity'],
        matches: '@ImageView[id="com.youdao.dict:id/iv_close_bt"]',
        snapshotUrls: ['https://i.gkd.li/i/12893419', 'https://i.gkd.li/i/13263801'],
        fastQuery: true,
        _uniqueKey: 5,
        _uniqueName: '首页-弹窗广告-1',
        name: '首页-弹窗广告-1'
      },
      {
        key: 6,
        name: '学习页面-弹窗广告-1',
        activityIds: ['com.youdao.dict.edu.main.MainPopDialog', 'com.youdao.dict.activity.MainActivity'],
        matches: '@ImageView[id="com.youdao.dict:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12893450',
        fastQuery: true,
        _uniqueKey: 6,
        _uniqueName: '学习页面-弹窗广告-1',
        name: '学习页面-弹窗广告-1'
      },
      {
        key: 7,
        name: '抽奖机会-弹窗广告-1',
        activityIds: 'com.youdao.dict.activity.DictSplashActivity',
        matches: '[vid="skip_bottom_view"]',
        snapshotUrls: 'https://i.gkd.li/i/13931202',
        fastQuery: true,
        _uniqueKey: 7,
        _uniqueName: '抽奖机会-弹窗广告-1',
        name: '抽奖机会-弹窗广告-1'
      },
      {
        key: 8,
        name: '首页-礼包弹窗-1',
        activityIds: 'com.youdao.dict.activity.MainActivity',
        matches: '[vid="image"] + [vid="close"]',
        snapshotUrls: 'https://i.gkd.li/i/14296482',
        fastQuery: true,
        _uniqueKey: 8,
        _uniqueName: '首页-礼包弹窗-1',
        name: '首页-礼包弹窗-1'
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-VIP弹窗',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.youdao.dict.vip.activity.RecallSevenDayVipActivity', 'com.youdao.dict.vip.activity.SecondShowNewUserSevenDayVipActivity', '.activity.DictQueryActivity', '.vip.activity.FirstShowNewUserSevenDayVipActivity'],
        matches: 'ImageView[vid="iv_close"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13263706', 'https://i.gkd.li/i/14381735', 'https://i.gkd.li/i/16929322', 'https://i.gkd.li/i/22275220'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.youdao.feature_ai.AiMainActivity',
        matches: '[vid="aiv_guide_cancel"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/16426631',
        exampleUrls: 'https://e.gkd.li/7bfd334a-38a0-4251-966c-1df55c168425',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'ImageView[id="com.youdao.dict:id/iv_close"][clickable=true]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 5,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.MainActivity', '.activity.DictQueryActivity'],
        matches: '[id="com.youdao.dict:id/btn_never"][text*="不再提醒"]',
        snapshotUrls: ['https://i.gkd.li/i/13540941', 'https://i.gkd.li/i/14256301'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.youdao.dict:id/btn_never"][text*="不再提醒"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.activity.MainActivity',
        matches: '[id="com.youdao.dict:id/tv_version"] + [id="com.youdao.dict:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13627912',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.youdao.dict:id/tv_version"] + [id="com.youdao.dict:id/iv_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '功能类-点击显示释义',
      activityIds: 'com.youdao.dict_flutter_android_bridge.WordBookFlutterActivity',
      rules: [
      {
        key: 0,
        matches: '[desc="点击显示释义"] > View[index=3][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14292588', 'https://i.gkd.li/i/14292587'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="home_ad_close"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.activity.MainActivity', '.activity.DictQueryActivity'],
        matches: '[vid="aivClose" || vid="course_one_course_close" || vid="home_ad_close" || vid="course_four_course_close" || vid="promotion_close_zone"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14468564', 'https://i.gkd.li/i/14567234', 'https://i.gkd.li/i/14895765', 'https://i.gkd.li/i/14009705', 'https://i.gkd.li/i/14559287', 'https://i.gkd.li/i/17082441', 'https://i.gkd.li/i/17115693'],
        exampleUrls: 'https://e.gkd.li/df92c524-c732-4c16-9266-326056c9acf8',
        excludeSnapshotUrls: 'https://i.gkd.li/i/14468628',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="点击显示释义"] > View[index=3][visibleToUser=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '功能类-关闭单词页面[去复习]提示',
      desc: '通过点击提示框以外的其他地方关闭',
      rules: [
      {
        key: 0,
        activityIds: ['com.youdao.dict.activity.DictQueryActivity', 'com.youdao.dict.activity.MainActivity'],
        matches: '[text="已收藏单词一周，快去复习吧"]',
        snapshotUrls: ['https://i.gkd.li/i/14524540', 'https://i.gkd.li/i/14524817'],
        exampleUrls: 'https://m.gkd.li/57941037/ab107cc2-98e1-44a2-a15a-0ee0d4925255',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '右下角悬浮卡片',
        activityIds: ['com.youdao.dict.activity.MainActivity', 'com.youdao.dict.activity.DictQueryActivity'],
        matches: '[vid="aivClose"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14468564', 'https://i.gkd.li/i/14468628', 'https://i.gkd.li/i/14567234'],
        exampleUrls: 'https://m.gkd.li/57941037/e365b983-15c7-4ac7-acd7-9d7be4c45160',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '主页卡片广告',
        activityIds: 'com.youdao.dict.activity.MainActivity',
        matches: '[vid="home_ad_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14009705',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '单词页面下方广告',
        activityIds: ['com.youdao.dict.activity.MainActivity', '.activity.DictQueryActivity'],
        matches: '[vid="course_four_course_close"]',
        snapshotUrls: ['https://i.gkd.li/i/14559287', 'https://i.gkd.li/i/17268301'],
        exampleUrls: 'https://m.gkd.li/57941037/4045988d-93bb-4aad-80dd-f14da296a214',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '单词页面下方学习技巧',
        activityIds: 'com.youdao.dict.activity.MainActivity',
        matches: '[vid="course_one_course_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14895765',
        exampleUrls: 'https://m.gkd.li/57941037/0c033574-4bae-4bcc-bcf9-901ce8b5061b',
        fastQuery: true,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 10,
      name: '全屏广告-开学福利弹窗',
      desc: '点击[不要再提醒我]-点击关闭',
      activityIds: 'com.youdao.dict.activity.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="不要再提醒我"][checked=false]',
        snapshotUrls: 'https://i.gkd.li/i/14586448',
        exampleUrls: 'https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="dialog_close_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/14586448',
        exampleUrls: 'https://m.gkd.li/57941037/f665b390-2ef6-47be-8246-99632b24c5de',
        preKeys: 0,
        _uniqueKey: 1
      },
      ],
    },
  ],
});