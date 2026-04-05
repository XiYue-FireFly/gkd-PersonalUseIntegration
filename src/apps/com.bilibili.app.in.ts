import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
{
      key: 5,
      name: '评价提示-评论区满意度评价',
      rules: [
      {
        key: 1,
        activityIds: 'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        matches: '@View[childCount=0][width<180 && height<180] - [childCount=0][text~="你.+评论.*氛围.+？"] <<n [vid="compose_view"]',
        snapshotUrls: ['https://i.gkd.li/i/23125454', 'https://i.gkd.li/i/23182150'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 0,
        matches: '[text="对当前的评论区满意吗？"] + [id="com.bilibili.app.in:id/close"]',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 6,
      name: '评价提示-APP评分',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'tv.danmaku.bili.MainActivityV2',
        matches: ['[text="鼓励一下"]', '[text="下次再说"]'],
        snapshotUrls: 'https://i.gkd.li/i/13180746',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.bilibili.app.in:id/cancel"][text="下次再说"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '通知提示-订阅感兴趣的通知',
      desc: '点击"暂不开启"',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.bilibili.bplus.im.communication.HomeCommunicationActivity',
        matches: ['[text="订阅感兴趣的通知"]', '[text="暂不开启"]'],
        snapshotUrls: 'https://i.gkd.li/i/18392097',
        exampleUrls: 'https://e.gkd.li/283c2be2-80d7-43ab-976c-0896e678fc49',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="订阅感兴趣的通知"] +2 LinearLayout [text="暂不开启"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 8,
      name: '权限提示-通知权限',
      rules: [
      {
        key: 0,
        activityIds: 'tv.danmaku.bili.MainActivityV2',
        matches: ['[text="打开推送通知"]', '[text="暂不"]'],
        snapshotUrls: 'https://i.gkd.li/i/15907493',
        exampleUrls: 'https://e.gkd.li/e67d6d21-f09b-44b0-bf91-8b9fa0670e27',
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.bilibili.vip.web.VipWebActivity',
        matches: '@Image < View + [id="subscribeContainer"] > [text="权益更新时推送通知"]',
        snapshotUrls: 'https://i.gkd.li/i/23714120',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="打开推送通知"] +2 LinearLayout > [id="com.bilibili.app.in:id/close"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 9,
      name: '功能类-自动领取会员经验',
      snapshotUrls: ['https://i.gkd.li/i/22886723', 'https://i.gkd.li/i/22886739'],
      rules: [
      {
        key: 0,
        activityIds: 'com.bilibili.vip.web.VipWebActivity',
        matches: '[text^="专属等级加速包"] +n @TextView[childCount=0][text="领取"] <<n [vid="webview"]',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '功能类-自动关闭故事模式',
      desc: '播放视频时退出竖屏模式',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.bilibili.video.story.StoryVideoActivity',
        matches: '[vid="story_ctrl_router"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18164075',
        exampleUrls: 'https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});