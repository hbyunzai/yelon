import { Directive, inject, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { _HttpClient } from '@yelon/theme';
import { WINDOW, YunzaiNavTopic } from '@yelon/util';

/**
 * Base class for navigation components to share common navigation logic
 */
@Directive()
export abstract class YunzaiLayoutNavBase implements OnDestroy {
  protected readonly http = inject(_HttpClient);
  protected readonly win = inject(WINDOW);
  protected destroy$ = new Subject();

  /**
   * Opens a navigation topic and tracks the usage
   */
  open(topic: YunzaiNavTopic): void {
    if (topic.key) {
      this.http
        .post(`/app-manager/web-scan/save`, {
          appId: topic.key,
          createDate: new Date()
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    }
    switch (topic.target) {
      case 'href':
        this.win.location.href = topic.url;
        break;
      case 'blank':
        this.win.open(topic.url);
        break;
      case 'target':
        this.win.open(topic.url);
        break;
      default:
        this.win.location.href = topic.url;
        break;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
