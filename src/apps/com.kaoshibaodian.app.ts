import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kaoshibaodian.app',
  name: '考试宝',
  groups: [
{
      key: 1,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
      {
        key: 0,
        activityIds: ['ksbd.quiz.QuizActivity', 'ksbd.app.practice.QuizActivity'],
        matches: 'FrameLayout[childCount=5] > @FrameLayout[childCount=1][text=null] > ImageView[childCount=0][text=null] <<n [vid="ad_layout"]',
        snapshotUrls: ['https://i.gkd.li/i/16492043', 'https://i.gkd.li/i/21617553'],
        exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: ['ksbd.quiz.QuizActivity', 'ksbd.app.practice.QuizActivity'],
        matches: '[vid="close_iv"]',
        snapshotUrls: ['https://i.gkd.li/i/16492043', 'https://i.gkd.li/i/21617553'],
        exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'ksbd.quiz.QuizActivity',
        matches: 'FrameLayout[childCount=5] > @FrameLayout[childCount=1][text=null] > ImageView[childCount=0][text=null] <<n [vid="ad_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/16492043',
        exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'ksbd.quiz.QuizActivity',
        matches: '[vid="close_iv"]',
        snapshotUrls: 'https://i.gkd.li/i/16492043',
        exampleUrls: 'https://e.gkd.li/c55cd473-21fa-4843-9778-89a3f5c8e073',
        fastQuery: true,
        _uniqueKey: 3
      },
      ],
    },
{
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
      {
        key: 0,
        activityIds: 'ksbd.app.home.HomeActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/16492018',
        exampleUrls: 'https://e.gkd.li/92252573-11c8-4ce8-a0df-4c7e94b7c101',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'ksbd.app.lib.libOrExam.ExerciseAct',
        matches: '[vid="img_close"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/21617539',
        exampleUrls: 'https://e.gkd.li/bc0fdaa3-a33e-48ba-83aa-28a28da60d3a',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: 'ksbd.app.home.HomeActivity',
        matches: '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
        snapshotUrls: 'https://i.gkd.li/i/16492018',
        exampleUrls: 'https://e.gkd.li/92252573-11c8-4ce8-a0df-4c7e94b7c101',
        _uniqueKey: 2
      },
      ],
    },
  ],
});