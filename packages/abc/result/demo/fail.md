---
order: 0
title: Failed
---

提交失败。

```ts
import { Component } from '@angular/core';

import { ResultModule } from '@yelon/abc/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-demo',
  template: `
    <result type="error" [title]="'提交失败'" description="请核对并修改以下信息后，再重新提交。" [extra]="resultExtra">
      <ng-template #resultExtra>
        <div class="mb-md text-lg">您提交的内容有如下错误：</div>
        <div class="mb-md">
          <nz-icon nzType="close-circle" class="text-error pr-sm"/>您的账户已被冻结
          <a class="ml-md">立即解冻<nz-icon nzType="right" class="pl-sm"/></a>
        </div>
        <div>
          <nz-icon nzType="close-circle" class="text-error pr-sm"/>您的账户还不具备申请资格
          <a class="ml-md">立即升级<nz-icon nzType="right" class="pl-sm"/></a>
        </div>
      </ng-template>
      <button nz-button [nzType]="'primary'">返回修改</button>
    </result>
  `,
  imports: [ResultModule, NzIconModule, NzButtonModule]
})
export class DemoComponent {}
```
