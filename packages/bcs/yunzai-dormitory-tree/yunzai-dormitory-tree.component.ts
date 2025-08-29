import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { catchError, debounceTime, map, of, Subject, switchMap, takeUntil, throwError, zip } from 'rxjs';

import { SFComponent, SFValueChange, YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormatEmitEvent, NzTreeModule, NzTreeNode } from 'ng-zorro-antd/tree';

import { defaultSchema } from './yunzai-dormitory-tree.schema';
import { YunzaiDormitoryTreeService } from './yunzai-dormitory-tree.service';
import { YunzaiDormitoryTree, YunzaiDormitoryTreeParam, YunzaiDormitoryTreeProps, YunzaiDormitoryTreeState, YunzaiDormitoryTreeType } from './yunzai-dormitory-tree.types';
@Component({
  selector: `yunzai-dormitory-tree`,
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
      <ng-container [ngTemplateOutlet]="dormitoryForm" />
      @if (nodes.length > 0) {
        <nz-tree
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
      } @else {
        <nz-empty />
      }
    </ng-template>

    <ng-template #treeTemplate let-node let-origin="origin">
      @if (!node.isLeaf) {
        <span [title]="node.title">
          <i nz-icon nzTheme="twotone" [nzType]="node.isExpanded ? 'minus-square' : 'plus-square'" (click)="open(node)"></i>
          <span class="leaf-name">{{ node.title }}</span>
        </span>
      } @else {
        <span [title]="node.title">
          <span nz-icon nzType="file" nzTheme="twotone"></span>
          <span class="leaf-name">{{ node.title }}</span>
        </span>
      }
    </ng-template>

    <ng-template #dormitoryForm>
      <sf #form layout="inline" [button]="'none'" [schema]="state.schema" />
    </ng-template>
    <ng-template #blank />
  `,

  providers: [YunzaiDormitoryTreeService],
  imports: [NzSpinModule, YelonFormModule, NzCardModule, NzIconModule, NzEmptyModule, NzTreeModule, CommonModule]
})
export class YunzaiDormitoryTreeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('form') sf!: SFComponent;

  @Input() props?: YunzaiDormitoryTreeProps;

  @Output() readonly onQueryComplete: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();

  @Output() readonly onSelect: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();
  private readonly service: YunzaiDormitoryTreeService = inject(YunzaiDormitoryTreeService);
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
    return this.data as any[];
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

  ngOnInit(): void {
    if (!this.props?.data) {
      this.query(this.param);
    } else {
      this.state.dataBackup = this.data;
      this.mapDormTree(this.data as any);
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
          return zip(of(search), this.service.tree(this.param));
        }),
        map(([search, dorms]) => {
          this.state.expandKeys = [];
          if (search && search.trim() !== '') {
            dorms = this.recursionSearch(search, dorms);
            this.onQueryComplete.emit(dorms);
          }
          this.mapDormTree(dorms as any);
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
    this.service
      .tree(param)
      .pipe(
        takeUntil(this.$destroy),
        map((dorms: YunzaiDormitoryTree[]) => {
          this.state.expandKeys = [];
          this.onQueryComplete.emit(dorms);
          this.mapDormTree(dorms as any);
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
