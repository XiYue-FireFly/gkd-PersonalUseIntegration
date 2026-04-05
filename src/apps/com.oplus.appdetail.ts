import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oplus.appdetail',
  name: 'OPPO/一加应用安装器',
  groups: [
{
      key: 1,
      name: '功能类-自动安装应用',
      desc: '点击 ①继续安装 ②完成',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击[继续安装]',
        activityIds: ['.model.guide.ui.InstallGuideActivity', '.modelv2.parsing.PackageParsingV2Activity'],
        matches: '[id="com.oplus.appdetail:id/view_bottom_guide_continue_install_btn" || text="继续安装"]',
        excludeMatches: '[id="com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title"][text^="正在扫描"]',
        snapshotUrls: ['https://i.gkd.li/i/13054204', 'https://i.gkd.li/i/13038570', 'https://i.gkd.li/i/23146291', 'https://i.gkd.li/i/23146289'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/13038560',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[完成]',
        activityIds: '.model.finish.InstallFinishActivity',
        matches: '[text="完成"]',
        snapshotUrls: ['https://i.gkd.li/i/13038664', 'https://i.gkd.li/i/13054849'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击【继续安装】',
        activityIds: 'com.oplus.appdetail.model.guide.ui.InstallGuideActivity',
        matches: '[id="com.oplus.appdetail:id/view_bottom_guide_continue_install_btn"]',
        excludeMatches: '[id="com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title"][text^="正在扫描"]',
        snapshotUrls: ['https://i.gkd.li/i/13038560', 'https://i.gkd.li/i/13054204', 'https://i.gkd.li/i/13038570'],
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击【完成】',
        activityIds: 'com.oplus.appdetail.model.finish.InstallFinishActivity',
        matches: '[text="完成"]',
        snapshotUrls: ['https://i.gkd.li/i/13038664', 'https://i.gkd.li/i/13054849'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '功能类-安装中高风险应用',
      activityIds: '.model.guide.ui.InstallGuideActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="不建议安装此应用；若仍需安装，可查看详情"]',
        snapshotUrls: 'https://i.gkd.li/i/22377287',
        exampleUrls: 'https://e.gkd.li/8697d1e8-fa9c-4b5b-92b9-559f55672047',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="已知悉应用风险"][checked=false]',
        snapshotUrls: 'https://i.gkd.li/i/22377327',
        exampleUrls: 'https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="仍然安装"]',
        snapshotUrls: 'https://i.gkd.li/i/22377327',
        exampleUrls: 'https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a',
        preKeys: [1],
        _uniqueKey: 2
      },
      ],
    },
  ],
});