import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
{
    key: 1,
    name: '评价提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
          matches: [
              '[text="评分"][visibleToUser=true]',
              '[text="下次再说"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13258813',
              'https://i.gkd.li/i/21979253',
          ],
      },
      { key: 0, matches: '[id="com.mi.health:id/nextView"][text="下次再说"]' },
    ],
  },
{
    key: 2,
    name: '局部广告',
    desc: '关闭各页面的局部广告',
    enable: false,
    matchTime: 10000,
    rules: [
      {
          fastQuery: true,
          name: '调研邀请',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[vid="bannerAnnouncementView"] [vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24099864',
      },
      {
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[text="开启后台无限制"] + [id="com.mi.health:id/close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13495035',
      },
      { key: 0, matches: '[text="开启后台无限制"] + [id="com.mi.health:id/close_icon"]' },
    ],
  },
{
    key: 3,
    name: '全屏广告',
    desc: '关闭各页面的全屏广告',
    enable: false,
    matchTime: 10000,
    actionMaximum: 2,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          key: 0,
          name: '活动弹窗',
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13537836',
      },
      {
          key: 1,
          name: '表盘广告',
          activityIds: 'com.xiaomi.wearable.yrn.views.WearableRNActivity',
          matches: '@[clickable=true] > [desc="Close"]',
          snapshotUrls: 'https://i.gkd.li/i/23923968',
      },
      {
          key: 0,
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          fastQuery: true,
          matches: '[id="com.mi.health:id/cardview"] + [id="com.mi.health:id/dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13537836',
      },
    ],
  },
{
    key: 4,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          matches: [
              '[text="下载并安装" || text="立即更新"]',
              '[text="放弃更新" || text="取消"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13537840',
              'https://i.gkd.li/i/13626328',
          ],
      },
      {
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[text^="发现新版本"] < * + * >n [text="放弃更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13537840',
      },
      {
          activityIds: 'com.mi.health.home.HomeActivity',
          matches: '[text="立即更新"] + [id="com.mi.health:id/tv_negative"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13626328',
      },
    ],
  },
{
    key: 5,
    name: '通知提示-公告栏',
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.xiaomi.fitness.main.MainActivity',
          matches: '[vid="bannerAnnouncementView"] [vid="iv_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24099864',
      },
    ],
  },
{
    key: 6,
    name: '权限提示-麦克风',
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.xiaomi.fitness.baseui.common.CommonBaseActivity',
          matches: '@[vid="close_instruction"][clickable=true] - [text^="鼾声梦话监测开关因麦克风未授权而关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/24229351',
      },
    ],
  }
  ],
});
