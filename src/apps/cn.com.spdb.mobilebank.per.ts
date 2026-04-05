import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  groups: [
{
      key: 1,
      name: '通知提示-消息中心-系统通知请求',
      desc: '关闭消息推送开启提示',
      enable: false,
      activityIds: 'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      snapshotUrls: ['https://i.gkd.li/import/13458535', 'https://i.gkd.li/import/14161174'],
      rules: [
      {
        key: 0,
        matches: '[text="去开启"] + View > Image[text.length=0]',
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.activity.web.stage.StageCommonWebActivity',
        matches: '[text="去开启"] + View > Image[text.length=0]',
        snapshotUrls: 'https://i.gkd.li/i/13458535',
        _uniqueKey: 1
      },
      ],
    },
  ],
});