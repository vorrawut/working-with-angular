import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Income, IncomeRequest } from 'src/app/models/income/income';
import { IncomeGroup } from 'src/app/models/income-group';
import { mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private initialState = [];
  private incomesSubject: BehaviorSubject<Income[]>;
  incomesStore$: Observable<Income[]>;
  serverURL = 'http://103.74.254.157:9003';
  constructor(private http: HttpClient) {
    this.incomesSubject = new BehaviorSubject(this.initialState);
    this.incomesStore$ = this.incomesSubject.asObservable();
  }

  private setIncomes(income: Income[]) {
    this.incomesSubject.next(income);
  }

  loadIncomesByUserId() {
    this.http.get<Income[]>(`${this.serverURL}/income/id/1`).pipe(
      tap(value => this.setIncomes(value))
    ).subscribe();
  }

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
