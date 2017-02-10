import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { IExpense, IGroupExpenses } from '../interfaces/expense.interface';


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
            // tslint:disable-next-line:no-shadowed-variable
            expenses: expense.filter(expense => expense.folderName === x)
        }));

        return result;
    }


}
