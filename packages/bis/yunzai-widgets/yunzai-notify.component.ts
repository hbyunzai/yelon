import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, map, Observable, Subscription } from 'rxjs';

import { formatDistanceToNow } from 'date-fns';

import { NoticeIconModule, NoticeIconSelect, NoticeItem } from '@yelon/abc/notice-icon';
import { _HttpClient, YUNZAI_I18N_TOKEN, YunzaiHttpI18NService } from '@yelon/theme';
import { WINDOW } from '@yelon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: `yunzai-header-notify`,
  template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="yunzai-default__nav-item"
      btnIconClass="yunzai-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
    />
  `,
  standalone: true,
  imports: [NoticeIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YunzaiHeaderNotifyComponent implements OnInit, OnDestroy {
  private readonly i18n = inject<YunzaiHttpI18NService>(YUNZAI_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly nzI18n = inject(NzI18nService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly http = inject(_HttpClient);
  private readonly win = inject(WINDOW);
  loading = false;
  count = 0;
  subs: Subscription[] = [];
  data: NoticeItem[] = [
    {
      key: 'msg',
      title: this.i18n.fanyi('notify.message'),
      list: [],
      emptyText: this.i18n.fanyi('notify.message.empty'),
      emptyImage: './assets/tmp/img/message.svg',
      clearText: this.i18n.fanyi('notify.message.clear')
    },
    {
      key: 'todo',
      title: this.i18n.fanyi('notify.todo'),
      list: [],
      emptyText: this.i18n.fanyi('notify.todo.empty'),
      emptyImage: './assets/tmp/img/todo.svg',
      clearText: this.i18n.fanyi('notify.todo.clear')
    },
    {
      key: 'notice',
      title: this.i18n.fanyi('notify.notice'),
      list: [],
      emptyText: this.i18n.fanyi('notify.notice.empty'),
      emptyImage: './assets/tmp/img/notice.svg',
      clearText: this.i18n.fanyi('notify.notice.clear')
    }
  ];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.count = 0;
    this.loading = true;
    this.subs.push(
      // @ts-ignore
      forkJoin(this.loadTodo(), this.loadMessage()).subscribe(() => {
        this.loading = false;
        this.cdr.detectChanges();
      })
    );
  }

  loadMessage(): Observable<void> {
    const formatMessageStatus = (status: string): NzSafeAny => {
      switch (status) {
        case '0':
          return { extra: this.i18n.fanyi('notify.unread'), color: 'red' };
        case '1':
          return { extra: this.i18n.fanyi('notify.readed'), color: 'green' };
        default:
          return { extra: this.i18n.fanyi('notify.nostatus'), color: 'primary' };
      }
    };
    return this.http
      .post(`/message-center-3/my-msg-and-todo/msg-list`, {
        pageNum: 1,
        pageSize: 10,
        status: '0'
      })
      .pipe(
        map((response: NzSafeAny) => {
          const viewMessage = this.data.filter(d => d.key === 'msg')[0];
          viewMessage.list = response.data.list.map((m: NzSafeAny) => {
            return {
              ...m,
              avatar: m?.imgUrl || './assets/tmp/img/message.png',
              title: m.systemName,
              description: m.content,
              extra: formatMessageStatus(m.status).extra,
              color: formatMessageStatus(m.status).color,
              datetime: formatDistanceToNow(new Date(m.date), { locale: this.nzI18n.getDateLocale() })
            };
          });
          this.count += viewMessage.list.length;
        })
      );
  }

  loadTodo(): Observable<void> {
    const formatTodoStatus = (status: string): NzSafeAny => {
      switch (status) {
        case '0':
          return { extra: this.i18n.fanyi('notify.unstart'), color: 'red' };
        case '1':
          return { extra: this.i18n.fanyi('notify.started'), color: 'green' };
        default:
          return { extra: this.i18n.fanyi('notify.nostatus'), color: 'primary' };
      }
    };
    return this.http
      .post(`/message-center-3/my-msg-and-todo/todo-list`, {
        pageNum: 1,
        pageSize: 10,
        status: '0'
      })
      .pipe(
        map((response: NzSafeAny) => {
          const viewTodo = this.data.filter(d => d.key === 'todo')[0];
          viewTodo.list = response.data.list.map((t: NzSafeAny) => {
            return {
              ...t,
              avatar: t?.imgUrl || './assets/tmp/img/todo.png',
              title: t.systemName,
              description: t.content,
              datetime: formatDistanceToNow(new Date(t.date), { locale: this.nzI18n.getDateLocale() }),
              extra: formatTodoStatus(t.status).extra,
              color: formatTodoStatus(t.status).color
            };
          });
          this.count += viewTodo.list.length;
        })
      );
  }

  clear(type: string): void {
    const t = this.data.filter(d => d.title === type)[0];
    if (t.key == 'msg' || t.key == 'notice') {
      this.subs.push(
        this.http.post(`/message-center-3/my-msg-and-todo/msg-clear`, {}).subscribe(_ => {
          this.msg.success(`${this.i18n.fanyi('notify.clear')} ${type}`);
          this.loadData();
        })
      );
    }
    if (t.key == 'todo') {
      this.loadData();
    }
  }

  select(res: NoticeIconSelect): void {
    this.win.open(res.item.url);
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subs.forEach(a => a.unsubscribe());
  }
}
