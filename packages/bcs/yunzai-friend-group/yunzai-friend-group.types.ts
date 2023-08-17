import { Subject } from 'rxjs';

import { YunzaiTableUser } from '@yelon/bcs/yunzai-table-user';
import { SFSchema } from '@yelon/form';

export interface YunzaiFriendGroup {
  id: string;
  name: string;
  userAccount: string;
  data?: YunzaiTableUser[];
}

export interface YunzaiFriendGroupState {
  loading: boolean;
  schema: SFSchema;
  data: YunzaiFriendGroup[];
  dataBackup: YunzaiFriendGroup[];
  $destroy: Subject<any>;
}

export interface YunzaiFriendGroupProps {
  wrap?: boolean;
  data?: YunzaiFriendGroup[];
}
