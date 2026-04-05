import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 3,
      name: '未分类-兴趣领域推荐',
      desc: '出现在长久未登录的账户再次登录时',
      fastQuery: true,
      activityIds: 'com.sina.weibo.account.interest.InterestActivity',
      rules: '[id="com.sina.weibo:id/rl_account_title_bar"] > [id="com.sina.weibo:id/tv_title_bar_skip"][text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/i/12531405',
      enable: false,
    },
    {
      key: 4,
      name: '未分类-精选博主推荐',
      desc: '出现在长久未登录的账户再次登录时',
      fastQuery: true,
      activityIds: 'com.sina.weibo.account.recommend.RecommendActivity',
      rules: [
        '[id="com.sina.weibo:id/tv_option"&&text="取消勾选"]',
        '[id="com.sina.weibo:id/new_next_btn"&&text="进入微博（已选0个）"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12531433',
        'https://i.gkd.li/i/12531434',
      ],
      enable: false,
    },
    {
      key: 5,
      name: '未分类-博文内容区与评论区中间卡片式广告',
      desc: '点击右上角x',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[id="com.sina.weibo:id/left_img_container"] + LinearLayout >2 [id="com.sina.weibo:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12673043',
        },
        {
          key: 1,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[id="com.sina.weibo:id/left_video_container"] + LinearLayout >2 [id="com.sina.weibo:id/close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13635551',
        },
        {
          key: 2,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[id="com.sina.weibo:id/corner_marker_view"] >2 [id="com.sina.weibo:id/right_top_tag"]',
          snapshotUrls: 'https://i.gkd.li/i/12673051',
        },
        {
          key: 3,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[id="com.sina.weibo:id/tvTrendsTitle"] + [id="com.sina.weibo:id/iv_ad_x"]',
          snapshotUrls: 'https://i.gkd.li/i/13787207',
        },
      ],
      enable: false,
    },
    {
      key: 6,
      name: '未分类-评论区博主内容推荐',
      desc: '评论区同一博主其他博文推荐',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.sina.weibo.feed.DetailWeiboActivity',
          ],
          matches: 'RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id="com.sina.weibo:id/ll_close"] > [id="com.sina.weibo:id/tv_tips"] + [id="com.sina.weibo:id/iv_close_icon"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12674498',
            'https://i.gkd.li/i/13035647',
          ],
        },
        {
          preKeys: 0,
          activityIds: [
            'com.sina.weibo.utils.WeiboDialog$CustomDialog',
            'com.sina.weibo.feed.DetailWeiboActivity',
          ],
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12674511',
            'https://i.gkd.li/i/12929591',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 7,
      name: '局部广告-首页顶部话题分享窗口',
      fastQuery: true,
      activityIds: 'com.sina.weibo.MainTabActivity',
      rules: '[id="com.sina.weibo:id/tvGuide"] + [id="com.sina.weibo:id/v_close"] + [id="com.sina.weibo:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12705972',
      enable: false,
    },
    {
      key: 8,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 3,
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches: 'WebView[text="Wbox"] > View[childCount=1] >(1,2) View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid="container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14969848',
            'https://i.gkd.li/i/16944794',
            'https://i.gkd.li/i/19807700',
          ],
        },
        {
          key: 4,
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches: '@Image[text="close"] < View[childCount=4] <2 * <<n [id="com.sina.weibo:id/container"]',
          snapshotUrls: 'https://i.gkd.li/i/14033735',
        },
        {
          key: 0,
          activityIds: 'com.sina.weibo.business',
          matches: '@[id="com.sina.weibo:id/btn_close"] - FrameLayout > [id="com.sina.weibo:id/ad_tag"]',
          snapshotUrls: 'https://i.gkd.li/i/12750090',
        },
        {
          key: 1,
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches: 'View[childCount=2] > @TextView[clickable=true] - View >n [text="元"] <<n [id="com.sina.weibo:id/container"]',
          snapshotUrls: 'https://i.gkd.li/i/13670266',
        },
        {
          key: 2,
          activityIds: 'com.sina.weibo.page.ad.DiscoverAdDialog',
          matches: '[id="com.sina.weibo:id/ad_portrait_layout"] + [id="com.sina.weibo:id/btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12705974',
        },
        {
          key: 3,
          activityIds: 'com.sina.weibo.feed.MPDialogActivity',
          matches: '[text^="今日签到"] <n * + @TextView[visibleToUser=true] <<n [vid="container"]',
          snapshotUrls: 'https://i.gkd.li/i/14969848',
        },
      ],
    },
    {
      key: 9,
      name: '权限提示-通知权限',
      desc: '自动点击暂不开启',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.notifyguidev2.NotifyGuideV2Activity',
          matches: '[text="暂不开启"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18342279',
        },
        '@[id="com.sina.weibo:id/bt_cancel"][text="暂不开启"] + [id="com.sina.weibo:id/bt_confirm"]',
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '自动点击x按钮',
      fastQuery: true,
      activityIds: 'com.sina.weibo.MainTabActivity',
      rules: '[text^="打开通知"] < LinearLayout + ImageView[id="com.sina.weibo:id/right_icon"]',
      snapshotUrls: 'https://i.gkd.li/i/12705986',
      enable: false,
    },
    {
      key: 11,
      name: '局部广告-首页顶部签到卡片',
      desc: '自动点击x按钮',
      fastQuery: true,
      activityIds: 'com.sina.weibo.MainTabActivity',
      rules: '[id="com.sina.weibo:id/ll_check_in_container"] < FrameLayout - FrameLayout > TextView + [id="com.sina.weibo:id/v_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12749876',
      enable: false,
    },
    {
      key: 13,
      name: '局部广告-悬浮广告',
      desc: '自动点击x按钮',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.sina.weibo.MainTabActivity',
          matches: '[id="com.sina.weibo:id/floating_window"] >2 [id="com.sina.weibo:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/12750118',
        },
        {
          key: 1,
          activityIds: 'com.sina.weibo.MainTabActivity',
          matches: '[id="com.sina.weibo:id/floating_window"] >n [id="com.sina.weibo:id/closeView"]',
          snapshotUrls: 'https://i.gkd.li/i/13206775',
        },
        {
          key: 2,
          activityIds: 'com.sina.weibo.MainTabActivity',
          matches: '[id="com.sina.weibo:id/tv_tag"] + @*[clickable=true] + [id="com.sina.weibo:id/countdown_btn_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13206841',
        },
        {
          key: 3,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '@[id="com.sina.weibo:id/close_layout"] - LinearLayout [id="com.sina.weibo:id/btnFollow"]',
          snapshotUrls: 'https://i.gkd.li/i/13482954',
        },
        {
          key: 4,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[text*="一键转发"] < LinearLayout +2 [id="com.sina.weibo:id/tv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13482960',
        },
      ],
      enable: false,
    },
    {
      key: 14,
      name: '权限提示-定位权限',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          activityIds: [
            '.MainTabActivity',
            '.utils.WeiboDialog$CustomDialog',
          ],
          matches: '@[text="以后再说"] +2 [text="去开启"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218093',
            'https://i.gkd.li/i/13003311',
          ],
        },
        {
          key: 1,
          activityIds: '.MainTabActivity',
          matches: '@[id="com.sina.weibo:id/btn_close"] +2 [text="使用您的位置信息"]',
          snapshotUrls: 'https://i.gkd.li/i/13255595',
        },
        {
          key: 0,
          matches: '@[text="以后再说"] +2 [text="去开启"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13218093',
            'https://i.gkd.li/i/13003311',
          ],
        },
        {
          key: 1,
          matches: '@[id="com.sina.weibo:id/btn_close"] +2 [text="使用您的位置信息"]',
          snapshotUrls: 'https://i.gkd.li/i/13255595',
        },
      ],
    },
    {
      key: 17,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击[不感兴趣]/[不想看到此类内容]',
      fastQuery: true,
      activityIds: [
        '.feed.DetailWeiboActivity',
        '.feed.detailrefactor.DetailPageActivity',
        '.feed.SubCommentActiity',
        '.feed.halfcontainer.HalfContainerPageActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@[vid="ll_close"] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852321',
            'https://i.gkd.li/i/19526000',
            'https://i.gkd.li/i/21828244',
            'https://i.gkd.li/i/24291704',
          ],
        },
        {
          key: 1,
          matches: '[vid="corner_marker_view"] >2 [vid="right_top_tag"]',
          snapshotUrls: 'https://i.gkd.li/i/14210775',
        },
        {
          key: 3,
          matches: [
            '[vid="left_img_ad_container"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13635551',
            'https://i.gkd.li/i/19525985',
          ],
        },
        {
          key: 4,
          matches: '@[vid="closeButton"] > [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6952c2d1-65b5-4419-adb6-ba0f6349801e',
          snapshotUrls: 'https://i.gkd.li/i/19538265',
        },
        {
          key: 5,
          matches: '[vid="iv_ad_x"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/58baa39c-c447-4664-8a39-c058497b9495',
          snapshotUrls: 'https://i.gkd.li/i/22275086',
        },
        {
          key: 6,
          matches: 'RelativeLayout >7 FrameLayout[childCount=4] > FrameLayout[childCount=1] > @[name$="FrameLayout" || name$="ImageView"][clickable=true][childCount<2][visibleToUser=true][width<50&&height<50] <<n [vid="view_recycler" || vid="tweet_list"]',
          exampleUrls: 'https://e.gkd.li/fc3b2c98-4540-4ec1-94b2-24abf90212c9',
          snapshotUrls: [
            'https://i.gkd.li/i/21166775',
            'https://i.gkd.li/i/21828269',
          ],
        },
        {
          preKeys: [
            0,
            1,
            3,
            4,
            5,
            6,
          ],
          key: 90,
          matchRoot: true,
          anyMatches: [
            '[text$="不感兴趣"][clickable=true]',
            '@LinearLayout[clickable=true] >2 [text="不感兴趣" || text="不想看到此类内容"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13852322',
            'https://i.gkd.li/i/13958782',
            'https://i.gkd.li/i/16785777',
            'https://i.gkd.li/i/14730274',
            'https://i.gkd.li/i/19551451',
            'https://i.gkd.li/i/20710958',
            'https://i.gkd.li/i/21828246',
          ],
        },
        {
          key: 0,
          name: '点击关闭',
          matches: '[text="广告"] + [id="com.sina.weibo:id/iv_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13852321',
        },
        {
          key: 1,
          activityIds: 'com.sina.weibo.feed.DetailWeiboActivity',
          matches: '[vid="corner_marker_view"] >2 [vid="right_top_tag"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673051',
            'https://i.gkd.li/i/14210775',
          ],
        },
        {
          key: 2,
          position: {
            left: 'width * 0.9537',
            top: 'width * 0.0611',
          },
          activityIds: 'com.sina.weibo.MainTabActivity',
          matches: 'LinearLayout + LinearLayout[visibleToUser=true][childCount=6] > @ViewGroup > ViewGroup > FrameLayout > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14729705',
            'https://i.gkd.li/i/14753916',
          ],
        },
        {
          preKeys: 0,
          key: 90,
          name: '点击"不感兴趣"',
          matches: '[text="不感兴趣"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13852322',
        },
        {
          preKeys: [
            0,
            1,
          ],
          key: 91,
          name: '点击"不想看到此类内容"',
          matches: '@LinearLayout[index=1][clickable=true] >2 [text="不想看到此类内容"]',
          snapshotUrls: 'https://i.gkd.li/i/13958782',
        },
        {
          preKeys: [
            2,
          ],
          key: 92,
          fastQuery: true,
          activityIds: 'com.sina.weibo.MainTabActivity',
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14730274',
        },
      ],
    },
    {
      key: 18,
      name: '评价提示-APP评分弹窗',
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainTabActivity',
          matches: '@[text="不了，谢谢"] +4 [text="喜欢，给好评"]',
          snapshotUrls: 'https://i.gkd.li/i/13620220',
        },
        '@[text="不了，谢谢"] +4 [text="喜欢，给好评"]',
      ],
    },
    {
      key: 19,
      name: '功能类-自动点击查看原图',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sina.weibo.photoalbum.imageviewer.ImageViewer',
          matches: '@LinearLayout >3 [vid="tv_dialog_item"][text^="原图"]',
          snapshotUrls: 'https://i.gkd.li/i/13929119',
        },
        {
          activityIds: 'com.sina.weibo.photoalbum.imageviewer.ImageViewer',
          matches: '@LinearLayout >3 [vid="tv_dialog_item"][text^="原图"]',
          snapshotUrls: 'https://i.gkd.li/i/13929119',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-超话自动签到',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击签到',
          activityIds: 'com.sina.weibo.supergroup.SGPageActivity',
          matches: [
            'ViewGroup[childCount=2] > [text="管理"][visibleToUser=true]',
            '[text="签到" || text="Sign in"] < [vid="right_button"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15092999',
            'https://i.gkd.li/i/15092970',
            'https://i.gkd.li/i/15136801',
          ],
        },
        {
          key: 1,
          name: '取消勾选[接收本超话签到提醒推送]',
          activityIds: 'com.sina.weibo.supergroup.pagepop.PagePopActivity',
          matches: '@[checked=true] < * > [text="接收本超话签到提醒推送"]',
          snapshotUrls: 'https://i.gkd.li/i/15103524',
        },
        {
          key: 2,
          name: '关闭签到成功弹窗',
          activityIds: 'com.sina.weibo.supergroup.pagepop.PagePopActivity',
          matches: [
            '[text^="连续签到"]',
            '[vid="iv_close_v2"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15103524',
            'https://i.gkd.li/i/15136825',
            'https://i.gkd.li/i/15136842',
          ],
        },
        '[vid="container"] >n [text="close"]',
      ],
    },
    {
      key: 21,
      name: '功能类-超话自动签到',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '点击签到',
          activityIds: 'com.sina.weibo.supergroup.SGPageActivity',
          matches: [
            'ViewGroup[childCount=2] > [text="管理"][visibleToUser=true]',
            '[text="签到" || text="Sign in"] < [vid="right_button"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15092999',
            'https://i.gkd.li/i/15092970',
            'https://i.gkd.li/i/15136801',
          ],
        },
        {
          key: 1,
          name: '取消勾选[接收本超话签到提醒推送]',
          activityIds: 'com.sina.weibo.supergroup.pagepop.PagePopActivity',
          matches: '@[checked=true] < * > [text="接收本超话签到提醒推送"]',
          snapshotUrls: 'https://i.gkd.li/i/15103524',
        },
        {
          key: 2,
          name: '关闭签到成功弹窗',
          activityIds: 'com.sina.weibo.supergroup.pagepop.PagePopActivity',
          matches: [
            '[text^="连续签到"]',
            '[vid="iv_close_v2"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15103524',
            'https://i.gkd.li/i/15136825',
            'https://i.gkd.li/i/15136842',
          ],
        },
      ],
      enable: false,
    },
    {
      key: 22,
      name: '功能类-超话一键签到',
      desc: '点击[一键签到]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.sina.weibo.supergroup.generic.GenericChannelActivity',
          matches: [
            '[text*="一键签到"][visibleToUser=true]',
            '[vid="checkinBtn"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/3fad288d-ba21-44ed-8ebe-f9b4cbde1d3c',
          snapshotUrls: 'https://i.gkd.li/i/16420751',
        },
      ],
    },
    {
      key: 23,
      name: '其他-关闭猪手提示',
      desc: '点击[取消]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainTabActivity',
          matches: [
            '[text^="猪手超话自动签到失败"]',
            '[text="取消"]',
          ],
          exampleUrls: 'https://e.gkd.li/92e08aea-ae70-4ea8-be65-442f8e2e423d',
          snapshotUrls: 'https://i.gkd.li/i/16827119',
        },
      ],
    },
    {
      key: 24,
      name: '功能类-关闭点赞时的验证',
      rules: [
        {
          activityIds: '.geetest.GeetCheckActivityForNet',
          matches: 'Button[text^="关闭验证"][clickable=true][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7a8ed873-a6e8-4260-9f5c-3ff05d5788db',
          snapshotUrls: 'https://i.gkd.li/i/16827853',
        },
      ],
    },
    {
      key: 25,
      name: '功能类-关主页自动切换到[关注的人]TAB',
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.flowbusiness.commonpage.FlowCommonPageActivity',
          matches: '@[clickable=true] >2 [text="关注的人"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6ef5bbf7-bb11-4cbb-b46b-bdc7c333a617',
          snapshotUrls: 'https://i.gkd.li/i/18423013',
        },
      ],
    },
    {
      key: 26,
      name: '分段广告-评论区博主内容推荐',
      desc: '点击关闭-点击[不感兴趣]/[不想看到此类内容]',
      fastQuery: true,
      activityIds: [
        '.feed.detailrefactor.DetailPageActivity',
        '.story.gallery.feed.StoryFeedCommentsActivity2',
      ],
      rules: [
        {
          key: 0,
          matches: '@[vid="ll_close"] > [text="推荐"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19551850',
            'https://i.gkd.li/i/19552278',
          ],
        },
        {
          preKeys: [
            0,
          ],
          matchRoot: true,
          matches: '[text$="不感兴趣"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/19551857',
            'https://i.gkd.li/i/19552282',
            'https://i.gkd.li/i/24211723',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '分段广告-评论区荐读',
      fastQuery: true,
      activityIds: [
        '.feed.detailrefactor.DetailPageActivity',
        '.feed.DetailWeiboActivity',
        '.feed.halfcontainer.HalfContainerPageActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@[vid="ll_close"] > [text="荐读"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/bab872e2-6967-49f5-8443-46af8f225d8f',
          snapshotUrls: [
            'https://i.gkd.li/i/21828298',
            'https://i.gkd.li/i/24237728',
            'https://i.gkd.li/i/24291674',
          ],
        },
        {
          preKeys: [
            0,
          ],
          matches: '[text$="不感兴趣"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/4d35d427-f6ab-42bf-a369-65c5b602fcdf',
          snapshotUrls: 'https://i.gkd.li/i/21828292',
        },
      ],
    },
  ],
});
