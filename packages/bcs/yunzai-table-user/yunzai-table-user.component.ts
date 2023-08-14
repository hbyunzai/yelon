import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import {SFComponent, SFSchema, SFValue} from "@yelon/form";
import {STColumn, STComponent, STData, STRequestOptions} from "@yelon/abc/st";
import {debounceTime, Subject, takeUntil} from "rxjs";
import {
    YunzaiTableUser, YunzaiTableUserParam,
    YunzaiTableUserProps,
    YunzaiTableUserRole,
    YunzaiTableUserState
} from "./yunzai-table-user.types";

@Component({
    selector: `yunzai-table-user`,
    templateUrl: `./yunzai-table-user.html`
})
export class YunzaiTableUserComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild("st") st!: STComponent;
    @ViewChild("sf") sf!: SFComponent;
    @Input() props?: YunzaiTableUserProps
    @Output() onChecked: EventEmitter<YunzaiTableUser[]> = new EventEmitter<YunzaiTableUser[]>();

    state: YunzaiTableUserState = {
        columns: [
            {index: "checkbox", render: "checkbox", renderTitle: 'checkbox_all', width: 50, fixed: 'left'},
            {index: "no", type: "no", title: {i18n: "table-user.no"}, width: 50},
            {index: 'realName', title: {i18n: "table-user.realName"}, width: 100},
            {index: 'userCode', title: {i18n: "table-user.usercode"}, width: 100},
            {index: 'dept.deptName', title: {i18n: "table-user.deptName"}, width: 100},
            {index: "rolesName", render: "rolesName", title: {i18n: "table-user.roleName"}, width: 100},
            {index: 'idCard', title: {i18n: "table-user.idcard"}, width: 100},
        ],
        data: [],
        dataBackup: [],
        page: {
            pageNum: 1,
            pageSize: 30,
            pageParam: {}
        },
        schema: {
            properties: {
                realName: {
                    type: "string",
                    ui: {
                        widget: "string",
                        i18n: "realName"
                    }
                },
                userCode: {
                    type: "string",
                    ui: {
                        i18n: "userCode"
                    }
                },
                idCard: {
                    type: "string",
                    ui: {
                        i18n: "idCard"
                    }
                }
            }
        },
        check: {
            data: [],
        },
        destroy$: new Subject<any>()
    }

    get wrapped(): boolean {
        return !!this.props?.wrap
    }

    get schema(): SFSchema {
        return this.state.schema
    }

    get disableCheck(): boolean {
        return !!this.props?.check?.disable
    }

    get pageCheck(): boolean {
        return !!this.props?.check?.pageCheck
    }

    get hasCheck(): boolean {
        return this.state.check.data.length > 0
    }

    get list(): boolean {
        return !!this.props?.list
    }

    get checked(): YunzaiTableUser[] {
        return this.state.check.data as YunzaiTableUser[]
    }

    get scroll(): {
        x?: string | null;
        y?: string | null;
    } {
        if (this.props && this.props.scroll) return this.props.scroll
        return {x: '1200px', y: '600px'}
    }


    get inSearch(): boolean {
        const value = this.sf.value;
        return Object.keys(value).length > 0
    }

    constructor() {
    }

    ngOnInit(): void {
        this.setupPropsToState();
    }

    ngAfterViewInit(): void {
        this.setupTable();
        this.hookSearch();
    }

    setupPropsToState(): void {
        if (!this.props) return
        this.setupPropsData()
        this.setupPropsPage()
        this.setupPropsColumns()
        this.setupPropsFilteredColumns()
        this.setupPropsCustomColumns()
        this.setupPropsChecked()
    }

    setupTable(): void {
        if (!this.st) return
        this.setupTableData();
        this.setupTablePage();
        this.setupTableColumn();
        this.setupTableRequest();
        this.setupTableResponse();
        this.onQuery();
    }

    setupPropsData(): void {
        if (!this.props) return
        if (this.props.data && this.props.data.length > 0) {
            this.state.data = this.props.data;
            this.state.dataBackup = this.props.data;
        } else {
            this.state.data = "/auth/baseUser/queryListForPage"
        }
    }

    setupPropsPage(): void {
        if (!this.props || !this.props.page) return
        this.state.page = JSON.parse(JSON.stringify(this.props.page))
    }

    setupPropsColumns(): void {
        if (!this.props || !this.props.additionalColumns) return
        let columns: STColumn[] = [];
        if (this.props && this.props.additionalColumns) {
            columns = columns.concat(this.props.additionalColumns)
        }
        columns = columns.concat(this.state.columns)
        this.state.columns = columns
    }

    setupPropsFilteredColumns(): void {
        if (!this.props || !this.props.filteredColumns || this.props.filteredColumns.length === 0) return
        this.state.columns = this.state.columns.filter((col) => !this.props?.filteredColumns?.includes(col.index as string))
    }

    setupPropsCustomColumns(): void {
        if (!this.props || !this.props.customColumns || this.props.customColumns.length === 0) return
        const temp: STColumn[] = [];
        this.state.columns.forEach((stateColumn) => {
            this.props?.customColumns?.forEach((customColumn: STColumn) => {
                if (stateColumn.index === customColumn.index) {
                    temp.push(customColumn)
                } else {
                    temp.push(stateColumn)
                }
            })
        })
        this.state.columns = [...temp]
    }

    setupPropsChecked(): void {
        if (!this.props || !this.props.check || !this.props.check.data) return
        this.state.check.data = this.props.check.data
    }

    setupTableData(): void {
        if (!this.st) return
        this.st.data = this.state.data;
    }

    setupTablePage(): void {
        if (!this.st) return
        this.st.pi = this.state.page.pageNum
        this.st.ps = this.state.page.pageSize
    }

    setupTableColumn(): void {
        if (!this.st) return
        this.st.resetColumns({columns: this.state.columns})
    }

    setupTableRequest(): void {
        if (!this.st) return
        this.st.req = {
            allInBody: true,
            method: "POST",
            reName: {
                pi: "pageNum",
                ps: "pageSize"
            },
            process: (requestOptions: STRequestOptions) => {
                requestOptions.body.pageParam = this.state.page.pageParam
                return requestOptions;
            }
        }
    }

    setupTableResponse(): void {
        if (!this.st) return
        this.st.res = {
            reName: {
                list: 'list',
                total: 'total'
            },
            process: (data: STData[]) => {
                if (!this.pageCheck) this.resetChecked()
                return data;
            }
        }
    }


    resetChecked(): void {
        if (!this.props || !this.props.check || !this.props.check.data) return
        this.state.check.data = this.props.check.data.map((id) => {
            return {userId: id}
        });
    }

    onCheckedItem(data: YunzaiTableUser): void {
        // remove
        if (this.isChecked(data)) {
            this.state.check.data = this.state.check.data.filter(u => u['userId'] !== data.userId)
        }
        // add
        else if (!this.isChecked(data)) {
            this.state.check.data = this.state.check.data.concat([data]);
        }
        this.onChecked.emit(this.state.check.data as YunzaiTableUser[])
    }

    onCheckedAll(e: any): void {
        const checkedAll = e.target.labels[0].innerHTML.includes("checked");
        if (checkedAll) {
            const data = this.st._data.filter((std) => !this.state.check.data.find((scd) => {
                return std["userId"] === scd["userId"]
            }))
            this.state.check.data = this.state.check.data.concat(data)
        } else {
            this.state.check.data = this.state.check.data.filter((s) => {
                return !this.st._data.find((std) => std["userId"] === s["userId"])
            })
        }
        this.onChecked.emit(this.state.check.data as YunzaiTableUser[])
    }


    isChecked(data: STData): boolean {
        return !!this.state.check.data.find((u) => u["userId"] === data["userId"]);
    }

    isAllChecked(): boolean {
        if (this.st._data.length > 0) {
            return this.isArraySubset(this.st._data, this.state.check.data)
        }
        return false;
    }

    isArraySubset(subset: any[], superset: any[]): boolean {
        return subset.every((item) => superset.some((superItem) => superItem.userId === item.userId));
    }

    renderRoles(roles: YunzaiTableUserRole[]): string {
        return roles.map((r) => r.roleName).join(",")
    }


    unCheck(user: YunzaiTableUser): void {
        this.state.check.data = this.state.check.data.filter((d) => d["userId"] != user.userId)
        this.onChecked.emit(this.state.check.data as YunzaiTableUser[])
    }

    unCheckAll(): void {
        this.state.check.data = []
        this.onChecked.emit(this.state.check.data as YunzaiTableUser[])
    }

    hookSearch(): void {
        this.sf.formValueChange.pipe(
            takeUntil(this.state.destroy$),
            debounceTime(1000)
        ).subscribe(
            (event) => {
                const {value} = event;
                this.onSearch(value)
            }
        )
    }


    onSearch(value: SFValue = {}): void {
        if (!this.inSearch) return
        if (Array.isArray(this.state.data)) {
            let tempData = this.state.data
            if (value['realName']) tempData = tempData.filter(d => d.realName.includes(value["realName"]))
            if (value['idCard']) tempData = this.state.data.filter(d => d.idCard = value["idCard"])
            if (value['userCode']) tempData = this.state.data.filter(d => d.userCode = value["userCode"])
            this.st.data = tempData
            this.st.reload()
        }
        if (typeof this.state.data === 'string') {
            this.state.page.pageParam = {...this.state.page.pageParam, ...value}
            this.onQuery()
        }
    }

    onReset(): void {
        this.sf.reset()
        this.state.page.pageParam = {}
        this.onQuery();
    }

    public onQuery(): void {
        if (!this.st) return
        this.st.reload()
    }

    public setTableParam(param: YunzaiTableUserParam) {
        if (this.inSearch) {
            this.state.page.pageParam = {...param, ...this.sf.value}
            this.onSearch(this.sf.value)
        }
        if (!this.inSearch) {
            this.state.page.pageParam = param
            this.setupTable();
        }
    }

    ngOnDestroy(): void {
        this.state.destroy$.complete()
    }

}
