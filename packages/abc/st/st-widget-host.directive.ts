import { Directive, Input, OnInit, ViewContainerRef, inject } from '@angular/core';

import { STWidgetRegistry } from './st-widget';
import { STColumn, STData } from './st.interfaces';

@Directive({
  selector: '[st-widget-host]'
})
export class STWidgetHostDirective implements OnInit {
  private readonly stWidgetRegistry = inject(STWidgetRegistry);
  private readonly viewContainerRef = inject(ViewContainerRef);

  @Input() record!: STData;
  @Input() column!: STColumn;

  ngOnInit(): void {
    const widget = this.column.widget!;
    const componentType = this.stWidgetRegistry.get(widget.type);

    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentType);
    const { record, column } = this;
    const data: Record<string, any> = widget.params ? widget.params({ record, column }) : { record };
    Object.keys(data).forEach(key => {
      (componentRef.instance as any)[key] = data[key];
    });
  }
}
