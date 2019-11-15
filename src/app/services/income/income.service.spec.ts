import { TestBed } from '@angular/core/testing';

import { IncomeService } from './income.service';

describe('IncomeService', () => {
  let service: IncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return url for get income', ()=> {

    const incomeUrl = service.getIncomeByUserIdUrl;

    expect(incomeUrl).toBe('http://103.74.254.157:9003/income/id/1');

  });


});
