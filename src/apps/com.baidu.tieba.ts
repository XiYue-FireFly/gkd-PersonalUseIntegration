import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: 'TextView[text^="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/12775906', 'https://i.gkd.li/i/12566191', 'https://i.gkd.li/i/12870916', 'https://i.gkd.li/i/13233500'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        snapshotUrls: 'https://i.gkd.li/i/13322227',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'TextView[text="广告"] - @LinearLayout[clickable=true] > [text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13168386',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '【跳过+倒计时】型',
        matches: 'TextView[text^="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/12775906', 'https://i.gkd.li/i/12566191', 'https://i.gkd.li/i/12870916', 'https://i.gkd.li/i/13233500'],
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '【圆圈跳过】型-来自穿山甲SDK',
        matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/13322227',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '【x+关闭】型',
        matches: 'TextView[text="广告"] - @LinearLayout[clickable=true] > [text="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13168386',
        fastQuery: true,
        _uniqueKey: 5
      },
      ],
    },
{
      key: 1,
      name: '通知提示-申请消息提醒弹窗',
      desc: '关闭消息通知开启提示弹窗',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
        snapshotUrls: 'https://i.gkd.li/import/13536170',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
        snapshotUrls: 'https://i.gkd.li/i/13536170',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.immessagecenter.mention.reply.ReplyMeActivity',
        matches: 'TextView[text="开启消息推送"] +2 TextView[text="不开启"]',
        snapshotUrls: 'https://i.gkd.li/i/13675694',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
        matches: '[text="开启通知"] <n * > [text="暂不开启"]',
        snapshotUrls: ['https://i.gkd.li/i/13804455', 'https://i.gkd.li/i/20918198'],
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
        snapshotUrls: 'https://i.gkd.li/i/13536170',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.baidu.tieba.immessagecenter.mention.reply.ReplyMeActivity',
        matches: 'TextView[text="开启消息推送"] +2 TextView[text="不开启"]',
        snapshotUrls: 'https://i.gkd.li/i/13675694',
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
        matches: '[text="开启通知"] - [text="暂不开启"]',
        snapshotUrls: 'https://i.gkd.li/i/13804455',
        _uniqueKey: 6
      },
      ],
    },
{
      key: 2,
      name: '分段广告-信息流广告',
      desc: '关闭首页、帖子内的广告和直播推广',
      enable: false,
      fastQuery: true,
      forcedTime: 10000,
      rules: [
      {
        key: 0,
        activityIds: ['com.baidu.tieba.tblauncher.MainTabActivity', 'com.baidu.tieba.forum.ForumActivity'],
        matches: '@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text="直播中"]',
        snapshotUrls: ['https://i.gkd.li/i/16595137', 'https://i.gkd.li/i/16596473'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.baidu.tieba.forum.ForumActivity', 'com.baidu.tieba.pb.pb.main.PbActivity', 'com.baidu.tieba.tblauncher.MainTabActivity'],
        matches: '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595127', 'https://i.gkd.li/i/16595515', 'https://i.gkd.li/i/16596130'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595120', 'https://i.gkd.li/i/16595133'],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] -3 [text="直播中"]',
        snapshotUrls: 'https://i.gkd.li/i/16596210',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: '@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595124', 'https://i.gkd.li/i/16596297', 'https://i.gkd.li/i/24541094'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/16632851',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: ['com.baidu.tieba.pb.pb.main.PbActivity', 'com.baidu.tieba.forum.ForumActivity', 'com.baidu.tieba.tblauncher.MainTabActivity'],
        matches: '@FrameLayout[clickable=true][visibleToUser=true] <(3,4) RelativeLayout + FrameLayout >(7,8,9) [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595301', 'https://i.gkd.li/i/16596195', 'https://i.gkd.li/i/16596775', 'https://i.gkd.li/i/21524232', 'https://i.gkd.li/i/21529443', 'https://i.gkd.li/i/21556758', 'https://i.gkd.li/i/24520138', 'https://i.gkd.li/i/25710401'],
        _uniqueKey: 5
      },
      {
        key: 10,
        activityIds: ['com.baidu.tieba.tblauncher.MainTabActivity', 'com.baidu.tieba.pb.pb.main.PbActivity', 'com.baidu.tieba.forum.ForumActivity'],
        matches: '@View[clickable=true][visibleToUser=true] - [text^="选择不喜欢"]',
        snapshotUrls: ['https://i.gkd.li/i/16595134', 'https://i.gkd.li/i/16595511', 'https://i.gkd.li/i/16595113'],
        preKeys: [0,1,2,3,4,5],
        _uniqueKey: 10
      },
      {
        key: 6,
        activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
        matches: '@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text="直播中"]',
        snapshotUrls: ['https://i.gkd.li/i/16595137', 'https://i.gkd.li/i/16596473'],
        exampleUrls: 'https://e.gkd.li/94be671a-4709-4aa5-b114-d4cfabe0ed9c',
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: ['.forum.ForumActivity', '.pb.pb.main.PbActivity', '.tblauncher.MainTabActivity'],
        matches: '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595127', 'https://i.gkd.li/i/16595515', 'https://i.gkd.li/i/16596130'],
        exampleUrls: 'https://e.gkd.li/3b2f0906-f620-4fda-a59f-334a9548836e',
        _uniqueKey: 7
      },
      {
        key: 8,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595120', 'https://i.gkd.li/i/16595133'],
        exampleUrls: 'https://e.gkd.li/683d8e48-909e-4c06-9686-9a9778456e78',
        _uniqueKey: 8
      },
      {
        key: 9,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] -3 [text="直播中"]',
        snapshotUrls: 'https://i.gkd.li/i/16596210',
        exampleUrls: 'https://e.gkd.li/ad2f214b-0e2a-400e-9511-d35d7f14c004',
        _uniqueKey: 9
      },
      {
        key: 11,
        activityIds: ['.tblauncher.MainTabActivity', '.pb.pb.main.PbActivity'],
        matches: 'ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1][visibleToUser=true] <(3,4) RelativeLayout + FrameLayout >9 [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/21524232', 'https://i.gkd.li/i/21529443', 'https://i.gkd.li/i/21556758', 'https://i.gkd.li/i/24520138'],
        exampleUrls: 'https://e.gkd.li/0ac82700-02f3-40c6-bf45-b21e365ac84c',
        _uniqueKey: 11
      },
      {
        key: 12,
        activityIds: '.pb.pb.main.PbActivity',
        matches: 'ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1][visibleToUser=true] <2 RelativeLayout + RelativeLayout >3 [text="广告"] ',
        snapshotUrls: 'https://i.gkd.li/i/24541094',
        exampleUrls: 'https://e.gkd.li/0d5fea40-44ac-4b47-8b3c-e8388640e37d',
        _uniqueKey: 12
      },
      {
        key: 13,
        activityIds: ['.tblauncher.MainTabActivity', '.pb.pb.main.PbActivity', '.forum.ForumActivity'],
        matches: '@View[clickable=true][visibleToUser=true] - [text^="选择不喜欢"]',
        snapshotUrls: ['https://i.gkd.li/i/16595134', 'https://i.gkd.li/i/16595511', 'https://i.gkd.li/i/16595113'],
        exampleUrls: 'https://e.gkd.li/67a159e7-59ea-45f6-909c-7a681c4d3838',
        preKeys: [0,1,2,3,4,5],
        _uniqueKey: 13
      },
      {
        key: 14,
        name: '点击广告【x】',
        matches: ['RelativeLayout > TextView[text$="广告"][clickable=true]', 'LinearLayout[clickable=true][childCount=1] > @FrameLayout[clickable=true][childCount=1][desc=null] > ImageView'],
        snapshotUrls: ['https://i.gkd.li/i/12775913', 'https://i.gkd.li/i/13043133', 'https://i.gkd.li/i/13054256', 'https://i.gkd.li/i/12775930', 'https://i.gkd.li/i/12840951', 'https://i.gkd.li/i/12775916', 'https://i.gkd.li/i/12775892', 'https://i.gkd.li/i/13328300', 'https://i.gkd.li/i/13402610', 'https://i.gkd.li/i/13459289'],
        _uniqueKey: 14
      },
      {
        key: 15,
        name: '关闭原因-【不感兴趣】',
        matches: '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
        snapshotUrls: 'https://i.gkd.li/i/12775914',
        preKeys: 0,
        _uniqueKey: 15
      },
      ],
    },
{
      key: 3,
      name: '局部广告-首页、推荐列表顶部卡片式广告',
      desc: '关闭首页顶部的卡片广告和小游戏推广',
      enable: false,
      activityIds: ['com.baidu.tieba.tblauncher.MainTabActivity', 'com.baidu.tieba.frs.FrsActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      forcedTime: 10000,
      rules: [
      {
        key: 1,
        matches: 'RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView',
        snapshotUrls: 'https://i.gkd.li/import/13060892',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text="小游戏"]',
        snapshotUrls: ['https://i.gkd.li/i/17943902', 'https://i.gkd.li/i/18217417'],
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13060892',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 7,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      priorityTime: 10000,
      rules: [
      {
        key: 0,
        activityIds: '.UpdateDialog',
        matches: '[text="稍后再说"]',
        snapshotUrls: 'https://i.gkd.li/i/16908501',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 8,
      name: '分段广告-帖子底部内容推荐卡片',
      desc: '关闭时弹窗选原因',
      enable: false,
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules: [
      {
        key: 0,
        matches: 'LinearLayout > RelativeLayout[id!=null][clickable=false] > ImageView[id=null][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12775882',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '关闭原因-不感兴趣',
        matches: '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
        snapshotUrls: 'https://i.gkd.li/i/12775914',
        preKeys: 0,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 9,
      name: '全屏广告-广告弹窗',
      desc: '关闭会员弹窗、签到弹窗等全屏广告',
      enable: false,
      activityIds: ['com.baidu.tbadk.browser.TBWebContainerActivity', 'com.baidu.tieba.frs.FrsActivity', 'com.baidu.tieba.tblauncher.MainTabActivity', 'com.baidu.tieba.LogoActivity'],
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
      {
        key: 1,
        name: '点击正下方x关闭',
        matches: '@TextView[id="com.baidu.tieba:id/obfuscated"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text="广告"] < RelativeLayout[childCount=2] < [parent=null]',
        snapshotUrls: ['https://i.gkd.li/import/13168383', 'https://i.gkd.li/import/13322120', 'https://i.gkd.li/import/13328246'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击正下方x关闭2',
        matches: 'WebView[text="会员弹窗" || text="一键签到"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14630806', 'https://i.gkd.li/i/14630806', 'https://i.gkd.li/i/15119439', 'https://i.gkd.li/i/15119451', 'https://i.gkd.li/i/16426630'],
        forcedTime: 10000,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击正下方x关闭3',
        matches: 'WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2]',
        snapshotUrls: ['https://i.gkd.li/i/13060891', 'https://i.gkd.li/i/16703244'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/13222361'],
        _uniqueKey: 3
      },
      {
        key: 4,
        name: '点击正下方x关闭-1',
        activityIds: ['.frs.FrsActivity', '.tblauncher.MainTabActivity', '.LogoActivity'],
        matches: '@TextView[id="com.baidu.tieba:id/obfuscated"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text="广告"] < RelativeLayout[childCount=2] < [parent=null]',
        snapshotUrls: ['https://i.gkd.li/i/13168383', 'https://i.gkd.li/i/13322120', 'https://i.gkd.li/i/13328246'],
        _uniqueKey: 4,
        _uniqueName: '点击正下方x关闭-1',
        name: '点击正下方x关闭-1'
      },
      {
        key: 5,
        activityIds: ['.tblauncher.MainTabActivity', 'com.baidu.tbadk.browser.TBWebContainerActivity'],
        matches: 'WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2]',
        snapshotUrls: ['https://i.gkd.li/i/13060891', 'https://i.gkd.li/i/16703244'],
        exampleUrls: 'https://e.gkd.li/ac3d88b7-31a2-441f-a4c8-8a73eaec24b9',
        _uniqueKey: 5
      },
      {
        key: 0,
        name: '点击右上角x关闭',
        activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
        matches: 'View[childCount=3] > @View[clickable=true][childCount=1] > Image',
        snapshotUrls: ['https://i.gkd.li/i/13060891', 'https://i.gkd.li/i/13222361'],
        _uniqueKey: 0
      },
      {
        key: 6,
        name: '点击正下方x关闭-2',
        activityIds: ['com.baidu.tieba.frs.FrsActivity', 'com.baidu.tieba.tblauncher.MainTabActivity', 'com.baidu.tieba.LogoActivity'],
        matches: '@TextView[clickable=true && text=null] - FrameLayout TextView[text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/13168383', 'https://i.gkd.li/i/13322120', 'https://i.gkd.li/i/13328246'],
        _uniqueKey: 6,
        _uniqueName: '点击正下方x关闭-2',
        name: '点击正下方x关闭-2'
      },
      ],
    },
{
      key: 10,
      name: '局部广告-悬浮小广告',
      desc: '关闭首页右侧和评论区的悬浮广告',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        name: '首页右侧悬浮广告-1',
        activityIds: ['.tblauncher.MainTabActivity', '.pb.pb.main.PbActivity'],
        matches: '@ImageView[clickable=true][visibleToUser=true][vid="obfuscated"] - [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/import/13115167', 'https://i.gkd.li/i/16622395', 'https://i.gkd.li/i/16632851'],
        excludeSnapshotUrls: 'https://i.gkd.li/import/13327933',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '首页右侧悬浮广告-2',
        activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
        matches: 'RelativeLayout >2 RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/import/14291964',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '评论区左侧悬浮广告',
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: 'FrameLayout[getChild(1).getChild(1).text!=null] + @FrameLayout[clickable=true] > LinearLayout[childCount=2] > ImageView + [text="广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/import/13296280',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/20361318',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: ['com.baidu.tieba.pb.pb.main.PbActivity', 'com.baidu.tieba.tblauncher.MainTabActivity'],
        matches: 'RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/import/13625336', 'https://i.gkd.li/import/13627881'],
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['.tblauncher.MainTabActivity', '.pb.pb.main.PbActivity'],
        matches: '@ImageView[clickable=true][visibleToUser=true][vid="obfuscated"] - [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16622395', 'https://i.gkd.li/i/16632851'],
        fastQuery: true,
        matchTime: 10000,
        actionMaximum: 1,
        excludeSnapshotUrls: 'https://i.gkd.li/i/13327933',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '首页右侧悬浮广告-2-1',
        activityIds: '.tblauncher.MainTabActivity',
        matches: 'RelativeLayout >2 RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14291964',
        _uniqueKey: 5,
        _uniqueName: '首页右侧悬浮广告-2-1',
        name: '首页右侧悬浮广告-2-1'
      },
      {
        key: 6,
        name: '评论区左侧悬浮广告-1',
        activityIds: '.pb.pb.main.PbActivity',
        matches: 'FrameLayout[getChild(1).getChild(1).text!=null] + @FrameLayout[clickable=true] > LinearLayout[childCount=2] > ImageView + [text="广告"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13296280',
        excludeSnapshotUrls: 'https://i.gkd.li/i/20361318',
        _uniqueKey: 6,
        _uniqueName: '评论区左侧悬浮广告-1',
        name: '评论区左侧悬浮广告-1'
      },
      {
        key: 7,
        activityIds: ['.pb.pb.main.PbActivity', '.tblauncher.MainTabActivity'],
        matches: 'RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13625336', 'https://i.gkd.li/i/13627881'],
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '首页右侧悬浮广告',
        activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
        matches: '@ImageView[clickable=true] - TextView[text="广告"] < RelativeLayout + ImageView',
        snapshotUrls: ['https://i.gkd.li/i/13115167', 'https://i.gkd.li/i/13327933'],
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '评论区左侧悬浮广告-2',
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: 'LinearLayout[childCount=2] > @ImageView + [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13296280',
        fastQuery: true,
        _uniqueKey: 9,
        _uniqueName: '评论区左侧悬浮广告-2',
        name: '评论区左侧悬浮广告-2'
      },
      {
        key: 10,
        activityIds: ['com.baidu.tieba.pb.pb.main.PbActivity', 'com.baidu.tieba.tblauncher.MainTabActivity'],
        matches: 'RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13625336', 'https://i.gkd.li/i/13627881'],
        _uniqueKey: 10
      },
      ],
    },
{
      key: 11,
      name: '局部广告-[帖子内/吧内]底部悬浮窗',
      desc: '关闭帖子内和吧内底部的推荐悬浮窗',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$="热议中" || text^="猜你喜欢" || text*="进吧逛逛"]',
        snapshotUrls: ['https://i.gkd.li/i/16595234', 'https://i.gkd.li/i/16619736', 'https://i.gkd.li/i/16647874'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.forum.ForumActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text^="关注本吧"]',
        snapshotUrls: 'https://i.gkd.li/i/17992981',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$="热议中" || text^="猜你喜欢" || text*="进吧逛逛"]',
        snapshotUrls: ['https://i.gkd.li/i/16595234', 'https://i.gkd.li/i/16619736', 'https://i.gkd.li/i/16647874'],
        exampleUrls: 'https://e.gkd.li/047ab857-f690-473b-9b18-43369319c5ce',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.forum.ForumActivity',
        matches: '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text^="关注本吧"]',
        snapshotUrls: 'https://i.gkd.li/i/17992981',
        exampleUrls: 'https://e.gkd.li/756c02b5-a72c-4ca4-a05c-a33202e8ecd6',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: '[vid="tip_close"]',
        snapshotUrls: 'https://i.gkd.li/i/14571741',
        exampleUrls: 'https://m.gkd.li/57941037/e45542c9-cee7-4fa6-874d-0682c53f629b',
        fastQuery: true,
        _uniqueKey: 4
      },
      ],
    },
{
      key: 12,
      name: '功能类-贴吧内签到并关闭弹窗',
      desc: '自动进行贴吧签到并关闭签到成功提示',
      enable: false,
      actionMaximum: 1,
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '贴吧页签到',
        activityIds: 'com.baidu.tieba.forum.ForumActivity',
        snapshotUrls: ['https://i.gkd.li/import/13776801', 'https://i.gkd.li/i/15087289', 'https://i.gkd.li/i/17902156'],
        anyMatches: ['@TextView[text="签到"][visibleToUser=true] <3 View < View <2 View < View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id="android:id/content"]', '@TextView[text="签到"][visibleToUser=true] <5 View < View <2 View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id="android:id/content"]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '关闭签到成功弹窗',
        activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
        matches: '@WebView[text="签到弹窗"][visibleToUser=true] < WebView < FrameLayout < LinearLayout < RelativeLayout < [id="android:id/content"]',
        snapshotUrls: ['https://i.gkd.li/import/13776424', 'https://i.gkd.li/i/15087327', 'https://i.gkd.li/i/15881225'],
        preKeys: 0,
        action: 'back',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '贴吧页签到-1',
        activityIds: '.forum.ForumActivity',
        snapshotUrls: ['https://i.gkd.li/i/15087289', 'https://i.gkd.li/i/17902156'],
        anyMatches: ['@TextView[text="签到"][visibleToUser=true] <3 View < View <2 View < View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id="android:id/content"]', '@TextView[text="签到"][visibleToUser=true] <5 View < View <2 View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id="android:id/content"]'],
        _uniqueKey: 2,
        _uniqueName: '贴吧页签到-1',
        name: '贴吧页签到-1'
      },
      {
        key: 3,
        name: '关闭签到成功弹窗-1',
        activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
        matches: '@WebView[text="签到弹窗"][visibleToUser=true] < WebView < FrameLayout < LinearLayout < RelativeLayout < [id="android:id/content"]',
        snapshotUrls: ['https://i.gkd.li/i/15087327', 'https://i.gkd.li/i/15881225'],
        action: 'back',
        _uniqueKey: 3,
        _uniqueName: '关闭签到成功弹窗-1',
        name: '关闭签到成功弹窗-1'
      },
      {
        key: 4,
        name: '贴吧页签到-2',
        activityIds: 'com.baidu.tieba.forum.ForumActivity',
        matches: 'WebView[text="frs"] > View > View > View > View > TextView[text="签到"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13776801', 'https://i.gkd.li/i/15087289'],
        _uniqueKey: 4,
        _uniqueName: '贴吧页签到-2',
        name: '贴吧页签到-2'
      },
      {
        key: 5,
        name: '关闭签到成功弹窗-2',
        activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
        matches: 'WebView[text="签到弹窗"] > View > View > TextView[text=""][index=2][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/13776424', 'https://i.gkd.li/i/15087327'],
        _uniqueKey: 5,
        _uniqueName: '关闭签到成功弹窗-2',
        name: '关闭签到成功弹窗-2'
      },
      ],
    },
{
      key: 13,
      name: '局部广告-感兴趣的吧推广-1',
      desc: '关闭首页和吧内的贴吧推荐',
      enable: false,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
        matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text="你可能感兴趣的吧" || text^="本吧的人都在逛"]',
        snapshotUrls: ['https://i.gkd.li/i/16914357', 'https://i.gkd.li/i/17944680', 'https://i.gkd.li/i/18218517'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true] -2 [text="进入话题查看更多"]',
        snapshotUrls: 'https://i.gkd.li/i/14586847',
        exampleUrls: 'https://m.gkd.li/57941037/2fa193f8-5e0e-4f85-b828-eb3e22cb60a3',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
        matches: '@ImageView[clickable=true] -2 [text="进入话题查看更多"]',
        snapshotUrls: 'https://i.gkd.li/i/14586847',
        exampleUrls: 'https://m.gkd.li/57941037/2fa193f8-5e0e-4f85-b828-eb3e22cb60a3',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 14,
      name: '全屏广告-会员弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['.tblauncher.MainTabActivity', 'com.baidu.tbadk.browser.TBWebContainerActivity'],
        matches: 'WebView[text="会员弹窗" || text="一键签到"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14630806', 'https://i.gkd.li/i/15119439', 'https://i.gkd.li/i/15119451', 'https://i.gkd.li/i/16426630'],
        exampleUrls: 'https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932',
        forcedTime: 10000,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.baidu.tieba.tblauncher.MainTabActivity', 'com.baidu.tbadk.browser.TBWebContainerActivity'],
        matches: 'WebView[text="会员弹窗" || text="一键签到"] >3 TextView + Image[text!=null][childCount=0][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/14630806', 'https://i.gkd.li/i/15119439', 'https://i.gkd.li/i/15119451'],
        exampleUrls: 'https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932',
        forcedTime: 5000,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 15,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      fastQuery: true,
      forcedTime: 10000,
      rules: [
      {
        key: 0,
        activityIds: '.pb.pb.main.PbActivity',
        matches: '@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595124', 'https://i.gkd.li/i/16596297', 'https://i.gkd.li/i/16632851'],
        exampleUrls: 'https://e.gkd.li/337a7e8b-500f-4a0b-ae08-018c5222d4da',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['.tblauncher.MainTabActivity', '.pb.pb.main.PbActivity', '.forum.ForumActivity'],
        matches: '@FrameLayout[clickable=true][visibleToUser=true] <4 RelativeLayout + FrameLayout >7 [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/16595301', 'https://i.gkd.li/i/16596195', 'https://i.gkd.li/i/16596775'],
        exampleUrls: 'https://e.gkd.li/5b53c3be-4972-44aa-a62e-3ca780ae7098',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.tblauncher.MainTabActivity',
        matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text="小游戏"]',
        snapshotUrls: ['https://i.gkd.li/i/17943902', 'https://i.gkd.li/i/18217417'],
        _uniqueKey: 2
      },
      ],
    },
{
      key: 16,
      name: '局部广告-感兴趣的吧推广-1-1-1-1',
      desc: '关闭首页、吧内其他贴吧的推广',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 1,
        activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
        matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text="你可能感兴趣的吧" || text^="本吧的人都在逛"]',
        snapshotUrls: ['https://i.gkd.li/i/16914357', 'https://i.gkd.li/i/17944680', 'https://i.gkd.li/i/18218517'],
        exampleUrls: 'https://e.gkd.li/bfc13aa1-579f-46f4-beff-64b3f8ec693a',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
  ],
});