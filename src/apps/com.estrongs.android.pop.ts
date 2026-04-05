import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.estrongs.android.pop',
  name: 'ES文件浏览器',
  groups: [
{
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
      {
        key: 0,
        activityIds: 'com.fighter.loader.view.InteractTemplateAdDialog',
        matches: '[id="com.estrongs.android.pop:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12509667',
        fastQuery: true,
        _uniqueKey: 0
      },
      {
        key: 1,
        activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
        matches: '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
        snapshotUrls: 'https://i.gkd.li/i/12509669',
        fastQuery: true,
        _uniqueKey: 1
      },
      {
        key: 2,
        activityIds: ['.app.openscreenad.HomeBackSplashActivity', '.app.PopVideoPlayer', '.view.FileExplorerActivity'],
        matches: '[vid="ad_close"][visibleToUser=true]',
        snapshotUrls: ['https://i.gkd.li/i/18072076', 'https://i.gkd.li/i/18072078', 'https://i.gkd.li/i/24684475'],
        exampleUrls: 'https://e.gkd.li/3632e624-28bf-45fd-bb52-a7ee9a644b7a',
        fastQuery: true,
        _uniqueKey: 2
      },
      {
        key: 3,
        activityIds: 'com.fighter.loader.view.InteractTemplateAdDialog',
        matches: '[id="com.estrongs.android.pop:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/12509667',
        _uniqueKey: 3
      },
      {
        key: 4,
        activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
        matches: 'TextView[text!=null] < FrameLayout - ImageView - FrameLayout > ImageView',
        snapshotUrls: 'https://i.gkd.li/i/12509669',
        _uniqueKey: 4
      },
      {
        key: 5,
        activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
        matches: '[id="com.estrongs.android.pop:id/interact_ad_root"] >n [id="com.estrongs.android.pop:id/iv_close"]',
        snapshotUrls: 'https://i.gkd.li/i/13936617',
        _uniqueKey: 5
      },
      ],
    },
{
      key: 1,
      name: '局部广告',
      activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
      fastQuery: true,
      rules: [
      {
        key: 0,
        matches: 'ImageView - LinearLayout >2 ImageView[id="com.estrongs.android.pop:id/close"][clickable=true]',
        snapshotUrls: 'https://i.gkd.li/i/12674919',
        _uniqueKey: 0
      },
      {
        key: 1,
        matches: '@[id="com.estrongs.android.pop:id/close"] + [id="com.estrongs.android.pop:id/ad_flag_source"]',
        snapshotUrls: 'https://i.gkd.li/i/12818281',
        _uniqueKey: 1
      },
      {
        key: 2,
        matches: '[vid="close_b_t_a_i_b_no_compliance"]',
        snapshotUrls: 'https://i.gkd.li/i/13842299',
        _uniqueKey: 2
      },
      {
        key: 3,
        matches: 'ImageView - LinearLayout >(2) ImageView[id="com.estrongs.android.pop:id/close"][clickable=true]',
        snapshotUrls: ['https://i.gkd.li/i/12674919'],
        _uniqueKey: 3
      },
      {
        key: 4,
        matches: '@[id="com.estrongs.android.pop:id/close"] + [id="com.estrongs.android.pop:id/ad_flag_source"]',
        snapshotUrls: ['https://i.gkd.li/i/12818281'],
        _uniqueKey: 4
      },
      ],
    },
  ],
});