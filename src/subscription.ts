import { Subscription } from '@gkd-kit/api';
import categories from './categories';
import globalGroups from './globalGroups';
import apps from './apps';

export default <Subscription>{
  id: 888,
  name: 'GKD订阅',
  version: 1,
  author: '',
  description: '',
  supportUri: '',
  openEmptyRuleGroup: true,
  referenceRules: [],
  categories,
  globalGroups,
  apps,
};
