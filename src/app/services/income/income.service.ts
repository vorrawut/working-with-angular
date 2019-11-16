import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Income, IncomeRequest } from 'src/app/models/income/income';
import { IncomeGroup } from 'src/app/models/income-group';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  serverURL = 'http://103.74.254.157:9003';
  constructor(private http: HttpClient) { }

  getIncomeByUserId(): Observable<Income[]> {
    return this.http.get<Income[]>(`${this.serverURL}/income/id/1`);
  }

  getIncomeGroup(): Observable<IncomeGroup[]> {
    return this.http.get<IncomeGroup[]>(`${this.serverURL}/income/group`);
  }

  saveIncome(data: IncomeRequest) {
    return this.http.post(`${this.serverURL}/income`, data);
  }

  findIncome(search: string): Observable<Income[]> {
    return this.http.get<Income[]>(`${this.serverURL}/income/user-id/1/search/${search}`);
  }
}
