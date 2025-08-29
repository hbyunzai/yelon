import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { catchError, debounceTime, map, of, Subject, switchMap, takeUntil, throwError, zip } from 'rxjs';

import { SFComponent, SFValueChange, YelonFormModule } from '@yelon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormatEmitEvent, NzTreeModule, NzTreeNode } from 'ng-zorro-antd/tree';

import { defaultSchema } from './yunzai-role-tree.schema';
import { YunzaiRoleTreeService } from './yunzai-role-tree.service';
import { YunzaiRoleTree, YunzaiRoleTreeProps, YunzaiRoleTreeState } from './yunzai-role-tree.types';

@Component({
  selector: `yunzai-role-tree`,
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
      <ng-container [ngTemplateOutlet]="roleForm" />
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

    <ng-template #roleForm>
      <sf #form layout="inline" [button]="'none'" [schema]="state.schema" />
    </ng-template>
    <ng-template #blank />
  `,

  imports: [NzSpinModule, YelonFormModule, NzButtonModule, NzIconModule, NzEmptyModule, NzTreeModule, CommonModule, NzCardModule],
  providers: [YunzaiRoleTreeService]
})
export class YunzaiRoleTreeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('form') sf!: SFComponent;
  @Input() props?: YunzaiRoleTreeProps;

  @Output() readonly onQueryComplete: EventEmitter<YunzaiRoleTree[]> = new EventEmitter<YunzaiRoleTree[]>();

  @Output() readonly onSelect: EventEmitter<YunzaiRoleTree[]> = new EventEmitter<YunzaiRoleTree[]>();
  private readonly service: YunzaiRoleTreeService = inject(YunzaiRoleTreeService);
  private $destroy = new Subject();

  state: YunzaiRoleTreeState = {
    loading: false,
    schema: defaultSchema,
    data: [],
    dataBackup: [],
    expandKeys: []
  };

  get data(): YunzaiRoleTree[] {
    if (this.props && this.props.data) {
      return this.props.data;
    }
    return this.state.data;
  }

  set data(roles: YunzaiRoleTree[]) {
    if (this.props && this.props.data) {
      this.props.data = roles;
    } else {
      this.state.data = roles;
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

  get roleGroupCode(): string | undefined {
    if (this.props && this.props.roleGroupCode) {
      return this.props.roleGroupCode;
    }
    return undefined;
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
      this.query(this.roleGroupCode);
    } else {
      this.state.dataBackup = this.data;
      this.mapRoleTree(this.data as any);
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
          return zip(of(search), this.service.tree(this.roleGroupCode));
        }),
        map(([search, depts]) => {
          this.state.expandKeys = [];
          if (search && search.trim() !== '') {
            depts = this.recursionSearch(search, depts);
            this.onQueryComplete.emit(depts);
          }
          this.mapRoleTree(depts as any);
          this.data = depts;
        }),
        catchError(error => {
          this.unload();
          return error;
        })
      )
      .subscribe(() => {
        this.unload();
      });
  }

  recursionSearch(search: string, roles: YunzaiRoleTree[]): YunzaiRoleTree[] {
    const results: YunzaiRoleTree[] = [];
    const searchInRole = (role: YunzaiRoleTree): void => {
      if (role.title.includes(search)) {
        results.push(role);
      }
      if (role.children && role.children.length > 0) {
        for (const child of role.children) {
          searchInRole(child);
        }
      }
    };
    for (const dept of roles) {
      searchInRole(dept);
    }
    return results;
  }

  query(roleGroupCode?: string): void {
    this.load();
    this.service
      .tree(roleGroupCode)
      .pipe(
        takeUntil(this.$destroy),
        map((roles: YunzaiRoleTree[]) => {
          this.state.expandKeys = [];
          this.onQueryComplete.emit(roles);
          this.mapRoleTree(roles as any);
          this.data = roles;
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

  mapRoleTree(tree: NzTreeNode[]): void {
    if (tree && tree.length && tree.length > 0) {
      tree.forEach(item => {
        if (this.isExpanded && !this.state.expandKeys.includes(item.key)) {
          this.state.expandKeys.push(item.key);
        }
        item.isExpanded = this.isExpanded;
        item.isLeaf = item.children === null || item.children.length === 0;
        this.mapRoleTree(item.children);
      });
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    if (data.node) {
      this.onSelect.emit([data.node.origin as YunzaiRoleTree]);
    } else if (data.nodes) {
      const roles: YunzaiRoleTree[] = data.nodes.map(n => n.origin as YunzaiRoleTree);
      this.onSelect.emit(roles);
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
