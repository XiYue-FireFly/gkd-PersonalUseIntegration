import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      key: 1,
      name: '功能类-自动领红包',
      desc: '自己发的红包不领',
      rules: [
        {
          key: 0,
          name: '点击别人发的红包',
          fastQuery: true,
          activityIds: [
            '.msg.controller.ExternalContactMessageListActivity',
            '.msg.controller.MessageListActivity',
          ],
          matches: 'RelativeLayout[childCount=2] > ImageView[childCount=0] + RelativeLayout >2 @RelativeLayout[clickable=true][childCount=4] > LinearLayout[index=1][getChild(0).childCount=1] + RelativeLayout[childCount=1] > TextView[text="红包"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14151095',
            'https://i.gkd.li/i/24560890',
            'https://i.gkd.li/i/24577241',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/14151131',
        },
        {
          preKeys: [
            0,
          ],
          key: 1,
          name: '开红包',
          activityIds: '.enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity',
          matches: 'RelativeLayout[childCount=3] > FrameLayout + RelativeLayout[childCount=3] + ImageView[clickable=true][childCount=0][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24560289',
            'https://i.gkd.li/i/24588743',
          ],
        },
        {
          preKeys: [
            0,
            1,
          ],
          key: 2,
          name: '从金额页面返回到聊天页面',
          fastQuery: true,
          action: 'back',
          activityIds: '.enterprise.redenvelopes.controller.RedEnvelopeDetailActivity',
          matches: '[text="已存入绑定的微信零钱账户"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14151120',
        },
        {
          key: 0,
          fastQuery: true,
          name: '点击别人发的红包',
          activityIds: 'com.tencent.wework.msg.controller.ExternalContactMessageListActivity',
          matches: 'RelativeLayout[childCount=2] > ImageView + * @RelativeLayout[childCount=4] > LinearLayout[index=1] > LinearLayout[childCount=1] > [text="恭喜发财，大吉大利"]',
          exampleUrls: 'https://m.gkd.li/57941037/64bdd899-9a30-4816-bafc-a9e2a0d09ec6',
          snapshotUrls: [
            'https://i.gkd.li/i/14151095',
            'https://i.gkd.li/i/14151131',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '开红包',
          activityIds: 'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeCollectorActivity',
          matches: 'RelativeLayout[childCount=3] > FrameLayout + RelativeLayout[childCount=3] + ImageView',
          exampleUrls: 'https://m.gkd.li/57941037/52525cdb-0746-483c-b1ba-2282f3a8b8ed',
          snapshotUrls: [
            'https://i.gkd.li/i/14151108',
            'https://i.gkd.li/i/14151215',
          ],
        },
        {
          preKeys: [
            0,
            1,
          ],
          key: 2,
          name: '从金额页面返回到聊天页面',
          activityIds: 'com.tencent.wework.enterprise.redenvelopes.controller.RedEnvelopeDetailActivity',
          matches: 'LinearLayout[childCount=3] > LinearLayout TextView',
          exampleUrls: 'https://m.gkd.li/57941037/2a69cf93-1d10-48c4-8456-663197c6feca',
          snapshotUrls: 'https://i.gkd.li/i/14151120',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-顶部卡片广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.tencent.wework.launch.WwMainActivity',
          matches: 'ImageView[clickable=true][childCount=0] < ViewFlipper[childCount=1] + @ImageView[clickable=true][visibleToUser=true][width<140 && height<140] <n RelativeLayout <<n RecyclerView[childCount>10] <n FrameLayout <n ViewGroup - RelativeLayout >4 [text="工作台"]',
          exampleUrls: 'https://e.gkd.li/e0c4aa4a-fd8b-4440-920b-f96eec60baa1',
          snapshotUrls: [
            'https://i.gkd.li/i/16977927',
            'https://i.gkd.li/i/24099806',
          ],
        },
        {
          preKeys: [
            0,
          ],
          fastQuery: true,
          activityIds: 'com.tencent.wework.launch.WwMainActivity',
          matches: '[text="关闭"]',
          exampleUrls: 'https://e.gkd.li/e4a71c0c-c0ce-4822-ae69-4a3330a28a84',
          snapshotUrls: 'https://i.gkd.li/i/16977929',
        },
      ],
    },
    {
      key: 3,
      name: '权限提示-悬浮窗',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.wework.common.controller.DialogActivityUtil',
          matches: [
            '[text^="请开启悬浮窗"]',
            '[text="取消"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/24230054',
        },
      ],
    },
  ],
});
