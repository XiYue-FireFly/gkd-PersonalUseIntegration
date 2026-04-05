import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
{
      key: 0,
      name: '开屏广告',
      desc: '点击跳过应用启动时的开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[desc="跳过"||desc="GdtCountDownView"]',
        snapshotUrls: ['https://i.gkd.li/i/12775410', 'https://i.gkd.li/i/13426030', 'https://i.gkd.li/i/13468987'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[desc="createSkipView"]',
        snapshotUrls: 'https://i.gkd.li/i/14609953',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[desc="createSkipView"]',
        snapshotUrls: 'https://i.gkd.li/i/14609953',
        exampleUrls: 'https://m.gkd.li/57941037/fc4a38c9-20aa-4cfc-9a92-c20e9194418b',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[desc="createSkipView"]',
        snapshotUrls: 'https://i.gkd.li/i/14606816',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '关闭播放页面的各种卡片广告',
      enable: false,
      matchRoot: true,
      rules: [
      {
        key: 0,
        activityIds: '.app.MediaActivity',
        matches: 'ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView <<n [id="android:id/list"]',
        snapshotUrls: 'https://i.gkd.li/i/16434752',
        fastQuery: true,
        forcedTime: 10000,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.app.MediaActivity',
        matches: '@ImageView[desc="关闭"][visibleToUser=true][clickable=true] <n ViewGroup < LinearLayout <3 [id="android:id/list"]',
        snapshotUrls: ['https://i.gkd.li/i/14964889', 'https://i.gkd.li/i/15024041', 'https://i.gkd.li/i/15468481', 'https://i.gkd.li/i/16200618'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.app.MediaActivity',
        matches: '[desc="关闭广告"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15024812',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: '.app.MediaActivity',
        matches: '@ImageView[clickable=true] - [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/15520336',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.app.MediaActivity',
        matches: 'RelativeLayout > @RelativeLayout[clickable=true] > [desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/16114590',
        forcedTime: 10000,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: '.app.MediaActivity',
        matches: '@ImageButton[clickable=true][childCount=0][visibleToUser=true] - LinearLayout > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/18207953',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: '.app.MediaActivity',
        matches: '@ImageButton[clickable=true][childCount=0][visibleToUser=true] - LinearLayout > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/18207953',
        exampleUrls: 'https://e.gkd.li/fcb3e4d2-73bf-49b5-9157-08cac0c11584',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        activityIds: '.app.MediaActivity',
        matches: '@ImageButton[childCount=0][clickable=true] < RelativeLayout - LinearLayout > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/23687213',
        exampleUrls: 'https://e.gkd.li/13b95c9a-1e6c-4d63-8372-1cff2261253c',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        matches: 'ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/13558426',
        exampleUrls: 'https://m.gkd.li/87047583/9e150986-2103-4130-a12f-12ed2b07ef90',
        forcedTime: 5000,
        _uniqueKey: 8
      },
      {
        key: 9,
        matches: 'TextView[text!=null] <2 ViewGroup[childCount=6] > ImageView[desc="关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/14964889', 'https://i.gkd.li/i/15024041'],
        exampleUrls: 'https://m.gkd.li/57941037/adb9a250-d23d-48ef-b1a5-5e828d56cb97',
        _uniqueKey: 9
      },
      {
        key: 10,
        matches: '[desc="关闭广告"][clickable=true][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/15024812',
        exampleUrls: 'https://m.gkd.li/57941037/8bd6dafc-e610-4c0d-a486-02a11535e610',
        _uniqueKey: 10
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-VIP弹窗',
      desc: '关闭VIP会员相关弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '@ImageView[clickable=true][visibleToUser=true] + RelativeLayout >2 [text*="豪华VIP已过期"]',
        snapshotUrls: 'https://i.gkd.li/i/13548005',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.app.MediaActivity',
        matches: 'WebView[text="开通会员"] >7 @TextView[clickable=true][childCount=0] +2 [text="当前歌曲支持蝰蛇全景声"]',
        snapshotUrls: 'https://i.gkd.li/i/17177377',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: '.app.MediaActivity',
        matches: '@[text="退出页面"][visibleToUser=true] + View > [text="你的会员已过期"]',
        snapshotUrls: 'https://i.gkd.li/i/18070974',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@ImageView[clickable=true][visibleToUser=true] + RelativeLayout >2 [text*="豪华VIP已过期"]',
        snapshotUrls: 'https://i.gkd.li/i/13548005',
        exampleUrls: 'https://e.gkd.li/cab683ac-801d-4089-8b5d-548954761c08',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: '.app.MediaActivity',
        matches: 'WebView[text="开通会员"] >7 @TextView[clickable=true][childCount=0] +2 [text="当前歌曲支持蝰蛇全景声"]',
        snapshotUrls: 'https://i.gkd.li/i/17177377',
        exampleUrls: 'https://e.gkd.li/86e4a797-5366-4579-81ee-bc5354e95568',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: '.app.MediaActivity',
        matches: '@[clickable=true][childCount=0] < View <(1,2) View <(1,2) View < WebView < WebView < FrameLayout < FrameLayout < RelativeLayout < RelativeLayout < FrameLayout[!(id="android:id/content")] < FrameLayout < [parent=null]',
        snapshotUrls: ['https://i.gkd.li/i/18070974', 'https://i.gkd.li/i/22310624'],
        exampleUrls: 'https://e.gkd.li/f32ed6b7-e396-45a5-9849-f8a8ae99cb99',
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: 'RelativeLayout[childCount=2] > View + RelativeLayout[childCount=2] > @ImageView + RelativeLayout',
        snapshotUrls: 'https://i.gkd.li/i/13548005',
        exampleUrls: 'https://m.gkd.li/87047583/84c1379f-5eb1-4982-b27b-35e267594101',
        _uniqueKey: 6
      },
      ],
    },
{
      key: 3,
      name: '全屏广告-[看广告免费听歌]弹窗',
      desc: '点击关闭看广告免费听歌的弹窗',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.kugou.android.app.MediaActivity',
        matches: '[desc="看广告，免费听会员歌"] +2 [desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/14722104',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.kugou.android.app.MediaActivity',
        matches: '[desc="看广告，免费听会员歌"] +2 [desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/14722104',
        exampleUrls: 'https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-[开启音乐DJ]弹窗',
      desc: '勾选[今日不再提醒]并关闭音乐DJ弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[checked=false] + [text="今日不再提醒"]',
        snapshotUrls: 'https://i.gkd.li/i/14722457',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@ImageView - * > [text="今日不再提醒"]',
        snapshotUrls: 'https://i.gkd.li/i/14722457',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[checked=false] + [text="今日不再提醒"]',
        snapshotUrls: 'https://i.gkd.li/i/14722457',
        exampleUrls: 'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@ImageView - * > [text="今日不再提醒"]',
        snapshotUrls: 'https://i.gkd.li/i/14722457',
        exampleUrls: 'https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f',
        preKeys: [0],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 5,
      name: '局部广告-悬浮广告',
      desc: '关闭各界面的悬浮广告',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.kugou.android.app.MediaActivity',
        matches: 'ViewGroup > FrameLayout >2 FrameLayout[childCount=2] > FrameLayout > FrameLayout[childCount=2] > ImageView[index=1][clickable=true][childCount=0][width<80&&height<80]',
        snapshotUrls: ['https://i.gkd.li/i/17004903', 'https://i.gkd.li/i/18057265'],
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.kugou.android.app.MediaActivity',
        matches: 'ViewGroup > FrameLayout >2 FrameLayout[childCount=2] > FrameLayout > FrameLayout[childCount=2] > ImageView[index=1][clickable=true][childCount=0][width<80&&height<80]',
        snapshotUrls: ['https://i.gkd.li/i/17004903', 'https://i.gkd.li/i/18057265'],
        exampleUrls: 'https://e.gkd.li/2b240676-4dac-4375-b238-2d570962efd1',
        matchTime: 10000,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 6,
      name: '全屏广告-签到弹窗',
      desc: '关闭金币中心的签到弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: '.app.flexowebview.uploadvideo.ContributeWebActivity',
        matches: '@FrameLayout > WebView > WebView[text="金币中心"] > View[id="body"] > TextView[id="root"][childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/18071067',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.app.flexowebview.uploadvideo.ContributeWebActivity',
        matches: '@FrameLayout > WebView > WebView[text="金币中心"] > View[id="body"] > TextView[id="root"][childCount=0]',
        snapshotUrls: 'https://i.gkd.li/i/18071067',
        exampleUrls: 'https://e.gkd.li/f2a44161-d0a2-421d-a5e7-26fcf005daf2',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 7,
      name: '功能类-自动关闭速听模式',
      desc: '自动关闭播放界面的速听模式',
      enable: false,
      activityIds: '.app.MediaActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 1,
        matches: '@[desc="关闭"][visibleToUser=true] < RelativeLayout < RelativeLayout + FrameLayout >3 ViewGroup[desc="速听卡片"] >2 [text="喜欢"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18164732',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@FrameLayout[clickable=true][visibleToUser=true] < RelativeLayout - [desc="暂停"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18165065',
        preKeys: [1],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@[desc="关闭"][visibleToUser=true] < RelativeLayout < RelativeLayout + FrameLayout >3 ViewGroup[desc="速听卡片"] >2 [text="喜欢"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18164732',
        exampleUrls: 'https://e.gkd.li/e24dda6a-c5fa-4c93-9026-cda7a4d9e205',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@FrameLayout[clickable=true][visibleToUser=true] < RelativeLayout - [desc="暂停"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18165065',
        exampleUrls: 'https://e.gkd.li/ffb25ec5-35b0-47ff-9387-54c757c90f29',
        preKeys: [1],
        _uniqueKey: 4
      },
      ],
    },
  ],
});