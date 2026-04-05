import { checkSubscription, checkApiVersion } from '@gkd-kit/tools';
import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from '../src/categories';
import globalGroups from '../src/globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/../src/apps`);

const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (g.name?.startsWith('开屏广告')) {
      g.order = -10;
    }
  });
  rawApps.push(appConfig);
});

const subscription = defineGkdSubscription({
  id: 999,
  name: '个人订阅',
  version: 0,
  author: 'XiYue-FireFly',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/XiYue-FireFly/gkd-PersonalUseIntegration/issues/new/choose',
  categories,
  globalGroups,
  apps: rawApps,
});

await checkApiVersion();
await checkSubscription(subscription);
