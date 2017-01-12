import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { ExpenseService } from '../services/expense.service';
import { IExpense } from '../interfaces/expense.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  expenses: IExpense[];

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit() {

    this._expenseService.getAllExpenses().subscribe(
      response => this.expenses = response,
      err => console.log(err),
      () => console.log('success loading expenses db'));

  }


}


