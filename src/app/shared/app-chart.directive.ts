import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';

import {
    Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';
import * as G2 from '@antv/g2';

@Directive({
  selector: '[appXalChart]'
})
export class XalChartDirective implements OnInit, OnChanges, OnDestroy {
  @Input() config: AppXalChartConfig;
  @Input() data: any[] = [];

  chart: G2.Chart;
  destroy$ = new Subject();

  constructor(private host: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      setTimeout(() => this.render());
    }
  }
  ngOnInit(): void {
    if (!this.config) {
      throw new Error('no config provided!');
    }
    this.initChart();
    this.addResizeListener();
  }

  addResizeListener() {
    fromEvent(window, 'resize')
      .pipe(
        tap(() => this.chart && this.chart.destroy()),
        debounceTime(200),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.initChart();
        this.render();
      });
  }

  getDom() {
    return this.host.nativeElement;
  }

  initChart() {
    const dom = this.getDom();
    this.chart = new G2.Chart({
      container: dom,
      forceFit: true,
      height: dom.clientHeight
    });
  }

  render() {
    this.chart.source(this.data);
    const { chartType, actions } = this.config;
    if (actions.length) {
      actions.reduce(
        (acc, curr) => acc[curr.action](curr.param),
        this.chart[chartType]()
      );
    }
    this.chart.render();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export interface AppXalChartConfig {
  chartType: 'interval' | 'line';
  actions: Array<{ action: string; param: any }>;
}
