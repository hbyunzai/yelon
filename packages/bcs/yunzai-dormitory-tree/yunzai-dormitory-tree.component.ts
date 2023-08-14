import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {SFComponent} from "@yelon/form";
import {catchError, debounceTime, map, of, Subject, switchMap, takeUntil, throwError, zip} from "rxjs";
import {NzFormatEmitEvent, NzTreeNode} from "ng-zorro-antd/tree";
import {SFValueChange} from "@yelon/form/src/interface";
import {
    YunzaiDormitoryTree,
    YunzaiDormitoryTreeParam,
    YunzaiDormitoryTreeProps,
    YunzaiDormitoryTreeState,
    YunzaiDormitoryTreeType
} from "./yunzai-dormitory-tree.types";
import {YunzaiDormitoryTreeService} from "./yunzai-dormitory-tree.service";
import {defaultSchema} from "./yunzai-dormitory-tree.schema";

@Component({
    selector: `yunzai-dormitory-tree`,
    templateUrl: `./yunzai-dormitory-tree.html`
})
export class YunzaiDormitoryTreeComponent implements OnInit, AfterViewInit {
    @ViewChild("form") sf!: SFComponent;

    @Input() props?: YunzaiDormitoryTreeProps;
    @Output() onQueryComplete: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();
    @Output() onSelect: EventEmitter<YunzaiDormitoryTree[]> = new EventEmitter<YunzaiDormitoryTree[]>();

    state: YunzaiDormitoryTreeState = {
        loading: false,
        schema: defaultSchema,
        data: [],
        dataBackup: [],
        expandKeys: [],
        $destroy: new Subject<any>()
    }

    get data(): YunzaiDormitoryTree[] {
        if (this.props && this.props.data) {
            return this.props.data
        }
        return this.state.data
    }

    set data(dorms: YunzaiDormitoryTree[]) {
        if (this.props && this.props.data) {
            this.props.data = dorms;
        } else {
            this.state.data = dorms;
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

    get param(): YunzaiDormitoryTreeParam {
        if (this.props && this.props.param) {
            return this.props.param
        }
        return {isPower: false, treeType: YunzaiDormitoryTreeType.BUILDING_FLOORS_ROOMS}
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
        private dormitoryService: YunzaiDormitoryTreeService
    ) {
    }


    ngOnInit(): void {
        if (!this.props?.data) {
            this.query(this.param);
        } else {
            this.state.dataBackup = this.data
            this.mapDormTree(this.data as any)
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
                return zip(of(search), this.dormitoryService.tree(this.param));
            }),
            map(([search, dorms]) => {
                this.state.expandKeys = []
                if (search && search.trim() !== '') {
                    dorms = this.recursionSearch(search, dorms)
                    this.onQueryComplete.emit(dorms);
                }
                this.mapDormTree(dorms as any);
                this.data = dorms
            }),
            catchError((error) => {
                this.unload();
                return throwError(error);
            })
        ).subscribe(() => {
            this.unload();
        });
    }

    recursionSearch(search: string, dorms: YunzaiDormitoryTree[]): YunzaiDormitoryTree[] {
        const results: YunzaiDormitoryTree[] = [];
        const searchInDorm = (dorm: YunzaiDormitoryTree) => {
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
        this.load()
        this.dormitoryService.tree(param)
            .pipe(
                takeUntil(this.state.$destroy),
                map((dorms: YunzaiDormitoryTree[]) => {
                    this.state.expandKeys = []
                    this.onQueryComplete.emit(dorms);
                    this.mapDormTree(dorms as any)
                    this.data = dorms
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


    mapDormTree(tree: Array<NzTreeNode>) {
        if (tree && tree.length && tree.length > 0) {
            tree.forEach((item) => {
                if (this.isExpanded && !this.state.expandKeys.includes(item.key)) {
                    this.state.expandKeys.push(item.key)
                }
                item.isExpanded = this.isExpanded
                item.isLeaf = item.children === null || item.children.length === 0;
                this.mapDormTree(item.children);
            })
        }
    }

    activeNode(data: NzFormatEmitEvent): void {
        if (data.node) {
            this.onSelect.emit([data.node.origin as YunzaiDormitoryTree])
        } else if (data.nodes) {
            const dorms: YunzaiDormitoryTree[] = data.nodes.map(n => n.origin as YunzaiDormitoryTree)
            this.onSelect.emit(dorms)
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
