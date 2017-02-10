import { Component, Input,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExpenseService } from '../services/expense.service';
import { IExpense, IGroupExpenses } from '../interfaces/expense.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-groupingTest',
  templateUrl: './groupingTest.component.html',
  // styleUrls: ['./groupingTest.component.scss']
})
export class GroupingTestComponent implements OnInit {


  @Input()
  data: IExpense[];

  groupExpenses: IGroupExpenses[];



  constructor(private _expenseService: ExpenseService) { }


  ngOnInit() {

     this.groupExpenses = this._expenseService.getAllExpensesByFolderName(this.data);


  }


}

