---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

模仿自 [antv基础漏斗图](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

## en-US

Copy [Basic Funnel Chart](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

```ts
import { Component, ElementRef, NgZone, inject } from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2CustomModule } from '@yelon/chart/custom';


@Component({
  selector: 'chart-custom-basic',
  template: ` <g2-custom delay="100" (render)="render($event)" /> `,
  imports: [G2CustomModule]
})
export class DemoComponent {
  private readonly ngZone = inject(NgZone);

  render(el: ElementRef<HTMLDivElement>): void {
    this.ngZone.runOutsideAngular(() => this.init(el.nativeElement));
  }

  private init(el: HTMLElement): void {
    const data: Array<{ action: string; pv: number; percent: number }> = [
      { action: '浏览网站', pv: 50000, percent: 0 },
      { action: '放入购物车', pv: 35000, percent: 0 },
      { action: '生成订单', pv: 25000, percent: 0 },
      { action: '支付订单', pv: 15000, percent: 0 },
      { action: '完成交易', pv: 8000, percent: 0 }
    ].map(row => {
      row.percent = row.pv / 50000;
      return row;
    });
    const chart: Chart = new (window as any).G2.Chart({
      container: el,
      autoFit: true,
      height: 500,
      width: el.clientWidth,
      padding: [20, 120, 95]
    });
    chart.data(data);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li style="margin-bottom:4px;list-style-type:none;padding: 0;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">浏览人数：{pv}</span><br/>' +
        '<span style="padding-left: 16px;line-height: 16px;">占比：{percent}</span><br/>' +
        '</li>'
    });

    chart.coordinate('rect').transpose().scale(1, -1);
    chart
      .interval()
      .adjust('symmetric')
      .position('action*percent')
      .shape('funnel')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label(
        'action*pv',
        (action, pv) => {
          return {
            content: `${action} ${pv}`
          };
        },
        {
          offset: 35,
          labelLine: {
            style: {
              lineWidth: 1,
              stroke: 'rgba(0, 0, 0, 0.15)'
            }
          }
        }
      )
      .tooltip('action*pv*percent', (action, pv, percent) => {
        return {
          name: action,
          percent: `${+percent * 100}%`,
          pv
        };
      })
      .animate({
        appear: {
          animation: 'fade-in'
        },
        update: {
          // annotation: 'fade-in'
        }
      });

    chart.interaction('element-active');

    chart.on('beforepaint', () => {
      chart.annotation().clear(true);
      const chartData = chart.getData();
      // 中间标签文本
      chartData.forEach(obj => {
        chart.annotation().text({
          top: true,
          position: {
            action: obj.action,
            percent: 'median'
          },
          content: `${+obj.percent * 100}%`, // 显示的文本内容
          style: {
            stroke: null,
            fill: '#fff',
            textAlign: 'center'
          }
        });
      });
    });

    chart.render();
  }
}
```
