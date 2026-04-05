import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
{
    key: 0,
    name: '开屏广告',
    desc: '点击跳过应用启动时的开屏广告',
    excludeActivityIds: [
      'com.tencent.mobileqq.activity.ChatActivity',
      'com.tencent.mobileqq.search.activity.UniteSearchActivity',
    ],
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    order: -10,
    rules: [
      {
          excludeMatches: '[vid="root"]',
          matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13093155',
              'https://i.gkd.li/i/13207731',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/13217807',
              'https://i.gkd.li/i/13856647',
              'https://i.gkd.li/i/13868177',
              'https://i.gkd.li/i/14341023',
              'https://i.gkd.li/i/15334565',
          ],
      },
      {
          excludeActivityIds: [
              '.activity.ChatActivity',
              '.search.activity.UniteSearchActivity',
          ],
          excludeMatches: '[vid="root"]',
          matches: 'TextView[text^="跳过"][text.length<=10][!(vid="title")]',
          snapshotUrls: [
              'https://i.gkd.li/i/13093155',
              'https://i.gkd.li/i/13207731',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/13217807',
              'https://i.gkd.li/i/13856647',
              'https://i.gkd.li/i/13868177',
              'https://i.gkd.li/i/14341023',
              'https://i.gkd.li/i/15334565',
          ],
      },
      {
          excludeMatches: '[vid="chat_item_content_layout"]',
          matches: 'TextView[text^="跳过"][text.length<=10][vid!="title"]',
      },
    ],
  },
{
    key: 1,
    name: '局部广告',
    desc: '关闭各页面局部广告，包括消息、聊天、联系人、好友动态等页面',
    enable: false,
    rules: [
      {
          key: 0,
          name: '消息页面顶部广告',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: 'ImageView[longClickable!=true][vid!="chat_item_head_icon"][desc=null&&text=null] <n *[left=0][vid!="root"][visibleToUser=true] >n TextView[clickable=false][text.length>0][!(text~="(?is).*([01]?[0-9]|2[0-3])[:：][0-5][0-9].*")][text!$="G"&&text!$="M"&&text!$="k"][visibleToUser=true] <<n * > [name$="ImageView"||name$="Button"][desc="关闭"||(desc=null&&text=null)][vid!="chat_item_head_icon"][childCount=0][visibleToUser=true][clickable=true][longClickable!=true][left>0]',
          excludeMatches: [
              '[id^="com.tencent.mobileqq.qzone"]',
              '[text="互动标识"]',
              '[text="群标签"]',
              '[text="小程序"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/13426912',
              'https://i.gkd.li/import/12706907',
              'https://i.gkd.li/import/13107298',
              'https://i.gkd.li/import/12793359',
              'https://i.gkd.li/import/12855048',
              'https://i.gkd.li/import/13228108',
              'https://i.gkd.li/import/12855441',
              'https://i.gkd.li/import/13188722',
              'https://i.gkd.li/import/13255493',
              'https://i.gkd.li/import/13843140',
              'https://i.gkd.li/import/13931212',
              'https://i.gkd.li/import/14178669',
              'https://i.gkd.li/import/14178667',
              'https://i.gkd.li/import/12892726',
              'https://i.gkd.li/import/12774870',
              'https://i.gkd.li/import/13207766',
              'https://i.gkd.li/import/13386518',
              'https://i.gkd.li/import/13476400',
              'https://i.gkd.li/import/14155603',
              'https://i.gkd.li/import/14217033',
              'https://i.gkd.li/i/13255493',
              'https://i.gkd.li/i/16323755',
              'https://i.gkd.li/i/17529150',
              'https://i.gkd.li/i/23837678',
              'https://i.gkd.li/i/24230528',
              'https://i.gkd.li/i/25235782',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/14414585',
              'https://i.gkd.li/i/15075866',
              'https://i.gkd.li/i/15782476',
              'https://i.gkd.li/i/15883390',
              'https://i.gkd.li/i/24989508',
          ],
      },
      {
          key: 1,
          name: '好友动态详情页广告',
          fastQuery: true,
          activityIds: [
              'com.qzone.reborn.base.QZoneTransparentShellActivity',
              'com.qzone.reborn.base.QZoneShellActivity',
          ],
          matches: '@[desc="关闭广告"][visibleToUser=true] <4 RelativeLayout <2 LinearLayout <2 LinearLayout < FrameLayout <n RecyclerView < FrameLayout - FrameLayout >2 [text="详情"]',
          exampleUrls: 'https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3',
          snapshotUrls: [
              'https://i.gkd.li/i/17009847',
              'https://i.gkd.li/i/17815694',
              'https://i.gkd.li/i/17827969',
          ],
      },
      {
          key: 2,
          name: '推荐你试试这些玩法',
          activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          fastQuery: true,
          matches: '@[desc="关闭"] - [text="推荐你试试这些玩法"]',
          exampleUrls: 'https://e.gkd.li/6cf71a22-0e21-4877-86a7-69d84353ad5a',
          snapshotUrls: 'https://i.gkd.li/i/18236745',
      },
      {
          key: 3,
          name: '联系人页面顶部可能认识的人推荐',
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] -2 [text*="发现可能认识的人"]',
          snapshotUrls: 'https://i.gkd.li/i/18237415',
      },
      {
          key: 4,
          name: '聊天页面关键词广告',
          fastQuery: true,
          activityIds: [
              'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
              'com.tencent.mobileqq.activity.ChatActivity',
              'com.tencent.mobileqq.activity.SplashActivity',
          ],
          matches: 'FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text="跳过" || text="关闭"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/14183188',
              'https://i.gkd.li/i/16549500',
              'https://i.gkd.li/i/16555184',
          ],
      },
      {
          key: 0,
          name: '好友动态详情页广告',
          fastQuery: true,
          activityIds: [
              'com.qzone.reborn.base.QZoneTransparentShellActivity',
              'com.qzone.reborn.base.QZoneShellActivity',
          ],
          matches: '@[desc="关闭广告"][visibleToUser=true] <4 RelativeLayout <2 LinearLayout <2 LinearLayout < FrameLayout <n RecyclerView < FrameLayout - FrameLayout >2 [text="详情"]',
          exampleUrls: 'https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3',
          snapshotUrls: [
              'https://i.gkd.li/i/17009847',
              'https://i.gkd.li/i/17815694',
              'https://i.gkd.li/i/17827969',
          ],
      },
      {
          key: 1,
          name: '推荐你试试这些玩法',
          activityIds: 'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          fastQuery: true,
          matches: '@[desc="关闭"] - [text="推荐你试试这些玩法"]',
          exampleUrls: 'https://e.gkd.li/6cf71a22-0e21-4877-86a7-69d84353ad5a',
          snapshotUrls: 'https://i.gkd.li/i/18236745',
      },
      {
          key: 2,
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: '@ImageView[desc="关闭"][clickable=true][childCount=0] -2 [text$="试用超级会员"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23837678',
      },
      {
          key: 3,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '@ImageView[desc="关闭"][clickable=true] <n RelativeLayout - RelativeLayout >3 ImageView[desc="快捷入口"]',
          snapshotUrls: 'https://i.gkd.li/i/24230528',
      },
      {
          key: 4,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '@ImageView[width<100 && height<100][clickable=true] - TextView[text!=null] <n * + * >3 ImageView[desc="快捷入口"]',
          snapshotUrls: 'https://i.gkd.li/i/25235782',
      },
      {
          key: 0,
          matches: 'TextView[text!=null] < LinearLayout + ImageView[desc="关闭"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12892726',
              'https://i.gkd.li/i/12774870',
              'https://i.gkd.li/i/13207766',
              'https://i.gkd.li/i/13386518',
          ],
      },
      {
          key: 1,
          name: '消息页面-顶部惊喜礼包',
          fastQuery: true,
          matches: '@ImageView[childCount=0][visibleToUser=true] - FrameLayout - [text*="惊喜礼包"]',
          snapshotUrls: 'https://i.gkd.li/i/13426912',
      },
      {
          key: 2,
          matches: 'ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13476400',
      },
      {
          key: 3,
          name: '稀有龙鹅卡掉落/瓜分现金',
          matches: 'RelativeLayout[childCount=2] > ImageView + RelativeLayout[childCount=2] > ImageView',
          snapshotUrls: [
              'https://i.gkd.li/i/14155603',
              'https://i.gkd.li/i/14217033',
          ],
      },
    ],
  },
{
    key: 2,
    name: '分段广告-好友动态广告卡片',
    desc: '关闭好友动态中的广告卡片',
    enable: false,
    rules: [
      {
          key: 0,
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: 'View[desc="广告"] + ImageView[clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/12847842',
              'https://i.gkd.li/i/13787345',
              'https://i.gkd.li/i/24381585',
          ],
      },
      {
          key: 1,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '[desc="广告 展开 按钮"] > [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14138572',
      },
      {
          key: 3,
          fastQuery: true,
          activityIds: [
              'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
              '.guild.base.QPublicFragmentActivityForMainWebActivity',
          ],
          matches: '@[clickable=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/21947672',
              'https://i.gkd.li/i/24404962',
          ],
      },
      {
          preKeys: [
              0,
              1,
              3,
          ],
          fastQuery: true,
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
              'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
          ],
          anyMatches: [
              '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
              '@[clickable=true] >(1,2) ImageView + [text="关闭此条广告"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13761147',
              'https://i.gkd.li/i/13849730',
              'https://i.gkd.li/i/12840889',
              'https://i.gkd.li/i/13831867',
              'https://i.gkd.li/i/14138571',
              'https://i.gkd.li/i/21947698',
              'https://i.gkd.li/i/24381598',
              'https://i.gkd.li/i/24406932',
          ],
      },
      {
          key: 0,
          activityIds: [
              'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
              '.guild.base.QPublicFragmentActivityForMainWebActivity',
          ],
          matches: '@[clickable=true] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/21947672',
              'https://i.gkd.li/i/24404962',
          ],
      },
      {
          key: 1,
          activityIds: '.activity.SplashActivity',
          matches: '@[desc="更多"][clickable=true] - [desc="广告"][visibleToUser=true] - LinearLayout > [text="今天"]',
          snapshotUrls: 'https://i.gkd.li/i/24381585',
      },
      {
          preKeys: [
              0,
              1,
          ],
          activityIds: [
              'com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity',
              '.activity.SplashActivity',
              '.guild.base.QPublicFragmentActivityForMainWebActivity',
          ],
          matches: '@[clickable=true] >(1,2) [text="关闭此条广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/21947698',
              'https://i.gkd.li/i/24381598',
              'https://i.gkd.li/i/24406932',
          ],
      },
      {
          key: 0,
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: 'View[desc="广告"] + ImageView[clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/12847842',
              'https://i.gkd.li/i/13787345',
          ],
      },
      {
          key: 4,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          fastQuery: true,
          matches: 'ImageView[clickable=true] < * -2 * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14138557',
      },
      {
          preKeys: [
              0,
              4,
          ],
          key: 1,
          activityIds: [
              'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
              'com.tencent.mobileqq.activity.SplashActivity',
          ],
          fastQuery: true,
          matches: '@* > ImageView + [text="关闭此条广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12840889',
              'https://i.gkd.li/i/13831867',
              'https://i.gkd.li/i/14138556',
          ],
      },
      {
          preKeys: 0,
          key: 2,
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          fastQuery: true,
          matches: '@[clickable=true] > * > ImageView + [text="隐藏此条动态"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13761147',
              'https://i.gkd.li/i/13849730',
          ],
      },
      {
          key: 3,
          fastQuery: true,
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
          ],
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12749584',
              'https://i.gkd.li/i/13627967',
          ],
      },
      {
          key: 5,
          fastQuery: true,
          position: {
              left: 'width * 0.9534',
              top: 'width * 0.0805',
          },
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: 'LinearLayout[childCount=4] > LinearLayout > FrameLayout > FrameLayout > @View[visibleToUser=true] <<n [vid="root"]',
          exampleUrls: 'https://m.gkd.li/57941037/940f4965-0058-4101-ab62-20d131e9c1d1',
          snapshotUrls: 'https://i.gkd.li/i/14732983',
      },
    ],
  },
{
    key: 3,
    name: '全屏广告-弹窗广告',
    desc: '关闭各种场景下的全屏弹窗广告，包括频道页面、钱包页面、黄钻页面等',
    enable: false,
    rules: [
      {
          key: 0,
          name: '频道页面-广告',
          fastQuery: true,
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
          ],
          matches: 'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/import/13206663',
              'https://i.gkd.li/import/12642081',
          ],
      },
      {
          key: 1,
          name: '钱包页面-广告',
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '[desc="弹窗推荐活动"] + [desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14822290',
      },
      {
          key: 2,
          name: '黄钻页面-广告',
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: 'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View[childCount<=1] > Button[text.length=0&&focusable=true]',
          snapshotUrls: [
              'https://i.gkd.li/import/12914978',
              'https://i.gkd.li/import/12914886',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/import/14229202',
              'https://i.gkd.li/i/22869121',
          ],
      },
      {
          key: 3,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'activity',
          name: '推广游戏广告弹窗',
          activityIds: [
              'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
              'cooperation.vip.ad.UserLeadingActivity',
          ],
          anyMatches: [
              'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
              'Button[text.length>0][visibleToUser=true] < * -n * > [text*="欢迎回来"][visibleToUser=true] +n ImageView[visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/13797876',
              'https://i.gkd.li/i/15981784',
              'https://i.gkd.li/i/16922256',
          ],
      },
      {
          key: 4,
          name: '小Q提醒',
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches: 'ViewGroup[childCount=6] > @ViewGroup[index=2][clickable=true][visibleToUser=true] <<n [id="android:id/content"]',
          snapshotUrls: [
              'https://i.gkd.li/import/14207286',
              'https://i.gkd.li/i/15136939',
          ],
      },
      {
          key: 5,
          name: '资料卡个性装扮弹窗',
          activityIds: '.activity.VisitorsActivity',
          matches: '[desc^="资料卡可展示"] + [desc="关闭浮层"]',
          snapshotUrls: [
              'https://i.gkd.li/i/18348068',
          ],
      },
      {
          key: 6,
          name: '关闭开启通讯录建议弹窗页面',
          fastQuery: true,
          activityIds: '.activity.phone.PhoneMatchActivity',
          matches: [
              '[text="开启通讯录"]',
              '[text="关闭"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18266370',
      },
      {
          key: 0,
          fastQuery: true,
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog',
          ],
          matches: 'ImageView[id="com.tencent.mobileqq:id/close"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/13206663',
              'https://i.gkd.li/i/12642081',
          ],
      },
      {
          key: 2,
          name: '钱包页面弹窗广告',
          activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
          matches: '[desc="弹窗推荐活动"] + [desc="关闭"]',
          exampleUrls: 'https://m.gkd.li/57941037/11e8f456-4c88-431a-ad58-f626bee61df9',
          snapshotUrls: 'https://i.gkd.li/i/14822290',
      },
      {
          key: 3,
          name: '黄钻页面弹窗广告',
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: 'TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/12914978',
              'https://i.gkd.li/i/12914886',
          ],
      },
      {
          key: 4,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
          matches: 'ViewGroup[childCount=6] > @ViewGroup[index=2][clickable=true][visibleToUser=true] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/15136939',
      },
    ],
  },
{
    key: 4,
    name: '更新提示',
    desc: '关闭应用更新提示弹窗',
    enable: false,
    matchTime: 10000,
    actionMaximum: 1,
    actionMaximumKey: 0,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: '@[desc="关闭"] - * > [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13386719',
      },
      {
          key: 1,
          matches: '@[text="稍后处理"] +2 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14724108',
      },
      {
          key: 3,
          matches: '@[desc="关闭"] - * > [text="QQ测试版"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13526551',
              'https://i.gkd.li/i/22455760',
          ],
      },
      { key: 0, matches: 'LinearLayout > TextView[text*="SVIP"||text*="超级会员"] + FrameLayout[childCount<=2] + [name$="ImageView"||name$="Button"][id!=null][clickable=true]' },
    ],
  },
{
    key: 5,
    name: '分段广告-动态页[好友热播/为你推荐]',
    desc: '点击并关闭好友热播和推荐内容',
    enable: false,
    activityIds: [
      'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
      'com.tencent.mobileqq.activity.SplashActivity',
    ],
    fastQuery: true,
    rules: [
      {
          key: 0,
          name: '点击[好友热播]卡片右上角菜单按钮',
          matches: '@[clickable=true][visibleToUser=true][childCount=0] - [text="好友热播" || text="为你推荐"]',
          snapshotUrls: [
              'https://i.gkd.li/import/12721427',
              'https://i.gkd.li/import/12894359',
              'https://i.gkd.li/i/14822579',
              'https://i.gkd.li/i/12929620',
              'https://i.gkd.li/i/13387606',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          name: '点击[减少好友热播/为你推荐]',
          matches: '@[clickable=true] >2 [text="减少好友热播" || text="减少此类推荐"]',
          snapshotUrls: [
              'https://i.gkd.li/import/12721433',
              'https://i.gkd.li/import/12894375',
              'https://i.gkd.li/i/14822576',
              'https://i.gkd.li/i/12929619',
              'https://i.gkd.li/i/13387605',
          ],
      },
      {
          key: 0,
          name: '点击 [好友热播] 卡片右上角菜单按钮',
          matches: '@Button[clickable=true] - [text="好友热播"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12721427',
              'https://i.gkd.li/i/14822579',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          name: '点击[减少好友热播]',
          matches: '@[clickable=true] >2 [text="减少好友热播"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12721433',
              'https://i.gkd.li/i/14822576',
          ],
      },
    ],
  },
{
    key: 6,
    name: '通知提示',
    desc: '关闭消息推送开启提示',
    enable: false,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: '@[desc*="关闭"] - * > [text="开启消息推送"]',
          snapshotUrls: 'https://i.gkd.li/i/15051308',
      },
    ],
  },
{
    key: 7,
    name: '功能类-自动授权',
    desc: '自动点击登录。包括 PC 登录确认、QQ 互联登录确认。',
    enable: false,
    fastQuery: true,
    rules: [
      {
          key: 1,
          name: 'PC 登录确认',
          activityIds: [
              'com.tencent.mobileqq.activity.SplashActivity',
              'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
              'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
              'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
              'com.tencent.biz.pubaccount.api.impl.PublicAccountBrowserImpl',
          ],
          matches: [
              '[text="登录确认" || text="一键验证"][visibleToUser=true]',
              'Button[text*="登录" || text="确认" || text^="允许登录"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/13623520',
              'https://i.gkd.li/import/12789287',
              'https://i.gkd.li/import/13063027',
              'https://i.gkd.li/import/13166314',
              'https://i.gkd.li/i/15884502',
              'https://i.gkd.li/i/15884520',
              'https://i.gkd.li/i/20737651',
              'https://i.gkd.li/i/22319172',
              'https://i.gkd.li/i/20737721',
          ],
      },
      {
          key: 2,
          name: 'QQ 互联登录确认',
          activityIds: [
              'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
              'com.tencent.open.agent.QuickLoginAuthorityActivity',
          ],
          matches: 'Button[text="同意"][clickable=true][visibleToUser=true]',
          excludeMatches: [
              '[text="群通知"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/14752498',
              'https://i.gkd.li/i/20737675',
              'https://i.gkd.li/i/22631619',
          ],
      },
      {
          preKeys: [
              1,
              2,
          ],
          key: 3,
          activityIds: [
              'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
              'com.tencent.biz.pubaccount.api.impl.PublicAccountBrowserImpl',
          ],
          name: '点击确认',
          matches: 'Button[text="确认"||text="我知道了"]',
          snapshotUrls: [
              'https://i.gkd.li/i/14752519',
              'https://i.gkd.li/i/22319176',
              'https://i.gkd.li/i/20737673',
              'https://i.gkd.li/i/22870545',
          ],
      },
      {
          key: 1,
          fastQuery: true,
          matchRoot: true,
          actionMaximum: 3,
          actionCd: 500,
          activityIds: [
              'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
              'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
              'com.tencent.open.agent.QuickLoginAuthorityActivity',
          ],
          matches: [
              '[text="登录确认" || text$="申请使用"][visibleToUser=true]',
              'Button[text="登录" || text="同意" || text="确认"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/20737721',
              'https://i.gkd.li/i/20737651',
              'https://i.gkd.li/i/20737675',
              'https://i.gkd.li/i/20737673',
              'https://i.gkd.li/i/22631619',
          ],
      },
      {
          key: 1,
          name: '点击登录',
          activityIds: [
              'com.tencent.biz.qrcode.activity.QRLoginAuthActivity',
              'com.tencent.mobileqq.activity.DevlockQuickLoginActivity',
              'com.tencent.mobileqq.activity.DevLockQuickVerifyActivity',
          ],
          matches: 'Button[text*="登录"][clickable=true][visibleToUser=true][text.length<10]',
          snapshotUrls: [
              'https://i.gkd.li/i/13623520',
              'https://i.gkd.li/i/12789287',
              'https://i.gkd.li/i/13063027',
              'https://i.gkd.li/i/13166314',
          ],
      },
      {
          key: 2,
          name: '点击同意',
          activityIds: 'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="同意"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14752498',
      },
      {
          preKeys: [
              2,
          ],
          key: 3,
          name: '点击确认',
          activityIds: 'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: 'Button[text="确认"]',
          snapshotUrls: 'https://i.gkd.li/i/14752519',
      },
    ],
  },
{
    key: 8,
    name: '功能类-消息页面顶部-无法接收新消息通知',
    desc: '消息界面-搜索框和消息记录之间的通知卡片,点击关闭右侧x',
    enable: false,
    activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
    snapshotUrls: 'https://i.gkd.li/i/12855441',
    rules: [
      { key: 0, matches: 'RelativeLayout > [text^="当前无法接收"] + ImageView' },
    ],
  },
{
    key: 9,
    name: '局部广告-浮窗广告',
    desc: '关闭等级规则页和频道页的浮窗广告',
    enable: false,
    activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
    rules: [
      {
          key: 0,
          name: '我的等级-浮窗广告',
          matches: 'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
          snapshotUrls: 'https://i.gkd.li/import/12914734',
      },
      {
          key: 1,
          name: '频道-右侧悬浮广告',
          matches: 'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12708844',
      },
      {
          key: 0,
          matches: 'TextView[text="QQ等级规则"] + View > TextView[id=null&&text.length=0]',
          snapshotUrls: 'https://i.gkd.li/i/12914734',
      },
      {
          key: 1,
          name: '右侧悬浮广告',
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: 'FrameLayout[desc="发表帖子"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12708844',
      },
    ],
  },
{
    key: 10,
    name: '功能类-自动勾选原图',
    desc: '发送图片时自动勾选原图',
    enable: false,
    activityIds: [
      'com.tencent.mobileqq.activity.SplashActivity',
      'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
      'com.tencent.mobileqq.activity.photo.album.NewPhotoListActivity',
    ],
    actionMaximum: 1,
    fastQuery: true,
    snapshotUrls: [
      'https://i.gkd.li/import/12705556',
      'https://i.gkd.li/import/12705559',
      'https://i.gkd.li/import/13295142',
      'https://i.gkd.li/import/13476247',
    ],
    rules: [
      { key: 0, matches: '@CheckBox[checked=false][visibleToUser=true] + [text="原图"]' },
      {
          fastQuery: true,
          activityIds: [
              '.activity.SplashActivity',
              'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
              '.activity.photo.album.NewPhotoListActivity',
          ],
          matches: '@CheckBox[checked=false] + [text="原图"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12705556',
              'https://i.gkd.li/i/12705559',
              'https://i.gkd.li/i/13295142',
              'https://i.gkd.li/i/13476247',
          ],
      },
      { key: 0, matches: '@CheckBox[checked=false] + [text="原图"]' },
    ],
  },
{
    key: 11,
    name: '功能类-自动查看原图',
    desc: '浏览图片时自动切换至原图模式',
    enable: false,
    activityIds: [
      'com.tencent.richframework.gallery.QQGalleryActivity',
      'com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity',
    ],
    fastQuery: true,
    rules: [
      {
          key: 0,
          name: '点击查看原图',
          matches: '[text^="查看原图"][checked=false][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/import/12840632',
              'https://i.gkd.li/import/12840633',
              'https://i.gkd.li/i/14757735',
              'https://i.gkd.li/i/15024319',
              'https://i.gkd.li/i/24489364',
          ],
      },
      {
          key: 1,
          name: '关闭流量提示弹窗',
          matches: [
              '[text="流量提醒"]',
              '[text="继续"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/18344117',
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
          anyMatches: [
              '[text^="查看原图"][clickable=true][visibleToUser=true]',
              '@[clickable=true] > [text^="查看原图"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/14757735',
              'https://i.gkd.li/i/24489364',
          ],
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.richframework.gallery.QQGalleryActivity',
          matches: '[text^="查看原图"]',
          snapshotUrls: 'https://i.gkd.li/i/14757735',
      },
    ],
  },
{
    key: 12,
    name: '分段广告-QQ小世界评论区广告',
    desc: '点击广告-弹出原因框-关闭此条广告',
    enable: false,
    activityIds: [
      'com.tencent.mobileqq.activity.SplashActivity',
      'com.tencent.biz.qqcircle.activity.QCircleFolderActivity',
    ],
    rules: [
      {
          key: 0,
          matches: 'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12847819',
      },
      {
          preKeys: 0,
          matches: '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12847821',
      },
      {
          key: 0,
          matches: 'RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text="广告"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12847819',
      },
      {
          preKeys: 0,
          matches: '@LinearLayout[clickable=true] > TextView[text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12847821',
      },
    ],
  },
{
    key: 13,
    name: '全屏广告-QQ小程序开屏广告',
    desc: '点击跳过QQ小程序的开屏广告',
    enable: false,
    activityIds: [
      'com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI',
      'com.tencent.mobileqq.activity.miniaio.MiniChatActivity',
    ],
    actionMaximum: 1,
    fastQuery: true,
    rules: [
      {
          matches: [
              '[text="广告"][visibleToUser=true]',
              '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/12877215',
              'https://i.gkd.li/import/12919195',
              'https://i.gkd.li/i/15130235',
          ],
      },
      {
          activityIds: [
              '.mini.appbrand.ui.AppBrandUI',
              '.activity.miniaio.MiniChatActivity',
          ],
          matches: [
              '[text="广告"][visibleToUser=true]',
              '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/12877215',
              'https://i.gkd.li/i/12919195',
              'https://i.gkd.li/i/15130235',
          ],
      },
      {
          matches: [
              '[text="广告"][visibleToUser=true]',
              '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/12877215',
              'https://i.gkd.li/i/12919195',
              'https://i.gkd.li/i/15130235',
          ],
      },
    ],
  },
{
    key: 15,
    name: '分段广告-好友动态-为你推荐',
    enable: false,
    activityIds: [
      'com.tencent.mobileqq.activity.SplashActivity',
      'com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity',
    ],
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: '@ImageView[clickable=true] - [text="为你推荐"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12929620',
              'https://i.gkd.li/i/13387606',
          ],
      },
      {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout[id!=null][clickable=true] > LinearLayout > [text="减少此类推荐"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12929619',
              'https://i.gkd.li/i/13387605',
          ],
      },
    ],
  },
{
    key: 17,
    name: '更新提示',
    matchTime: 10000,
    actionMaximum: 1,
    actionMaximumKey: 0,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          key: 0,
          activityIds: [
              '.activity.SplashActivity',
              '.upgrade.ui.dialog.UpgradeActivity',
              '.upgrade.activity.UpgradeActivity',
          ],
          matches: '@[desc="关闭"] <2 * >2 Button[text^="立即" || text="马上升级"][text.length=4]',
          snapshotUrls: [
              'https://i.gkd.li/i/13386719',
              'https://i.gkd.li/i/13526551',
              'https://i.gkd.li/i/22455760',
              'https://i.gkd.li/i/23393647',
          ],
      },
      {
          key: 1,
          activityIds: '.upgrade.activity.UpgradeActivity',
          matches: [
              '[text="立即升级"]',
              '[text="稍后处理"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14724108',
      },
      {
          key: 0,
          matches: '@[desc="关闭"] - * > [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13386719',
      },
      {
          key: 1,
          matches: '@[text="稍后处理"] +2 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/14724108',
      },
    ],
  },
{
    key: 18,
    name: '更新提示-消息页面-顶部',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          key: 0,
          activityIds: '.activity.SplashActivity',
          matches: '@ImageView[clickable=true][text=null][visibleToUser=true] - [text*="版本更新" || text="点击下载" || text="立即安装" || text="点击更新"][text.length<15]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255493',
              'https://i.gkd.li/i/13843140',
              'https://i.gkd.li/i/14138340',
              'https://i.gkd.li/i/13931212',
              'https://i.gkd.li/i/16323755',
              'https://i.gkd.li/i/17529150',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/17920550',
      },
      {
          key: 0,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: '@ImageView[clickable=true] <n * > [text*="版本更新"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255493',
              'https://i.gkd.li/i/13843140',
              'https://i.gkd.li/i/14138340',
              'https://i.gkd.li/i/13931212',
          ],
      },
    ],
  },
{
    key: 19,
    name: '更新提示-内测邀请弹窗',
    enable: false,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    order: -9,
    rules: [
      {
          key: 0,
          matches: '@[desc="关闭"] - * > [text="QQ测试版"]',
          snapshotUrls: 'https://i.gkd.li/i/13526551',
      },
    ],
  },
{
    key: 20,
    name: '分段广告-钱包页卡片广告',
    desc: '点击关闭钱包页面的卡片广告',
    enable: false,
    activityIds: [
      'com.tencent.mobileqq.activity.SplashActivity',
      'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
    ],
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: [
              'https://i.gkd.li/import/13695087',
          ],
      },
      {
          key: 1,
          matches: '@View[visibleToUser=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/14231489',
      },
      {
          preKeys: [
              0,
              1,
          ],
          key: 2,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13699701',
      },
      {
          key: 0,
          matches: 'ViewGroup[childCount=6] > [text="广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13695087',
          ],
      },
      {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="关闭此条广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13699701',
          ],
      },
    ],
  },
{
    key: 21,
    name: '全屏广告-广告弹窗',
    enable: false,
    activityIds: 'com.tencent.mobileqq.activity.QPublicTransFragmentActivity',
    rules: [
      {
          key: 0,
          name: '元梦之星广告弹窗',
          matches: 'ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13797876',
      },
      {
          key: 1,
          name: '现金瓜分弹窗',
          matches: 'RelativeLayout >5 ViewGroup[childCount=6] > ViewGroup[index=2][clickable=true]',
          exampleUrls: 'https://m.gkd.li/57941037/a9fe74db-07b4-47e6-beed-80983f61d2e3',
          snapshotUrls: 'https://i.gkd.li/i/14207286',
      },
    ],
  },
{
    key: 22,
    name: '分段广告-天气页卡片广告',
    desc: '点击关闭-点击关闭此条广告',
    enable: false,
    rules: [
      {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '[id="com.tencent.mobileqq:id/nca"]',
          snapshotUrls: 'https://i.gkd.li/i/14019384',
      },
      {
          preKeys: 0,
          key: 1,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14019401',
      },
      {
          key: 2,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
              'ViewGroup[desc="返回"]',
              'ViewGroup[desc="首页"]',
              'ViewGroup[desc="分享"]',
              'ViewGroup[childCount=6] > ViewGroup[childCount=2][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14549503',
      },
      {
          key: 3,
          preKeys: 2,
          activityIds: 'com.tencent.mobileqq.activity.QPublicFragmentActivity',
          matches: 'View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/14549504',
      },
    ],
  },
{
    key: 23,
    name: '分段广告-天气页卡片广告',
    desc: '点击关闭-点击关闭此条广告',
    enable: false,
    activityIds: [
      'com.tencent.mobileqq.activity.QPublicFragmentActivity',
      'com.tencent.mobileqq.activity.QQBrowserActivity',
    ],
    rules: [
      {
          key: 0,
          matches: [
              '[desc="返回"]',
              '[desc="首页"]',
              '[desc="分享"]',
              'RecyclerView > *[childCount=1] >3 * >n @*[childCount=2][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/14549503',
              'https://i.gkd.li/i/14019384',
          ],
      },
      {
          key: 1,
          preKeys: 0,
          fastQuery: true,
          matches: '@LinearLayout[childCount=3] > [text="关闭此条广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14019401',
      },
      {
          key: 2,
          preKeys: 0,
          matches: 'View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]',
          snapshotUrls: 'https://i.gkd.li/i/14549504',
      },
      {
          key: 0,
          name: '迷你窝弹窗',
          fastQuery: true,
          action: 'back',
          activityIds: 'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          matches: '[text="开启迷你窝"]',
          exampleUrls: 'https://m.gkd.li/57941037/882ab889-a145-4951-9a44-1dc192490c79',
          snapshotUrls: 'https://i.gkd.li/i/14188980',
      },
      {
          key: 1,
          name: '个性装扮弹窗',
          activityIds: 'cooperation.vip.ad.UserLeadingActivity',
          matches: '[desc="关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15137056',
      },
    ],
  },
{
    key: 24,
    name: '功能类-自动领取群聊红包',
    desc: '领取群聊中的普通拼手气红包,不包括自己发的红包、专属红包、口令红包和私聊红包',
    enable: false,
    rules: [
      {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
          matches: 'ImageView[childCount=0] <<(1,2) RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^="已")] + TextView[text="拼手气红包"]',
          exampleUrls: 'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e',
          snapshotUrls: [
              'https://i.gkd.li/i/14221309',
              'https://i.gkd.li/i/18725007',
              'https://i.gkd.li/i/24551887',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/18574530',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          activityIds: [
              'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              'com.tencent.biz.TenpayActivity',
          ],
          anyMatches: [
              '@[desc="关闭"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^="来晚一步"][visibleToUser=true]',
              '[desc="拆红包"][visibleToUser=true]',
          ],
          exampleUrls: 'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f',
          snapshotUrls: [
              'https://i.gkd.li/i/14221242',
              'https://i.gkd.li/i/18724880',
              'https://i.gkd.li/i/24551748',
          ],
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          fastQuery: true,
          activityIds: [
              'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              'com.tencent.biz.TenpayActivity',
          ],
          matches: '@[desc="返回"] +n [text="红包记录"]',
          exampleUrls: 'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba',
          snapshotUrls: [
              'https://i.gkd.li/i/14221279',
              'https://i.gkd.li/i/24551886',
          ],
      },
      {
          key: 1,
          name: '关键词广告',
          fastQuery: true,
          activityIds: [
              '.profilecard.activity.FriendProfileCardActivity',
              '.activity.ChatActivity',
              '.activity.SplashActivity',
          ],
          matches: 'FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text="跳过" || text="关闭"][clickable=true]',
          exampleUrls: 'https://m.gkd.li/57941037/4cf5bc02-d2c3-4ca4-833e-522a194e3131',
          snapshotUrls: [
              'https://i.gkd.li/i/14183188',
              'https://i.gkd.li/i/16549500',
              'https://i.gkd.li/i/16555184',
          ],
      },
      {
          key: 0,
          excludeMatches: [
              '[text*="正在语音通话"]',
              '[text*="正在一起听歌"]',
          ],
          matches: 'FrameLayout[childCount=2] >4 FrameLayout[childCount=2] > FrameLayout[index=1] > RelativeLayout[childCount=4] > TextView[index=1] +2 ImageView',
          exampleUrls: 'https://m.gkd.li/57941037/3bf709fc-eefc-4d66-9a00-475738934cd7',
          snapshotUrls: [
              'https://i.gkd.li/i/14178667',
              'https://i.gkd.li/i/14193973',
              'https://i.gkd.li/i/14734790',
          ],
      },
    ],
  },
{
    key: 25,
    name: '功能类-申请入群后自动点击右上角关闭',
    enable: false,
    activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
    actionMaximum: 1,
    fastQuery: true,
    rules: [
      {
          matches: [
              'TextView[text="入群申请中"][visibleToUser=true]',
              'TextView[text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/14235163',
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.TeamWorkDocEditBrowserActivity',
          matches: '@TextView[clickable=true] + * > [text^="使用 APP"] <<n [vid="webview"]',
          exampleUrls: 'https://m.gkd.li/57941037/6efc2dfd-79f3-43b5-bf20-f59a88295ddb',
          snapshotUrls: 'https://i.gkd.li/i/14188983',
      },
    ],
  },
{
    key: 26,
    name: '全屏广告-个人主页广告',
    desc: '点击关闭',
    enable: false,
    rules: [
      {
          key: 0,
          name: '迷你窝弹窗',
          fastQuery: true,
          action: 'back',
          activityIds: 'com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity',
          matches: '[text="开启迷你窝"]',
          snapshotUrls: 'https://i.gkd.li/i/14188980',
      },
      {
          key: 1,
          name: '个性装扮弹窗',
          activityIds: 'cooperation.vip.ad.UserLeadingActivity',
          matches: [
              '[desc="关闭浮层"]',
              '[desc="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15137056',
          excludeSnapshotUrls: 'https://i.gkd.li/i/21792204',
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.mobileqq.activity.QQBrowserActivity',
          matches: [
              'TextView[text="入群申请中"][visibleToUser=true]',
              'TextView[text="关闭"][visibleToUser=true]',
          ],
          exampleUrls: 'https://m.gkd.li/57941037/df526685-8a68-48cd-8328-0292079ff030',
          snapshotUrls: 'https://i.gkd.li/i/14235163',
      },
    ],
  },
{
    key: 27,
    name: '功能类-自动领取群聊红包',
    desc: '自己发的红包、专属红包、口令红包、私聊红包不领',
    rules: [
      {
          key: 0,
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: 'ImageView[childCount=0] <<(1,2) RelativeLayout < FrameLayout +2 LinearLayout >3 @ViewGroup[clickable=true][!(getChild(childCount.minus(1)).text^="已")] + TextView[text="拼手气红包"]',
          exampleUrls: 'https://m.gkd.li/57941037/7a933a7f-dc5a-4eb7-8a6f-fe3cc4e8fb5e',
          snapshotUrls: [
              'https://i.gkd.li/i/14221309',
              'https://i.gkd.li/i/18574530',
              'https://i.gkd.li/i/18725007',
              'https://i.gkd.li/i/24551887',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          fastQuery: true,
          activityIds: [
              'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              'com.tencent.biz.TenpayActivity',
          ],
          anyMatches: [
              '@[desc="关闭"][clickable=true] < RelativeLayout -2 ViewGroup >4 [text^="来晚一步"][visibleToUser=true]',
              '[desc="拆红包"][visibleToUser=true]',
          ],
          exampleUrls: 'https://m.gkd.li/57941037/61006833-9806-45b2-b3a1-55b9b248958f',
          snapshotUrls: [
              'https://i.gkd.li/i/14221242',
              'https://i.gkd.li/i/18724880',
              'https://i.gkd.li/i/24551748',
          ],
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          fastQuery: true,
          activityIds: [
              'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
              'com.tencent.biz.TenpayActivity',
          ],
          matches: '@[desc="返回"] +n [text="红包记录"]',
          exampleUrls: 'https://m.gkd.li/57941037/b90e6a69-ac57-41a5-bd2c-c500b92a58ba',
          snapshotUrls: [
              'https://i.gkd.li/i/14221279',
              'https://i.gkd.li/i/24551886',
          ],
      },
    ],
  },
{
    key: 28,
    name: '功能类-授权登录时关闭获取QQ好友关系',
    desc: '自动点击关闭获取QQ好友关系',
    enable: false,
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: '@CompoundButton[checked=true] - RelativeLayout > [text="你的QQ好友关系"]',
          snapshotUrls: 'https://i.gkd.li/i/16929347',
      },
    ],
  },
{
    key: 29,
    name: '功能类-申请入群后自动点击右上角关闭',
    actionMaximum: 1,
    rules: [
      {
          fastQuery: true,
          activityIds: '.activity.QQBrowserActivity',
          matches: [
              'TextView[text="入群申请中"][visibleToUser=true]',
              'TextView[text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/14235163',
      },
    ],
  },
{
    key: 31,
    name: '功能类-授权登录时关闭获取QQ好友关系',
    rules: [
      {
          fastQuery: true,
          activityIds: 'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches: '@CompoundButton[checked=true] - RelativeLayout > [text="你的QQ好友关系"]',
          exampleUrls: 'https://e.gkd.li/4d69a243-6a57-47ca-bc25-0a5353d80179',
          snapshotUrls: 'https://i.gkd.li/i/16929347',
      },
    ],
  },
{
    key: 32,
    name: '其他-联系人页面-顶部可能认识的人推荐',
    desc: '点击关闭',
    rules: [
      {
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: '@ImageView[childCount=0][clickable=true][visibleToUser=true] -2 [text="开启推荐，发现可能认识的人。"]',
          exampleUrls: 'https://e.gkd.li/7922ab73-cc99-4559-b18c-5ab54dd9633a',
          snapshotUrls: 'https://i.gkd.li/i/18237415',
      },
    ],
  },
{
    key: 33,
    name: '功能类-自动解锁 Windows QQ',
    matchTime: 10000,
    actionMaximum: 1,
    fastQuery: true,
    rules: [
      {
          activityIds: 'com.tencent.biz.qrcode.activity.UnlockPCQuickVerifyActivity',
          matches: '[text="解锁"]',
          snapshotUrls: 'https://i.gkd.li/i/15360265',
      },
    ],
  },
{
    key: 34,
    name: '功能类-关闭体验模式提醒',
    desc: '点击[我知道了]',
    rules: [
      {
          fastQuery: true,
          activityIds: '.activity.QPublicFragmentActivity',
          matches: [
              '[text^="当前处于"][text*="体验模式"][visibleToUser=true]',
              '[text="我知道了"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24561058',
      },
    ],
  },
{
    key: 35,
    name: '功能类-自动跳转第三方应用',
    desc: '点击[允许]',
    rules: [
      {
          fastQuery: true,
          activityIds: '.activity.QQBrowserActivity',
          matches: [
              '[text$="打开其他应用"]',
              '[text="允许"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25142977',
      },
    ],
  }
  ],
});
