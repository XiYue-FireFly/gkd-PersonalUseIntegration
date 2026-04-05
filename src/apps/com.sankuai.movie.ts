import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.movie',
  name: '猫眼',
  groups: [
{
      key: 1,
      name: '权限提示-开启通知弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '@ImageView[clickable=true][visibleToUser=true] - * > [text="开启通知"]',
        snapshotUrls: 'https://i.gkd.li/i/18455375',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text^="更新"] +(3) LinearLayout > [text="取消"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});