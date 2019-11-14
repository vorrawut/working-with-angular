import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Income } from 'src/app/models/income/income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'งานประจำ',
    'งานเสริม',
    'รายได้จากการลงทุน'
  ];
  public doughnutChartData: MultiDataSet = [[1000, 200, 300]];
  public doughnutChartType: ChartType = 'doughnut';

  income: Income;
  constructor() { }

  ngOnInit() {

  }
}
