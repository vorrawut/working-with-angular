import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Income } from 'src/app/models/income/income';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { IncomeService } from 'src/app/services/income/income.service';

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

  constructor(private modalService: BsModalService, private incomeService: IncomeService) {}

  ngOnInit() {

    const income$ = this.incomeService.getIncomeByUserId();
    income$.subscribe(income => {
      this.income = income;
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
