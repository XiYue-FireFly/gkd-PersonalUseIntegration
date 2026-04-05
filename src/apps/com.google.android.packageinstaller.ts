import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
{
      key: 1,
      name: '功能类-自动安装/更新软件',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[text="安装"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14046939',
        _uniqueKey: 0
      },
      {
        key: 2,
        matches: '[text="更新"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14047571', 'https://i.gkd.li/i/14047854'],
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: '[text="完成"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14047514', 'https://i.gkd.li/i/14047969', 'https://i.gkd.li/i/16435556'],
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: ['[text="要更新此应用吗？" || text="要安装此应用吗？"]', '[text="取消"]'],
        excludeMatches: ['[text="更新"][clickable=true]', '[text="安装"][clickable=true]'],
        snapshotUrls: ['https://i.gkd.li/i/16406316', 'https://i.gkd.li/i/16435642'],
        _uniqueKey: 4
      },
      {
        key: 1,
        matches: 'LinearLayout[childCount=2] > [text="安装"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/14046939',
        _uniqueKey: 1
      },
      {
        key: 5,
        matches: 'LinearLayout[childCount=2] > [text="更新"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14047571', 'https://i.gkd.li/i/14047854'],
        _uniqueKey: 5
      },
      {
        key: 6,
        matches: 'LinearLayout[childCount=2] > [text="完成"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/14047514', 'https://i.gkd.li/i/14047969'],
        _uniqueKey: 6
      },
      ],
    },
{
      key: 2,
      name: '功能类-安全警告弹窗',
      desc: '点击[设置]',
      rules: [
      {
        key: 0,
        activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
        matches: ['[text^="出于安全考虑"]', '[text="设置"]'],
        snapshotUrls: 'https://i.gkd.li/i/16406317',
        exampleUrls: 'https://e.gkd.li/e501f0cf-c531-40eb-a747-31377d35c971',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: ['[text*="禁止您的手机安装来自此来源的未知应用"]', '[text="设置"]'],
        snapshotUrls: 'https://i.gkd.li/i/14080242',
        _uniqueKey: 1
      },
      ],
    },
  ],
});