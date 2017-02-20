import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { DttmService } from '../services/dttm.service';
import { IExpense, IGroupExpenses, IPayment, ITotalAmounts} from '../interfaces/expense.interface';
import { IDttm } from '../interfaces/dttm.interface';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clock = Observable.interval(1000);

  currentDTTM: IDttm;

  expenses: IExpense[];

  grandTotalAmounts: number;
  totalAmounts: ITotalAmounts;



  // totalYearAmounts: number;
  // totalMonthAmounts: number;




  // currentDTTMAmounts: number;

  constructor(private _expenseService: ExpenseService, private _dttmService: DttmService) {

    this.currentDTTM = this._dttmService.getCurrentDTTM();
  }

  ngOnInit() {

    //this.clock.subscribe( x => console.log(x));

    this._expenseService.getAllExpenses()
      .subscribe(
      response => this.expenses = response,
      err => console.log(err),
      () => console.log('success loading expenses db')
      );


    this._expenseService.getTotalAmounts()
      .subscribe(
      response => this.grandTotalAmounts = response,
      err => console.log(err),
      () => console.log('success getting total amounts')
      );

    // this._expenseService.getTotalAmountsByDTTM(undefined, this.currentDTTM.year)
    // //this._expenseService.getTotalAmountsByDTTM(undefined, 2016)
    //   .subscribe(
    //   response => this.totalYearAmounts = response,
    //   err => console.log(err),
    //   () => console.log('success getting current year amounts')
    //   );


    // this._expenseService.getTotalAmountsByDTTM(this.currentDTTM.month, this.currentDTTM.year)
    //   .subscribe(
    //   response => this.totalMonthAmounts = response,
    //   err => console.log(err),
    //   () => console.log('success getting current month amounts')
    //   );


      this._expenseService.getTotalAmountsByDTTM_Merge(this.currentDTTM.month, this.currentDTTM.year)
      .subscribe(
      response =>  this.totalAmounts = response,
      err => console.log(err),
      () => console.log('success getting current month amounts')
      );

    // this._expenseService.getTotalAmountsByDTTM(this.currentDTTM.month, this.currentDTTM.year)
    //   .subscribe(
    //   response => this.currentDTTMAmounts = response,
    //   err => console.log(err),
    //   () => console.log('success getting current DTTM amounts')
    //   );

  }

}
