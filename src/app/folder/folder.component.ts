import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExpenseService } from '../services/expense.service';
import { IExpense, IFolder } from '../interfaces/expense.interface';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input()
  allExpenses: IExpense[];

  folderExpenses: IFolder[];

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit() {
    
    
    this._expenseService.getAllExpensesByFolder(this.allExpenses)
      .subscribe(
      response => this.folderExpenses = response,
      err => console.log(err),
      () => console.log('success loading expenses db')
      );



  }

}
