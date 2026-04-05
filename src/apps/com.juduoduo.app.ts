import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.juduoduo.app',
  name: '剧多多',
  groups: [
{
      key: 6,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text="广告"]',
        snapshotUrls: 'https://i.gkd.li/i/13705650',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.juduoduo.app:id/ksad_tk_view"] @ViewGroup[clickable=true] > [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/13705662',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: 'ImageView[width<90][height<90] < @ViewGroup[clickable=true] <<n [id="com.juduoduo.app:id/ksad_tk_view"]',
        snapshotUrls: 'https://i.gkd.li/i/13705650',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[id="com.juduoduo.app:id/ksad_tk_view"] @ViewGroup[clickable=true] > [text="跳过"]',
        snapshotUrls: 'https://i.gkd.li/i/13705662',
        _uniqueKey: 3
      },
      ],
    },
  ],
});