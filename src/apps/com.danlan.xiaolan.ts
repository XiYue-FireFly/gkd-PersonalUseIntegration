import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.danlan.xiaolan',
  name: 'Blued极速版',
  groups: [
    {
      key: 1,
      fastQuery: true,
      name: '未分类-附近的人-广告卡片',
      activityIds: 'com.soft.blued.ui.home.HomeActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.danlan.xiaolan:id/ad_container"] >n [id="com.danlan.xiaolan:id/img_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13421613',
        },
        {
          preKeys: [
            0,
          ],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13421622',
        },
      ],
      enable: false,
    },
    {
      key: 3,
      name: '分段广告-卡片广告',
      fastQuery: true,
      activityIds: [
        'com.blued.android.core.ui.TerminalActivity',
        'com.soft.blued.ui.home.HomeActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.danlan.xiaolan:id/img_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13421613',
            'https://i.gkd.li/i/13421923',
          ],
        },
        {
          preKeys: [
            0,
          ],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13421622',
            'https://i.gkd.li/i/13422170',
          ],
        },
        {
          key: 0,
          matches: '[id="com.danlan.xiaolan:id/img_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13421923',
        },
        {
          preKeys: [
            0,
          ],
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13422170',
        },
      ],
    },
  ],
});
