import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Income } from 'src/app/models/income/income';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IncomeService } from 'src/app/services/income/income.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    'งานประจำ',
    'งานเสริม',
    'รายได้จากการลงทุน'
  ];
  public doughnutChartData: MultiDataSet = [[1000, 200, 300]];
  public doughnutChartType: ChartType = 'doughnut';
  modalRef: BsModalRef;
  income: Income[];
  incomeForm: FormGroup;

  constructor(
    private modalService: BsModalService,
    private incomeService: IncomeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getIncomesByUserId();
    this.incomeForm = this.fb.group({
      date: '',
      amount: '',
      incomeGroupId: ''
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }

  private getIncomesByUserId() {
    const income$ = this.incomeService.getIncomeByUserId();
    income$.subscribe(income => {
      this.income = income;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
