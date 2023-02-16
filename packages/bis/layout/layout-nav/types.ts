import {Subject} from 'rxjs';

import {YunzaiNavTopic} from '@yelon/cache';

export enum TopicType {
  FULL,
  OWN,
  EVERY
}

export interface LayoutNavApplicationState {
  active: boolean;
  type: TopicType;
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
