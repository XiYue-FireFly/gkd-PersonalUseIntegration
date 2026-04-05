import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
{
      key: 1,
      name: '全屏广告-活动弹窗',
      desc: '关闭VIP推广、一刻相册推广、幸运券包等活动弹窗',
      enable: false,
      activityIds: ['com.baidu.netdisk.ui.MainActivity', 'com.baidu.netdisk.business.guide.dialog.lifeproduct.', 'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="iv_close"]',
        snapshotUrls: ['https://i.gkd.li/import/12642505', 'https://i.gkd.li/import/12923937', 'https://i.gkd.li/import/13806852', 'https://i.gkd.li/import/12783106', 'https://i.gkd.li/i/14730106'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '相册页面激活无限空间弹窗',
        matches: '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
        snapshotUrls: 'https://i.gkd.li/import/12648987',
        _uniqueKey: 1
      },
      {
        key: 3,
        activityIds: ['com.baidu.netdisk.business.guide.dialog.lifeproduct.', 'com.baidu.netdisk.ui.MainActivity', 'com.baidu.netdisk.ui.Navigate'],
        matches: '[vid="iv_close"]',
        snapshotUrls: ['https://i.gkd.li/i/12642505', 'https://i.gkd.li/i/12783106', 'https://i.gkd.li/i/12923937', 'https://i.gkd.li/i/13806852', 'https://i.gkd.li/i/14730106', 'https://i.gkd.li/i/14822799'],
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '相册页面激活无限空间弹窗-1',
        activityIds: 'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
        matches: '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
        snapshotUrls: 'https://i.gkd.li/i/12648987',
        _uniqueKey: 4,
        _uniqueName: '相册页面激活无限空间弹窗-1',
        name: '相册页面激活无限空间弹窗-1'
      },
      ],
    },
{
      key: 2,
      name: '局部广告-各类局部广告',
      desc: '关闭各类局部广告，包括续费横幅、悬浮广告卡片等',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '续费横幅提示',
        activityIds: 'com.baidu.netdisk.ui.MainActivity',
        matches: 'View[desc="续费"] + ImageView',
        snapshotUrls: 'https://i.gkd.li/import/12924036',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '右下角悬浮卡片',
        activityIds: 'com.baidu.netdisk.ui.MainActivity',
        matches: '[vid="float_btn_close"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/import/14278618',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '播放界面下方广告',
        activityIds: '.video.VideoPlayerActivity',
        matches: '[vid="rl_ad_root"] > [vid="iv_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20414230',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '下载界面下方广告',
        activityIds: '.ui.transfer.TransferListTabActivity',
        matches: '[vid="close_singkil_tip_layout"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23694176',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.video.VideoPlayerActivity',
        matches: '[vid="rl_ad_root"] > [vid="iv_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/20414230',
        exampleUrls: 'https://e.gkd.li/5e0625e3-ef3b-4a71-a222-54728c2274b0',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '首页特惠广告',
        matches: '[id="com.baidu.netdisk:id/banner_item_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12706544',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '首页热门广告',
        matches: '[id="com.baidu.netdisk:id/vf_content"] + [id="com.baidu.netdisk:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/12706544',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '[我的]页面限时福利',
        matches: '@TextView + [text="专属福利"]',
        snapshotUrls: 'https://i.gkd.li/i/12706549',
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '续费横幅提示-1',
        matches: 'View[desc="续费"] + ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12924036',
        _uniqueKey: 8,
        _uniqueName: '续费横幅提示-1',
        name: '续费横幅提示-1'
      },
      ],
    },
{
      key: 3,
      name: '功能类-成长值页面签到',
      desc: '自动点击成长值页面签到按钮',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 1,
        activityIds: '.ui.cloudp2p.RichMediaActivity',
        matches: 'View[childCount=7] + TextView[clickable=true][text^="签到"]',
        snapshotUrls: 'https://i.gkd.li/i/18762226',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.ui.MainActivity', '.ui.cloudp2p.RichMediaActivity'],
        matches: '[text="立即更新"] -2 [text="下次再说"]',
        snapshotUrls: ['https://i.gkd.li/i/16118181', 'https://i.gkd.li/i/24834209'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.ui.MainActivity',
        matches: 'ImageView[id="com.baidu.netdisk:id/dialog_cancel"]',
        snapshotUrls: 'https://i.gkd.li/i/12923936',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'ImageView[id="com.baidu.netdisk:id/dialog_cancel"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '评价提示',
      activityIds: '.ui.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="view_score_style"] > [text="以后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/14317054',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="view_score_style"] > [text="以后再说"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 12,
      name: '局部广告-悬浮广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.baidu.netdisk.ui.MainActivity',
        matches: '[vid="float_btn_close"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/14278618',
        exampleUrls: 'https://m.gkd.li/57941037/470eec82-ed99-4f50-beba-2587e525cfdf',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 13,
      name: '分段广告-暂不开启自动备份',
      activityIds: '.ui.NewQuickSettingsActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: ['[text="开启安全备份"][visibleToUser=true]', '[text="暂不开启"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/22401064',
        exampleUrls: 'https://e.gkd.li/e227fa57-f728-4ba4-8fff-493751bc5035',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="暂不开启"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22401070',
        exampleUrls: 'https://e.gkd.li/aa9782d4-304f-401b-89f6-4fae703b8280',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});