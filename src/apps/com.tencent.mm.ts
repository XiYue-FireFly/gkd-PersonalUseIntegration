import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
{
    key: 0,
    name: '分段广告-朋友圈广告',
    desc: '点击卡片广告右上角,直接关闭/出现菜单,确认关闭',
    enable: false,
    activityIds: [
      '.plugin.sns.ui.SnsTimeLineUI',
      '.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      '.plugin.profile.ui.ContactInfoUI',
    ],
    rules: [
      {
          key: 0,
          fastQuery: true,
          matches: [
              '@LinearLayout[clickable=true] > [text="广告" || text="廣告" || text="Sponsored"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13000395',
              'https://i.gkd.li/i/12905837',
              'https://i.gkd.li/i/13791200',
              'https://i.gkd.li/i/16568338',
          ],
      },
      {
          key: 1,
          fastQuery: true,
          actionDelay: 300,
          position: {
              left: 'width * 0.9223',
              top: 'height * 0.5',
          },
          anyMatches: [
              '@LinearLayout >2 [text="广告"][visibleToUser=false]',
              'RecyclerView > FrameLayout[childCount=1] > RelativeLayout > FrameLayout > LinearLayout > LinearLayout > LinearLayout > @LinearLayout[childCount=2][getChild(0).getChild(0).text!=null] > LinearLayout[index=1][clickable=false][visibleToUser=false]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/14783802',
              'https://i.gkd.li/i/15531539',
              'https://i.gkd.li/i/19665911',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/19717709',
      },
      {
          key: 2,
          matches: '[name$="RecyclerView"||name$="ListView"] >(1,2) RelativeLayout >3 LinearLayout > LinearLayout > LinearLayout[childCount=2] > LinearLayout[index=1][clickable=true][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/14647413',
              'https://i.gkd.li/i/19633571',
          ],
      },
      {
          preKeys: [
              0,
              1,
              2,
          ],
          key: 25,
          name: '点击[关闭]',
          fastQuery: true,
          anyMatches: [
              '[text^="关闭" || text*="Close" || text="關閉此廣告"][clickable=true][visibleToUser=true]',
              '@LinearLayout[clickable=true] > [text="关闭该广告" || text*="Close"][visibleToUser=true]',
              '@LinearLayout[index=1][clickable=true] <2 * < * - [text*="广告"]',
              '@[text="关闭该广告"] -2 [text^="对这条广告不感兴趣"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13926578',
              'https://i.gkd.li/i/15531274',
              'https://i.gkd.li/i/14207480',
              'https://i.gkd.li/i/15137016',
              'https://i.gkd.li/i/13791202',
              'https://i.gkd.li/i/14783820',
              'https://i.gkd.li/i/15284966',
              'https://i.gkd.li/i/14647839',
              'https://i.gkd.li/i/19666176',
              'https://i.gkd.li/i/19633486',
          ],
      },
      {
          preKeys: [
              25,
          ],
          key: 50,
          name: '点击[关闭]',
          matches: '[text*="关闭" || text="Close"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/12663984',
              'https://i.gkd.li/i/12905846',
              'https://i.gkd.li/i/14647940',
              'https://i.gkd.li/i/14783534',
          ],
      },
      {
          preKeys: [
              50,
          ],
          key: 75,
          name: '点击[确认]',
          fastQuery: true,
          matches: '@[text="确认"][visibleToUser=true] -2 [text="不感兴趣原因"]',
          snapshotUrls: 'https://i.gkd.li/i/14647940',
      },
      {
          key: 0,
          name: '点击广告卡片右上角',
          matches: 'RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/13000395',
              'https://i.gkd.li/i/12905837',
              'https://i.gkd.li/i/13791200',
              'https://i.gkd.li/i/14647413',
          ],
      },
      {
          key: 1,
          fastQuery: true,
          position: {
              left: 'width * 0.9223',
              top: 'width * 0.0349',
          },
          excludeMatches: 'RelativeLayout >5 LinearLayout[childCount=2] > TextView[text!=null] + LinearLayout[visibleToUser=true][clickable=true]',
          matches: '@LinearLayout >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14783802',
      },
      {
          preKeys: [
              0,
          ],
          key: 25,
          name: '点击[关闭]',
          fastQuery: true,
          matches: '[text^="关闭"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/12907642',
              'https://i.gkd.li/i/13926578',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 26,
          name: '点击[Close]',
          fastQuery: true,
          matches: '[text*="Close"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/14207480',
              'https://i.gkd.li/i/15137016',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 27,
          name: '点击[關閉此廣告]',
          fastQuery: true,
          matches: '[text="關閉此廣告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13791202',
      },
      {
          preKeys: [
              0,
              1,
          ],
          key: 28,
          name: '点击[关闭该广告]',
          fastQuery: true,
          matches: '@LinearLayout[index=1][clickable=true] <2 * < * - [text*="广告"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12642584',
              'https://i.gkd.li/i/14647839',
              'https://i.gkd.li/i/14783820',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 29,
          name: '点击[Close the ad]',
          fastQuery: true,
          matches: '@LinearLayout[clickable=true] > [text*="Close"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12905838',
              'https://i.gkd.li/i/15284966',
          ],
      },
      {
          preKeys: [
              28,
          ],
          key: 50,
          name: '点击[关闭]',
          matches: '[text*="关闭"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/12663984',
              'https://i.gkd.li/i/14647940',
              'https://i.gkd.li/i/14783534',
          ],
      },
      {
          preKeys: [
              29,
          ],
          key: 51,
          name: '点击"Close"',
          matches: '[text="Close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12905846',
      },
      {
          preKeys: [
              50,
          ],
          key: 75,
          name: '点击[确认]',
          matches: '[text="确认"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14647940',
      },
    ],
  },
{
    key: 1,
    name: '功能类-登录自动授权',
    desc: '微信相关平台扫码登录自动授权',
    enable: false,
    activityIds: [
      '.plugin.webwx.ui.ExtDeviceWXLoginUI',
      'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
      'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
      'com.tencent.mm.ui.LauncherUI',
      'com.tencent.mm.plugin.base.stub.UIEntryStub',
    ],
    matchTime: 10000,
    actionMaximum: 2,
    rules: [
      {
          key: 0,
          name: 'PC 微信扫码登录',
          matches: [
              '[text^="登录 Win" || text^="登录桌面" || text^="登入 WeChat" || text^="Log in to Weixin for"][visibleToUser=true]',
              '[text="登录" || text="登入" || text="Log In"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/13522625',
              'https://i.gkd.li/import/13522577',
              'https://i.gkd.li/i/19399694',
              'https://i.gkd.li/i/22356438',
              'https://i.gkd.li/i/25315046',
              'https://i.gkd.li/i/25815630',
          ],
      },
      {
          key: 1,
          name: '浏览器扫码登录',
          matches: [
              '[text^="获取你的"||text^="取得你的"||text^="申请使用"||text^="請求使用"]',
              '[text="允许"||text="允許"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/13065462',
              'https://i.gkd.li/import/12663602',
              'https://i.gkd.li/import/14164920',
              'https://i.gkd.li/i/15271716',
              'https://i.gkd.li/i/18809991',
              'https://i.gkd.li/i/19496823',
              'https://i.gkd.li/i/21792855',
              'https://i.gkd.li/i/16972565',
          ],
      },
      {
          key: 2,
          name: '网页版文件传输助手扫码登录',
          matches: '[text="打开网页版文件传输助手"||text="開啟網頁版檔案傳輸助手"] + * > Button[text="打开"||text="開啟"]',
          snapshotUrls: [
              'https://i.gkd.li/import/12793745',
              'https://i.gkd.li/i/20532303',
          ],
      },
      {
          key: 3,
          name: '微信表情开发平台扫码登录',
          matches: 'View[desc="取消登录"||desc="取消登入"] - Button[text="登录"||text="登入"]',
          snapshotUrls: [
              'https://i.gkd.li/import/14164954',
          ],
      },
      {
          key: 4,
          name: '微信红包封面开放平台扫码登录',
          matches: 'Button[text="取消"] - Button[text="确定"]',
          snapshotUrls: [
              'https://i.gkd.li/import/14164990',
          ],
      },
      {
          key: 5,
          name: '微信开发者工具扫码登录',
          matches: '[desc="取消"] - [desc="确认登录"]',
          snapshotUrls: [
              'https://i.gkd.li/i/14472990',
          ],
      },
      {
          key: 6,
          name: '微信读书网页版扫码登录',
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/import/12506197',
      },
      {
          preKeys: [
              4,
              6,
          ],
          key: 10,
          name: '点击[X]返回',
          matches: [
              '[text="登录成功"||text="已确定"]',
              'ImageView[desc="返回"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/14193413',
              'https://i.gkd.li/import/12506201',
          ],
      },
      {
          preKeys: [
              1,
          ],
          key: 20,
          activityIds: '.plugin.webview.ui.tools.SDKOAuthOtherUI',
          matches: [
              '[text="申请获得"][visibleToUser=true]',
              '[text="允许"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24560465',
      },
      {
          activityIds: [
              '.plugin.webwx.ui.ExtDeviceWXLoginUI',
              '.ui.LauncherUI',
          ],
          matches: [
              '[text="登录 Windows 微信" || text^="Log in to Weixin for"][visibleToUser=true]',
              '[text="登录" || text="Log In"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13522625',
              'https://i.gkd.li/i/13522577',
              'https://i.gkd.li/i/22356438',
          ],
      },
      { key: 0, matches: 'TextView[text="取消登录"] - Button[text="登录"]' },
    ],
  },
{
    key: 2,
    name: '功能类-自动授权登录',
    desc: '自动允许使用头像昵称等',
    actionMaximum: 1,
    fastQuery: true,
    rules: [
      {
          key: 0,
          activityIds: [
              '.plugin.base.stub.UIEntryStub',
              '.ui.LauncherUI',
              '.plugin.webview.ui.tools.MMWebViewUI',
              '.plugin.webview.ui.tools.SDKOAuthUI',
          ],
          matches: [
              '[text^="获取你的" || text^="取得你的" || text^="你的昵称"]',
              '[text="允许" || text="允許"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/12663602',
              'https://i.gkd.li/i/13065462',
              'https://i.gkd.li/i/15271716',
              'https://i.gkd.li/i/16972565',
              'https://i.gkd.li/i/19496823',
          ],
      },
      {
          preKeys: [
              0,
          ],
          activityIds: '.plugin.webview.ui.tools.SDKOAuthOtherUI',
          matches: [
              '[text="申请获得"][visibleToUser=true]',
              '[text="允许"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24560465',
      },
      {
          matches: [
              '[text^="获取你的"]',
              '[text="允许"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/12663602',
              'https://i.gkd.li/i/13065462',
              'https://i.gkd.li/i/15271716',
          ],
      },
    ],
  },
{
    key: 4,
    name: '功能类-微信读书网页版扫码登录自动授权',
    activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
    matchTime: 10000,
    actionMaximum: 1,
    rules: [
      {
          key: 1,
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/i/12506197',
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          action: 'back',
          matches: '[text="登录成功"]',
          snapshotUrls: 'https://i.gkd.li/i/12506201',
      },
      {
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/i/12506197',
      },
      {
          matches: [
              '[text="登录成功"]',
              '[id="com.tencent.mm:id/g1"][desc="返回"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12506201',
      },
    ],
  },
{
    key: 5,
    name: '功能类-自动领取微信红包',
    desc: '自动领取私聊红包,群聊红包',
    enable: false,
    fastQuery: true,
    rules: [
      {
          key: 1,
          name: '点击别人发的红包',
          activityIds: [
              '.ui.LauncherUI',
              '.ui.chatting.variants.ChattingMainUI',
          ],
          matches: 'LinearLayout[childCount=1] >2 @FrameLayout[clickable=true] >2 LinearLayout[getChild(1).childCount=1] +2 RelativeLayout > [text="微信红包"]',
          snapshotUrls: [
              'https://i.gkd.li/i/18134826',
              'https://i.gkd.li/i/24347101',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/18134823',
              'https://i.gkd.li/i/18134833',
          ],
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          name: '点击红包-开',
          matchRoot: true,
          activityIds: [
              '.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
              '.plugin.luckymoney.ui.LuckyMoneyNewReceiveUI',
          ],
          matches: '@Button[desc="开" || desc="開"] -(2,3) LinearLayout >2 [text$="红包" || text$="紅包"]',
          snapshotUrls: [
              'https://i.gkd.li/i/18134828',
              'https://i.gkd.li/i/21177180',
              'https://i.gkd.li/i/25901145',
              'https://i.gkd.li/i/25315061',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698',
      },
      {
          preKeys: [
              1,
              2,
          ],
          name: '从红包结算界面返回',
          activityIds: [
              '.plugin.luckymoney.ui.LuckyMoneyDetailUI',
              '.plugin.luckymoney.ui.LuckyMoneyNewDetailUI',
          ],
          matches: '@ImageView[desc="返回"] +n LinearLayout >8 [text$="红包" || text$="紅包"]',
          snapshotUrls: [
              'https://i.gkd.li/i/18134829',
              'https://i.gkd.li/i/18135031',
              'https://i.gkd.li/i/23825631',
              'https://i.gkd.li/i/24414957',
              'https://i.gkd.li/i/25315062',
          ],
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          name: '点击红包-开',
          matchRoot: true,
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches: '@Button[desc="开"] -3 LinearLayout >2 [text$="红包"]',
          snapshotUrls: [
              'https://i.gkd.li/i/18134828',
              'https://i.gkd.li/i/21177180',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/12567698',
      },
      {
          preKeys: [
              1,
              2,
          ],
          name: '从红包结算界面返回',
          activityIds: '.plugin.luckymoney.ui.LuckyMoney',
          matches: '@ImageView[desc="返回"] +n LinearLayout >8 [text$="红包"]',
          snapshotUrls: [
              'https://i.gkd.li/i/18134829',
              'https://i.gkd.li/i/18135031',
              'https://i.gkd.li/i/23825631',
              'https://i.gkd.li/i/24414957',
          ],
      },
      {
          name: '从红包结算界面返回',
          preKeys: [
              1,
              2,
          ],
          activityIds: [
              'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI',
              'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyDetailUI',
          ],
          matches: 'ImageView[desc="返回"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12567696',
              'https://i.gkd.li/i/14151190',
          ],
      },
      {
          key: 1,
          name: '点击红包-开',
          activityIds: 'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12567697',
              'https://i.gkd.li/i/12567698',
          ],
      },
      {
          key: 2,
          name: '点击别人发的红包',
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          matches: 'LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text="微信红包"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12567637',
      },
    ],
  },
{
    key: 6,
    name: '分段广告-订阅号文章广告',
    desc: '点击下拉框-[关闭此广告]/[不感兴趣]-[与我无关]',
    enable: false,
    activityIds: [
      'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      '.plugin.brandservice.ui.timeline.preload.ui.TmplWebView',
      '.plugin.webview.ui.tools.fts.MMSosWebViewUI',
      '.plugin.webview.ui.tools.MMWebViewUI',
    ],
    matchRoot: true,
    rules: [
      {
          key: 0,
          name: '点击「广告」按钮',
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches: [
              '[name$=".View"||name$=".TextView"][text^="广告"][visibleToUser=true] <n @View < View[childCount=1] <<3 View[childCount=1] <<2 View[childCount=1]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/12642232',
              'https://i.gkd.li/import/13199281',
              'https://i.gkd.li/import/14006180',
              'https://i.gkd.li/import/12714427',
              'https://i.gkd.li/import/12700183',
              'https://i.gkd.li/import/12714424',
              'https://i.gkd.li/import/14293295',
              'https://i.gkd.li/i/17093010',
              'https://i.gkd.li/i/14802057',
              'https://i.gkd.li/i/16798663',
              'https://i.gkd.li/i/15198413',
              'https://i.gkd.li/i/15198455',
              'https://i.gkd.li/i/17276697',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/import/12678937',
              'https://i.gkd.li/import/12646837',
              'https://i.gkd.li/import/12642234',
              'https://i.gkd.li/import/12722301',
              'https://i.gkd.li/import/12722331',
              'https://i.gkd.li/import/14006203',
              'https://i.gkd.li/import/12701503',
              'https://i.gkd.li/import/14292844',
              'https://i.gkd.li/i/15198464',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          name: '点击「关闭此广告」',
          activityIds: [],
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches: '[text*="广告"&&text.length<5] <n View < View >n [text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/import/12745280',
              'https://i.gkd.li/import/14293434',
              'https://i.gkd.li/import/12700191',
              'https://i.gkd.li/i/14633366',
              'https://i.gkd.li/i/14834975',
              'https://i.gkd.li/i/16798661',
              'https://i.gkd.li/i/15198422',
              'https://i.gkd.li/i/15198459',
              'https://i.gkd.li/i/16796729',
          ],
      },
      {
          preKeys: [
              0,
              1,
          ],
          key: 2,
          name: '点击「不感兴趣」',
          activityIds: [],
          excludeMatches: '[text="感谢你的反馈"][visibleToUser=true]',
          matches: '[text*="广告"&&text.length<5] <<n View >n [text="与我无关"||text="不感兴趣"||text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/17113565',
              'https://i.gkd.li/i/18702161',
              'https://i.gkd.li/i/18702159',
              'https://i.gkd.li/i/18702157',
          ],
      },
      {
          preKeys: [
              0,
              1,
              2,
          ],
          key: 10,
          name: '点击「与我无关」',
          activityIds: [],
          action: 'clickCenter',
          matches: '[text*="广告"&&text.length<5] <<n View >n [text="与我无关"||text="不感兴趣"||text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/import/12642238',
              'https://i.gkd.li/import/14006206',
              'https://i.gkd.li/i/15198461',
              'https://i.gkd.li/i/16798658',
              'https://i.gkd.li/i/18108538',
              'https://i.gkd.li/i/19121995',
              'https://i.gkd.li/i/19281051',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/15061424',
          ],
      },
    ],
  },
{
    key: 7,
    name: '功能类-自动选中发送原图',
    desc: '图片和视频选择器-自动选中底部中间的发送原图',
    enable: false,
    activityIds: [
      'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
      'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
    ],
    actionMaximum: 1,
    rules: [
      {
          key: 1,
          anyMatches: [
              '[desc="未选中,原图,复选框" || desc="未選定，原圖，複選對話方塊"][text=null||text=""][visibleToUser=true] <(1,2) [name$="Layout"][childCount=2] > ImageButton[index=0]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/16987145',
              'https://i.gkd.li/i/16987144',
              'https://i.gkd.li/i/18413281',
              'https://i.gkd.li/i/14661734',
              'https://i.gkd.li/i/19625049',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/16987141',
              'https://i.gkd.li/i/16987147',
          ],
      },
      {
          key: 1,
          fastQuery: true,
          anyMatches: [
              '@[desc="未选中,原图,复选框"][visibleToUser=true] + [text="原图"]',
              '@[desc="未选中,原图,复选框"][visibleToUser=true]',
          ],
          exampleUrls: [
              'https://e.gkd.li/32dc0943-e85f-416d-bb01-6ed610d4bdd8',
              'https://e.gkd.li/93d41161-ab69-4c2d-83bb-637d7292f5e6',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/16987145',
              'https://i.gkd.li/i/16987144',
              'https://i.gkd.li/i/19625049',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/16987141',
              'https://i.gkd.li/i/16987147',
          ],
      },
      {
          key: 1,
          matches: '@ImageButton[desc="未选中,原图,复选框"] + [text="原图"]',
          snapshotUrls: [
              'https://i.gkd.li/i/12686641',
              'https://i.gkd.li/i/12840865',
              'https://i.gkd.li/i/12686640',
              'https://i.gkd.li/i/14654129',
          ],
      },
    ],
  },
{
    key: 9,
    name: '功能类-自动查看原图/原视频',
    desc: '浏览图片时自动切换至原图模式',
    enable: false,
    activityIds: [
      '.ui.chatting.gallery.ImageGalleryUI',
      '.ui.LauncherUI',
    ],
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: [
              'Button[text~=".*原.*\\\\d+(\\\\.\\\\d+)?\\\\s*[KMG]B?\\\\)?$"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/13523031',
              'https://i.gkd.li/i/14661736',
              'https://i.gkd.li/i/16833732',
              'https://i.gkd.li/i/17698956',
              'https://i.gkd.li/i/19515095',
              'https://i.gkd.li/i/19645122',
              'https://i.gkd.li/i/25009442',
          ],
      },
      {
          key: 0,
          fastQuery: true,
          anyMatches: [
              'Button[text^="查看"][clickable=true][visibleToUser=true]',
              'Button[clickable=true][text^="查看"][visibleToUser=true]',
          ],
          exampleUrls: 'https://m.gkd.li/57941037/6bb9e68a-43f5-4482-96b1-899cc86fef32',
          snapshotUrls: [
              'https://i.gkd.li/i/13523031',
              'https://i.gkd.li/i/17698956',
              'https://i.gkd.li/i/19515095',
              'https://i.gkd.li/i/19645122',
          ],
      },
      {
          key: 1,
          activityIds: '.ui.LauncherUI',
          matches: '[text^="原图"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25009442',
      },
      { key: 0, matches: 'Button[text^="查看原图"][clickable=true]' },
    ],
  },
{
    key: 10,
    name: '全屏广告-小程序部分通用广告',
    desc: '包括部分开屏广告，弹窗广告等',
    enable: false,
    activityIds: [
      'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
    ],
    matchTime: 10000,
    rules: [
      {
          key: 0,
          name: '开屏广告',
          actionDelay: 800,
          forcedTime: 10000,
          fastQuery: true,
          matches: [
              '[text="广告" || text="廣告"][visibleToUser=true]',
              '[text="跳过" || text="跳過"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/12701979',
              'https://i.gkd.li/import/12777076',
              'https://i.gkd.li/import/12785012',
              'https://i.gkd.li/import/12785183',
              'https://i.gkd.li/import/13306883',
              'https://i.gkd.li/import/12785246',
              'https://i.gkd.li/import/13407275',
              'https://i.gkd.li/i/15108441',
          ],
      },
      {
          key: 1,
          name: '弹窗广告',
          matchTime: 20000,
          actionCd: 300,
          actionDelay: 300,
          resetMatch: 'app',
          fastQuery: true,
          excludeMatches: '[text="跳过" || text="跳過"][visibleToUser=true]',
          matches: [
              'ImageView[childCount=0][visibleToUser=true] < FrameLayout < @FrameLayout[visibleToUser=true] <2 * - * >(4,5) [text="广告"||text="查看详情"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13459614',
              'https://i.gkd.li/i/16943989',
              'https://i.gkd.li/i/16920797',
              'https://i.gkd.li/import/12926021',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
      },
      {
          key: 2,
          name: '京东购物小程序-低价包邮广告',
          actionDelay: 500,
          actionMaximum: 1,
          resetMatch: 'activity',
          matches: 'View[childCount=8] > View[index=6] > View[childCount=4] > Image[visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/import/13298294',
              'https://i.gkd.li/import/14156176',
          ],
      },
      {
          actionDelay: 800,
          matches: [
              '[text="广告"][visibleToUser=true]',
              '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/12785183',
              'https://i.gkd.li/i/13306883',
              'https://i.gkd.li/i/13407275',
              'https://i.gkd.li/i/15108441',
          ],
      },
    ],
  },
{
    key: 11,
    name: '功能类-网页版文件传输助手扫码自动授权',
    matchTime: 10000,
    actionMaximum: 1,
    fastQuery: true,
    rules: [
      {
          activityIds: '.ui.LauncherUI',
          matches: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
          snapshotUrls: 'https://i.gkd.li/i/12793745',
      },
      { key: 0, matches: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]' },
    ],
  },
{
    key: 14,
    name: '分段广告-小程序-内部广告',
    enable: false,
    activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
    fastQuery: true,
    rules: [
      {
          key: 0,
          name: '【广告】0',
          matches: 'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches: 'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
              'https://i.gkd.li/import/13199282',
              'https://i.gkd.li/import/13407275',
          ],
      },
      {
          key: 1,
          name: '【广告】1',
          matches: 'Image[text="feedback_icon"] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13378208',
      },
      {
          preKeys: [
              0,
              1,
          ],
          key: 11,
          name: '点击原因【不感兴趣】',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200044',
      },
      {
          preKeys: 11,
          key: 12,
          name: '点击原因【与我无关】',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200048',
      },
      {
          key: 0,
          name: '【广告】0',
          fastQuery: true,
          matches: 'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches: 'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13199282',
              'https://i.gkd.li/i/13407275',
          ],
      },
      {
          key: 1,
          name: '【广告】1',
          matches: 'View > * - [text="广告"]',
          excludeMatches: '[text="接龙管家"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13378208',
              'https://i.gkd.li/i/14123141',
              'https://i.gkd.li/i/14385715',
          ],
      },
      {
          preKeys: [
              0,
              1,
          ],
          key: 11,
          name: '点击原因【不感兴趣】',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200044',
      },
      {
          preKeys: 11,
          key: 12,
          name: '点击原因【与我无关】',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200048',
      },
    ],
  },
{
    key: 17,
    name: '青少年模式',
    desc: '关闭青少年模式提示弹窗',
    enable: false,
    activityIds: [
      '.plugin.finder.',
      '.ui.LauncherUI',
    ],
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: '@[text="我知道了"][index=parent.childCount.minus(1)] <n LinearLayout > [text^="为呵护未成年人健康成长"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/13538145',
              'https://i.gkd.li/i/13575195',
              'https://i.gkd.li/i/14735456',
              'https://i.gkd.li/i/14896723',
              'https://i.gkd.li/i/18135103',
              'https://i.gkd.li/i/19683937',
          ],
      },
      {
          key: 1,
          matches: '@[text="不再提醒"][clickable=true] <2 [index=parent.childCount.minus(1)] -n [text^="为呵护未成年人健康成长"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24796791',
      },
      {
          activityIds: [
              'com.tencent.mm.plugin.finder.ui.',
              'com.tencent.mm.ui.LauncherUI',
          ],
          matches: [
              '[text*="青少年模式"]',
              '[text="我知道了"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/13538145',
              'https://i.gkd.li/i/13575195',
              'https://i.gkd.li/i/14735456',
              'https://i.gkd.li/i/14896723',
          ],
      },
    ],
  },
{
    key: 18,
    name: '功能类-青少年模式自动点击验证密码',
    desc: '点击“验证密码”以申请临时访问',
    enable: false,
    activityIds: [
      'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
      'com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI',
    ],
    matchTime: 10000,
    actionMaximum: 1,
    rules: [
      {
          key: 0,
          matches: [
              '[text="申请今天临时访问"]',
              '[text="验证密码"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/import/13631987',
              'https://i.gkd.li/import/13588338',
              'https://i.gkd.li/i/14050004',
          ],
      },
      {
          key: 0,
          fastQuery: true,
          activityIds: '.plugin.teenmode.ui.AuthorizationRequestUI',
          matches: '@LinearLayout[childCount=2] > TextView[text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/i/13588338',
      },
      {
          key: 1,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches: 'View[desc="验证密码"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13631987',
      },
      {
          key: 0,
          activityIds: 'com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI',
          matches: '@LinearLayout[childCount=2] > [text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/i/13588338',
      },
      {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: [
              'View[text="申请今天临时访问"]',
              'View[desc="验证密码"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13631987',
      },
    ],
  },
{
    key: 19,
    name: '功能类-订阅号-展开更早的消息',
    desc: '自动展开订阅号历史消息',
    enable: false,
    activityIds: 'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
    rules: [
      {
          key: 0,
          fastQuery: true,
          matches: '@[clickable=true] > [text="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/import/13790550',
      },
      {
          key: 1,
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/import/13790949',
      },
      {
          key: 0,
          fastQuery: true,
          activityIds: '.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '@[clickable=true] > [text="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790550',
      },
      {
          key: 1,
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790949',
      },
      {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '@[clickable=true] > [text="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790550',
      },
    ],
  },
{
    key: 21,
    name: '分段广告-订阅号消息页面广告',
    desc: '自动点击“x”',
    enable: false,
    activityIds: [
      '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
    ],
    rules: [
      {
          key: 0,
          name: '点击[X]-1',
          matches: 'View[childCount>=2][desc!="发现"] >n [name$="View"][desc.length>=1][desc!="发现"] - View[desc$="推​荐​" || desc$="推​薦​"][childCount>=2][desc!="发现"] > ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)][width<100&&height<100][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/14436176',
              'https://i.gkd.li/i/14392392',
              'https://i.gkd.li/i/14548701',
              'https://i.gkd.li/i/22870358',
          ],
      },
      {
          key: 1,
          name: '点击[X]-2',
          matches: 'Button[desc.length>0][childCount>=2][desc.length>=1] > ImageView[desc.length>=1][childCount>0] + @ImageView[index!=0][clickable=true][visibleToUser=true][width<100&&height<100][clickable=true] + View[desc.length=null]',
          snapshotUrls: [
              'https://i.gkd.li/i/22870407',
              'https://i.gkd.li/i/22870408',
              'https://i.gkd.li/i/22870410',
              'https://i.gkd.li/i/23693851',
              'https://i.gkd.li/i/23832813',
          ],
      },
      {
          preKeys: [
              0,
              1,
          ],
          key: 10,
          name: '点击[不喜欢此类视频]',
          activityIds: [],
          anyMatches: [
              '[desc="不喜欢此类视频"][clickable=true]',
              '[desc="不看此类内容"][clickable=true]',
              '[desc="不看此類內容"][clickable=true]',
              '[desc="不看此官方賬號內容"][clickable=true]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/14444654',
              'https://i.gkd.li/i/14549566',
              'https://i.gkd.li/i/21343537',
              'https://i.gkd.li/i/22870531',
              'https://i.gkd.li/i/22870532',
          ],
      },
      {
          preKeys: 10,
          key: 15,
          name: '点击[确定]',
          activityIds: [],
          matches: '[desc="确定"||desc="確定"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/14436190',
              'https://i.gkd.li/i/14549567',
              'https://i.gkd.li/i/21343507',
              'https://i.gkd.li/i/21792697',
              'https://i.gkd.li/i/22870535',
          ],
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
          matches: '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
          exampleUrls: 'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
              'https://i.gkd.li/i/14399355',
              'https://i.gkd.li/i/14662147',
              'https://i.gkd.li/i/14532946',
          ],
      },
    ],
  },
{
    key: 22,
    name: '功能类-付款后自动点击完成/返回商家',
    desc: '支付完成后自动点击完成或返回商家按钮',
    enable: false,
    activityIds: [
      'com.tencent.mm.framework.app.UIPageFragmentActivity',
      '.ui.LauncherUI',
    ],
    fastQuery: true,
    matchRoot: true,
    rules: [
      {
          matches: [
              '[text="支付成功"]',
              '[text*="￥"||text*="¥"]',
              '[text="完成"||text="返回商家"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/14399355',
              'https://i.gkd.li/i/14558398',
              'https://i.gkd.li/i/14662147',
              'https://i.gkd.li/i/16215946',
              'https://i.gkd.li/i/18348017',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/14532946',
          ],
      },
      {
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches: 'WebView[childCount=6] View[index=4] > [text="验证密码"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14050004',
      },
      {
          key: 0,
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
          matches: '[text!="" || text!=null] <<n FrameLayout[childCount<=5] > FrameLayout[childCount>=3 && childCount<=6] + FrameLayout[childCount=2] > TextView + FrameLayout > @FrameLayout[childCount=1] > ImageView',
          exampleUrls: 'https://m.gkd.li/101449500/1c7e1778-c5a2-426b-8beb-1b76893b6397',
          snapshotUrls: [
              'https://i.gkd.li/i/14111422',
              'https://i.gkd.li/i/14111432',
              'https://i.gkd.li/i/13459614',
          ],
      },
    ],
  },
{
    key: 23,
    name: '功能类-自动语音转文字',
    desc: '点击语音旁边的转文字/长按语音后点击转文字',
    enable: false,
    rules: [
      {
          fastQuery: true,
          activityIds: [
              '.ui.LauncherUI',
              '.ui.chatting.ChattingUI',
              '.ui.chatting.variants.ChattingMainUI',
          ],
          anyMatches: [
              '@[clickable=true] >(1,2) [text="转文字"]',
              '@[clickable=true] -2 FrameLayout >2 [desc^="语音" && desc$="未播放"] + [text~="(?is)[0-9].*"]',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/14497389',
              'https://i.gkd.li/i/14538322',
              'https://i.gkd.li/i/19774491',
              'https://i.gkd.li/i/19792042',
              'https://i.gkd.li/i/18135057',
              'https://i.gkd.li/i/24989479',
              'https://i.gkd.li/i/25002786',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/21792783',
          ],
      },
    ],
  },
{
    key: 25,
    name: '局部广告-订阅号消息-推荐文章',
    desc: '点击关闭',
    rules: [
      {
          activityIds: '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
          matches: 'View[childCount=2] > View[desc$="推​荐​"][childCount=3] > ImageView[index=2][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14392392',
      },
    ],
  },
{
    key: 26,
    name: '功能类-付款后自动点击完成/返回商家',
    rules: [
      {
          key: 0,
          fastQuery: true,
          activityIds: '.framework.app.UIPageFragmentActivity',
          matches: '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
          exampleUrls: 'https://m.gkd.li/57941037/a5177d9d-6745-443f-baf5-af57153430d8',
          snapshotUrls: [
              'https://i.gkd.li/i/14399355',
              'https://i.gkd.li/i/14662147',
              'https://i.gkd.li/i/24157874',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14532946',
      },
      {
          key: 1,
          versionCode: {
              minimum: 2980,
          },
          activityIds: '.plugin.lite.ui.WxaLiteAppTransparentLiteUI',
          matches: 'Button[desc="返回商家"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e7acbb38-c602-4ea4-88ec-7604c3aeae06',
          snapshotUrls: 'https://i.gkd.li/i/24141842',
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.mm.plugin.webwx.ui.WebWXUnlockUI',
          matches: '[text="解锁"]',
          exampleUrls: 'https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca',
          snapshotUrls: 'https://i.gkd.li/i/14490116',
      },
    ],
  },
{
    key: 27,
    name: '功能类-自动语音转文字',
    desc: '自动点击语音转文字',
    enable: false,
    activityIds: 'com.tencent.mm.ui.LauncherUI',
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: '@* > [text="转文字"]',
          snapshotUrls: [
              'https://i.gkd.li/i/14497389',
              'https://i.gkd.li/i/14538322',
          ],
      },
    ],
  },
{
    key: 28,
    name: '分段广告-订阅号消息-视频推荐',
    desc: '点击[X]-点击[不喜欢此类视频]-点击[确定]',
    activityIds: '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
    rules: [
      {
          key: 0,
          name: '点击[X]',
          matches: '[desc="订阅号消息"] +3 View >2 [visibleToUser=true] - View >3 ImageView[index=2][clickable=true]',
          exampleUrls: 'https://m.gkd.li/57941037/b777c0b1-f8ed-4712-afd6-2e1a72243475',
          snapshotUrls: 'https://i.gkd.li/i/14436176',
      },
      {
          preKeys: 0,
          key: 1,
          name: '点击[不喜欢此类视频]',
          matches: '[desc="不喜欢此类视频"][clickable=true]',
          exampleUrls: 'https://m.gkd.li/57941037/39e8b378-9b55-4838-92af-b28f04402ca4',
          snapshotUrls: 'https://i.gkd.li/i/14444654',
      },
      {
          preKeys: 1,
          key: 2,
          name: '点击[确定]',
          matches: '[desc="确定"][clickable=true]',
          exampleUrls: 'https://m.gkd.li/57941037/590eb619-9987-4edf-98a8-17146ffeda10',
          snapshotUrls: 'https://i.gkd.li/i/14436190',
      },
    ],
  },
{
    key: 29,
    name: '功能类-解锁 Windows 微信',
    desc: '点击[解锁]',
    rules: [
      {
          fastQuery: true,
          activityIds: '.plugin.webwx.ui.WebWXUnlockUI',
          anyMatches: [
              '[text="解锁"][clickable=true][visibleToUser=true]',
              '@[text="解锁"][clickable=true] < LinearLayout -2 [text^="解锁"][visibleToUser=true]',
          ],
          exampleUrls: 'https://m.gkd.li/57941037/85bb6dcd-0d04-46c1-af14-6e4b57ff4dca',
          snapshotUrls: [
              'https://i.gkd.li/i/14490116',
              'https://i.gkd.li/i/23688962',
          ],
      },
      {
          key: 0,
          matches: 'View > Button > View[desc$="推​荐​"] > ImageView[index=1][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea',
          snapshotUrls: 'https://i.gkd.li/i/14548701',
      },
      {
          key: 1,
          preKeys: 0,
          matches: '[desc="不看此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/14549566',
      },
      {
          key: 2,
          preKeys: 1,
          matches: '[desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14549567',
      },
    ],
  },
{
    key: 30,
    name: '全屏广告-文档页面-腾讯文档APP弹窗',
    desc: '点击关闭',
    rules: [
      {
          fastQuery: true,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches: '@TextView[clickable=true] + * > [visibleToUser=true][text^="使用 APP"] <<n [id="android:id/content"]',
          exampleUrls: 'https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
      },
      {
          key: 0,
          matches: '@FrameLayout >2 [text="广告"]',
          exampleUrls: 'https://m.gkd.li/101449500/341ffb52-0aeb-4c35-aa72-8c96930e6d23',
          snapshotUrls: 'https://i.gkd.li/i/14549072',
      },
      {
          key: 1,
          preKeys: 0,
          position: {
              left: 'width*0.8125',
              top: 'width*0.1875',
          },
          matches: '@ViewGroup >3 [text="广告"]',
          exampleUrls: 'https://m.gkd.li/101449500/f2dcd634-96e3-4532-9b24-7c750ffd0263',
          snapshotUrls: 'https://i.gkd.li/i/14549071',
      },
    ],
  },
{
    key: 31,
    name: '分段广告-订阅号消息-推荐阅读',
    desc: '点击关闭',
    activityIds: '.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
    rules: [
      {
          key: 0,
          matches: 'View > Button > View[desc$="推​荐​"] > ImageView[index=1][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://m.gkd.li/101449500/5b815528-1ca2-4016-930e-a3cfb4e5e7ea',
          snapshotUrls: 'https://i.gkd.li/i/14548701',
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          matches: '[desc="不看此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/14549566',
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          matches: '[desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/14549567',
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '@TextView[clickable=true] + * > [text^="使用 APP"] <<n [id="android:id/content"]',
          exampleUrls: 'https://m.gkd.li/57941037/2228f99e-e0a1-4915-864f-d60e3d8580a6',
          snapshotUrls: 'https://i.gkd.li/i/14533286',
      },
    ],
  },
{
    key: 32,
    name: '权限提示-权限申请弹窗',
    desc: '点击取消',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
      {
          fastQuery: true,
          activityIds: '.pluginsdk.permission.PermissionActivity',
          matches: [
              '[text="权限申请"]',
              '[text="取消"]',
          ],
          exampleUrls: 'https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679',
          snapshotUrls: 'https://i.gkd.li/i/14645385',
      },
      {
          fastQuery: true,
          activityIds: 'com.tencent.mm.pluginsdk.permission.PermissionActivity',
          matches: [
              '[text="权限申请"]',
              '[text="取消"]',
          ],
          exampleUrls: 'https://m.gkd.li/57941037/43632b72-d389-4fe7-9708-dac78e900679',
          snapshotUrls: 'https://i.gkd.li/i/14645385',
      },
    ],
  },
{
    key: 33,
    name: '青少年模式-视频号-青少年模式弹窗',
    enable: false,
    activityIds: 'com.tencent.mm.plugin.finder.ui.FinderMultiTaskRouterUI',
    fastQuery: true,
    order: -8,
    snapshotUrls: 'https://i.gkd.li/i/14735456',
    rules: [
      { key: 0, matches: '[text*="青少年模式"] +3 [text="我知道了"]' },
    ],
  },
{
    key: 34,
    name: '功能类-付款时自动点击[支付]',
    actionMaximum: 1,
    rules: [
      {
          key: 0,
          fastQuery: true,
          activityIds: '.framework.app.UIPageFragmentActivity',
          matches: 'ViewGroup + ViewGroup > ViewGroup > [vid="kinda_button_impl_wrapper"][desc="支付"]',
          snapshotUrls: [
              'https://i.gkd.li/i/15144570',
              'https://i.gkd.li/i/15144571',
              'https://i.gkd.li/i/15360745',
              'https://i.gkd.li/i/24157875',
          ],
      },
      {
          key: 1,
          matchRoot: true,
          forcedTime: 100000,
          versionCode: {
              minimum: 2960,
          },
          activityIds: '.plugin.lite.ui.WxaLiteAppTransparentLiteUI',
          matches: '[desc^="付款方式"] + Button[desc="支付"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23746748',
      },
    ],
  },
{
    key: 35,
    name: '分段广告-公众号文章内广告',
    desc: '注意⚠️：该规则有概率误触，请谨慎开启',
    activityIds: [
      '.plugin.brandservice.ui.timeline.preload.ui.TmplWebView',
      '.plugin.webview.ui.tools.fts.MMSosWebViewUI',
      '.plugin.webview.ui.tools.MMWebViewUI',
    ],
    rules: [
      {
          key: 0,
          excludeMatches: [
              '[text="不感兴趣" || text="与我无关" || text="感谢你的反馈"][visibleToUser=true]',
          ],
          matches: '@View[childCount<5][bottom<2000] > [text^="广告"][text.length<4][visibleToUser=true]',
          exampleUrls: [
              'https://e.gkd.li/e73bb653-cc79-455c-958b-38aff6687c37',
              'https://e.gkd.li/5915f80b-66b9-4441-9d36-3caa3fe1be58',
          ],
          snapshotUrls: [
              'https://i.gkd.li/i/12642232',
              'https://i.gkd.li/i/13199281',
              'https://i.gkd.li/i/14006180',
              'https://i.gkd.li/i/17093010',
              'https://i.gkd.li/i/16796663',
              'https://i.gkd.li/i/16796725',
              'https://i.gkd.li/i/16798663',
              'https://i.gkd.li/i/15198455',
              'https://i.gkd.li/i/17276697',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/15198464',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 20,
          matches: '[text="关闭此广告"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/16796729',
              'https://i.gkd.li/i/17113565',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 25,
          excludeMatches: [
              '[text="感谢你的反馈"][visibleToUser=true]',
              '[text="关闭此广告"][visibleToUser=true]',
          ],
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/16796666',
              'https://i.gkd.li/i/16798661',
              'https://i.gkd.li/i/15198459',
          ],
          excludeSnapshotUrls: [
              'https://i.gkd.li/i/15061424',
              'https://i.gkd.li/i/16796729',
          ],
      },
      {
          preKeys: [
              25,
          ],
          key: 50,
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/16796674',
              'https://i.gkd.li/i/16796732',
              'https://i.gkd.li/i/16798658',
              'https://i.gkd.li/i/15198461',
          ],
      },
    ],
  },
{
    key: 36,
    name: '功能类-自动点击[查看原视频]',
    rules: [
      {
          fastQuery: true,
          activityIds: '.ui.chatting.gallery.ImageGalleryUI',
          matches: '[text^="查看原视频"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5332aff9-05bb-4b44-b832-5e2d9b1c1270',
          snapshotUrls: 'https://i.gkd.li/i/16833732',
      },
      {
          key: 0,
          matches: '[vid="kinda_button_impl_wrapper"][desc="立即支付"]',
          exampleUrls: 'https://m.gkd.li/57941037/13fd1e89-6d75-4efe-90d6-91687de8c9b1',
          snapshotUrls: 'https://i.gkd.li/i/15144571',
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          matches: '[vid="kinda_button_impl_wrapper"][desc="支付"]',
          exampleUrls: 'https://m.gkd.li/57941037/69380aa0-e6d2-4ea4-8ee7-6a1e45889e6c',
          snapshotUrls: 'https://i.gkd.li/i/15144570',
      },
    ],
  },
{
    key: 37,
    name: '全屏广告-小程序弹窗广告',
    desc: '点击关闭',
    matchTime: 20000,
    rules: [
      {
          fastQuery: true,
          activityIds: '.plugin.appbrand.ui.AppBrandUI',
          excludeMatches: '[text="跳过"][visibleToUser=true]',
          matches: '@ImageView[visibleToUser=true][childCount=0][text=null] < FrameLayout[childCount=1] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] - FrameLayout >4 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/d2b12af6-c204-4da7-8553-4765ef8b8c31',
          snapshotUrls: [
              'https://i.gkd.li/i/13459614',
              'https://i.gkd.li/i/16943989',
              'https://i.gkd.li/i/16920797',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/16958795',
      },
    ],
  },
{
    key: 38,
    name: '功能类-自动语音转文字',
    desc: '点击语音旁边的转文字',
    rules: [
      {
          fastQuery: true,
          activityIds: [
              '.ui.LauncherUI',
              '.ui.chatting.ChattingUI',
              '.ui.chatting.variants.ChattingMainUI',
          ],
          matches: '@RelativeLayout[clickable=true] -2 FrameLayout >2 [desc^="语音" && desc$="未播放"] + [text^="0" || text^="1" || text^="2" || text^="3" || text^="4" || text^="5" || text^="6" || text^="7" || text^="8" || text^="9"]',
          snapshotUrls: [
              'https://i.gkd.li/i/18135057',
              'https://i.gkd.li/i/24989479',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/18135054',
      },
    ],
  },
{
    key: 39,
    name: '功能类-语音/视频通话呼入10秒后自动点击接听',
    rules: [
      {
          matchTime: 15000,
          actionDelay: 10000,
          activityIds: [
              '.plugin.voip.ui.VideoActivity',
              '.ui.LauncherUI',
          ],
          matches: 'Button[desc="接听"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fbfea6ba-ce43-4641-a919-9c21fa49dc73',
          snapshotUrls: [
              'https://i.gkd.li/i/18225086',
              'https://i.gkd.li/i/23295677',
          ],
      },
    ],
  },
{
    key: 40,
    name: '功能类-点击语音条菜单里的转文字',
    desc: '点击 长按语音条后弹出的菜单 中的转文字',
    rules: [
      {
          fastQuery: true,
          activityIds: [
              '.ui.LauncherUI',
              '.ui.chatting.ChattingUI',
              '.ui.chatting.variants.ChattingMainUI',
          ],
          matches: '@[clickable=true] >2 [text="转文字"]',
          exampleUrls: 'https://e.gkd.li/c35fafc8-9d96-4178-9aac-f16394d2c666',
          snapshotUrls: [
              'https://i.gkd.li/i/19774491',
              'https://i.gkd.li/i/19792042',
              'https://i.gkd.li/i/25002786',
          ],
      },
    ],
  },
{
    key: 41,
    name: '功能类-自动接龙',
    desc: '手动点接龙后点击加号再点击发送',
    activityIds: '.plugin.groupsolitaire.ui.GroupSolitatireEditUI',
    fastQuery: true,
    rules: [
      {
          key: 0,
          matches: '@[desc="添加"] -n LinearLayout > [text^="由"][text*="发起接龙"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5f446d2a-432f-4dca-9bb7-81eba83713c6',
          snapshotUrls: 'https://i.gkd.li/i/21705413',
      },
      {
          preKeys: [
              0,
          ],
          matches: '@[text="发送"] < LinearLayout < LinearLayout < LinearLayout - [vid="actionbar_up_indicator"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/30f0f903-0a1a-422e-991c-02b7cbedc2da',
          snapshotUrls: 'https://i.gkd.li/i/21705384',
      },
    ],
  },
{
    key: 42,
    name: '功能类-自动点击未读消息（头像右上角为数字）',
    rules: [
      {
          fastQuery: true,
          activityIds: '.ui.LauncherUI',
          matches: 'TextView[childCount=0] - ImageView[childCount=0] < RelativeLayout[childCount=2] < LinearLayout < @LinearLayout[clickable=true][visibleToUser=true] <n ListView <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/23737039',
      },
    ],
  },
{
    key: 43,
    name: '功能类-自动点击未读消息（头像右上角为红点）',
    rules: [
      {
          fastQuery: true,
          activityIds: '.ui.LauncherUI',
          matches: 'ImageView[childCount=0] - ImageView[childCount=0] < RelativeLayout[childCount=2] < LinearLayout < @LinearLayout[clickable=true][visibleToUser=true] <n ListView <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/23737039',
      },
    ],
  },
{
    key: 44,
    name: '功能类-自动允许打开外部应用',
    desc: '点击允许',
    rules: [
      {
          fastQuery: true,
          activityIds: '.plugin.webview.ui.tools.MMWebViewUI',
          matches: [
              '[text^="即将离开微信"][visibleToUser=true]',
              '[text="允许"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24161524',
      },
    ],
  }
  ],
});
