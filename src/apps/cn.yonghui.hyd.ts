import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.yonghui.hyd',
  name: '永辉生活',
  groups: [
{
      key: 1,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
      rules: [
      {
        key: 1,
        name: '好券即将过期弹窗',
        activityIds: 'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
        matches: ['[id="cn.yonghui.hyd:id/advance" || id="cn.yonghui.hyd:id/couponsWillGoneHeaderIv"]', '[id="cn.yonghui.hyd:id/close"]'],
        snapshotUrls: ['https://i.gkd.li/i/13414401', 'https://i.gkd.li/i/13414444'],
        _uniqueKey: 1
      },
      {
        key: 0,
        name: '领券中心-红包弹窗',
        activityIds: 'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
        matches: '[id="cn.yonghui.hyd:id/advance"] +n [id="cn.yonghui.hyd:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13414401',
        _uniqueKey: 0
      },
      {
        key: 2,
        name: '好券即将过期弹窗-1',
        activityIds: 'cn.yonghui.hyd.coupon.couponfactory.CouponFactoryActivity',
        matches: '[id="cn.yonghui.hyd:id/couponsWillGoneHeaderIv"] +n [id="cn.yonghui.hyd:id/close"]',
        snapshotUrls: 'https://i.gkd.li/i/13414444',
        _uniqueKey: 2,
        _uniqueName: '好券即将过期弹窗-1',
        name: '好券即将过期弹窗-1'
      },
      ],
    },
  ],
});