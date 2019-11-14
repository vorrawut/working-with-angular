import { Outcome } from './../../models/outcome/outcome';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  outcome: Outcome[];
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.outcome = [
      {
        id: '1',
        date: '14/11/2019',
        name: 'ซื้อน้ำ',
        price: 10,
        type: 'ค่าอาหาร'
      },
      {
        id: '1',
        date: '14/11/2019',
        name: 'ซื้อข้าวเที่ยง',
        price: 65,
        type: 'ค่าอาหาร'

      }
    ];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
