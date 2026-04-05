import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
{
      key: 1,
      name: '功能类-自动安装应用',
      activityIds: ['.PackageInstallerActivity', '.FlymePackageInstallerActivity', '.PackageInterceptActivity', '.NewInstallInstalling', '.InstallSuccess', '.oplus.InstallAppProgress', '.DeleteStagedFileOnResult'],
      fastQuery: true,
      forcedTime: 10000,
      rules: [
      {
        key: 0,
        name: '点击[继续安装]',
        matches: '[text="继续安装"][focusable=true || parent.focusable=true || parent.parent.focusable=true]',
        snapshotUrls: ['https://i.gkd.li/i/13206444', 'https://i.gkd.li/i/14046749', 'https://i.gkd.li/i/16550275', 'https://i.gkd.li/i/23621117'],
        excludeSnapshotUrls: 'https://i.gkd.li/i/23621105',
        _uniqueKey: 0
      },
      {
        key: 1,
        name: '点击[完成]',
        matches: '[text="完成"]',
        snapshotUrls: ['https://i.gkd.li/i/13206476', 'https://i.gkd.li/i/13766420', 'https://i.gkd.li/i/13962438', 'https://i.gkd.li/i/14138323', 'https://i.gkd.li/i/14471862', 'https://i.gkd.li/i/16550273'],
        _uniqueKey: 1
      },
      {
        key: 2,
        name: '点击[安装]',
        matches: '[vid="confirm_bottom_button_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/14228348',
        _uniqueKey: 2
      },
      {
        key: 4,
        matches: 'LinearLayout[childCount=1] > Button[text="取消"][childCount=0]',
        excludeMatches: '[text="继续安装" || text="完成"]',
        snapshotUrls: ['https://i.gkd.li/i/14969116', 'https://i.gkd.li/i/17158050'],
        _uniqueKey: 4
      },
      {
        key: 3,
        name: '点击[继续安装]-1',
        activityIds: ['com.android.packageinstaller.PackageInstallerActivity', 'com.android.packageinstaller.FlymePackageInstallerActivity'],
        matches: '[text="继续安装"]',
        snapshotUrls: ['https://i.gkd.li/i/13206444', 'https://i.gkd.li/i/14046749', 'https://i.gkd.li/i/16550275'],
        _uniqueKey: 3,
        _uniqueName: '点击[继续安装]-1',
        name: '点击[继续安装]-1'
      },
      {
        key: 5,
        name: '点击[完成]-1',
        activityIds: ['com.android.packageinstaller.NewInstallInstalling', 'com.android.packageinstaller.InstallSuccess', 'com.android.packageinstaller.oplus.InstallAppProgress', 'com.android.packageinstaller.FlymePackageInstallerActivity'],
        matches: '[text="完成"]',
        snapshotUrls: ['https://i.gkd.li/i/13206476', 'https://i.gkd.li/i/13766420', 'https://i.gkd.li/i/13962438', 'https://i.gkd.li/i/14138323', 'https://i.gkd.li/i/14471862', 'https://i.gkd.li/i/16550273'],
        _uniqueKey: 5,
        _uniqueName: '点击[完成]-1',
        name: '点击[完成]-1'
      },
      {
        key: 6,
        name: '点击[安装]-1',
        activityIds: 'com.android.packageinstaller.DeleteStagedFileOnResult',
        matches: '[vid="confirm_bottom_button_layout"]',
        snapshotUrls: 'https://i.gkd.li/i/14228348',
        fastQuery: true,
        _uniqueKey: 6,
        _uniqueName: '点击[安装]-1',
        name: '点击[安装]-1'
      },
      {
        key: 7,
        name: '勾选[已了解此应用未经检测，可能存在风险]',
        activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
        matches: '[vid="checkbox"][checked=false]',
        snapshotUrls: 'https://i.gkd.li/i/14595443',
        fastQuery: true,
        _uniqueKey: 7
      },
      {
        key: 8,
        activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
        matches: '[vid="buttons_panel"]',
        excludeMatches: ['[text="继续安装"]', '[text="完成"]'],
        snapshotUrls: 'https://i.gkd.li/i/14969116',
        fastQuery: true,
        _uniqueKey: 8
      },
      ],
    },
{
      key: 2,
      name: '功能类-授权本次安装',
      rules: [
      {
        key: 0,
        activityIds: '.PackageInterceptActivity',
        matches: '[vid="tv_install_guide"][text*="授权本次安装"][visibleToUser=true]',
        snapshotUrls: 'https://i.gkd.li/i/24465121',
        exampleUrls: 'https://e.gkd.li/6ad6e4c6-3cb7-41b2-a37b-bcaa3c06de34',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 3,
      name: '功能类-自动继续安装高危风险应用',
      rules: [
      {
        key: 0,
        activityIds: '.PackageInterceptActivity',
        matches: ['[text="该应用存在高危风险"][visibleToUser=true]', '@[clickable=true] >2 [text="仍要继续"][visibleToUser=true]'],
        snapshotUrls: 'https://i.gkd.li/i/24540505',
        exampleUrls: 'https://e.gkd.li/2961e749-6aac-4f74-b7f7-268ecc0e14f4',
        fastQuery: true,
        _uniqueKey: 0
      },
      ],
    },
{
      key: 4,
      name: '功能类-勾选[已了解此应用未经检测，可能存在风险]',
      activityIds: ['.PackageInterceptActivity', '.PackageInstallerActivity'],
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: '[vid="checkbox" || vid="deleted_file_state_cb"][checked=false]',
        snapshotUrls: ['https://i.gkd.li/i/14595443', 'https://i.gkd.li/i/22870985'],
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@LinearLayout[clickable=true][id=null] > [text="继续安装"]',
        snapshotUrls: 'https://i.gkd.li/i/22870985',
        preKeys: [0],
        _uniqueKey: 1
      },
      ],
    },
  ],
});