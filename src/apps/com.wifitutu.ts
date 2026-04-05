import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
  groups: [
{
      key: 1,
      name: '局部广告-首页-WiFi列表广告',
      desc: '点击关闭',
      rules: [
      {
        key: 1,
        activityIds: 'com.wifitutu.ui.main.MainActivity',
        matches: '@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^="dislike"] + FrameLayout >2 [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13233916',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.wifitutu.ui.main.MainActivity',
        matches: '@Image[text=""] < View +n View > View > TextView[visibleToUser=true][text="广告"] <<n [id="com.wifitutu:id/ad_part"]',
        snapshotUrls: 'https://i.gkd.li/i/13234048',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'View < [desc^="dislike"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13233916',
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@Image[text=""] < View +n View > View > TextView[text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13234048',
        _uniqueKey: 4
      },
      ],
    },
  ],
});