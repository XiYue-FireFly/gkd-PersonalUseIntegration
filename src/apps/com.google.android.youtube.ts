import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.youtube',
  name: 'YouTube',
  groups: [
{
    key: 0,
    name: '全屏广告-视频播放-跳过广告',
    desc: '点击跳过广告按钮',
    enable: false,
    activityIds: [
      'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      'com.google.android.youtube',
    ],
    fastQuery: true,
    rules: [
      {
          key: 0,
          name: '类型1',
          matches: '[id="com.google.android.youtube:id/skip_ad_button_text"]',
          snapshotUrls: [
              'https://i.gkd.li/import/13797491',
              'https://i.gkd.li/import/12565261',
          ],
      },
      {
          key: 1,
          name: '类型2',
          matches: '[id="com.google.android.youtube:id/modern_skip_ad_text"]',
          snapshotUrls: [
              'https://i.gkd.li/import/13705106',
          ],
      },
      {
          fastQuery: true,
          key: 0,
          activityIds: [
              'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
              'com.google.android.apps.youtube.app.watchwhile.MainActivity',
              'com.google.android.youtube',
          ],
          matches: '[vid="skip_ad_button" || id="com.google.android.youtube:id/modern_skip_ad_text"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13797491',
              'https://i.gkd.li/i/12565261',
              'https://i.gkd.li/i/13705106',
          ],
      },
      {
          key: 0,
          name: '类型1',
          matches: '[id="com.google.android.youtube:id/skip_ad_button_text"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13797491',
              'https://i.gkd.li/i/12565261',
          ],
      },
      {
          key: 1,
          name: '类型2',
          matches: '[id="com.google.android.youtube:id/modern_skip_ad_text"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13705106',
          ],
      },
    ],
  },
{
    key: 1,
    name: '全屏广告-视频播放-赞助商广告',
    desc: '关闭视频播放中的赞助商广告',
    enable: false,
    activityIds: [
      'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      'com.google.android.apps.youtube.app.watchwhile.MainActivity',
    ],
    fastQuery: true,
    snapshotUrls: [
      'https://i.gkd.li/import/12877346',
      'https://i.gkd.li/import/13797491',
      'https://i.gkd.li/import/13705106',
    ],
    rules: [
      { key: 0, matches: '@[desc="关闭广告面板" || desc="Close ad panel"] <<n [vid="panel_header"]' },
      {
          matches: '@[desc="关闭广告面板" || desc="Close ad panel"] <<n [vid="panel_header"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13797491',
              'https://i.gkd.li/i/13705106',
              'https://i.gkd.li/i/14784199',
          ],
      },
      { key: 0, matches: '[desc="更多选项"||desc^="More"] + [desc="关闭广告面板"||desc^="Close"]' },
    ],
  },
{
    key: 2,
    name: '全屏广告-会员广告',
    desc: '关闭首页和视频页的会员广告提示',
    enable: false,
    activityIds: [
      'com.google.android.apps.youtube.app.watchwhile.MainActivity',
      'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
    ],
    snapshotUrls: [
      'https://i.gkd.li/import/12877357',
      'https://i.gkd.li/i/13797512',
      'https://i.gkd.li/i/18017075',
      'https://i.gkd.li/i/18549944',
      'https://i.gkd.li/i/19578085',
      'https://i.gkd.li/i/25865404',
    ],
    rules: [
      { key: 0, matches: '[!(getChild(0).getChild(0).desc="Image attachment")] + @[desc="不用了，谢谢" || desc="关闭" || desc="我暂时不要" || desc="Close" || desc="No thanks"][visibleToUser=true] <<n [vid="bottom_ui_container" || vid="custom"]' },
      { key: 0, matches: 'ImageView < @Button < ViewGroup +3 Button[desc*="YouTube Premium"]' },
    ],
  },
{
    key: 3,
    name: '局部广告',
    enable: false,
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[desc="更多选项"] + @ImageView[clickable=true][width<100 && height<100] <<n [vid="panel_header"]',
          snapshotUrls: [
              'https://i.gkd.li/i/23787178',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/25461943',
      },
      {
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[!(getChild(0).getChild(0).desc="Image attachment")] + @[desc="不用了，谢谢" || desc="关闭" || desc="Close" || desc="No thanks"][visibleToUser=true] <<n [vid="bottom_ui_container" || vid="custom"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13797512',
              'https://i.gkd.li/i/18017075',
              'https://i.gkd.li/i/18549944',
              'https://i.gkd.li/i/19578085',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/21978683',
      },
      { key: 0, matches: 'ViewGroup[desc="免费试用 1 个月"] < * - * > ViewGroup[text="不用了，谢谢"]' },
    ],
  },
{
    key: 4,
    name: '功能类-自动翻译评论',
    desc: '评论区自动点击[翻译成/Translate to]',
    enable: false,
    rules: [
      {
          fastQuery: true,
          actionCd: 500,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@Button[desc^="翻译成"||desc^="Translate to"][clickable=true][visibleToUser=true] <<n [vid="results" || vid="section_list"]',
          snapshotUrls: [
              'https://i.gkd.li/i/17068544',
              'https://i.gkd.li/i/17068647',
              'https://i.gkd.li/i/17501400',
              'https://i.gkd.li/i/25462152',
              'https://i.gkd.li/i/25462248',
          ],
      },
      {
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: [
              '[text="开启通知"]',
              '[text="不用了"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14194155',
      },
      { key: 0, matches: '[text="开启通知"] < * < * +2 * >2 [text="不用了"]' },
    ],
  },
{
    key: 5,
    name: '分段广告-播放页广告',
    enable: false,
    rules: [
      {
          key: 1,
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@[vid="overflow_button"][clickable=true] <<n [vid="collapsible_ad_cta_overlay_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23790199',
      },
      {
          key: 2,
          preKeys: [
              1,
          ],
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@[clickable=true] >(1,2) [vid="list_item_text"][text="关闭"]',
          snapshotUrls: [
              'https://i.gkd.li/i/23772979',
              'https://i.gkd.li/i/25461885',
          ],
      },
      {
          fastQuery: true,
          actionCd: 500,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@Button[desc^="翻译成中文"][clickable=true][visibleToUser=true] <<n [vid="results" || vid="section_list"]',
          exampleUrls: 'https://e.gkd.li/e9d6eaa8-9fbf-4b16-8f0c-50239597c687',
          snapshotUrls: [
              'https://i.gkd.li/i/17068544',
              'https://i.gkd.li/i/17068647',
              'https://i.gkd.li/i/17501400',
          ],
      },
    ],
  },
{
    key: 6,
    name: '其他-关闭播放器辅助功能弹窗',
    desc: '点击[Dismiss]',
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[text="Dismiss"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/aa8f2617-fd6d-43a8-951d-1bd6efc504d3',
          snapshotUrls: 'https://i.gkd.li/i/19930694',
      },
    ],
  },
{
    key: 7,
    name: '功能类-关闭视频播放结束后的推荐视频',
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          anyMatches: [
              '@[vid="close_button"] - LinearLayout >2 [text="Suggested video" || text="推荐视频"][visibleToUser=true]',
              '[vid="engagement_close_button"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/22757392',
              'https://i.gkd.li/i/22762876',
              'https://i.gkd.li/i/22757397',
          ],
      },
    ],
  },
{
    key: 8,
    name: '局部广告',
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@ImageView[clickable=true][width<100 && height<100] <<n [vid="panel_header"]',
          snapshotUrls: 'https://i.gkd.li/i/23787178',
      },
    ],
  },
{
    key: 9,
    name: '分段广告-播放页广告',
    rules: [
      {
          key: 1,
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@[vid="overflow_button"][clickable=true] <<n [vid="collapsible_ad_cta_overlay_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23790199',
      },
      {
          key: 2,
          preKeys: [
              1,
          ],
          fastQuery: true,
          activityIds: 'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '@[clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/23772979',
      },
    ],
  }
  ],
});
