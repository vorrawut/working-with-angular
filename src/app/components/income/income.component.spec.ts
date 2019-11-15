import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IncomeComponent } from "./income.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { IncomeService } from "src/app/services/income/income.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";
import { Income } from 'src/app/models/income/income';

describe("IncomeComponent", () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;
  let incomeService: IncomeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ModalModule.forRoot(), HttpClientTestingModule],
      declarations: [IncomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    incomeService = TestBed.get(IncomeService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("getIncomeByUserId", () => {

    let expectedIncomes: Income[];

    beforeEach(() => {

      expectedIncomes = [
        {
          id: "1",
          incomeGroupId: 1,
          incomeGroupName: "งานประจำ",
          date: "14/11/2019",
          amount: 150000
        },
        {
          id: "2",
          incomeGroupId: 2,
          incomeGroupName: "งานเสริม",
          date: "14/10/2019",
          amount: 150000
        },
        {
          id: "3",
          incomeGroupId: 3,
          incomeGroupName: "รายได้จากการลงทุน",
          date: "14/10/2019",
          amount: 150000
        }
      ];

      spyOn(incomeService, "getIncomeByUserId").and.returnValue(of(expectedIncomes));
    });

    it("should call getIncomeByUserId", () => {

      component.ngOnInit();

      expect(incomeService.getIncomeByUserId).toHaveBeenCalled();
    });

    it("should set incomes from getIncomeByUserId", () => {

      component.ngOnInit();

      expect(component.income).toBe(expectedIncomes);
    });
  });
});
