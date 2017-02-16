import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { ExpenseService } from '../services/expense.service';
import { IExpense, IGroupExpenses } from '../interfaces/expense.interface';

//import * as Rx from 'rxjs/Rx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  expenses: IExpense[];

  totalExpenses: Number;

  Texpenses: IExpense[];

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit() {

    this._expenseService.getAllExpenses().subscribe(
      response => this.expenses = response,
      err => console.log(err),
      () => console.log('success loading expenses db'));

    this._expenseService.getTotalExpenses().subscribe(
      response => this.Texpenses = response,
      err => console.log(err),
      () => console.log('success loading TTTexpenses db'));



    //####### Problem section  -- remove at later !!!!!!!!!!!!!!!!!!!!!!!!
    this._expenseService.getAllExpenses().reduce((x, y) => x.payments + y)
      .subscribe(
      response => this.totalExpenses = response,
      err => console.log(err),
      () => console.log('success loading expenses db')
      );


    // this._expenseService.getSumOfExpense().subscribe(
    //   response => this.totalExpenses = response,
    //   err => console.log(err),
    //   () => console.log('success sum of  expenses'));
    // )

  }



}

// //emit value every 1 second
// const oneSecondInterval = Rx.Observable.interval(1000);
// //return an observable that emits value every 5 seconds
// const fiveSecondInterval = () => Rx.Observable.interval(5000);
// //every five seconds, emit buffered values
// const bufferWhenExample = oneSecondInterval.bufferWhen(fiveSecondInterval);
// //log values
// //ex. output: [0,1,2,3]...[4,5,6,7,8]
// const subscribe = bufferWhenExample.subscribe(val => console.log('Emitted Buffer: ', val));


