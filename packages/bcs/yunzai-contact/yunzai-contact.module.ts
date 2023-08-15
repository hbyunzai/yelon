import {NgModule} from "@angular/core";
import {YunzaiSharedZorroModule} from "@yelon/bcs/yunzai-shared-zorro";
import {YunzaiSharedYelonModule} from "@yelon/bcs/yunzai-shared-yelon";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {YunzaiContactComponent} from "./yunzai-contact.component";
import {YunzaiDeptTreeModule} from "@yelon/bcs/yunzai-dept-tree";
import {YunzaiDormitoryTreeModule} from "@yelon/bcs/yunzai-dormitory-tree";
import {YunzaiFriendModule} from "@yelon/bcs/yunzai-friend";
import {YunzaiRoleTreeModule} from "@yelon/bcs/yunzai-role-tree";
import {YunzaiTableUserModule} from "@yelon/bcs/yunzai-table-user"

@NgModule({
    imports: [
        YunzaiDeptTreeModule,
        YunzaiDormitoryTreeModule,
        YunzaiFriendModule,
        YunzaiRoleTreeModule,
        YunzaiTableUserModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        YunzaiSharedZorroModule,
        YunzaiSharedYelonModule
    ],
    declarations: [YunzaiContactComponent],
    exports: [YunzaiContactComponent]
})
export class YunzaiContactModule {
}
