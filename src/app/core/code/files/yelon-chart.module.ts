export default `import { NgModule } from '@angular/core';

// #region all modules

import { G2BarModule } from '@yelon/chart/bar';
import { G2CardModule } from '@yelon/chart/card';
import { G2CustomModule } from '@yelon/chart/custom';
import { G2GaugeModule } from '@yelon/chart/gauge';
import { G2MiniAreaModule } from '@yelon/chart/mini-area';
import { G2MiniBarModule } from '@yelon/chart/mini-bar';
import { G2MiniProgressModule } from '@yelon/chart/mini-progress';
import { NumberInfoModule } from '@yelon/chart/number-info';
import { G2PieModule } from '@yelon/chart/pie';
import { G2RadarModule } from '@yelon/chart/radar';
import { G2SingleBarModule } from '@yelon/chart/single-bar';
import { G2TagCloudModule } from '@yelon/chart/tag-cloud';
import { G2TimelineModule } from '@yelon/chart/timeline';
import { TrendModule } from '@yelon/chart/trend';
import { G2WaterWaveModule } from '@yelon/chart/water-wave';
import { ChartEChartsModule } from '@yelon/chart/chart-echarts';

const MODULES = [
  G2BarModule,
  G2CardModule,
  G2CustomModule,
  G2GaugeModule,
  G2MiniAreaModule,
  G2MiniBarModule,
  G2MiniProgressModule,
  G2PieModule,
  G2RadarModule,
  G2TagCloudModule,
  G2TimelineModule,
  G2WaterWaveModule,
  G2SingleBarModule,
  NumberInfoModule,
  TrendModule,
  ChartEChartsModule,
];

// #endregion

@NgModule({ exports: MODULES })
export class DemoYelonChartModule {}
`;
