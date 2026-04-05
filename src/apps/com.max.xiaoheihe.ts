import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
{
      key: 1,
      name: '功能类-签到成功弹窗',
      desc: '关闭签到成功提示弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text*="签到成功"][text.length<10]',
        snapshotUrls: ['https://i.gkd.li/import/13421535', 'https://i.gkd.li/i/15048252'],
        action: 'back',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="签到成功"][text.length<10]',
        snapshotUrls: ['https://i.gkd.li/i/13421535', 'https://i.gkd.li/i/15048252'],
        action: 'back',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '局部广告-卡片广告',
      desc: '关闭帖子底部的推荐关注卡片',
      enable: false,
      rules: [
      {
        key: 0,
        name: '收藏帖子后底部推荐关注卡片',
        activityIds: 'com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity',
        matches: '[vid="iv_notify_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14914139',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '收藏帖子后底部推荐关注卡片-1',
        activityIds: 'com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity',
        matches: '[vid="iv_notify_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14914139',
        exampleUrls: 'https://m.gkd.li/57941037/b7c25b6e-cc77-4bcc-a477-23b3de74c61f',
        fastQuery: true,
        _uniqueKey: 1,
        _uniqueName: '收藏帖子后底部推荐关注卡片-1',
        name: '收藏帖子后底部推荐关注卡片-1'
      },
      ],
    },
{
      key: 3,
      name: '功能类-自动点击查看原图',
      rules: [
      {
        key: 0,
        activityIds: ['.module.bbs.post.ui.activitys.WebNewsPostPageActivity', '.module.bbs.post.ui.activitys.PicturePostPageActivity'],
        matches: '[vid="tv_original"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/16646832', 'https://i.gkd.li/i/17574462'],
        exampleUrls: 'https://e.gkd.li/f7222b21-7037-4614-95ab-cff19ee15d38',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/22377026',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '功能类-自动查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      activityIds: ['.module.bbs.post.ui.activitys.WebNewsPostPageActivity', '.module.bbs.post.ui.activitys.PicturePostPageActivity', '.module.bbs.post.ui.activitys.v2.PicturePostPageActivityV2'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="tv_original"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/16646832', 'https://i.gkd.li/i/17574462', 'https://i.gkd.li/i/25336815'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/22377026',
        _uniqueKey: 0
      },
      ],
    },
  ],
});