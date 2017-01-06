import { Injectable } from '@angular/core';
//import { EXPENSES, Expense } from './mock-expenses';
import { Expense } from './mock-expenses';

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';



@Injectable()
export class ExpenseService {

  
  constructor(private _http:Http) { }


//from local export class 
// getExpenses(): Promise<Expense[]> {
//     return Promise.resolve(EXPENSES); 
//   }


//from the local json file

// getExpenses(): Observable<Expense[]> {
//   return this._http.get('/app/expenseData.json')
//       .map(response => response.json());

    
//   }


private baseUrl = 'api/expenses'

getExpenses(): Observable<any> {
  return this._http.get(`${this.baseUrl}`)
      .map(response => response.json().data);

    
  }


}
