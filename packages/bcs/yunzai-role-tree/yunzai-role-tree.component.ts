import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {catchError, debounceTime, map, of, Subject, switchMap, takeUntil, throwError, zip} from "rxjs";
import {NzFormatEmitEvent, NzTreeNode} from "ng-zorro-antd/tree";
import {SFValueChange} from "@yelon/form/src/interface";
import {SFComponent} from "@yelon/form";
import {YunzaiRoleTree, YunzaiRoleTreeProps, YunzaiRoleTreeState} from "./yunzai-role-tree.types";
import {defaultSchema} from "./yunzai-role-tree.schema";
import {YunzaiRoleTreeService} from "./yunzai-role-tree.service";

@Component({
    selector: `yunzai-role-tree`,
    templateUrl: `./yunzai-role-tree.html`
})
export class YunzaiRoleTreeComponent implements OnInit, AfterViewInit {
    @ViewChild("form") sf!: SFComponent;

    @Input() props?: YunzaiRoleTreeProps;
    @Output() onQueryComplete: EventEmitter<YunzaiRoleTree[]> = new EventEmitter<YunzaiRoleTree[]>();
    @Output() onSelect: EventEmitter<YunzaiRoleTree[]> = new EventEmitter<YunzaiRoleTree[]>();

    state: YunzaiRoleTreeState = {
        loading: false,
        schema: defaultSchema,
        data: [],
        dataBackup: [],
        expandKeys: [],
        $destroy: new Subject<any>()
    }

    get data(): YunzaiRoleTree[] {
        if (this.props && this.props.data) {
            return this.props.data
        }
        return this.state.data
    }

    set data(roles: YunzaiRoleTree[]) {
        if (this.props && this.props.data) {
            this.props.data = roles;
        } else {
            this.state.data = roles;
        }
    }

    get nodes(): NzTreeNode[] {
        return this.data as any[]
    }

    get isMultiple(): boolean {
        if (this.props) {
            return !!this.props.multiple
        }
        return false;
    }

    get roleGroupCode(): string | undefined {
        if (this.props && this.props.roleGroupCode) {
            return this.props.roleGroupCode
        }
        return undefined
    }

    get isWrapped(): boolean {
        if (this.props) {
            return !!this.props.wrap;
        }
        return false;
    }

    get isExpanded(): boolean {
        if (this.props) {
            return !!this.props.expand
        }
        return false;
    }

    constructor(
        private roleTreeService: YunzaiRoleTreeService
    ) {
    }


    ngOnInit(): void {
        if (!this.props?.data) {
            this.query(this.roleGroupCode);
        } else {
            this.state.dataBackup = this.data
            this.mapRoleTree(this.data as any)
        }
    }

    ngAfterViewInit(): void {
        this.hookFormChange();
    }

    hookFormChange(): void {
        this.sf.formValueChange.pipe(
            takeUntil(this.state.$destroy),
            debounceTime(1000),
            map((value) => {
                this.load();
                return value;
            }),
            switchMap((valueChange: SFValueChange) => {
                const {value: {search}} = valueChange;
                if (this.props && this.props.data) {
                    return zip(of(search), of(this.state.dataBackup))
                }
                return zip(of(search), this.roleTreeService.tree(this.roleGroupCode));
            }),
            map(([search, depts]) => {
                this.state.expandKeys = []
                if (search && search.trim() !== '') {
                    depts = this.recursionSearch(search, depts)
                    this.onQueryComplete.emit(depts);
                }
                this.mapRoleTree(depts as any);
                this.data = depts
            }),
            catchError((error) => {
                this.unload();
                return throwError(error);
            })
        ).subscribe(() => {
            this.unload();
        });
    }

    recursionSearch(search: string, roles: YunzaiRoleTree[]): YunzaiRoleTree[] {
        const results: YunzaiRoleTree[] = [];
        const searchInRole = (role: YunzaiRoleTree) => {
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
        this.load()
        this.roleTreeService.tree(roleGroupCode)
            .pipe(
                takeUntil(this.state.$destroy),
                map((roles: YunzaiRoleTree[]) => {
                    this.state.expandKeys = []
                    this.onQueryComplete.emit(roles);
                    this.mapRoleTree(roles as any)
                    this.data = roles
                }),
                catchError((error) => {
                    this.unload();
                    return throwError(error)
                })
            ).subscribe(() => {
                this.unload();
            }
        );
    }

    load(): void {
        this.state.loading = true
    }

    unload(): void {
        this.state.loading = false
    }


    mapRoleTree(tree: Array<NzTreeNode>) {
        if (tree && tree.length && tree.length > 0) {
            tree.forEach((item) => {
                if (this.isExpanded && !this.state.expandKeys.includes(item.key)) {
                    this.state.expandKeys.push(item.key)
                }
                item.isExpanded = this.isExpanded
                item.isLeaf = item.children === null || item.children.length === 0;
                this.mapRoleTree(item.children);
            })
        }
    }

    activeNode(data: NzFormatEmitEvent): void {
        if (data.node) {
            this.onSelect.emit([data.node.origin as YunzaiRoleTree])
        } else if (data.nodes) {
            const roles: YunzaiRoleTree[] = data.nodes.map(n => n.origin as YunzaiRoleTree)
            this.onSelect.emit(roles)
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


}
