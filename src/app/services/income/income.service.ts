import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Income } from 'src/app/models/income/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  getIncomeByUserIdUrl = 'http://103.74.254.157:9003/income/id/1'

  constructor(private http: HttpClient) { }

  getIncomeByUserId(): Observable<Income[]> {
    return this.http.get<Income[]>('http://103.74.254.157:9003/income/id/1');
  }
}
