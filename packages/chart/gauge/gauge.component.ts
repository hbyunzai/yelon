import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, numberAttribute } from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2BaseComponent } from '@yelon/chart/core';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'g2-gauge',
  exportAs: 'g2Gauge',
  template: `@if (!loaded) {
    <nz-skeleton />
  }`,
  host: {
    '[class.g2-gauge]': 'true'
  },

  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class G2GaugeComponent extends G2BaseComponent {
  // #region fields

  @Input() title?: string;
  @Input({ transform: numberAttribute }) height?: number;
  @Input() color = '#2f9cff';
  @Input() bgColor?: string; // = '#f0f2f5';
  @Input() format?: (text: string, item: any, index: number) => string;
  @Input({ transform: numberAttribute }) percent?: number;
  @Input() padding: number | number[] | 'auto' = [10, 10, 30, 10];

  // #endregion

  install(): void {
    // 自定义Shape 部分
    this.winG2.registerShape('point', 'pointer', {
      draw(cfg: any, container: any) {
        const group = container.addGroup({});
        // 获取极坐标系下画布中心点
        const center = (this as any).parsePoint({ x: 0, y: 0 });
        // 绘制指针
        group.addShape('line', {
          attrs: {
            x1: center.x,
            y1: center.y,
            x2: cfg.x,
            y2: cfg.y,
            stroke: cfg.color,
            lineWidth: 2.5,
            lineCap: 'round'
          }
        });
        group.addShape('circle', {
          attrs: {
            x: center.x,
            y: center.y,
            r: 5.75,
            stroke: cfg.color,
            lineWidth: 2,
            fill: '#fff'
          }
        });
        return group;
      }
    });

    const { el, height, padding, format, theme } = this;

    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height,
      padding,
      theme
    }));
    chart.legend(false);
    chart.animate(false);
    chart.tooltip(false);
    chart.coordinate('polar', {
      startAngle: (-9 / 8) * Math.PI,
      endAngle: (1 / 8) * Math.PI,
      radius: 0.75
    });
    chart.scale('value', {
      min: 0,
      max: 100,
      nice: true,
      tickCount: 6
    });
    chart.axis('1', false);
    chart.axis('value', {
      line: null,
      label: {
        offset: -14,
        formatter: format
      },
      tickLine: null,
      grid: null
    });
    chart.point().position('value*1').shape('pointer');

    this.ready.next(chart);

    this.changeData();

    chart.render();
  }

  changeData(): void {
    const { _chart, percent, color, bgColor, title } = this;
    if (!_chart) return;

    const data = [{ name: title, value: percent }];
    const val = data[0].value;
    _chart.annotation().clear(true);
    _chart.geometries[0].color(color);
    // 绘制仪表盘背景
    _chart.annotation().arc({
      top: false,
      start: [0, 0.95],
      end: [100, 0.95],
      style: {
        stroke: bgColor,
        lineWidth: 12,
        lineDash: null
      }
    });
    _chart.annotation().arc({
      start: [0, 0.95],
      end: [data[0].value!, 0.95],
      style: {
        stroke: color,
        lineWidth: 12,
        lineDash: null
      }
    });

    _chart.annotation().text({
      position: ['50%', '85%'],
      content: title,
      style: {
        fontSize: 12,
        fill: this.theme === 'dark' ? 'rgba(255, 255, 255, 0.43)' : 'rgba(0, 0, 0, 0.43)',
        textAlign: 'center'
      }
    });
    _chart.annotation().text({
      position: ['50%', '90%'],
      content: `${val} %`,
      style: {
        fontSize: 20,
        fill: this.theme === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
        textAlign: 'center'
      },
      offsetY: 15
    });

    _chart.changeData(data);
  }
}
