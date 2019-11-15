import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  getIncomeByUserIdUrl = 'http://103.74.254.157:9003/income/id/1'

  constructor() { }
}
