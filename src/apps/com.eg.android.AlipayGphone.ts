import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
{
      key: 0,
      name: '通知提示-关闭花呗,借呗,还款升级,推荐等弹窗',
      desc: '关闭支付成功后的升级、开通、推荐等弹窗',
      enable: false,
      activityIds: ['com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main', 'com.alipay.android.msp.ui.views', 'com.alipay.android.msp.ui.views.MspContainerActivity', 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        matches: '@[(name$=".Image"&&text.length=0)||((text^="暂不升级"||text^="放弃升级")||text="关闭")][visibleToUser=true][desc.length=null] <<n * <n * > * >n [((text^="同意")&&((text*="协议并"||text*="升级并")))&&(text$="确认交易"||text$="升级"||text$="开通"||text*="刷脸"||text$="付款")||text="确认"||text="立即领取"||text="立即开通"]',
        snapshotUrls: ['https://i.gkd.li/import/12737055', 'https://i.gkd.li/import/13915022', 'https://i.gkd.li/import/13183946', 'https://i.gkd.li/import/12826077', 'https://i.gkd.li/import/12915864', 'https://i.gkd.li/import/14229068', 'https://i.gkd.li/import/13631362', 'https://i.gkd.li/import/13857535', 'https://i.gkd.li/import/14060628', 'https://i.gkd.li/i/14650607', 'https://i.gkd.li/i/15050300', 'https://i.gkd.li/i/16106615', 'https://i.gkd.li/i/17391739', 'https://i.gkd.li/i/17945065', 'https://i.gkd.li/i/14893122', 'https://i.gkd.li/i/19449399', 'https://i.gkd.li/i/20684144', 'https://i.gkd.li/i/23455533', 'https://i.gkd.li/i/25000603'],
        excludeSnapshotUrls: ['https://i.gkd.li/i/19478718'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity', 'com.alipay.android.msp.ui.views.MspUniRenderActivity'],
        matches: ['[text="根据相关法律法规要求，请尽快完成花呗升级"]', 'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]'],
        snapshotUrls: ['https://i.gkd.li/i/13183946', 'https://i.gkd.li/i/12826077'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text*="花呗服务"]', '@[clickable=true] >2 [text="暂不升级，继续付款"]'],
        snapshotUrls: ['https://i.gkd.li/i/13631362', 'https://i.gkd.li/i/13857535'],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@Image[width<90] - [text="花呗服务升级"] <<3 Dialog <2 View < View[index=parent.childCount.minus(1)] <n WebView <<4 [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/25000603',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
        snapshotUrls: 'https://i.gkd.li/i/12737055',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity', 'com.alipay.android.msp.ui.views.MspUniRenderActivity'],
        matches: ['[text="根据相关法律法规要求，请尽快完成花呗升级"]', 'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]'],
        snapshotUrls: ['https://i.gkd.li/i/13183946', 'https://i.gkd.li/i/12826077'],
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text*="花呗服务"]', '@[clickable=true] >2 [text="暂不升级，继续付款"]'],
        snapshotUrls: ['https://i.gkd.li/i/13631362', 'https://i.gkd.li/i/13857535'],
        fastQuery: true,
        _uniqueKey: 6
      },
      ],
    },
{
      key: 1,
      name: '权限提示-定位权限',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.AlipayLogin', 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App', 'com.alipay.mobile.beehive.cityselect.ui.CeilingHomeCitySelectActivity'],
        matches: '@[desc="取消"] + [text*="位置权限"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18549931', 'https://i.gkd.li/i/23415365', 'https://i.gkd.li/i/23415366'],
        exampleUrls: 'https://e.gkd.li/caa96cc4-9943-40d8-8cb6-8c89aa60b20f',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.AlipayLogin',
        matches: '@[desc="关闭"] - LinearLayout >(2,4) [text^="定位到" || text^="开启定位权限"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18551258', 'https://i.gkd.li/i/19267032', 'https://i.gkd.li/i/25041632'],
        exampleUrls: 'https://e.gkd.li/c153cd53-16a1-4d77-bf99-9cac8821ccf8',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[desc="关闭"] - * >4 [text*="开启定位权限"]',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '权限提示-通知权限',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '底部悬浮提示',
        activityIds: ['com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity', 'com.eg.android.AlipayGphone.AlipayLogin'],
        matches: ['[text^="开启通知权限" || text^="开通推送通知"][visibleToUser=true]', '[id="com.alipay.mobile.antui:id/closeButton"][desc="关闭"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/13194955', 'https://i.gkd.li/i/16494085'],
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '消息页弹窗提示',
        activityIds: 'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
        matches: '[text="选择通知接收范围"] +3 * > [text="暂时不用"]',
        snapshotUrls: ['https://i.gkd.li/i/13669620', 'https://i.gkd.li/i/14944514'],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="立即更新" || text="马上体验"] <n * > [text*="稍后"]',
        snapshotUrls: ['https://i.gkd.li/i/13327095', 'https://i.gkd.li/i/15010554'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text="版本更新" || text^="Version"]', '[id="com.alipay.mobile.antui:id/btn_close" || id="com.alipay.mobile.accountauthbiz:id/close_dialog_button"]'],
        snapshotUrls: ['https://i.gkd.li/i/13490805', 'https://i.gkd.li/i/13580594', 'https://i.gkd.li/i/23236828'],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
        snapshotUrls: 'https://i.gkd.li/i/13490797',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: ['com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage', '.AlipayLogin'],
        matches: ['[text="立即更新" || text="马上体验"]', '[text^="稍后"][text.length=4]'],
        snapshotUrls: ['https://i.gkd.li/i/13327095', 'https://i.gkd.li/i/15010554'],
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['com.alipay.mobile.about.ui.AboutAlipayActivity', '.AlipayLogin', 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main'],
        matches: ['[text="版本更新" || text^="Version"]', '[id="com.alipay.mobile.antui:id/btn_close" || id="com.alipay.mobile.accountauthbiz:id/close_dialog_button"]'],
        snapshotUrls: ['https://i.gkd.li/i/13490805', 'https://i.gkd.li/i/13580594', 'https://i.gkd.li/i/23236828'],
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: '.AlipayLogin',
        matches: '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
        snapshotUrls: 'https://i.gkd.li/i/13490797',
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
        snapshotUrls: ['https://i.gkd.li/i/13490805', 'https://i.gkd.li/i/13580594'],
        _uniqueKey: 6
      },
      ],
    },
{
      key: 4,
      name: '全屏广告-设置支付宝小组件',
      desc: '关闭支付宝小组件设置提示和推荐',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
        snapshotUrls: 'https://i.gkd.li/import/13327349',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: '[text="添加会员小组件"] < View +3 View[childCount=2] > [text="近期不再提醒我"]',
        snapshotUrls: 'https://i.gkd.li/i/16427922',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '[text="通用半浮层容器页面"] >4 [text*="小组件"] - View[index=0][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/26164320', 'https://i.gkd.li/i/26164322'],
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text="设置支付宝小组件"]', '@[clickable=true] > [text="关闭"]'],
        snapshotUrls: 'https://i.gkd.li/i/13327349',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main', 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
        matches: '[text^="去"][text.length>2] + [text="近期不再提醒我"]',
        snapshotUrls: ['https://i.gkd.li/i/16427922', 'https://i.gkd.li/i/22984695', 'https://i.gkd.li/i/22984696', 'https://i.gkd.li/i/24981728'],
        exampleUrls: 'https://e.gkd.li/de3df4c8-6ab4-45a0-aec5-0fbdfa75e823',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: '[text="添加会员小组件"] < View +3 View[childCount=2] > [text="近期不再提醒我"]',
        snapshotUrls: 'https://i.gkd.li/i/16427922',
        exampleUrls: 'https://e.gkd.li/de3df4c8-6ab4-45a0-aec5-0fbdfa75e823',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 10,
      name: '分段广告-小程序-12306',
      desc: '关闭12306小程序界面的推广广告',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
      {
        key: 0,
        matches: '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/import/13763314',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="对该内容不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/import/13763315',
        preKeys: 0,
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13915022',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 12,
      name: '功能类-支付后自动点击完成',
      desc: '支付/充值/提交成功后自动点击完成按钮',
      enable: false,
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text="支付成功" || text="充值成功" || text="提交成功"]', '[text="完成"]'],
        snapshotUrls: ['https://i.gkd.li/import/14008852', 'https://i.gkd.li/i/17503266', 'https://i.gkd.li/i/16328809', 'https://i.gkd.li/i/17686972'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity', 'com.alipay.android.phone.businesscommon.ucdp.nfc.activity.NResPageActivity'],
        matches: ['[text="支付成功" || text="充值成功" || text="提交成功"]', '[text="完成"]'],
        snapshotUrls: ['https://i.gkd.li/i/14008852', 'https://i.gkd.li/i/16328809', 'https://i.gkd.li/i/17503266', 'https://i.gkd.li/i/17686972'],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '[id="com.alipay.android.app:id/rl_nav_bar"] > [id="com.alipay.android.app:id/nav_right_textview"]',
        snapshotUrls: 'https://i.gkd.li/i/14008852',
        _uniqueKey: 2
      },
      ],
    },
{
      key: 13,
      name: '分段广告-出行扫码广告',
      desc: '关闭扫码出行页面的推广广告',
      enable: false,
      activityIds: 'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击[展开更多]',
        matches: '@[desc="展开更多选项"] - * >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14546044',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[对该内容不感兴趣]',
        matches: '@RelativeLayout[clickable=true] >2 [text$="内容不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/14546047', 'https://i.gkd.li/i/15209602'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
        matches: 'RelativeLayout[childCount=2][desc="全屏广告"] ImageView[desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/14034152',
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: 'WebView > View > View > View > View > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/16812751',
        exampleUrls: 'https://e.gkd.li/ebbd606a-0e21-4fc5-b0c3-49e4d87d065c',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@[text*="跳过"] + [visibleToUser=true][text^="账单分期还"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/18409779',
        exampleUrls: 'https://e.gkd.li/cc064c84-75a9-4447-b01b-9d5597515093',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: 'Image[text="关闭弹屏"]',
        snapshotUrls: 'https://i.gkd.li/i/22531246',
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: '.AlipayLogin',
        matches: '@[text="我知道了"][clickable=true] -n [text^="用碰一下支付"]',
        snapshotUrls: 'https://i.gkd.li/i/24563264',
        fastQuery: true,
        _uniqueKey: 6
      },
      ],
    },
{
      key: 14,
      name: '功能类-关闭免密支付开关',
      desc: '关闭免密支付功能开关',
      enable: false,
      actionMaximum: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
        snapshotUrls: ['https://i.gkd.li/i/14630824', 'https://i.gkd.li/i/14630825', 'https://i.gkd.li/i/17107841'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text$="推荐你"][visibleToUser=true]', '@[clickable=true] > [text="关闭"]'],
        snapshotUrls: ['https://i.gkd.li/i/14060628', 'https://i.gkd.li/i/14893122', 'https://i.gkd.li/i/15050300', 'https://i.gkd.li/i/20684144'],
        exampleUrls: 'https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text="同意协议并开通"]', '[text="30天不再提醒"]'],
        snapshotUrls: ['https://i.gkd.li/i/14060628', 'https://i.gkd.li/i/15050300'],
        exampleUrls: 'https://m.gkd.li/57941037/8daecaeb-35f0-4f3a-8d5a-a19098a992d5',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 15,
      name: '分段广告-服务消息页面卡片广告-1',
      desc: '关闭服务消息页面的卡片广告',
      enable: false,
      activityIds: ['com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity', 'com.alipay.android.phone.msgboxapp.ui.activity.MBoxTabPageActivity'],
      fastQuery: true,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        matches: '@[clickable=true] > [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/14787644', 'https://i.gkd.li/i/23935865'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] >2 [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/14787585', 'https://i.gkd.li/i/23935930'],
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 16,
      name: '全屏广告-弹窗广告',
      desc: '关闭全屏弹窗广告',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
        matches: 'RelativeLayout[childCount=2][desc="全屏广告"] ImageView[desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/14034152',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: 'WebView > View > View > View > View > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/16812751',
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@[text*="跳过"] + [visibleToUser=true][text^="账单分期还"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/18409779',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '外卖红包',
        activityIds: '.com.eg.android.AlipayGphone.AlipayLogin',
        matches: '[desc="推荐广告"] + * > [desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/21138908',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: 'Image[text="关闭弹屏"]',
        snapshotUrls: 'https://i.gkd.li/i/22531246',
        _uniqueKey: 4
      },
      {
        key: 5,
        name: '小组件弹窗',
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: '[text^="去"][text.length>2] + [text="近期不再提醒我"]',
        snapshotUrls: ['https://i.gkd.li/i/16427922', 'https://i.gkd.li/i/22984695', 'https://i.gkd.li/i/22984696', 'https://i.gkd.li/i/24981728'],
        _uniqueKey: 5
      },
      {
        key: 6,
        activityIds: '.AlipayLogin',
        matches: '@[text="我知道了"][clickable=true] -n [text^="用碰一下支付"]',
        snapshotUrls: 'https://i.gkd.li/i/24563264',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '点击[展开更多]',
        matches: '@[desc="展开更多选项"] - * >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14546044',
        exampleUrls: 'https://m.gkd.li/57941037/d7c12df8-a92e-45be-a462-bef23ca9b5fc',
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '点击[对该内容不感兴趣]',
        matches: '@RelativeLayout[clickable=true] >2 [text$="内容不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/14546047', 'https://i.gkd.li/i/15209602'],
        exampleUrls: 'https://m.gkd.li/57941037/7008e1da-738c-4790-9f12-6a5155d42c47',
        preKeys: [0],
        _uniqueKey: 8
      },
      ],
    },
{
      key: 17,
      name: '功能类-自动授权登录-1',
      desc: '自动点击登录确认',
      enable: false,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '[text="支付宝授权"] >3 @[childCount=0][text="同意"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/17376764',
        fastQuery: true,
        actionMaximum: 1,
        action: 'clickCenter',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '@[checked=true] < FrameLayout - [text*="免密"][text$="支付"]',
        snapshotUrls: ['https://i.gkd.li/i/14630824', 'https://i.gkd.li/i/14630825', 'https://i.gkd.li/i/17107841'],
        exampleUrls: 'https://e.gkd.li/7c789099-9b6f-40a2-bc3b-c73b30891cf0',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text^="开通"][text$="免密支付"][visibleToUser=true]', '@[clickable=true] > [text="关闭"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/19449399',
        exampleUrls: 'https://e.gkd.li/c8388cd5-a97f-4683-9ef1-2caa0a24de91',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 18,
      name: '功能类-无法访问时点击[返回]-1',
      desc: '无法访问时点击[返回]',
      enable: false,
      _suffixCount: 1,
      rules: [
      {
        key: 0,
        activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity', 'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main', 'com.alipay.android.living.activity.LivingNotTransparentDetailActivity', 'com.alipay.android.phone.wallet.blessingcard_receive.biz.activity.ReceiveDialogActivity', 'com.alipay.android.living.activity.LivingDetailActivity', '.AlipayLogin'],
        matches: ['[text="访问被拒绝" || text="人气太旺啦，请稍后再试" || text="訪問被拒絕" || text="人氣太旺啦，請稍後再試" || text="伺服器繁忙，請稍後再試"][visibleToUser=true]', '[id="com.alipay.mobile.antui:id/back_button"][clickable=true]'],
        snapshotUrls: ['https://i.gkd.li/i/23046994', 'https://i.gkd.li/i/23096790', 'https://i.gkd.li/i/23832722', 'https://i.gkd.li/i/24353818', 'https://i.gkd.li/i/24353826', 'https://i.gkd.li/i/24183318', 'https://i.gkd.li/i/25199767', 'https://i.gkd.li/i/25485052'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '@[checked=true] < * - [text$="免密支付"]',
        snapshotUrls: ['https://i.gkd.li/i/14630824', 'https://i.gkd.li/i/14630825'],
        exampleUrls: 'https://m.gkd.li/57941037/1e3a5f01-c42b-4d41-9d7d-21ff96c0075f',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 19,
      name: '分段广告-服务消息页面卡片广告-1-1-1-1',
      desc: '点击关闭-不感兴趣',
      activityIds: ['com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity', 'com.alipay.android.phone.msgboxapp.ui.activity.MBoxTabPageActivity'],
      fastQuery: true,
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        matches: '@[clickable=true] > [text="广告"]',
        snapshotUrls: ['https://i.gkd.li/i/14787644', 'https://i.gkd.li/i/23935865'],
        exampleUrls: 'https://m.gkd.li/57941037/c3e08729-6d97-4a87-bfc3-1e38dd95c384',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[clickable=true] >2 [text="不感兴趣"]',
        snapshotUrls: ['https://i.gkd.li/i/14787585', 'https://i.gkd.li/i/23935930'],
        exampleUrls: 'https://m.gkd.li/57941037/64c8c27d-23de-43b1-a87b-e2107b644eb1',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '@[clickable=true] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/14787644',
        exampleUrls: 'https://m.gkd.li/57941037/c3e08729-6d97-4a87-bfc3-1e38dd95c384',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '@[clickable=true] >2 [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/14787585',
        exampleUrls: 'https://m.gkd.li/57941037/64c8c27d-23de-43b1-a87b-e2107b644eb1',
        preKeys: [0],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 20,
      name: '功能类-[0元下单权益]弹窗',
      desc: '点击关闭',
      enable: false,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: '[text="关闭"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*="0元下单"]',
        snapshotUrls: 'https://i.gkd.li/i/14893122',
        exampleUrls: 'https://m.gkd.li/57941037/3575bbbc-717b-466d-b863-443a15629ef6',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 21,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main', 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
        matches: 'WebView[text="基金"] >(2,3) View[childCount=3] > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: ['https://i.gkd.li/i/14907533', 'https://i.gkd.li/i/15144834', 'https://i.gkd.li/i/15220394', 'https://i.gkd.li/i/15231403'],
        exampleUrls: 'https://m.gkd.li/57941037/5df9b6fb-7455-492c-a726-fb6a42266a02',
        matchRoot: true,
        forcedTime: 10000,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: 'View[childCount=3] >4 View[childCount=6] > @TextView[index=2][clickable=true][visibleToUser=true] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/15144844',
        exampleUrls: 'https://m.gkd.li/57941037/2d714755-efe9-4c63-8187-7f9b7a5a199c',
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '余额宝广告',
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@TextView[width<50 && height<50] -n [text="去看看"]',
        snapshotUrls: 'https://i.gkd.li/i/23054580',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '余额宝转出-询问转出原因',
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@TextView[text="15天内不再询问"][clickable=true] -n [text$="转出原因"]',
        snapshotUrls: 'https://i.gkd.li/i/24229300',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: ['com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main', 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
        matches: 'WebView[text="基金"] >(2,3) View[childCount=3] > @TextView[clickable=true][visibleToUser=true][text=""] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: ['https://i.gkd.li/i/14907533', 'https://i.gkd.li/i/15144834', 'https://i.gkd.li/i/15220394', 'https://i.gkd.li/i/15231403'],
        exampleUrls: 'https://m.gkd.li/57941037/5df9b6fb-7455-492c-a726-fb6a42266a02',
        _uniqueKey: 4
      },
      ],
    },
{
      key: 22,
      name: '其他-蚂蚁理财社区-[加入同路人]弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
        matches: '@TextView[clickable=true][text=""] < * > [visibleToUser=true][text="立即加入"] <<n [id="com.alipay.mobile.nebula:id/h5_trans_web_content"]',
        snapshotUrls: 'https://i.gkd.li/i/15289022',
        exampleUrls: 'https://m.gkd.li/57941037/e6332999-1c2b-49f0-84e1-780424a5cf2a',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 23,
      name: '全屏广告-[银行卡还款服务升级]弹窗',
      desc: '点击[放弃升级，直接付款]',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@[clickable=true] >2 [text="放弃升级，直接付款"]',
        snapshotUrls: 'https://i.gkd.li/i/16106615',
        exampleUrls: 'https://m.gkd.li/57941037/1b788a34-68f6-43c0-8be4-e13cb8221852',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 24,
      name: '开屏广告-小程序开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
        matches: '@View[id=null][text=null][childCount=0][visibleToUser=true] < ViewGroup[id=null][text=null][childCount=1][index=parent.childCount.minus(1)] <7 ViewGroup <2 ViewGroup < ViewGroup < LinearLayout < RelativeLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/17141999',
        exampleUrls: 'https://e.gkd.li/a243e31f-f1b5-4689-8d1a-c53250be651e',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 25,
      name: '功能类-自动授权登录-1-1-1-1',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '[text="支付宝授权"] >3 @[childCount=0][text="同意"] <<n [id="com.alipay.mobile.nebula:id/h5_pc_container"]',
        snapshotUrls: 'https://i.gkd.li/i/17376764',
        fastQuery: true,
        actionMaximum: 1,
        action: 'clickCenter',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 26,
      name: '局部广告-直播悬浮窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@[id="com.alipay.mobile.beevideo:id/fl_bee_player_view_container"][childCount=2] > [id="com.alipay.mobile.beevideo:id/rl_player_poster"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21467483',
        exampleUrls: 'https://e.gkd.li/3698e238-f39b-47ce-b0df-e2e47c15b400',
        fastQuery: true,
        excludeSnapshotUrls: 'https://i.gkd.li/i/23763580',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@TextView[clickable=true][width<110 && height<110] +n [text="产品动态"]',
        snapshotUrls: 'https://i.gkd.li/i/24548034',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 27,
      name: '功能类-余额宝转出自动勾选[短期不再提示]',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: ['[text^="该笔为你快速转出"]', '@CheckBox + [text$="不再提示"]'],
        snapshotUrls: ['https://i.gkd.li/i/22798330', 'https://i.gkd.li/i/22798432', 'https://i.gkd.li/i/24230171'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 28,
      name: '功能类-自动领取会员积分',
      desc: '点击[全部领取]',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        matches: '@[text*="领取"] < [childCount=1] <n View <<2 * - * >2 [text="我的积分"]',
        snapshotUrls: ['https://i.gkd.li/i/22951439', 'https://i.gkd.li/i/22960401', 'https://i.gkd.li/i/23455621', 'https://i.gkd.li/i/23577538'],
        _uniqueKey: 0
      },
      ],
    },
{
      key: 29,
      name: '功能类-无法访问时点击[返回]-1-1-1-1',
      _suffixCount: 1,
      _dupIndex: 1,
      rules: [
      {
        key: 0,
        activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity', 'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main', '.AlipayLogin', 'com.alipay.android.phone.wallet.blessingcard_receive.biz.activity.ReceiveDialogActivity'],
        matches: ['[text="访问被拒绝" || text="人气太旺啦，请稍后再试"][visibleToUser=true]', '[id="com.alipay.mobile.antui:id/back_button"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/23046994', 'https://i.gkd.li/i/23096790', 'https://i.gkd.li/i/23549719', 'https://i.gkd.li/i/24183318', 'https://i.gkd.li/i/25199767'],
        exampleUrls: 'https://e.gkd.li/c1ddb8bf-084b-4109-b777-96c02858d266',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 30,
      name: '其他-滑动验证时返回',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaTransActivity$Main',
        matches: '[childCount=0][text="为保障您的正常访问请进行验证"] <<n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_trans_progress_rl"]',
        snapshotUrls: 'https://i.gkd.li/i/23158302',
        exampleUrls: 'https://e.gkd.li/f2571f51-3a8c-4e47-a7c5-3363375c1b78',
        fastQuery: true,
        action: 'back',
        _uniqueKey: 0
      },
      ],
    },
{
      key: 31,
      name: '其他-开通刷脸支付弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
        matches: ['[text="开通刷脸支付"]', '@[clickable=true] > [text="关闭"]'],
        snapshotUrls: 'https://i.gkd.li/i/23455533',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 32,
      name: '功能类-确认清理已选中的缓存',
      rules: [
      {
        key: 0,
        activityIds: 'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        matches: ['[text="是否确认清理已选中的缓存"][visibleToUser=true]', '[text="确定"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/23619464',
        exampleUrls: 'https://e.gkd.li/4dfc8429-e633-4cab-8f0e-7cf1f86f98ce',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 33,
      name: '青少年模式',
      rules: [
      {
        key: 0,
        name: '底部悬浮卡片-启用未成年人保护模式"',
        activityIds: '.AlipayLogin',
        matches: ['@[id="com.alipay.android.phone.wallet.manufacturebiz:id/teenager_cancel"] - RelativeLayout[childCount=4] > [text="启用未成年人保护模式"]'],
        snapshotUrls: 'https://i.gkd.li/i/24992663',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});