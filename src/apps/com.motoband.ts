import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.motoband',
  name: '摩托邦',
  groups: [
{
    key: 0,
    name: '开屏广告',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    order: -10,
    snapshotUrls: 'https://i.gkd.li/i/13849831',
    rules: [
      { key: 0, matches: '@View[clickable=true] <3 * <2 * < [vid="splash_container_half_size"]' },
    ],
  }
  ],
});
