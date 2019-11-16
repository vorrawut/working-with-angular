import { TestBed } from '@angular/core/testing';

import { IncomeService } from './income.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { IncomeRequest } from 'src/app/models/income/income';


describe('IncomeService', () => {
  let service: IncomeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IncomeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET method and return url of get income api', () => {
    service.getIncomeByUserId().subscribe();

    const req = httpTestingController.expectOne(`${service.serverURL}/income/id/1`);

    expect(req.request.method).toEqual('GET');
  });

  it('should call GET method of get income group api', () => {
    service.getIncomeGroup().subscribe();

    const req = httpTestingController.expectOne(`${service.serverURL}/income/group`);

    expect(req.request.method).toEqual('GET');
  });

  it('should call GET method of save income api', () => {
    const data = {
      userId: 13,
      incomeGroupId: 1,
      amount: 100,
      date: '1/21/2019'
    } as IncomeRequest;
    service.saveIncome(data).subscribe();

    const req = httpTestingController.expectOne(`${service.serverURL}/income`);

    expect(req.request.method).toEqual('POST');
  });
});
