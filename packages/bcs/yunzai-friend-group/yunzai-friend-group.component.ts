import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, inject } from '@angular/core';
import { catchError, debounceTime, map, Subject, takeUntil, throwError } from 'rxjs';

import { SFComponent, YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { defaultSchema } from './yunzai-friend-group.schema';
import { YunzaiFriendGroupService } from './yunzai-friend-group.service';
import { YunzaiFriendGroup, YunzaiFriendGroupProps, YunzaiFriendGroupState } from './yunzai-friend-group.types';

@Component({
  selector: `yunzai-friend-group`,
  template: `
    <nz-spin [nzSpinning]="state.loading">
      @if (isWrapped) {
        <nz-card>
          <ng-container [ngTemplateOutlet]="content" />
        </nz-card>
      } @else {
        <ng-container [ngTemplateOutlet]="content" />
      }
    </nz-spin>

    <ng-template #content>
      <ng-container [ngTemplateOutlet]="friendForm" />
      @if (data.length > 0) {
        <nz-list nzSize="small">
          @for (item of data; track item) {
            <nz-list-item (click)="onItemClick(item)">{{ item.name }}</nz-list-item>
          }
        </nz-list>
      } @else {
        <nz-empty />
      }
    </ng-template>

    <ng-template #friendForm>
      <sf #form layout="inline" [button]="'none'" [schema]="state.schema" />
    </ng-template>
  `,

  imports: [NzSpinModule, NzCardModule, CommonModule, NzEmptyModule, YelonFormModule, NzListModule],
  providers: [YunzaiFriendGroupService]
})
export class YunzaiFriendGroupComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() props?: YunzaiFriendGroupProps;

  @Output() readonly onQueryComplete: EventEmitter<YunzaiFriendGroup[]> = new EventEmitter<YunzaiFriendGroup[]>();

  @Output() readonly onSelect: EventEmitter<YunzaiFriendGroup> = new EventEmitter<YunzaiFriendGroup>();
  @ViewChild('form') sf!: SFComponent;
  private readonly $destroy = new Subject();
  private readonly service: YunzaiFriendGroupService = inject(YunzaiFriendGroupService);

  state: YunzaiFriendGroupState = {
    loading: false,
    schema: defaultSchema,
    data: [],
    dataBackup: []
  };

  get isWrapped(): boolean {
    return !!this.props?.wrap;
  }

  get data(): YunzaiFriendGroup[] {
    if (this.props && this.props.data) {
      return this.props.data;
    }
    return this.state.data;
  }

  ngOnInit(): void {
    if (this.props?.data) {
      this.state.data = this.props.data;
      this.state.dataBackup = this.props.data;
    } else {
      this.query();
    }
  }

  ngAfterViewInit(): void {
    this.hookFormChange();
  }

  hookFormChange(): void {
    this.sf.formValueChange.pipe(takeUntil(this.$destroy), debounceTime(1000)).subscribe(change => {
      const {
        value: { search }
      } = change;
      if (search) {
        this.state.data = this.state.dataBackup.filter(group => group.name.includes(search));
      } else {
        this.state.data = this.state.dataBackup;
      }
    });
  }

  onItemClick(item: YunzaiFriendGroup): void {
    this.onSelect.emit(item);
  }

  query(): void {
    this.state.loading = true;
    this.service
      .groups()
      .pipe(
        takeUntil(this.$destroy),
        catchError(error => {
          this.state.loading = false;
          return throwError(error);
        }),
        map((groups: YunzaiFriendGroup[]) => {
          this.state.data = groups;
          this.state.dataBackup = groups;
          this.onQueryComplete.emit(this.state.data);
          this.state.loading = false;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
