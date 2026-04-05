import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.search',
  name: '智慧搜索',
  groups: [
{
      key: 0,
      name: '分段广告-下拉搜索横幅广告',
      activityIds: ['.HomeActivity', '.MainActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[id="com.huawei.search:id/iv_topic_close_in_image" || id="com.huawei.search:id/iv_topic_left_close" || id="com.huawei.search:id/iv_topic_close_in_pps"]',
        snapshotUrls: ['https://i.gkd.li/i/12667938', 'https://i.gkd.li/i/12745008', 'https://i.gkd.li/i/12841076', 'https://i.gkd.li/i/13266095'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'TextView[text="直接关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/12745001'],
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.huawei.search:id/iv_topic_close_in_image"||id="com.huawei.search:id/iv_topic_left_close"||id="com.huawei.search:id/iv_topic_close_in_pps"]',
        snapshotUrls: ['https://i.gkd.li/i/12667938', 'https://i.gkd.li/i/12745008', 'https://i.gkd.li/i/12841076', 'https://i.gkd.li/i/13266095'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'ViewGroup[id="com.huawei.search:id/unlike_flow_layout"] > TextView[text="直接关闭"]',
        snapshotUrls: ['https://i.gkd.li/i/12745001'],
        _uniqueKey: 3
      },
      ],
    },
{
      key: 1,
      name: '局部广告-搜索框下广告',
      desc: '点击x掉',
      rules: [
      {
        key: 0,
        activityIds: '.HomeActivity',
        matches: '[vid="btn_full_mode_cancel"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/24856481',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});