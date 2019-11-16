import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Income, IncomeRequest } from 'src/app/models/income/income';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IncomeService } from 'src/app/services/income/income.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IncomeGroup } from 'src/app/models/income-group';
import { debounceTime, distinctUntilChanged, switchMap, tap, filter, map } from 'rxjs/operators';

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
  incomeGroup: IncomeGroup[];
  incomeForm: FormGroup;
  searchForm: FormGroup;

  constructor(
    private modalService: BsModalService,
    private incomeService: IncomeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getIncomesByUserId();
    this.getIncomeGroup();
    this.createForm();
    this.searchForm.get('search').valueChanges.pipe(
      filter(v => v.length !== 0),
      debounceTime(500),
      distinctUntilChanged(),
      map(v => this.incomeService.findIncome(v))
    ).subscribe(v => console.log(v));
  }

  createForm() {
    this.searchForm = this.fb.group({
      search: ''
    });
    this.incomeForm = this.fb.group({
      date: '',
      amount: '',
      incomeGroupId: '',
      search: ''
    });
  }

  onSubmit() {
    const makeData = {
      userId: 13,
      incomeGroupId: Number(this.incomeForm.controls.incomeGroupId.value),
      amount: Number(this.incomeForm.controls.amount.value),
      date: new Date(this.incomeForm.controls.date.value).toISOString()
    } as IncomeRequest;
    this.incomeService.saveIncome(makeData).subscribe(_ => {
      console.log('success');
    });
  }

  private getIncomeGroup() {
    this.incomeService.getIncomeGroup().subscribe(incomeGroup => {
      this.incomeGroup = incomeGroup;
    });
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
