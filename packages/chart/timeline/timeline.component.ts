import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  numberAttribute
} from '@angular/core';

import type { Chart, Event, Types } from '@antv/g2';
import { format } from 'date-fns';

import { G2BaseComponent, G2Time } from '@yelon/chart/core';
import { toDate } from '@yelon/util/date-time';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

/**
 * 数据
 *
 * 注：根据 `maxAxis` 值传递指标数据
 */
export interface G2TimelineData {
  /**
   * 时间值
   */
  time?: G2Time;
  /** 指标1数据 */
  y1: number;
  /** 指标2数据 */
  y2?: number;
  /** 指标3数据 */
  y3?: number;
  /** 指标4数据 */
  y4?: number;
  /** 指标5数据 */
  y5?: number;
  [key: string]: any;
}

export interface G2TimelineMap {
  /** 指标1 */
  y1: string;
  /** 指标 */
  y2?: string;
  /** 指标3 */
  y3?: string;
  /** 指标4 */
  y4?: string;
  /** 指标5 */
  y5?: string;

  [key: string]: string | undefined;
}

export interface G2TimelineClickItem {
  item: G2TimelineData;
  ev: Event;
}

@Component({
  selector: 'g2-timeline',
  exportAs: 'g2Timeline',
  template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4>{{ title }}</h4>
    </ng-container>
    @if (!loaded) {
      <nz-skeleton />
    }
    <div #container></div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
})
export class G2TimelineComponent extends G2BaseComponent {
  // #region fields

  @Input() title?: string | TemplateRef<void> | null;
  @Input({ transform: numberAttribute }) maxAxis = 2;
  @Input() data: G2TimelineData[] = [];
  @Input() titleMap?: G2TimelineMap | null;
  @Input() colorMap: G2TimelineMap = { y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' };
  @Input() mask: string = 'HH:mm';
  @Input() maskSlider: string = 'HH:mm';
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input({ transform: numberAttribute }) height = 450;
  @Input() padding: number[] = [40, 8, 64, 40];
  @Input({ transform: numberAttribute }) borderWidth = 2;
  @Input({ transform: booleanAttribute }) slider = true;
  @Output() readonly clickItem = new EventEmitter<G2TimelineClickItem>();

  // #endregion

  onlyChangeData = (changes: SimpleChanges): boolean => {
    const tm = changes.titleMap;
    return !(tm && !tm.firstChange && tm.currentValue !== tm.previousValue);
  };

  install(): void {
    const { node, height, padding, slider, maxAxis, theme, maskSlider } = this;
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: node.nativeElement,
      autoFit: true,
      height,
      padding,
      theme
    }));
    chart.axis('time', { title: null });
    chart.axis('y1', { title: null });
    for (let i = 2; i <= maxAxis; i++) {
      chart.axis(`y${i}`, false);
    }

    chart.line().position('time*y1');
    for (let i = 2; i <= maxAxis; i++) {
      chart.line().position(`time*y${i}`);
    }

    chart.tooltip({
      showCrosshairs: true,
      shared: true
    });

    const sliderPadding = { ...[], ...padding };
    sliderPadding[0] = 0;
    if (slider) {
      chart.option('slider', {
        height: 26,
        start: 0,
        end: 1,
        trendCfg: {
          isArea: false
        },
        minLimit: 2,
        formatter: (val: Date) => format(val, maskSlider)
      });
    }

    chart.on(`plot:click`, (ev: Event) => {
      const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
      this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
    });

    chart.on(`legend-item:click`, (ev: Event) => {
      const item = ev?.target?.get('delegateObject').item;
      const id = item?.id;
      const line = chart.geometries.find(w => w.getAttribute('position').getFields()[1] === id);
      if (line) {
        line.changeVisible(!item.unchecked);
      }
    });

    this.ready.next(chart);

    this.changeData();

    chart.render();
  }

  changeData(): void {
    const { _chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
    let data = [...this.data];
    if (!_chart || data.length <= 0) return;

    const arrAxis = [...Array(maxAxis)].map((_, index) => index + 1);

    _chart.legend({
      position,
      custom: true,
      items: arrAxis.map(id => {
        const key = `y${id}`;
        return {
          id: key,
          name: titleMap![key],
          value: key,
          marker: { style: { fill: colorMap[key] } }
        } as Types.LegendItem;
      })
    });

    // border
    _chart.geometries.forEach((v, idx: number) => {
      v.color((colorMap as any)[`y${idx + 1}`]).size(borderWidth);
    });
    _chart.height = height;
    _chart.padding = padding;

    // 转换成日期类型
    data = data
      .map(item => {
        item.time = toDate(item.time!);
        item._time = +item.time;
        return item;
      })
      .sort((a, b) => a._time - b._time);

    const max = Math.max(...arrAxis.map(id => [...data].sort((a, b) => b[`y${id}`] - a[`y${id}`])[0][`y${id}`]));
    const scaleOptions: Record<string, Types.ScaleOption> = {};
    arrAxis.forEach(id => {
      const key = `y${id}`;
      scaleOptions[key] = {
        alias: titleMap![key],
        max,
        min: 0
      };
    });
    _chart.scale({
      time: {
        type: 'time',
        mask,
        range: [0, 1]
      },
      ...scaleOptions
    });

    const initialRange = {
      start: data[0]._time,
      end: data[data.length - 1]._time
    };
    const filterData = data.filter(val => val._time >= initialRange.start && val._time <= initialRange.end);
    _chart.changeData(filterData);
  }
}
