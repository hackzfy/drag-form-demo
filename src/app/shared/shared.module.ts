import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { XalChartDirective } from './app-chart.directive';

@NgModule({
  declarations: [XalChartDirective],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    XalChartDirective
  ]
})
export class SharedModule {}
