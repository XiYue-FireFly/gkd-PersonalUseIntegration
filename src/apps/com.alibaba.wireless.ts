import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
{
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: ['.launch.home.V5HomeActivity', '.workbench.myali.MyAliSettingActivity'],
        matches: '[id="com.alibaba.wireless:id/update_button_cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/12684422', 'https://i.gkd.li/i/12684426'],
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: '.launch.home.V5HomeActivity',
        matches: '[vid="update_pop_cancel_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/15004486',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id="com.alibaba.wireless:id/update_button_cancel"]',
        snapshotUrls: ['https://i.gkd.li/i/12684422', 'https://i.gkd.li/i/12684426'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[vid="update_pop_cancel_btn"]',
        snapshotUrls: 'https://i.gkd.li/i/15004486',
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-首页弹窗广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
        matches: '@Image[text*="FXa-124-124"][visibleToUser=true] <<n [id="com.alibaba.wireless:id/v_yacht_float_cell"]',
        snapshotUrls: ['https://i.gkd.li/i/13683509', 'https://i.gkd.li/i/13683510'],
        fastQuery: true,
        actionMaximum: 1,
        resetMatch: 'app',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: 'WebView >n View > Image[text*="FXa-124-124"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});