import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { catchError, debounceTime, map, of, Subject, switchMap, takeUntil, throwError, zip } from 'rxjs';

import { YunzaiGrade, YunzaiGradeService } from '@yelon/bcs/yunzai-grade';
import { SFComponent, SFValueChange, YelonFormModule } from '@yelon/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormatEmitEvent, NzTreeModule, NzTreeNode } from 'ng-zorro-antd/tree';

import { generateSchema } from './yunzai-dept-tree.schema';
import { YunzaiDeptTreeService } from './yunzai-dept-tree.service';
import { YUNZAI_DEPT_TYPES, YunzaiDeptTree, YunzaiDeptTreeProps, YunzaiDeptTreeState } from './yunzai-dept-tree.types';

@Component({
  selector: `yunzai-dept-tree`,
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
      <ng-container [ngTemplateOutlet]="deptForm" />
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

    <ng-template #deptForm>
      <sf #form layout="inline" [button]="'none'" [schema]="state.schema" />
    </ng-template>
    <ng-template #blank />
  `,
  standalone: true,
  imports: [CommonModule, NzIconModule, NzEmptyModule, NzSpinModule, NzTreeModule, NzCardModule, YelonFormModule]
})
export class YunzaiDeptTreeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('form') sf!: SFComponent;
  @Input() props?: YunzaiDeptTreeProps;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() readonly onQueryComplete: EventEmitter<YunzaiDeptTree[]> = new EventEmitter<YunzaiDeptTree[]>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() readonly onSelect: EventEmitter<YunzaiDeptTree[]> = new EventEmitter<YunzaiDeptTree[]>();
  private $destroy = new Subject();

  state: YunzaiDeptTreeState = {
    loading: false,
    schema: { properties: {} },
    data: [],
    dataBackup: [],
    expandKeys: []
  };

  get data(): YunzaiDeptTree[] {
    if (this.props && this.props.data) {
      return this.props.data;
    }
    return this.state.data;
  }

  set data(depts: YunzaiDeptTree[]) {
    if (this.props && this.props.data) {
      this.props.data = depts;
    } else {
      this.state.data = depts;
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

  get includeClass(): boolean {
    if (this.props) {
      return !!this.props.class;
    }
    return false;
  }

  get includeClassHistory(): boolean {
    if (this.props) {
      return !!this.props.historyClass;
    }
    return false;
  }

  get includeGrade(): boolean {
    if (this.props) {
      return !!this.props.grade;
    }
    return false;
  }

  get deptTypes(): YUNZAI_DEPT_TYPES[] {
    if (this.props) {
      return this.props.types || [];
    }
    return [];
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

  get gradeId(): string | undefined {
    return this.props?.gradeId;
  }

  constructor(
    private deptTreeService: YunzaiDeptTreeService,
    private gradeService: YunzaiGradeService
  ) {}

  ngOnInit(): void {
    if (!this.props?.data) {
      this.query();
    } else {
      this.state.dataBackup = this.data;
      this.mapDeptTree(this.data as NzSafeAny);
    }
  }

  ngAfterViewInit(): void {
    this.hookFormChange();
    this.setupSchema();
  }

  setupSchema(): void {
    const grades = this.gradeService.grades().pipe(
      takeUntil(this.$destroy),
      map((grades: YunzaiGrade[]) => {
        return grades.map(grade => {
          return { label: grade.name, value: grade.openId };
        });
      })
    );
    this.sf.refreshSchema(generateSchema(this.includeClass, this.includeClassHistory, this.includeGrade, grades));
  }

  hookFormChange(): void {
    this.sf.formValueChange
      .pipe(
        debounceTime(1000),
        map(value => {
          this.load();
          return value;
        }),
        switchMap((valueChange: SFValueChange) => {
          const {
            value: { search, includeClass, includeClassHistory, gradeId }
          } = valueChange;
          if (this.props && this.props.data) {
            return zip(of(search), of(this.state.dataBackup));
          }
          return zip(
            of(search),
            this.deptTreeService.tree(!!includeClass, !!includeClassHistory, this.deptTypes, gradeId)
          );
        }),
        map(([search, depts]) => {
          this.state.expandKeys = [];
          if (search && search.trim() !== '') {
            depts = this.recursionSearch(search, depts);
            this.onQueryComplete.emit(depts);
          }
          this.mapDeptTree(depts as NzSafeAny);
          this.data = depts;
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

  mapDeptTree(tree: NzTreeNode[]): void {
    if (tree && tree.length && tree.length > 0) {
      tree.forEach(item => {
        if (this.isExpanded && !this.state.expandKeys.includes(item.key)) {
          this.state.expandKeys.push(item.key);
        }
        item.isExpanded = this.isExpanded;
        item.isLeaf = item.children === null || item.children.length === 0;
        this.mapDeptTree(item.children);
      });
    }
  }

  recursionSearch(search: string, depts: YunzaiDeptTree[]): YunzaiDeptTree[] {
    const results: YunzaiDeptTree[] = [];
    const searchInDept = (dept: YunzaiDeptTree): void => {
      if (dept.title.includes(search)) {
        results.push(dept);
      }
      if (dept.children && dept.children.length > 0) {
        for (const child of dept.children) {
          searchInDept(child);
        }
      }
    };
    for (const dept of depts) {
      searchInDept(dept);
    }
    return results;
  }

  activeNode(data: NzFormatEmitEvent): void {
    if (data.node) {
      this.onSelect.emit([data.node.origin as YunzaiDeptTree]);
    } else if (data.nodes) {
      const depts: YunzaiDeptTree[] = data.nodes.map(n => n.origin as YunzaiDeptTree);
      this.onSelect.emit(depts);
    }
  }

  query(): void {
    this.load();
    this.deptTreeService
      .tree(this.includeClass, this.includeClassHistory, this.deptTypes, this.gradeId)
      .pipe(
        takeUntil(this.$destroy),
        map((depts: YunzaiDeptTree[]) => {
          this.state.expandKeys = [];
          this.onQueryComplete.emit(depts);
          this.mapDeptTree(depts as NzSafeAny);
          this.data = depts;
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
