import { Injectable } from '@angular/core';
import { EXPENSES, Expense } from './mock-expenses';

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ExpenseService {

  constructor(private _http:Http) { }


// getExpenses(): Promise<Expense[]> {
//     return Promise.resolve(EXPENSES); 
//   }

getExpenses(): Observable<Expense[]> {
  return this._http.get('/app/expenseData.json')
      .map(response => response.json());

    
  }




}
