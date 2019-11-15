import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeComponent } from './income.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IncomeService } from 'src/app/services/income/income.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('IncomeComponent', () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;
  let incomeService: IncomeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        HttpClientTestingModule
      ],
      declarations: [ IncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    incomeService = TestBed.get(IncomeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getIncomeByUserId', () => {

    const getIncomeByUserId = spyOn(incomeService, 'getIncomeByUserId').and.returnValue(of([]));

    component.ngOnInit();

    expect(getIncomeByUserId).toHaveBeenCalled();
  });

});
