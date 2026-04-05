import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.upxjwb.xrq',
  name: '番喜视频',
  groups: [
{
      key: 1,
      name: '全屏广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '@Image[childCount=0][text=""][width<60 && height<60] < View[childCount=1] < * - View > [text="反馈"]',
        snapshotUrls: 'https://i.gkd.li/i/23519200',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        matches: '[text="反馈"] +(1,2) View[childCount=1] > Image[childCount=0][text=""][width<60 && height<60]',
        snapshotUrls: 'https://i.gkd.li/i/23905532',
        exampleUrls: 'https://e.gkd.li/793d0e85-db69-4d31-bfd9-7ffbd518b962',
        _uniqueKey: 1
      },
      ],
    },
  ],
});