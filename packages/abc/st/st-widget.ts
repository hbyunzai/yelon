import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class STWidgetRegistry {
  private _widgets: Record<string, any> = {};

  get widgets(): any {
    return this._widgets;
  }

  register(type: string, widget: any): void {
    this._widgets[type] = widget;
  }

  has(type: string): boolean {
    return Object.prototype.hasOwnProperty.call(this._widgets, type);
  }

  get(type: string): any {
    return this._widgets[type];
  }
}
