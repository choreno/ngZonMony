import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { IExpense, IGroupExpenses, IPayment } from '../interfaces/expense.interface';

// import rxjs all library
import * as Rx from 'rxjs/Rx';

@Injectable()
export class ExpenseService {

    private baseUrl = 'api/expenses';

    constructor(private _http: Http) { }

    getAllExpenses(): Observable<any> {
        return this._http.get(`${this.baseUrl}`)
            .map(response => response.json().data);

    }


    getAllExpensesByFolderName(expense: IExpense[]): IGroupExpenses[] {

        if (!expense) {
            return;
        }

        const folderNames = new Set(expense.map(x => x.folderName));
        const result = Array.from(folderNames).map(x => ({
            folderName: x,
            expenses: expense.filter(exp => exp.folderName === x)
        }));

        return result;
    }

    // getPayments(expense: IExpense[]):IPayment[] {

    //     const result = expense.map(x => x.payments);

    //     return  result ;
    // }


}
