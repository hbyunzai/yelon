import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { catchError, debounceTime, map, of, Subject, switchMap, takeUntil, throwError, zip } from 'rxjs';

import { SFComponent, SFValueChange, YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormatEmitEvent, NzTreeModule, NzTreeNode } from 'ng-zorro-antd/tree';

import { defaultSchema } from './yunzai-dormitory-tree.schema';
import { YunzaiDormitoryTreeService } from './yunzai-dormitory-tree.service';
import {
  YunzaiDormitoryTree,
  YunzaiDormitoryTreeParam,
  YunzaiDormitoryTreeProps,
  YunzaiDormitoryTreeState,
  YunzaiDormitoryTreeType
} from './yunzai-dormitory-tree.types';

@Component({
  selector: `yunzai-dormitory-tree`,
  template: `
    <!-- loading-->
    <nz-spin [nzSpinning]="state.loading">
      <!--        wrapped-->
      <ng-container *ngIf="isWrapped">
        <nz-card>
          <ng-container [ngTemplateOutlet]="content" />
        </nz-card>
      </ng-container>
      <!--        end wrapped-->

      <!--        unwrapped-->
      <ng-container *ngIf="!isWrapped">
        <ng-container [ngTemplateOutlet]="content" />
      </ng-container>
      <!--        end unwrapped-->
    </nz-spin>
    <!-- end loading-->

    <!--      content-->
    <ng-template #content>
      <ng-container [ngTemplateOutlet]="dormitoryForm" />
      <nz-tree
        *ngIf="nodes.length > 0"
        (nzClick)="activeNode($event)"
        [nzExpandedKeys]="state.expandKeys"
        [nzData]="nodes"
        [nzShowLine]="true"
        [nzMultiple]="isMultiple"
        [nzExpandedIcon]="blank"
        [nzBlockNode]="true"
        [nzHideUnMatched]="true"
        [nzTreeTemplate]="treeTemplate"
      />
      <nz-empty *ngIf="nodes.length === 0" />
    </ng-template>
    <!--      end content-->

    <!--      tree -->
    <ng-template #treeTemplate let-node let-origin="origin">
      <span *ngIf="!node.isLeaf" [title]="node.title">
        <i
          nz-icon
          nzTheme="twotone"
          [nzType]="node.isExpanded ? 'minus-square' : 'plus-square'"
          (click)="open(node)"
        ></i>
        <span class="leaf-name">{{ node.title }}</span>
      </span>
      <span *ngIf="node.isLeaf" [title]="node.title">
        <span nz-icon nzType="file" nzTheme="twotone"></span>
        <span class="leaf-name">{{ node.title }}</span>
      </span>
    </ng-template>
    <!--      end tree-->

    <ng-template #dormitoryForm>
      <sf #form layout="inline" [button]="'none'" [schema]="state.schema" />
    </ng-template>
    <ng-template #blank />
  `,
  standalone: true,
  imports: [CommonModule, YelonFormModule, NzIconModule, NzEmptyModule, NzTreeModule, NzSpinModule, NzCardModule]
})
export class YunzaiDormitoryTreeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('form') sf!: SFComponent;

  @Input() props?: YunzaiDormitoryTreeProps;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() readonly onQueryComplete: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() readonly onSelect: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();
  private $destroy = new Subject();

  state: YunzaiDormitoryTreeState = {
    loading: false,
    schema: defaultSchema,
    data: [],
    dataBackup: [],
    expandKeys: []
  };

  get data(): YunzaiDormitoryTree[] {
    if (this.props && this.props.data) {
      return this.props.data;
    }
    return this.state.data;
  }

  set data(dorms: YunzaiDormitoryTree[]) {
    if (this.props && this.props.data) {
      this.props.data = dorms;
    } else {
      this.state.data = dorms;
    }
  }

  get nodes(): NzTreeNode[] {
    return this.data as NzSafeAny[];
  }

  get isMultiple(): boolean {
    if (this.props) {
      return !!this.props.multiple;
    }
    return false;
  }

  get param(): YunzaiDormitoryTreeParam {
    if (this.props && this.props.param) {
      return this.props.param;
    }
    return { isPower: false, treeType: YunzaiDormitoryTreeType.BUILDING_FLOORS_ROOMS };
  }

  get isWrapped(): boolean {
    if (this.props) {
      return !!this.props.wrap;
    }
    return false;
  }

  get isExpanded(): boolean {
    if (this.props) {
      return !!this.props.expand;
    }
    return false;
  }

  constructor(private dormitoryService: YunzaiDormitoryTreeService) {}

  ngOnInit(): void {
    if (!this.props?.data) {
      this.query(this.param);
    } else {
      this.state.dataBackup = this.data;
      this.mapDormTree(this.data as NzSafeAny);
    }
  }

  ngAfterViewInit(): void {
    this.hookFormChange();
  }

  hookFormChange(): void {
    this.sf.formValueChange
      .pipe(
        takeUntil(this.$destroy),
        debounceTime(1000),
        map(value => {
          this.load();
          return value;
        }),
        switchMap((valueChange: SFValueChange) => {
          const {
            value: { search }
          } = valueChange;
          if (this.props && this.props.data) {
            return zip(of(search), of(this.state.dataBackup));
          }
          return zip(of(search), this.dormitoryService.tree(this.param));
        }),
        map(([search, dorms]) => {
          this.state.expandKeys = [];
          if (search && search.trim() !== '') {
            dorms = this.recursionSearch(search, dorms);
            this.onQueryComplete.emit(dorms);
          }
          this.mapDormTree(dorms as NzSafeAny);
          this.data = dorms;
        }),
        catchError(error => {
          this.unload();
          return throwError(error);
        })
      )
      .subscribe(() => {
        this.unload();
      });
  }

  recursionSearch(search: string, dorms: YunzaiDormitoryTree[]): YunzaiDormitoryTree[] {
    const results: YunzaiDormitoryTree[] = [];
    const searchInDorm = (dorm: YunzaiDormitoryTree): void => {
      if (dorm.title.includes(search)) {
        results.push(dorm);
      }
      if (dorm.children && dorm.children.length > 0) {
        for (const child of dorm.children) {
          searchInDorm(child);
        }
      }
    };
    for (const dorm of dorms) {
      searchInDorm(dorm);
    }
    return results;
  }

  query(param: YunzaiDormitoryTreeParam): void {
    this.load();
    this.dormitoryService
      .tree(param)
      .pipe(
        takeUntil(this.$destroy),
        map((dorms: YunzaiDormitoryTree[]) => {
          this.state.expandKeys = [];
          this.onQueryComplete.emit(dorms);
          this.mapDormTree(dorms as NzSafeAny);
          this.data = dorms;
        }),
        catchError(error => {
          this.unload();
          return throwError(error);
        })
      )
      .subscribe(() => {
        this.unload();
      });
  }

  load(): void {
    this.state.loading = true;
  }

  unload(): void {
    this.state.loading = false;
  }

  mapDormTree(tree: NzTreeNode[]): void {
    if (tree && tree.length && tree.length > 0) {
      tree.forEach(item => {
        if (this.isExpanded && !this.state.expandKeys.includes(item.key)) {
          this.state.expandKeys.push(item.key);
        }
        item.isExpanded = this.isExpanded;
        item.isLeaf = item.children === null || item.children.length === 0;
        this.mapDormTree(item.children);
      });
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    if (data.node) {
      this.onSelect.emit([data.node.origin as YunzaiDormitoryTree]);
    } else if (data.nodes) {
      const dorms: YunzaiDormitoryTree[] = data.nodes.map(n => n.origin as YunzaiDormitoryTree);
      this.onSelect.emit(dorms);
    }
  }

  open(data: NzTreeNode | NzFormatEmitEvent): void {
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  ngOnDestroy(): void {
    this.$destroy.complete();
  }
}
