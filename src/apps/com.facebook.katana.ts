import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.facebook.katana',
  name: 'Facebook',
  groups: [
{
      key: 1,
      name: '功能类-自动点击[查看翻译]',
      activityIds: ['.immersiveactivity.ImmersiveActivity', '.activity.FbMainTabActivity'],
      rules: [
      {
        key: 0,
        matches: '@ViewGroup[clickable=true] > [visibleToUser=true][text="查看翻译"] <<n [id="android:id/list"]',
        snapshotUrls: 'https://i.gkd.li/i/21955231',
        exampleUrls: 'https://e.gkd.li/8801f1f5-ddcb-45b2-9f19-c82e9d1271f1',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="查看翻译"][clickable=true][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/24712867', 'https://i.gkd.li/i/24717051'],
        exampleUrls: 'https://e.gkd.li/a111f9dc-8604-45f5-ba0c-22606890c338',
        matchRoot: true,
        actionCd: 300,
        _uniqueKey: 1
      },
      ],
    },
  ],
});