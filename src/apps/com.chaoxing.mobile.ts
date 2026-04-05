import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
{
      key: 1,
      name: '功能类-提示没有网络时点击[重试/确定]',
      rules: [
      {
        key: 0,
        activityIds: '.player.course.CoursePlayerWithNoteActivity',
        matches: ['[text^="请在有网络时进行学习"][visibleToUser=true]', '[text="重试" || text="确定"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/23046734', 'https://i.gkd.li/i/23046852'],
        exampleUrls: 'https://e.gkd.li/17573fa6-2143-4b41-9d61-e922117c9bc7',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 2,
      name: '功能类-提示非WIFI环境时点击[继续]，使用流量播放',
      rules: [
      {
        key: 0,
        activityIds: ['.player.course.CoursePlayerWithNoteActivity', 'com.chaoxing.fanya.aphone.ui.chapter.detail.ui.ChapterDetailActivity'],
        matches: ['[text^="正在使用非WiFi环境"][visibleToUser=true]', '[text="继续"][visibleToUser=true]'],
        snapshotUrls: ['https://i.gkd.li/i/23046887', 'https://i.gkd.li/i/23046892'],
        exampleUrls: 'https://e.gkd.li/d4a8ec6d-031f-4030-b111-51a2f37bd39d',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
      {
        key: 0,
        activityIds: '.main.ui.MainTabActivity',
        matches: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
        snapshotUrls: 'https://i.gkd.li/i/13197374',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[id="com.chaoxing.mobile:id/vNotificationItemClose"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 11,
      name: '功能类-电脑端登录自动确认',
      rules: [
      {
        key: 0,
        activityIds: 'com.chaoxing.mobile.webapp.ui.WebAppViewerActivity',
        matches: 'TextView[text="登录"] < @View[clickable=true][desc="登录"] < * - * > View[childCount=0][text="电脑端学习通登录确认"] <<n [vid="web_view_fragment_refresh_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/23280198',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});