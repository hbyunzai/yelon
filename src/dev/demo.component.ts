import { Component, inject } from '@angular/core';

import { CookieOptions, CookieService } from '@yelon/util/browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <p classs="mb-md">Result: {{ value || 'NULL' }}</p>
    <button nz-button (click)="get()">Get</button>
    <button nz-button (click)="set()">Set</button>
    <button nz-button (click)="set({ expires: 10 })">Set 10s expired</button>
    <button nz-button (click)="remove()">Remove</button>
  `,
  imports: [NzButtonModule]
})
export class DemoComponent {
  private readonly cookieSrv = inject(CookieService);
  private readonly msg = inject(NzMessageService);

  key = 'test-key';
  value?: string;

  constructor() {
    this.get();
  }

  get(): void {
    this.value = this.cookieSrv.get(this.key)!;
  }

  set(options?: CookieOptions): void {
    this.cookieSrv.put(this.key, (+new Date()).toString(), options);
    this.msg.success(`Success`);
  }

  remove(): void {
    this.cookieSrv.remove(this.key);
  }
}
