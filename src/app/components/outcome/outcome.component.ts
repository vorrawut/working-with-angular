import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'ค่าอาหาร',
    'ค่าเดินทาง',
    'ค่าอินเตอร์เน็ต'
  ];
  public doughnutChartData: MultiDataSet = [[1000, 200, 300]];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}
}
