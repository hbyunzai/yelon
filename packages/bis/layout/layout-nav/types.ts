import { Subject } from 'rxjs';

import { YunzaiNavTopic } from '@yelon/cache';

export interface LayoutNavApplicationState {
  active: boolean;
  type: 'all' | 'mine' | 'other';
  topic?: YunzaiNavTopic;
  topics: YunzaiNavTopic[];
  list: YunzaiNavTopic[];
  search: string | null;
  destroy$: Subject<any>;
}

export interface LayoutNavGroupState {
  topics: YunzaiNavTopic[];
  destroy$: Subject<any>;
}
