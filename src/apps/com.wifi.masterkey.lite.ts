import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wifi.masterkey.lite',
  name: '万能钥匙',
  groups: [
{
      key: 1,
      name: '分段广告-首页卡片广告',
      activityIds: 'com.wifitutu.ui.main.HomeMainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@[id="com.zm.wfsdk:id/wf_sdk_native_express_close_rl"] - FrameLayout >2 [text="免费直连"]',
        snapshotUrls: 'https://i.gkd.li/i/22801665',
        exampleUrls: 'https://e.gkd.li/87fe7de1-ba4b-4922-941b-96a88e67f1b0',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="不感兴趣"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/22801668',
        exampleUrls: 'https://e.gkd.li/1b66dbd9-85b7-4287-bf3c-7d6723b8afe8',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});