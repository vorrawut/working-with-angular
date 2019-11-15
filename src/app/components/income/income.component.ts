import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Income } from 'src/app/models/income/income';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

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
  modalRef: BsModalRef;
  income: Income[];

  constructor(private modalService: BsModalService) {}

  ngOnInit() {

    this.income = [
      {
        id: '1',
        incomeGroupId: 1,
        incomeGroupName: 'งานประจำ',
        date: '14/11/2019',
        amount: 150000
      },
      {
        id: '2',
        incomeGroupId: 2,
        incomeGroupName: 'งานเสริม',
        date: '14/10/2019',
        amount: 150000
      }, {
        id: '3',
        incomeGroupId: 3,
        incomeGroupName: 'รายได้จากการลงทุน',
        date: '14/10/2019',
        amount: 150000
      }
    ];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
