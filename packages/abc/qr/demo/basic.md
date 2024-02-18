---
order: 1
title:
  zh-CN: 基础样例
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, OnInit } from '@angular/core';

import { QRModule } from '@yelon/abc/qr';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    <h3>{{ type }}</h3>
    <qr [value]="value" />
    <div>
      @for (t of types; track $index) {
        <button nz-button (click)="change(t)">{{ t }}</button>
      }
    </div>
  `,
  standalone: true,
  imports: [QRModule, NzButtonModule]
})
export class DemoComponent implements OnInit {
  types = ['url', 'email', 'tel', 'cn', 'vcard'];
  value = '';
  type = '';
  change(type: string): void {
    this.type = type;
    switch (type) {
      case 'url':
        this.value = 'https://ng.yunzainfo.com/';
        break;
      case 'email':
        this.value = 'mailto:yunzai-bot@outlook.com';
        break;
      case 'tel':
        this.value = 'tel:15900000000';
        break;
      case 'cn':
        this.value = '你好🇨🇳';
        break;
      case 'vcard':
        this.value = `BEGIN:VCARD
VERSION:4.0
N:色;卡;;Mr.;
FN:yunzai-bot
ORG:NG-YUNZAI
TITLE:NG-YUNZAI
PHOTO;MEDIATYPE=image/svg:https://ng.yunzainfo.com/assets/img/logo-color.svg
TEL;TYPE=work,voice;VALUE=uri:tel:15900000000
ADR;TYPE=WORK;PREF=1;LABEL="中国上海":;;上海;中国
EMAIL:yunzai-bot@outlook.com
x-qq:94458893
END:VCARD`;
        break;
    }
  }

  ngOnInit(): void {
    this.change('url');
  }
}
```
