import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.xiaochuankeji.zuiyouLite',
  name: '皮皮搞笑',
  groups: [
{
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      order: -10,
      rules: [
      {
        key: 0,
        snapshotUrls: 'https://i.gkd.li/i/14546304',
        fastQuery: true,
        anyMatches: ['@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]', 'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text*="跳过"][text.length<=10]',
        snapshotUrls: ['https://i.gkd.li/i/12745095', 'https://i.gkd.li/i/13387320'],
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[id$="spalsh_ad_view"] >4 [id$="native_container"] >2 [id="cn.xiaochuankeji.zuiyouLite:id/contentView"]',
        snapshotUrls: 'https://i.gkd.li/i/13399391',
        exampleUrls: 'https://m.gkd.li/57941037/485963ab-07b1-412a-a932-badc50cb2688',
        fastQuery: true,
        _uniqueKey: 2
      },
      ],
    },
{
      key: 2,
      name: '分段广告-信息流广告',
      activityIds: 'cn.xiaochuankeji.zuiyouLite.ui.slide.ActivitySlideDetail',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击关闭',
        matches: '[id="cn.xiaochuankeji.zuiyouLite:id/ad_remove"]',
        snapshotUrls: 'https://i.gkd.li/i/13387116',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[不喜欢广告主]',
        matches: '@LinearLayout[clickable=true] > [text="不喜欢广告主"]',
        snapshotUrls: 'https://i.gkd.li/i/13387155',
        preKeys: [0],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击【x】',
        matches: '[id="cn.xiaochuankeji.zuiyouLite:id/ad_remove"]',
        snapshotUrls: 'https://i.gkd.li/i/13387116',
        _uniqueKey: 2
      },
      {
        key: 3,
        name: '点击【不喜欢广告主】',
        matches: '@LinearLayout[clickable=true] > [text="不喜欢广告主"]',
        snapshotUrls: 'https://i.gkd.li/i/13387155',
        preKeys: 0,
        _uniqueKey: 3
      },
      ],
    },
  ],
});