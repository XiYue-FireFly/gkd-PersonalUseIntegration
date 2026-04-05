import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
{
      key: -1,
      name: '开屏广告',
      actionMaximum: 2,
      resetMatch: 'app',
      fastQuery: true,
      matchRoot: true,
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[vid="count_down" || vid="skip"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/16187624', 'https://i.gkd.li/i/16484445'],
        actionCd: 500,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="count_down" || vid="skip"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/16187624', 'https://i.gkd.li/i/16484445'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 0,
      name: '局部广告-评论区顶部公告横幅',
      rules: [
      {
        key: 0,
        excludeActivityIds: ['com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3', 'tv.danmaku.bili.MainActivityV2'],
        matches: 'LinearLayout[id="tv.danmaku.bili:id/ad_tint_frame"] > ImageView[id="tv.danmaku.bili:id/close"][desc="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/12785461', 'https://i.gkd.li/i/12775156'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'LinearLayout[id="tv.danmaku.bili:id/ad_tint_frame"] > ImageView[id="tv.danmaku.bili:id/close"][desc="关闭"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '分段广告-动态推荐广告卡片',
      desc: '关闭动态页面的广告卡片',
      enable: false,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      fastQuery: true,
      rules: [
      {
        key: 1,
        matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
        snapshotUrls: 'https://i.gkd.li/import/12700222',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
        snapshotUrls: 'https://i.gkd.li/import/12700243',
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="tv.danmaku.bili:id/ad_goods_mark_big"]',
        snapshotUrls: 'https://i.gkd.li/i/12700222',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
        snapshotUrls: 'https://i.gkd.li/i/12700243',
        preKeys: [1],
        _uniqueKey: 4
      },
      {
        key: 5,
        matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
        snapshotUrls: 'https://i.gkd.li/i/12700243',
        preKeys: 1,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 4,
      name: '分段广告-视频卡片广告',
      desc: '关闭视频流中的广告卡片，包括视频底部、评论区中间、详情页下方等位置',
      enable: false,
      activityIds: ['tv.danmaku.bili.MainActivityV2', 'com.bilibili.video.videodetail.VideoDetailsActivity', 'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity', 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity'],
      rules: [
      {
        key: 0,
        name: '点击广告卡片右侧菜单图标',
        matches: '[parent=null][height > prev.bottom.plus(200)] >n [(((desc*="广告"||desc*="来自淘宝")&&desc*="查看")||desc$=",,轻点两下查看详情"||(desc^="【有奖调研】"&&desc.length=22))||(id*="/ad_")][visibleToUser=true] >(2,3,4) @ImageView[visibleToUser=true] < [vid^="more" || id^="tv.danmaku.bili.adbiz:id/more"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/import/12642260', 'https://i.gkd.li/import/12705266', 'https://i.gkd.li/import/12776568', 'https://i.gkd.li/import/12707070', 'https://i.gkd.li/i/14083540', 'https://i.gkd.li/i/14059876', 'https://i.gkd.li/i/14588315', 'https://i.gkd.li/i/14729855', 'https://i.gkd.li/i/17690786', 'https://i.gkd.li/i/17690800', 'https://i.gkd.li/i/17675629', 'https://i.gkd.li/i/18274379', 'https://i.gkd.li/i/19777632', 'https://i.gkd.li/i/19919163', 'https://i.gkd.li/i/19919168', 'https://i.gkd.li/i/20739380', 'https://i.gkd.li/i/20744764', 'https://i.gkd.li/i/20794380', 'https://i.gkd.li/i/21552836', 'https://i.gkd.li/i/21705345', 'https://i.gkd.li/i/21947622', 'https://i.gkd.li/i/18306851', 'https://i.gkd.li/i/19537979', 'https://i.gkd.li/i/23012670', 'https://i.gkd.li/i/23123800', 'https://i.gkd.li/i/23687196'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/23833031'],
        _uniqueKey: 0
      },
      {
        key: 49,
        name: '点击[我不想看]',
        matches: '[vid="recycler"] >n [text="我不想看"]',
        snapshotUrls: ['https://i.gkd.li/i/17786751'],
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 49
      },
      {
        key: 50,
        name: '点击[不感兴趣]',
        matches: '@[clickable=true] > [text="这个内容" || text="不感兴趣" || text="相似内容过多" || text="up主不感兴趣" || text="此类内容过多" || text="对该up的直播不感兴趣"|| text="我不想看"]',
        snapshotUrls: ['https://i.gkd.li/import/13495649', 'https://i.gkd.li/i/13742257', 'https://i.gkd.li/i/13256605', 'https://i.gkd.li/i/14155801', 'https://i.gkd.li/i/13742257', 'https://i.gkd.li/i/13945597', 'https://i.gkd.li/i/14155272', 'https://i.gkd.li/i/14059882', 'https://i.gkd.li/i/13625309', 'https://i.gkd.li/i/12642261', 'https://i.gkd.li/i/17676025', 'https://i.gkd.li/i/17676149', 'https://i.gkd.li/i/17677147', 'https://i.gkd.li/i/17786753', 'https://i.gkd.li/i/18266291', 'https://i.gkd.li/i/18274380', 'https://i.gkd.li/i/18292926', 'https://i.gkd.li/i/18296940', 'https://i.gkd.li/i/18306839', 'https://i.gkd.li/i/19777674', 'https://i.gkd.li/i/19919165', 'https://i.gkd.li/i/19919169', 'https://i.gkd.li/i/20710223', 'https://i.gkd.li/i/20718890', 'https://i.gkd.li/i/20720187', 'https://i.gkd.li/i/20739391', 'https://i.gkd.li/i/23687208', 'https://i.gkd.li/i/24836772'],
        preKeys: [0,49],
        fastQuery: true,
        _uniqueKey: 50
      },
      {
        key: 51,
        name: '点击关闭',
        snapshotUrls: ['https://i.gkd.li/i/17675894', 'https://i.gkd.li/i/18587456', 'https://i.gkd.li/i/25739074'],
        preKeys: [50],
        fastQuery: true,
        anyMatches: ['[vid="close_dislike"][visibleToUser=true]', '@[text="关闭"][clickable=true] -n * <<(2,4) [name$="ComposeView" || name$="FrameLayout"] <n [vid="recycler"]'],
        _uniqueKey: 51
      },
      {
        key: 1,
        name: '点击卡片广告右侧菜单图标',
        matches: 'FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"] >n [id^="tv.danmaku.bili:id/more"]',
        snapshotUrls: ['https://i.gkd.li/i/12642260', 'https://i.gkd.li/i/12705266', 'https://i.gkd.li/i/12776568', 'https://i.gkd.li/i/12707070'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击屏蔽广告',
        matches: '[id="tv.danmaku.bili:id/dislike_reasons"] @RelativeLayout > [text*="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/12642261', 'https://i.gkd.li/i/13495649'],
        preKeys: 0,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 6,
      name: '局部广告-首页浮标广告',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: '.MainActivityV2',
        matches: '[vid="animation_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/25357810',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="忽略此版本的更新"][checked=false]',
        snapshotUrls: ['https://i.gkd.li/i/12649689', 'https://i.gkd.li/i/13212209', 'https://i.gkd.li/i/13228977'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/12649689', 'https://i.gkd.li/i/13212209', 'https://i.gkd.li/i/13228977'],
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/12649689', 'https://i.gkd.li/i/13212209', 'https://i.gkd.li/i/13228977', 'https://i.gkd.li/i/13334963'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 7,
      name: '局部广告-视频页广告',
      desc: '关闭视频页面的会员推广弹窗和免流星卡广告',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: ['com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', 'com.bilibili.video.videodetail.VideoDetailsActivity'],
        matches: '[id="tv.danmaku.bili:id/toast_x"]',
        snapshotUrls: ['https://i.gkd.li/i/12892611', 'https://i.gkd.li/i/13308344', 'https://i.gkd.li/i/13538048'],
        matchTime: 10000,
        actionMaximum: 1,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        matches: '@[vid="close"][visibleToUser=true] - [text$="免费领B站大会员"]',
        snapshotUrls: 'https://i.gkd.li/i/18165189',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        matches: '@[vid="close"][visibleToUser=true] - [text$="免费领B站大会员"]',
        snapshotUrls: 'https://i.gkd.li/i/18165189',
        exampleUrls: 'https://e.gkd.li/cd934dfc-666e-4562-8b77-aac95f73694e',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 0,
        matches: '[id="tv.danmaku.bili:id/toast_x"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '局部广告-直播间悬浮窗广告',
      desc: '关闭直播间的悬浮窗广告',
      enable: false,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="tv.danmaku.bili:id/shopping_close" || vid="live_game_card_close" || vid="match_close" || vid="iv_pop_rank_guide_card_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13200549', 'https://i.gkd.li/i/22990081', 'https://i.gkd.li/i/23098023', 'https://i.gkd.li/i/25238734'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[vid="close" || vid="iv_close"] - [vid="up_avatar" || vid="gift_icon" || vid="follow_container"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14782965', 'https://i.gkd.li/i/18046573', 'https://i.gkd.li/i/22990105'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'View[visibleToUser=true] <<2 @[clickable=true] < [vid="pager"]',
        snapshotUrls: ['https://i.gkd.li/i/24985920', 'https://i.gkd.li/i/25240029'],
        matchTime: 10000,
        actionMaximum: 1,
        excludeSnapshotUrls: ['https://i.gkd.li/i/25369451'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="vertical_container"] >3 FrameLayout[clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/24985920', 'https://i.gkd.li/i/25240029'],
        matchTime: 10000,
        actionMaximum: 1,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '直播间底部售卖卡片',
        matches: '[id="tv.danmaku.bili:id/shopping_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13200549',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '[关注]弹窗',
        matches: '@[vid="close"] -2 * >2 [text="关注"]',
        snapshotUrls: 'https://i.gkd.li/i/14782965',
        fastQuery: true,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 9,
      name: '分段广告-搜索结果广告-1',
      desc: '关闭搜索结果中的广告内容',
      enable: false,
      activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
      fastQuery: true,
      _suffixCount: 1,
      rules: [
      {
        key: 1,
        matches: '@[vid="more"][clickable=true][visibleToUser=true] -(3,4) [vid="tag_layout"]',
        snapshotUrls: ['https://i.gkd.li/i/17269053', 'https://i.gkd.li/i/17964354'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[clickable=true] > [text$="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/17269055', 'https://i.gkd.li/i/17964356', 'https://i.gkd.li/i/22657666'],
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: ['.MainActivityV2', 'com.bilibili.video.story.StoryTransparentActivity', 'com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity'],
        matches: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
        snapshotUrls: ['https://i.gkd.li/i/13229159', 'https://i.gkd.li/i/13614090', 'https://i.gkd.li/i/21578494'],
        _uniqueKey: 3
      },
      {
        key: 0,
        matches: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '功能类-自动关闭故事模式-1',
      desc: '退出视频播放时的竖屏故事模式',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: ['com.bilibili.video.story.StoryVideoActivity', 'com.bilibili.video.story.StoryTransparentActivity'],
        matches: '[vid="story_ctrl_router"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18164075', 'https://i.gkd.li/i/23325994'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[vid="more" || id="tv.danmaku.bili.adbiz:id/more"] <<n [vid="tool_container" || vid="ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/root_container" || id="tv.danmaku.bili.adbiz:id/constraintLayout"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14083540', 'https://i.gkd.li/i/14588315', 'https://i.gkd.li/i/14729855', 'https://i.gkd.li/i/18274379', 'https://i.gkd.li/i/18306851', 'https://i.gkd.li/i/19537979', 'https://i.gkd.li/i/23012670', 'https://i.gkd.li/i/23123800', 'https://i.gkd.li/i/23687196'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[vid="inline_more"] <<n [vid="card_content"][visibleToUser=true][getChild(1).getChild(1).vid="corner_hint_container"]',
        snapshotUrls: 'https://i.gkd.li/i/17428126',
        exampleUrls: 'https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10',
        excludeSnapshotUrls: 'https://i.gkd.li/i/17848536',
        _uniqueKey: 2
      },
      {
        key: 50,
        name: '点击[不感兴趣]/[相似内容过多]',
        matches: '@[clickable=true] > [text="此类内容过多" || text="相似内容过多" || text="不感兴趣" || text="up主不感兴趣" || text="对该up的直播不感兴趣" || text="我不想看" || text="引人不适"]',
        snapshotUrls: ['https://i.gkd.li/i/13625309', 'https://i.gkd.li/i/13742257', 'https://i.gkd.li/i/14155801', 'https://i.gkd.li/i/14155272', 'https://i.gkd.li/i/17428471', 'https://i.gkd.li/i/18274380', 'https://i.gkd.li/i/18292926', 'https://i.gkd.li/i/20710223', 'https://i.gkd.li/i/23687208', 'https://i.gkd.li/i/24836772'],
        preKeys: [0,1],
        excludeSnapshotUrls: ['https://i.gkd.li/i/18292929', 'https://i.gkd.li/i/18306849'],
        _uniqueKey: 50
      },
      {
        key: 70,
        matches: '@FrameLayout[clickable=true] > [text="此类内容过多" || text="相似内容过多"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/20718890', 'https://i.gkd.li/i/20720187'],
        exampleUrls: 'https://e.gkd.li/2aba6082-1047-464e-959c-82ee62e492aa',
        preKeys: [50],
        _uniqueKey: 70
      },
      {
        key: 3,
        name: '点击卡片广告右下角菜单按钮',
        matches: '[vid="ad_tint_frame"] >2 [vid="more"]',
        snapshotUrls: ['https://i.gkd.li/i/14083540', 'https://i.gkd.li/i/14588315', 'https://i.gkd.li/i/14729855'],
        fastQuery: true,
        actionMaximum: 1,
        _uniqueKey: 3
      },
      {
        key: 51,
        name: '点击[不感兴趣]',
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/13742257', 'https://i.gkd.li/i/13256605', 'https://i.gkd.li/i/14155801', 'https://i.gkd.li/i/13742257'],
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 51
      },
      {
        key: 52,
        name: '点击[相似内容过多]',
        matches: '@[clickable=true] > [text="相似内容过多"]',
        snapshotUrls: ['https://i.gkd.li/i/13945597', 'https://i.gkd.li/i/14155272', 'https://i.gkd.li/i/14059882'],
        exampleUrls: 'https://m.gkd.li/57941037/acd89b46-45fc-459f-8d17-3913d98dcbad',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 52
      },
      {
        key: 53,
        name: '点击[up主不感兴趣]',
        matches: '@[clickable=true] > [text="up主不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13625309',
        exampleUrls: 'https://m.gkd.li/57941037/9c2f42d7-c262-4e06-b3c6-40f0908e7a94',
        preKeys: [0],
        fastQuery: true,
        _uniqueKey: 53
      },
      ],
    },
{
      key: 11,
      name: '功能类-自动点击评论区的[展开更多评论]-1',
      desc: '自动点击评论区的[展开更多评论]',
      enable: false,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: ['com.bilibili.video.story.StoryVideoActivity', 'com.bilibili.video.story.StoryTransparentActivity', 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', 'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity'],
        matches: '@LinearLayout[clickable=true] > [text="展开更多评论"]',
        snapshotUrls: ['https://i.gkd.li/i/22572375', 'https://i.gkd.li/i/23325508', 'https://i.gkd.li/i/22573433', 'https://i.gkd.li/i/23786106'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'tv.danmaku.bili.MainActivityV2',
        matches: '[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
        snapshotUrls: 'https://i.gkd.li/i/13448905',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 12,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      actionMaximum: 1,
      fastQuery: true,
      forcedTime: 10000,
      rules: [
      {
        key: 1,
        activityIds: ['tv.danmaku.bili.MainActivityV2', 'com.bilibili.vip.web.VipWebActivity', 'com.bilibili.module.vip.web.VipWebActivity'],
        matches: '@[index=parent.childCount.minus(1)][height<150][visibleToUser=true] <(1,2) View <(1,2) View <(4,5) View < View < View < WebView[text="会员中心" || text="大会员"] < WebView < [vid="webview"]',
        snapshotUrls: ['https://i.gkd.li/i/15219142', 'https://i.gkd.li/i/15220560', 'https://i.gkd.li/i/15289942', 'https://i.gkd.li/i/15328394', 'https://i.gkd.li/i/18236032', 'https://i.gkd.li/i/22310507'],
        exampleUrls: 'https://e.gkd.li/ac6dd8ae-f18e-4f48-9184-39e4dbd832ba',
        _uniqueKey: 1
      },
      {
        key: 4,
        activityIds: ['tv.danmaku.bili.MainActivityV2', 'com.bilibili.vip.web.VipWebActivity'],
        matches: 'ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid="vip_panel"]',
        snapshotUrls: ['https://i.gkd.li/i/15523975', 'https://i.gkd.li/i/15814146'],
        exampleUrls: 'https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.bilibili.vip.web.VipWebActivity',
        matches: '@TextView[width<130 && height<130] - TextView[childCount=0][id="dialog-canvas"] <<n [vid="webview"]',
        snapshotUrls: 'https://i.gkd.li/i/23385023',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 2,
        activityIds: ['tv.danmaku.bili.MainActivityV2', 'com.bilibili.vip.web.VipWebActivity'],
        matches: 'WebView[text="会员中心"] >4 [text="大会员服务协议"] +2 * >2 @TextView[visibleToUser=true][index=parent.childCount.minus(1)] <<n [vid="webview"]',
        snapshotUrls: ['https://i.gkd.li/i/15219142', 'https://i.gkd.li/i/15220560', 'https://i.gkd.li/i/15289942'],
        exampleUrls: 'https://m.gkd.li/57941037/60eee9aa-8799-4097-8ddf-2783afd49586',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.bilibili.vip.web.VipWebActivity',
        matches: 'WebView[text="大会员"] >3 View[childCount=4] >3 View[childCount=1] > View[childCount=1] > @Image[visibleToUser=true][childCount=0][text=""] <<n [vid="webview"]',
        snapshotUrls: 'https://i.gkd.li/i/15328394',
        exampleUrls: 'https://m.gkd.li/57941037/f56c6392-c473-4988-af41-00adedbf3905',
        _uniqueKey: 3
      },
      {
        key: 6,
        activityIds: 'tv.danmaku.bili.MainActivityV2',
        matches: '[text="会员中心"] >3 View > View[childCount=2] > View[childCount=1] > @TextView[clickable=true] <<n [vid="webview"]',
        snapshotUrls: 'https://i.gkd.li/i/15523824',
        exampleUrls: 'https://m.gkd.li/57941037/4384e301-8a79-427e-88d6-7fb8e422c6e8',
        _uniqueKey: 6
      },
      ],
    },
{
      key: 13,
      name: '全屏广告-分享稿件弹窗',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
        matches: '[vid="poster_share_cancel"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15858057',
        exampleUrls: 'https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 14,
      name: '分段广告-搜索结果广告-1-1-1-1',
      desc: '点击右下角[菜单]-点击[不感兴趣]',
      activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
      fastQuery: true,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 1,
        matches: '@[vid="more"][clickable=true][visibleToUser=true] -(3,4) [vid="tag_layout"]',
        snapshotUrls: ['https://i.gkd.li/i/17269053', 'https://i.gkd.li/i/17964354'],
        exampleUrls: 'https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[clickable=true] > [text$="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/17269055', 'https://i.gkd.li/i/17964356', 'https://i.gkd.li/i/22657666'],
        exampleUrls: 'https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589',
        preKeys: [1],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 15,
      name: '分段广告-视频详情页下方推广',
      desc: '关闭[广告/推广/直播]',
      activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        snapshotUrls: ['https://i.gkd.li/i/17675629', 'https://i.gkd.li/i/20739380', 'https://i.gkd.li/i/20744764', 'https://i.gkd.li/i/20794380', 'https://i.gkd.li/i/21552836', 'https://i.gkd.li/i/21705345', 'https://i.gkd.li/i/21947622', 'https://i.gkd.li/i/17675894', 'https://i.gkd.li/i/18306858', 'https://i.gkd.li/i/23934632', 'https://i.gkd.li/i/23933925', 'https://i.gkd.li/i/23933866', 'https://i.gkd.li/i/24015674'],
        exampleUrls: ['https://e.gkd.li/219c40c4-debf-40d8-889a-7eb39c87126c', 'https://e.gkd.li/dc54e6ee-24df-49a8-874a-f381326122c3'],
        anyMatches: ['@[vid="more" || vid="more_layout" || id="tv.danmaku.bili.adbiz:id/more" || id="tv.danmaku.bili.adbiz:id/more_layout"] <<n [vid="ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/ad_tint_frame" || id="tv.danmaku.bili.adbiz:id/ad_tint_frame"][visibleToUser=true]', '@[vid="more"] -(3,5) [vid="live_lottie_layout"][visibleToUser=true]', '[!(vid="duration" || vid="second_to_last_line_area") || text="课堂"] <3 ViewGroup[getChild(0).vid="cover"] > [vid="more"][visibleToUser=true]'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/24365466',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] > [text*="不感兴趣" || text="相似内容过多" || text="我不想看"]',
        snapshotUrls: ['https://i.gkd.li/i/17676025', 'https://i.gkd.li/i/17676149', 'https://i.gkd.li/i/17677147', 'https://i.gkd.li/i/18296940', 'https://i.gkd.li/i/18306839', 'https://i.gkd.li/i/20739391', 'https://i.gkd.li/i/24015691', 'https://i.gkd.li/i/24336415'],
        exampleUrls: 'https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="close_dislike"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18587456',
        exampleUrls: 'https://e.gkd.li/80514576-3656-4dcc-89f5-5992803c8e77',
        preKeys: [1],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 16,
      name: '功能类-自动关闭故事模式-1-1-1-1',
      desc: '播放视频时退出竖屏模式',
      matchTime: 10000,
      actionMaximum: 1,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: ['com.bilibili.video.story.StoryVideoActivity', 'com.bilibili.video.story.StoryTransparentActivity'],
        matches: '[vid="story_ctrl_router"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18164075', 'https://i.gkd.li/i/23325994'],
        exampleUrls: 'https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 17,
      name: '功能类-自动点击评论区的[展开更多评论]-1-1-1-1',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: ['com.bilibili.video.story.StoryVideoActivity', 'com.bilibili.video.story.StoryTransparentActivity', 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', 'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity'],
        matches: '@LinearLayout[clickable=true] > [text="展开更多评论"]',
        snapshotUrls: ['https://i.gkd.li/i/22572375', 'https://i.gkd.li/i/23325508', 'https://i.gkd.li/i/22573433', 'https://i.gkd.li/i/23786106'],
        exampleUrls: 'https://e.gkd.li/e7b7167e-7623-4079-9f16-fd253f303074',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 18,
      name: '功能类-自动领取会员经验',
      desc: '在会员中心页面自动领取会员经验',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.bilibili.vip.web.VipWebActivity',
        matches: 'TextView[childCount=0][text!=null][index=parent.childCount.minus(1)] -2 View >3 [text^="专属等级加速包"] +2 @TextView[childCount=0][text="领取"] <<n [vid="webview"]',
        snapshotUrls: ['https://i.gkd.li/i/22886723', 'https://i.gkd.li/i/22886739'],
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/23385023',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 19,
      name: '功能类-自动点击查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: ['com.bilibili.video.story.StoryVideoActivity', 'com.bilibili.video.story.StoryTransparentActivity', 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', 'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity', 'com.bilibili.bplus.followinglist.page.browser.ui.LightBrowserActivityV2', 'com.bilibili.lib.ui.ComposeActivity', 'com.bilibili.column.ui.detail.image.ColumnImageViewerActivity'],
        matches: '[text^="查看原图"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/23325552', 'https://i.gkd.li/i/23304237', 'https://i.gkd.li/i/23304245', 'https://i.gkd.li/i/23786065', 'https://i.gkd.li/i/23305280', 'https://i.gkd.li/i/23305281', 'https://i.gkd.li/i/23305275'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.bilibili.video.story.StoryVideoActivity', 'com.bilibili.video.story.StoryTransparentActivity', 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity', 'com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity', 'com.bilibili.bplus.followinglist.page.browser.ui.LightBrowserActivityV2', 'com.bilibili.lib.ui.ComposeActivity', 'com.bilibili.column.ui.detail.image.ColumnImageViewerActivity'],
        matches: '[text^="查看原图"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/23325552', 'https://i.gkd.li/i/23304237', 'https://i.gkd.li/i/23304245', 'https://i.gkd.li/i/23786065', 'https://i.gkd.li/i/23305280', 'https://i.gkd.li/i/23305281', 'https://i.gkd.li/i/23305275'],
        exampleUrls: 'https://e.gkd.li/c0ffc9cb-fac0-4b5c-9645-3674942b5c7d',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 20,
      name: '功能类-登录授权',
      desc: '点击确认授权按钮',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: '.ui.webview.MWebActivity',
        matches: ['[text="哔哩哔哩扫码登录"]', '[text="确认"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/24989484',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.bilibili.search2.main.BiliMainSearchActivity',
        matches: '[vid="rating_dialog_close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/23440560',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 21,
      name: '功能类-直播自动点赞',
      desc: '左下角提示-点击',
      rules: [
      {
        key: 0,
        activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
        matches: '@[vid="live_combo_action_button"] > [text="点赞"]',
        snapshotUrls: 'https://i.gkd.li/i/25238947',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 22,
      name: '功能类-直播自动投喂粉丝团',
      desc: '左下角提示-点击投喂_需要0.1米谨慎开启(虽然只有一次)',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
        matches: '@[vid="live_combo_action_button"] > [text="投喂"]',
        snapshotUrls: 'https://i.gkd.li/i/25238945',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});