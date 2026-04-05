import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver',
  name: 'TwiTake',
  groups: [
{
    key: 3,
    name: '评价提示-评分弹窗',
    desc: '点击 LATER ',
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',
    fastQuery: true,
    rules: [
      {
          activityIds: 'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver',
          matches: [
              '[text="Love it"][visibleToUser=true]',
              '[text="LATER"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13748858',
      },
      {
          activityIds: 'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver.MainActivity',
          matches: '[id="downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13748858',
      },
    ],
  }
  ],
});
