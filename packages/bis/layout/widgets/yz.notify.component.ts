import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { formatDistanceToNow } from 'date-fns';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';

import { NoticeIconSelect, NoticeItem } from '@yelon/abc/notice-icon';
import { _HttpClient } from '@yelon/theme';
import { WINDOW } from '@yelon/util';
import { log } from '@yelon/util/other';

@Component({
  selector: 'yz-header-notify',
  template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="yunzai-default__nav-item"
      btnIconClass="yunzai-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
    ></notice-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YzHeaderNotifyComponent implements OnInit, OnDestroy {
  data: NoticeItem[] = [
    {
      key: 'msg',
      title: '消息',
      list: [],
      emptyText: '您已读完所有消息',
      emptyImage: './assets/tmp/img/message.svg',
      clearText: '清空消息'
    },
    {
      key: 'todo',
      title: '待办',
      list: [],
      emptyText: '你已完成所有待办',
      emptyImage: './assets/tmp/img/todo.svg',
      clearText: '重新加载'
    },
    {
      key: 'notice',
      title: '通知',
      list: [],
      emptyText: '你已查看所有通知',
      emptyImage: './assets/tmp/img/notice.svg',
      clearText: '重新加载'
    }
  ];
  loading = false;
  count = 0;
  subs: Subscription[] = [];

  constructor(
    private injector: Injector,
    private msg: NzMessageService,
    private nzI18n: NzI18nService,
    private cdr: ChangeDetectorRef,
    private httpClient: _HttpClient
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.count = 0;
    this.loading = true;
    this.subs.push(
      forkJoin(this.loadTodo(), this.loadMessage()).subscribe(() => {
        this.loading = false;
        this.cdr.detectChanges();
      })
    );
  }

  loadMessage(): Observable<void> {
    log('notify.component: ', 'fetch message list');
    const formatMessageStatus = (status: string): NzSafeAny => {
      switch (status) {
        case '0':
          return { extra: '未读', color: 'red' };
        case '1':
          return { extra: '已读', color: 'green' };
        default:
          return { extra: '无状态', color: 'primary' };
      }
    };
    return this.httpClient
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
    log('notify.component: ', 'fetch todo list');
    const formatTodoStatus = (status: string): NzSafeAny => {
      switch (status) {
        case '0':
          return { extra: '未开始', color: 'red' };
        case '1':
          return { extra: '已开始', color: 'green' };
        default:
          return { extra: '无状态', color: 'primary' };
      }
    };
    return this.httpClient
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
        this.httpClient.post(`/message-center-3/my-msg-and-todo/msg-clear`, {}).subscribe(_ => {
          this.msg.success(`清空了 ${type}`);
          this.loadData();
        })
      );
    }
    if (t.key == 'todo') {
      this.loadData();
    }
  }

  select(res: NoticeIconSelect): void {
    this.injector.get(WINDOW).open(res.item.url);
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subs.forEach(a => a.unsubscribe());
  }
}
