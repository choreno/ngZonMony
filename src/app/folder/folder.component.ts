import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExpenseService } from '../services/expense.service';
import { IExpense } from '../dashboard/dashboard.interface';
import { IFolder } from '../folder/folder.interface';


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
    
    
    this.folderExpenses = this._expenseService.getAllExpensesByFolder(this.allExpenses); 
    // this._expenseService.getAllExpensesByFolder(this.allExpenses)
    //   .subscribe(
    //   response => this.folderExpenses = response,
    //   err => console.log(err),
    //   () => console.log('success loading expenses db')
    //   );



  }

}
