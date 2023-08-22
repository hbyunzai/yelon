import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { catchError, debounceTime, map,  throwError } from 'rxjs';

import { SFComponent } from '@yelon/form';

import { defaultSchema } from './yunzai-friend-group.schema';
import { YunzaiFriendGroupService } from './yunzai-friend-group.service';
import { YunzaiFriendGroup, YunzaiFriendGroupProps, YunzaiFriendGroupState } from './yunzai-friend-group.types';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: `yunzai-friend-group`,
  templateUrl: `./yunzai-friend-group.html`
})
export class YunzaiFriendGroupComponent implements OnInit, AfterViewInit {
  @Input() props?: YunzaiFriendGroupProps;
  @Output() readonly onQueryComplete: EventEmitter<YunzaiFriendGroup[]> = new EventEmitter<YunzaiFriendGroup[]>();
  @Output() readonly onSelect: EventEmitter<YunzaiFriendGroup> = new EventEmitter<YunzaiFriendGroup>();
  @ViewChild('form') sf!: SFComponent;

  state: YunzaiFriendGroupState = {
    loading: false,
    schema: defaultSchema,
    data: [],
    dataBackup: [],
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

  constructor(private friendsService: YunzaiFriendGroupService) {}

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
    this.sf.formValueChange.pipe(takeUntilDestroyed(), debounceTime(1000)).subscribe(change => {
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
    this.friendsService
      .groups()
      .pipe(
        takeUntilDestroyed(),
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
}
