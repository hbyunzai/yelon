import {NgModule} from "@angular/core";
import {YunzaiSharedZorroModule} from "@yelon/bcs/yunzai-shared-zorro";
import {YunzaiSharedYelonModule} from "@yelon/bcs/yunzai-shared-yelon";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {YunzaiDormitoryTreeComponent} from "./yunzai-dormitory-tree.component";

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        YunzaiSharedZorroModule,
        YunzaiSharedYelonModule
    ],
    declarations: [YunzaiDormitoryTreeComponent],
    exports: [YunzaiDormitoryTreeComponent]
})
export class YunzaiDormitoryTreeModule {
}
