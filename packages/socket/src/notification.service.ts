import { inject, Injectable } from '@angular/core';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Message } from './interface';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifyService: NzNotificationService = inject(NzNotificationService);

  notify(message: Message): void {
    this.notifyService.create(message.type!, message.title!, message.content!);
  }

  notifyWithHtml(message: Message): void {
    this.notifyService.create(message.type!, message.title!, `<a href=${message.href}>${message.content}</a>`);
  }
}
