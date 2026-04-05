import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.documentsui',
  name: '文件',
  groups: [
{
      key: 1,
      name: '功能类-允许第三方应用访问文件夹',
      desc: '点击允许',
      rules: [
      {
        key: 0,
        activityIds: 'com.android.documentsui.picker.PickActivity',
        matches: ['[text^="要允许"][visibleToUser=true]', '[text="允许"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/13801468',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[text="取消"] + [text="允许"]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '功能类-使用此文件夹',
      rules: [
      {
        key: 0,
        activityIds: 'com.android.documentsui.picker.PickActivity',
        matches: '[text="使用此文件夹"]',
        snapshotUrls: 'https://i.gkd.li/i/13916082',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.android.documentsui.picker.PickActivity',
        matches: '[text="使用此文件夹"]',
        snapshotUrls: 'https://i.gkd.li/i/13916082',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 3,
      name: '功能类-自动选择排序方式[修改日期（从新到旧）]',
      rules: [
      {
        key: 0,
        activityIds: '.picker.PickActivity',
        matches: '[text="修改日期（从新到旧）"][checked=false][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/23096908',
        exampleUrls: 'https://e.gkd.li/bf621eae-8268-4381-aa46-4161c7811cbe',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
  ],
});