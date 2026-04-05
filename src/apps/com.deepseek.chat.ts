import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.deepseek.chat',
  name: 'DeepSeek',
  groups: [
{
    key: 1,
    name: '功能类-自动折叠思考过程',
    rules: [
      {
          activityIds: 'com.deepseek.chat.MainActivity',
          matches: '@[clickable=true] > [text="正在思考" || text^="已思考"] + View[desc="折叠"]',
          snapshotUrls: [
              'https://i.gkd.li/i/23982641',
              'https://i.gkd.li/i/23982613',
              'https://i.gkd.li/i/23982615',
          ],
      },
    ],
  }
  ],
});
