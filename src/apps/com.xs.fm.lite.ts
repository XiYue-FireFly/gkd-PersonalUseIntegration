import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xs.fm.lite',
  name: '番茄音乐（原畅听音乐）',
  groups: [
{
      key: 1,
      name: '全屏广告',
      rules: [
      {
        key: 0,
        activityIds: ['com.dragon.read.pages.main.MainFragmentActivity', 'com.bytedance.polaris.impl.view.BulletSingleContainerActivity'],
        matches: 'FlattenUIImage[clickable=true] -(1,2) FlattenUIText[text="开心收下" || text="前往领取"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/25246321', 'https://i.gkd.li/i/25246625', 'https://i.gkd.li/i/25245765'],
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
        matches: '@ImageView[clickable=true] - [text="添加番茄音乐组件"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/25246270',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
        matches: '@ImageView[clickable=true] <3 ViewGroup[childCount=3] < ViewGroup < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/24908945',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '分段广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
        matches: '[text^="领取成功"][clickable=true][visibleToUser=true][childCount=1]',
        snapshotUrls: 'https://i.gkd.li/i/25246506',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
        matches: '@View[clickable=true][width<90 && height<90] -2 ScrollView < View[childCount=3]',
        snapshotUrls: 'https://i.gkd.li/i/25246616',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '功能类-自动展开回复',
      rules: [
      {
        key: 0,
        activityIds: 'com.xs.fm.karaoke.impl.cover.KaraokeCoverActivity',
        matches: '@ViewGroup[clickable=true] > TextView[text^="展开"][text$="回复"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/25246736',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});