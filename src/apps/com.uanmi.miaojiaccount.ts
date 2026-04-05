import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.uanmi.miaojiaccount',
  name: '熊猫记账',
  groups: [
{
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      actionCdKey: 0,
      order: -10,
      rules: [
      {
        key: 0,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: -1,
        matches: '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead" && vid!*="time")]',
        _uniqueKey: -1
      },
      {
        key: 1,
        matches: '[vid="rl_splash"] >3 View[clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14537398',
        exampleUrls: 'https://m.gkd.li/101449500/9c0991ab-cb0e-4174-b822-504cf43f55a2',
        _uniqueKey: 1
      },
      ],
    },
  ],
});