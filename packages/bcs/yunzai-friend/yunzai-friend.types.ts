import {Subject} from "rxjs";
import {SFSchema} from "@yelon/form";
import {YunzaiTableUser} from "@yelon/bcs/yunzai-table-user";

export interface YunzaiFriendGroup {
    id: string
    name: string
    userAccount: string
    data?: YunzaiTableUser[]
}

export interface YunzaiFriendGroupState {
    loading: boolean
    schema: SFSchema
    data: YunzaiFriendGroup[]
    dataBackup: YunzaiFriendGroup[]
    $destroy: Subject<any>
}

export interface YunzaiFriendGroupProps {
    wrap?: boolean
    data?: YunzaiFriendGroup[]
}
