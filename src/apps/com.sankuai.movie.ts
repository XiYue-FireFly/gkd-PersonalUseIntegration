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
          matches: '@ImageView[clickable=true][visibleToUser=true] - * > [text="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/i/18455375',
      },
      { key: 0, matches: '[text^="更新"] +(3) LinearLayout > [text="取消"]' },
    ],
  }
  ],
});
