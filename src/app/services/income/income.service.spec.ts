import { TestBed } from '@angular/core/testing';

import { IncomeService } from './income.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { IncomeRequest } from 'src/app/models/income/income';
import { of } from 'rxjs';


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

  it('should call GET method of find income group api', () => {
    service.findIncome('ราย').subscribe();

    const req = httpTestingController.expectOne(`${service.serverURL}/income/user-id/1/search/ราย`);

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

  // it('should set data in store when call getIncomeByUserId is success', () => {
  //   service.incomesStore$ = of([
  //     {
  //       id: '1',
  //       incomeGroupId: 1,
  //       incomeGroupName: 'งานประจำ',
  //       date: '14/11/2019',
  //       amount: 150000
  //     }]);

  //   const expectedIncomes = [
  //     {
  //       id: '1',
  //       incomeGroupId: 1,
  //       incomeGroupName: 'งานประจำ',
  //       date: '14/11/2019',
  //       amount: 150000
  //     },
  //     {
  //       id: '2',
  //       incomeGroupId: 2,
  //       incomeGroupName: 'งานเสริม',
  //       date: '14/10/2019',
  //       amount: 150000
  //     },
  //     {
  //       id: '3',
  //       incomeGroupId: 3,
  //       incomeGroupName: 'รายได้จากการลงทุน',
  //       date: '14/10/2019',
  //       amount: 150000
  //     }
  //   ];
  //   service.loadIncomesByUserId();

  //   const request = httpTestingController.expectOne(`${service.serverURL}/income/id/1`);
  //   request.flush(expectedIncomes);
  //   httpTestingController.verify();

  //   expect(service.incomesStore$).toEqual(of(expectedIncomes));
  // });
});
