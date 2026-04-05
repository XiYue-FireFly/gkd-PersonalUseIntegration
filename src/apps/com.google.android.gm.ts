import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gm',
  name: 'Gmail',
  groups: [
{
    key: 2,
    name: '分段广告-信息流广告',
    desc: '点击广告选项并完成屏蔽操作',
    enable: false,
    fastQuery: true,
    rules: [
      {
          key: 1,
          matches: '[vid="basic_ad_teaser_info_icon" || vid="button_chip_ad_teaser_info_icon"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255698',
              'https://i.gkd.li/i/25542293',
          ],
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          name: '②点击[屏蔽]',
          matches: '@Button[clickable=true][text="屏蔽此广告" || text^="Block" || desc="屏蔽"] <<n [vid="my_ad_center_dialog"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255700',
              'https://i.gkd.li/i/13724271',
              'https://i.gkd.li/i/20585351',
          ],
      },
      {
          preKeys: [
              2,
          ],
          key: 3,
          name: '③点击[继续]',
          matches: '@Button[clickable=true][text="继续" || text="Continue"] <<n [id="com.google.android.gm:id/my_ad_center_dialog"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255701',
              'https://i.gkd.li/i/13724287',
          ],
      },
      {
          preKeys: [
              3,
          ],
          key: 4,
          name: '④x掉',
          matches: '[vid="my_ad_center_close_icon"][clickable=true]',
          snapshotUrls: [
              'https://i.gkd.li/i/13263279',
              'https://i.gkd.li/i/25543406',
          ],
      },
      {
          key: 0,
          matches: '[id="com.google.android.gm:id/basic_ad_teaser_info_icon" || id="com.google.android.gm:id/button_chip_ad_teaser_info_icon"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255698',
              'https://i.gkd.li/i/13255698',
          ],
      },
      {
          preKeys: [
              0,
          ],
          key: 1,
          matches: 'Button[visibleToUser=true][text="屏蔽此广告" || text^="Block" || desc="屏蔽"] <<n [vid="my_ad_center_dialog"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255700',
              'https://i.gkd.li/i/13724271',
              'https://i.gkd.li/i/20585351',
          ],
      },
      {
          preKeys: [
              1,
          ],
          key: 2,
          matches: 'Button[visibleToUser=true][text="继续" || text="Continue"] <<n [id="com.google.android.gm:id/my_ad_center_dialog"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255701',
              'https://i.gkd.li/i/13724287',
          ],
      },
      {
          preKeys: [
              2,
          ],
          key: 3,
          matches: '[id="com.google.android.gm:id/my_ad_center_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13263279',
      },
      {
          fastQuery: true,
          key: -1,
          name: '点击广告扩展-1',
          matches: '[id="com.google.android.gm:id/button_chip_ad_teaser_info_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13255698',
      },
      {
          fastQuery: true,
          key: 0,
          name: '点击广告扩展-2',
          matches: '[id="com.google.android.gm:id/basic_ad_teaser_info_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13255698',
      },
      {
          preKeys: [
              -1,
              0,
          ],
          key: 1,
          name: '广告中心-点击屏蔽',
          matches: 'Button[text="屏蔽此广告"||text^="Block"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255700',
              'https://i.gkd.li/i/13724271',
          ],
      },
      {
          preKeys: 1,
          key: 2,
          name: '点击继续确认屏蔽',
          matches: 'Button[text="继续"||text="Continue"]',
          snapshotUrls: [
              'https://i.gkd.li/i/13255701',
              'https://i.gkd.li/i/13724287',
          ],
      },
      {
          preKeys: 2,
          key: 3,
          fastQuery: true,
          name: '关闭弹窗',
          matches: '[id="com.google.android.gm:id/my_ad_center_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/13263279',
      },
    ],
  }
  ],
});
