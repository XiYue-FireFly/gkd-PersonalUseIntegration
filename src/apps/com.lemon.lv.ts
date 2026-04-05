import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
{
      key: 0,
      name: '分段广告-导出界面底部广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      activityIds: 'com.vega.export.edit.view.ExportActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        name: '点击[关闭]',
        matches: 'LynxAdComponentView < * > @FlattenUIImage <<n [vid="exportAdContainer"]',
        snapshotUrls: 'https://i.gkd.li/i/14648627',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[不感兴趣]',
        matches: '@[clickable=true] > [text="不感兴趣"]',
        snapshotUrls: 'https://i.gkd.li/i/14648626',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
{
      key: 1,
      name: '局部广告-选择素材界面上方广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.vega.libcutsame.select.view.CutSameSelectMediaActivity',
        matches: '@LynxFlattenUI[clickable=true][visibleToUser=true] +6 [text="立即下载"]',
        snapshotUrls: 'https://i.gkd.li/i/14122865',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="gallery_layout_below_category_view"] >3 [text="立即下载"] -n LynxFlattenUI[clickable=true]',
        _uniqueKey: 1
      },
      ],
    },
{
      key: 2,
      name: '功能类-恢复创作',
      desc: '自动点击[立即恢复]按钮',
      rules: [
      {
        key: 0,
        activityIds: 'com.vega.main.MainActivity',
        matches: '[vid="tv_title_resume_design"] +2 [vid="tvResumeNow"]',
        snapshotUrls: 'https://i.gkd.li/i/14292755',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '[vid="tv_title_resume_design"] +2 [vid="tvResumeNow"]',
        _uniqueKey: 1
      },
      ],
    },
  ],
});