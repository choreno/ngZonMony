import { Injectable } from '@angular/core';
import { EXPENSES, Expense } from './mock-expenses';

@Injectable()
export class ExpenseService {

  constructor() { }


getExpenses(): Promise<Expense[]> {
    return Promise.resolve(EXPENSES); 
  }

}
