import { NgModule } from '@angular/core';

import { YunzaiDormitoryTreeComponent } from './yunzai-dormitory-tree.component';
import { YunzaiDormitoryTreeService } from './yunzai-dormitory-tree.service';

const COMPONENTS = [YunzaiDormitoryTreeComponent];

@NgModule({
  imports: [...COMPONENTS],
  providers: [YunzaiDormitoryTreeService],
  exports: COMPONENTS
})
export class YunzaiDormitoryTreeModule {}
