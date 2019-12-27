import { AppXalChartConfig } from 'src/app/shared/app-chart.directive';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.less']
})
export class CultureComponent implements OnInit {
  radioValue = 'lec';

  options = [
    { label: 'LEC', value: 'LEC' },
    { label: 'LS', value: 'LS' },
    { label: 'MES', value: 'MES' }
  ];

  config1: AppXalChartConfig = {
    chartType: 'interval',
    actions: [
      {
        action: 'color',
        param: 'genre'
      },
      {
        action: 'position',
        param: 'genre*sold'
      }
    ]
  };
  data1 = [
    { genre: '动火作业', sold: 275 },
    { genre: '电气作业', sold: 450 },
    { genre: '高处作业', sold: 120 },
    { genre: '吊装作业', sold: 350 },
    { genre: '动土作业', sold: 150 }
  ];

  config2: AppXalChartConfig = {
    chartType: 'interval',
    actions: [
      {
        action: 'position',
        param: '月份*月均降雨量'
      },
      {
        action: 'color',
        param: 'name'
      },
      {
        action: 'adjust',
        param: [
          {
            type: 'dodge',
            marginRatio: 1 / 32
          }
        ]
      }
    ]
  };
  data2 = [
    { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
    { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
    { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
    { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
    { name: 'London', 月份: 'May', 月均降雨量: 47 },
    { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
    { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
    { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
    { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
    { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
    { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
    { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
    { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
    { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
    { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
    { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
  ];
  config3: AppXalChartConfig = {
    chartType: 'line',
    actions: [
      {
        action: 'position',
        param: '月份*月均降雨量'
      },
      {
        action: 'color',
        param: 'name'
      }
    ]
  };
  data3 = [
    { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
    { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
    { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
    { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
    { name: 'London', 月份: 'May', 月均降雨量: 47 },
    { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
    { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
    { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
    { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
    { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
    { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
    { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
    { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
    { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
    { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
    { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
  ];
  constructor() {}

  ngOnInit() {}
}
