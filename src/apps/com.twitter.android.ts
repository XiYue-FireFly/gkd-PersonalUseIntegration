import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.twitter.android',
  name: 'X',
  groups: [
{
      key: 1,
      name: '分段广告-信息流广告',
      desc: '关闭信息流中的广告',
      enable: false,
      activityIds: ['com.twitter.app.main.MainActivity', 'com.twitter.app.profiles.ProfileActivity', 'com.twitter.tweetdetail.TweetDetailActivity', 'com.twitter.android.search.implementation.results.SearchActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '视频广告-点击右上角关闭',
        matches: '@[vid="tweet_curation_action"] <2 * + * >3 [text="视频将在广告后播放"]',
        snapshotUrls: ['https://i.gkd.li/import/12798795', 'https://i.gkd.li/i/14782884'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '推荐广告-点击右上角关闭',
        matches: '@[id="com.twitter.android:id/tweet_curation_action"] <<(2,5) * <n * > * >n [id="com.twitter.android:id/tweet_promoted_badge_bottom"]',
        snapshotUrls: ['https://i.gkd.li/import/12813235', 'https://i.gkd.li/i/14782897', 'https://i.gkd.li/i/17182889', 'https://i.gkd.li/import/12825969', 'https://i.gkd.li/import/12847584', 'https://i.gkd.li/import/12882676', 'https://i.gkd.li/import/12904603'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击右上角关闭-英文',
        matches: '@[vid="tweet_curation_action"] - [vid="tweet_ad_badge_top_right"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/import/13680756', 'https://i.gkd.li/i/24359526'],
        _uniqueKey: 2
      },
      {
        key: 10,
        name: '点击屏蔽/隐藏,如果机会全用完需要取消遍再屏蔽',
        matches: '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"||text^="Block"||text^="隐藏 @"||text^="Mute @"||text^="Unblock @"||text^="Unmute @"]',
        snapshotUrls: ['https://i.gkd.li/import/12798810', 'https://i.gkd.li/i/14782902', 'https://i.gkd.li/import/12828815', 'https://i.gkd.li/import/12847600', 'https://i.gkd.li/import/12904602', 'https://i.gkd.li/import/13680783', 'https://i.gkd.li/i/20034038', 'https://i.gkd.li/i/20239421', 'https://i.gkd.li/i/24359537', 'https://i.gkd.li/i/25089665', 'https://i.gkd.li/i/25461007', 'https://i.gkd.li/i/25461077', 'https://i.gkd.li/i/25461050'],
        preKeys: [0,1,2],
        _uniqueKey: 10
      },
      {
        key: 11,
        name: '二次确认-点击屏蔽',
        matches: '[text="取消"||text^="Cancel"] + [text="屏蔽"||text^="Block"||text="是的，我确定"||text^="Yes"||text^="屏蔽"||text^="Mute"||text^="Unmute"]',
        snapshotUrls: ['https://i.gkd.li/import/12828832', 'https://i.gkd.li/import/12904601', 'https://i.gkd.li/import/13680798', 'https://i.gkd.li/i/25089666', 'https://i.gkd.li/i/25461062'],
        preKeys: 10,
        _uniqueKey: 11
      },
      {
        key: 3,
        name: '视频广告-点击右上角关闭-1',
        matches: '@[vid="tweet_curation_action"] <2 * + * >3 [text="视频将在广告后播放"]',
        snapshotUrls: ['https://i.gkd.li/i/12798795', 'https://i.gkd.li/i/14782884'],
        _uniqueKey: 3,
        _uniqueName: '视频广告-点击右上角关闭-1',
        name: '视频广告-点击右上角关闭-1'
      },
      {
        key: 4,
        name: '推荐广告-点击右上角关闭-1',
        matches: '@[vid="tweet_curation_action"] <2 * + * > [text$="推荐"]',
        snapshotUrls: ['https://i.gkd.li/i/12813235', 'https://i.gkd.li/i/14782897', 'https://i.gkd.li/i/17182889'],
        _uniqueKey: 4,
        _uniqueName: '推荐广告-点击右上角关闭-1',
        name: '推荐广告-点击右上角关闭-1'
      },
      {
        key: 5,
        matches: '[vid="tweet_curation_action"] - [vid="tweet_ad_badge_top_right"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24359526',
        exampleUrls: 'https://e.gkd.li/705dd827-ff04-4233-af38-60d92439e1f3',
        _uniqueKey: 5
      },
      {
        key: 12,
        name: '点击[我不喜欢这个广告]',
        matches: '@ViewGroup[clickable=true] > [text="我不喜欢这个广告" || text^="屏蔽"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/12798810', 'https://i.gkd.li/i/14782902', 'https://i.gkd.li/i/20239421', 'https://i.gkd.li/i/24359537'],
        preKeys: [0,1,2],
        _uniqueKey: 12
      },
      {
        key: 6,
        name: '推荐广告-点击右上角关闭-2',
        matches: '@[vid="tweet_curation_action"] <2 * + * > [text="推荐"]',
        snapshotUrls: ['https://i.gkd.li/i/12813235', 'https://i.gkd.li/i/14782897'],
        _uniqueKey: 6,
        _uniqueName: '推荐广告-点击右上角关闭-2',
        name: '推荐广告-点击右上角关闭-2'
      },
      {
        key: 13,
        name: '点击[我不喜欢这个广告]-1',
        matches: '@ViewGroup[clickable=true] > [text="我不喜欢这个广告"]',
        snapshotUrls: ['https://i.gkd.li/i/12798810', 'https://i.gkd.li/i/14782902'],
        preKeys: [0,1],
        _uniqueKey: 13,
        _uniqueName: '点击[我不喜欢这个广告]-1',
        name: '点击[我不喜欢这个广告]-1'
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-关闭[开启个性化广告]弹窗',
      desc: '关闭[开启个性化广告]弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.twitter.app.main.MainActivity',
        matches: '[vid="secondary_button"][clickable=true][getChild(0).getChild(0).getChild(0).text="保留更少相关广告"]',
        snapshotUrls: 'https://i.gkd.li/i/25150279',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击右上角关闭-1',
        matches: '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
        snapshotUrls: ['https://i.gkd.li/i/12825969', 'https://i.gkd.li/i/12847584'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击右上角关闭-2',
        matches: '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
        snapshotUrls: ['https://i.gkd.li/i/12882676', 'https://i.gkd.li/i/12904603'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击右上角关闭-英文',
        matches: '[id="com.twitter.android:id/tweet_ad_badge_top_right"] + [id="com.twitter.android:id/tweet_curation_action"]',
        snapshotUrls: ['https://i.gkd.li/i/13680756'],
        _uniqueKey: 3
      },
      {
        key: 10,
        name: '点击屏蔽',
        matches: '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"||text^="屏蔽"||text^="Block"||text^="隐藏 @"||text^="Hide @"]',
        snapshotUrls: ['https://i.gkd.li/i/12828815', 'https://i.gkd.li/i/12847600', 'https://i.gkd.li/i/12904602', 'https://i.gkd.li/i/13680783', 'https://i.gkd.li/i/25089665'],
        preKeys: [0,1,2],
        _uniqueKey: 10
      },
      {
        key: 11,
        matches: '[text="取消"||text^="Cancel"] + [text="屏蔽"||text^="Block"||text="是的，我确定"||text^="Yes"]',
        snapshotUrls: ['https://i.gkd.li/i/12828832', 'https://i.gkd.li/i/12904601', 'https://i.gkd.li/i/13680798', 'https://i.gkd.li/i/25089666'],
        preKeys: [10],
        _uniqueKey: 11
      },
      {
        key: 12,
        name: '点击屏蔽-1',
        matches: '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text^="屏蔽"||text^="屏蔽"||text^="Block"]',
        snapshotUrls: ['https://i.gkd.li/i/12828815', 'https://i.gkd.li/i/12847600', 'https://i.gkd.li/i/12904602', 'https://i.gkd.li/i/13680783'],
        preKeys: [0,1,2],
        _uniqueKey: 12,
        _uniqueName: '点击屏蔽-1',
        name: '点击屏蔽-1'
      },
      {
        key: 13,
        name: '二次确认-点击屏蔽',
        matches: '[text="取消"||text^="Cancel"] + [text="屏蔽"||text^="Block"]',
        snapshotUrls: ['https://i.gkd.li/i/12828832', 'https://i.gkd.li/i/12904601', 'https://i.gkd.li/i/13680798'],
        preKeys: 10,
        _uniqueKey: 13
      },
      ],
    },
{
      key: 3,
      name: '分段广告-用户资料页信息流广告',
      desc: '点击右上角关闭,点击我不喜欢',
      activityIds: 'com.twitter.app.profiles.ProfileActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击右上角关闭-1',
        matches: '@[id="com.twitter.android:id/tweet_curation_action"] +n [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text="推荐"]',
        snapshotUrls: ['https://i.gkd.li/i/12825969', 'https://i.gkd.li/i/12847584'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击右上角关闭-2',
        matches: '@[id="com.twitter.android:id/tweet_curation_action"] <2 * + [id="com.twitter.android:id/tweet_auto_playable_content_parent"] > [id="com.twitter.android:id/tweet_promoted_badge_bottom"][text$="推荐"]',
        snapshotUrls: ['https://i.gkd.li/i/12882676', 'https://i.gkd.li/i/12904603'],
        _uniqueKey: 1
      },
      {
        key: 10,
        name: '点击[我不喜欢这个广告]',
        matches: '@ViewGroup > [id="com.twitter.android:id/action_sheet_item_title"][text="我不喜欢这个广告"]',
        snapshotUrls: 'https://i.gkd.li/i/12798810',
        preKeys: [0,1],
        _uniqueKey: 10
      },
      ],
    },
{
      key: 4,
      name: '评价提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.twitter.app.main.MainActivity',
        matches: '[id="com.twitter.android:id/app_rating_button_never"]',
        snapshotUrls: 'https://i.gkd.li/i/13774150',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 5,
      name: '权限提示-通知权限',
      desc: '点击"Not now"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.twitter.app.main.MainActivity',
        matches: '@[clickable=true] > [visibleToUser=true][text="Not now"] <<n [vid="half_cover_recycler_view_holder"]',
        snapshotUrls: 'https://i.gkd.li/i/13930126',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] > [text="Not now"] <<n [vid="half_cover_recycler_view_holder"]',
        snapshotUrls: 'https://i.gkd.li/i/13930126',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '功能类-自动点击翻译',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
        matches: '[vid="translation_link" || vid="grok_translation_link"][clickable=true][index=parent.childCount.minus(1)]',
        snapshotUrls: ['https://i.gkd.li/i/14189817', 'https://i.gkd.li/i/14615911', 'https://i.gkd.li/i/25537171', 'https://i.gkd.li/i/25461468', 'https://i.gkd.li/i/25461607'],
        exampleUrls: ['https://e.gkd.li/ced46989-9c6a-4626-b027-7953e0fdc2c6', 'https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4'],
        fastQuery: true,
        actionCd: 2000,
        excludeSnapshotUrls: 'https://i.gkd.li/i/25537171',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.twitter.tweetdetail.TweetDetailActivity',
        matches: '[vid="translation_link"][text^="翻译"]',
        snapshotUrls: ['https://i.gkd.li/i/14189817', 'https://i.gkd.li/i/14615911'],
        exampleUrls: 'https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text^="翻译"][vid="translation_link"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 7,
      name: '功能类-自动点击"显示更多帖子"',
      desc: '点击时间线底部的"显示更多帖子"按钮',
      enable: false,
      activityIds: 'com.twitter.app.main.MainActivity',
      fastQuery: true,
      snapshotUrls: 'https://i.gkd.li/import/14189847',
      rules: [
      {
        key: 0,
        matches: '@FrameLayout[clickable=true] > [text="显示更多帖子"]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.twitter.app.main.MainActivity',
        matches: '@FrameLayout[clickable=true] > [text="显示更多帖子"]',
        snapshotUrls: 'https://i.gkd.li/i/14189847',
        exampleUrls: 'https://m.gkd.li/57941037/7efa8af7-90d3-42b4-bf5d-3d83775f175a',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="gap_text"][text="显示更多帖子"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 8,
      name: '其他-关闭[开启个性化广告]弹窗',
      rules: [
      {
        key: 0,
        activityIds: 'com.twitter.app.main.MainActivity',
        matches: '[vid="secondary_button"][clickable=true][getChild(0).getChild(0).getChild(0).text="保留更少相关广告"]',
        snapshotUrls: 'https://i.gkd.li/i/25150279',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});