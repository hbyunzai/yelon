import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, YelonFormModule, SFSchemaEnum, SFValue, getData, toBool } from '@yelon/form';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';

import type { SFCascaderWidgetSchema } from './schema';

@Component({
  selector: 'sf-cascader',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-cascader
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [ngModel]="value"
      (ngModelChange)="_change($event)"
      [nzOptions]="data"
      [nzAllowClear]="ui.allowClear"
      [nzAutoFocus]="ui.autoFocus"
      [nzChangeOn]="ui.changeOn"
      [nzChangeOnSelect]="ui.changeOnSelect"
      [nzColumnClassName]="ui.columnClassName"
      [nzExpandTrigger]="ui.expandTrigger!"
      [nzMenuClassName]="ui.menuClassName"
      [nzMenuStyle]="ui.menuStyle!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzLabelProperty]="ui.labelProperty || 'label'"
      [nzValueProperty]="ui.valueProperty || 'value'"
      [nzLoadData]="loadData"
      [nzPlaceHolder]="ui.placeholder!"
      [nzPlacement]="ui.placement ?? 'bottomLeft'"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      [nzShowSearch]="ui.showSearch!"
      [nzMultiple]="ui.multiple"
      (nzClear)="_clear()"
      (nzVisibleChange)="_visibleChange($event)"
      (nzSelectionChange)="_selectionChange($event)"
    />
  </sf-item-wrap>`,

  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, YelonFormModule, NzCascaderModule]
})
export class CascaderWidget extends ControlUIWidget<SFCascaderWidgetSchema> implements OnInit {
  static readonly KEY = 'cascader';

  clearText!: string;
  showArrow!: boolean;
  showInput!: boolean;
  triggerAction!: string[];
  data: SFSchemaEnum[] = [];
  loadData?: (node: NzCascaderOption, index: number) => PromiseLike<any>;

  ngOnInit(): void {
    const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
    this.clearText = clearText || '清除';
    this.showArrow = toBool(showArrow, true);
    this.showInput = toBool(showInput, true);
    this.triggerAction = triggerAction || ['click'];
    if (asyncData) {
      this.loadData = (node: NzCascaderOption, index: number) =>
        asyncData(node, index, this).then(() => this.detectChanges());
    }
  }

  reset(value: SFValue): void {
    getData(this.schema, {}, value).subscribe(list => {
      this.data = list;
      this.detectChanges();
    });
  }

  _visibleChange(status: boolean): void {
    if (this.ui.visibleChange) this.ui.visibleChange(status);
  }

  _change(value: any[] | null): void {
    this.setValue(value == null ? this.ui.clearValue : value);
    if (this.ui.change) {
      this.ui.change(value);
    }
  }

  _selectionChange(options: NzCascaderOption[]): void {
    if (this.ui.selectionChange) {
      this.ui.selectionChange(options);
    }
  }

  _clear(): void {
    if (this.ui.clear) this.ui.clear();
  }
}
