import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ExpenseService {


    constructor(private _http: Http) { }

    private baseUrl = 'api/expenses'

    getAllExpenses(): Observable<any> {
        return this._http.get(`${this.baseUrl}`)
            .map(response => response.json().data);

    }


}
