import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { ExpenseService } from '../services/expense.service';
import { IExpense, IGroupExpenses } from '../interfaces/expense.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  expenses: IExpense[];

  // groupExpenses: IGroupExpenses[];
   
  constructor(private _expenseService: ExpenseService) {}

  ngOnInit() {

    this._expenseService.getAllExpenses().subscribe(
      response => this.expenses = response,
      err => console.log(err),
      () => console.log('success loading expenses db'));

    // this.groupExpenses = this.getAllExpensesByFolderName(this.expenses);
    
    //this.groupExpenses = this.groupByFolderName(this.expenses);
  }


  // getAllExpensesByFolderName(expense: IExpense[]):IGroupExpenses[] {

  //     if(!expense) return; 

  //     const folderNames = new Set(expense.map(x=>x.folderName));
  //     const result = Array.from(folderNames).map(x=>({
  //       folderName: x, 
  //       expenses: expense.filter(expense=>expense.folderName == x)
  //     }));

  //   return result;

  // }






}


