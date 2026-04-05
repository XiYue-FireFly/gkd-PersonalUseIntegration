import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.spotware.ct',
  name: 'cTrader',
  groups: [
{
      key: 1,
      name: '功能类-询问是否是美国居民弹窗',
      desc: '点击[我不是美国居民]-点击[确认]',
      activityIds: 'mobile.droid.ctrader.views.main.MainActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击[我不是美国居民]',
        matches: '[text="我不是美国居民"]',
        snapshotUrls: 'https://i.gkd.li/i/14495502',
        exampleUrls: 'https://m.gkd.li/57941037/959b6c00-0d43-46d4-83eb-056326f036a5',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[确认]',
        matches: '[text="确认"]',
        snapshotUrls: 'https://i.gkd.li/i/14495496',
        exampleUrls: 'https://m.gkd.li/57941037/8adae91e-019d-44eb-8820-b3d560a2b66d',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[text="我不是美国居民"]',
        snapshotUrls: 'https://i.gkd.li/i/14537505',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="确认"]',
        snapshotUrls: 'https://i.gkd.li/i/14495496',
        exampleUrls: 'https://m.gkd.li/101449500/085abfc1-cb72-465b-93b6-63e1c89af88f',
        preKeys: 0,
        _uniqueKey: 3
      },
      ],
    },
  ],
});