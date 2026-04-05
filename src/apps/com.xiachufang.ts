import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
{
      key: 0,
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
        matches: '[vid="skip_container"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/18587428',
        exampleUrls: 'https://e.gkd.li/5f3509d5-0b0b-4d79-b0e6-275a591ef2f5',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]) || ([visibleToUser=true][text*="跳过"][text.length<10][width<500 && height<200])',
        snapshotUrls: ['https://i.gkd.li/i/19724959', 'https://i.gkd.li/i/19724417'],
        exampleUrls: 'https://e.gkd.li/5c6579f4-77bb-4970-851f-087c2f86d6ad',
        fastQuery: true,
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '局部广告-卡片广告',
      rules: [
      {
        key: 1,
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '[id="com.xiachufang:id/ad_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13348710',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '[id="com.xiachufang:id/jad_feed_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13363079',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13454534',
        fastQuery: true,
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text="下载应用" || text="立即下载" || text="查看详情" || text="领取优惠" || text="进入小程序" || text="了解更多"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13484117',
        fastQuery: true,
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: '.activity.recipe.RecipeDetailActivity',
        matches: '@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout[childCount=2] > LinearLayout[childCount=2] > [text^="立即"]',
        snapshotUrls: 'https://i.gkd.li/i/18249193',
        exampleUrls: 'https://e.gkd.li/f9b63d84-3363-4330-93b9-156d6f3d3d32',
        fastQuery: true,
        _uniqueKey: 5
      },
      {
        key: 6,
        name: '菜谱底部卡片广告-1',
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '[id="com.xiachufang:id/ad_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13348710',
        fastQuery: true,
        _uniqueKey: 6
      },
      {
        key: 7,
        name: '菜谱底部卡片广告-2',
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '[id="com.xiachufang:id/jad_feed_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/13363079',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        name: '菜谱底部卡片广告-1-弹出窗口',
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/13454534',
        fastQuery: true,
        _uniqueKey: 8
      },
      {
        key: 9,
        name: '菜谱底部卡片广告-3',
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '[id="com.xiachufang:id/fl_container"] >6 [name="android.widget.ImageView" && width=32]',
        snapshotUrls: 'https://i.gkd.li/i/13484117',
        fastQuery: true,
        _uniqueKey: 9
      },
      ],
    },
{
      key: 2,
      name: '其他-厨房问卷',
      desc: '点击关闭',
      rules: [
      {
        key: 1,
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '@[desc="关闭"] - [text^="厨房问卷"]',
        snapshotUrls: 'https://i.gkd.li/i/13363042',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '厨房问卷',
        activityIds: 'com.xiachufang.activity.recipe.RecipeDetailActivity',
        matches: '[text^="厨房问卷"] + [desc="关闭"]',
        snapshotUrls: 'https://i.gkd.li/i/13363042',
        _uniqueKey: 2
      },
      ],
    },
  ],
});