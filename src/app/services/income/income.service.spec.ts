import { TestBed } from "@angular/core/testing";

import { IncomeService } from "./income.service";

import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe("IncomeService", () => {
  let service: IncomeService;
  let httpTestingController: HttpTestingController;
  let expectedUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IncomeService);
    httpTestingController = TestBed.get(HttpTestingController);
    expectedUrl = "http://103.74.254.157:9003/income/id/1";
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return url for get income", () => {
    const incomeUrl = service.getIncomeByUserIdUrl;

    expect(incomeUrl).toBe(expectedUrl);
  });

  it("should call GET method", () => {
    service.getIncomeByUserId().subscribe();

    const req = httpTestingController.expectOne(expectedUrl);

    expect(req.request.method).toEqual("GET");
  });
});
