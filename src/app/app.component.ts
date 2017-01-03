
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

import { HeroService } from './hero.service';
import { ExpenseService } from './expense.service';
import { Expense } from './mock-expenses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app works!';

  constructor
    (
    private _heroService: HeroService,
    private _expenseService: ExpenseService
    )
  { }

  heroes: Hero[];
  selectedHero: Hero;


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  getHeroes(): void {
    //this.heroes = this._heroService.getHeroes();    //before Promise
    this._heroService.getHeroes().then(heroes => this.heroes = heroes); //with promise
  }


  ngOnInit(): void {
    this.getHeroes();
    this.getExpenses();
  }

  //Expense -------

  expenses: Expense[];

  getExpenses(): void {
    this._expenseService.getExpenses().then(x => this.expenses = x);
  }


}


// const EXPENSES: Expense[] = [
//   {
//     id: 1,
//     folderName: 'Housing',
//     tabName: 'Mortgage',
//     tabNote: 'Garison Way #58, Fixed:5.5%, 30yrs',
//     dueDate: 30,
//     url: 'http://wellsfargo.com',
//     status: true,
//     payments: [
//       {
//         amount: 1600,
//         note: 'for this month',
//         paymentDTTM: new Date(),
//         createdDTTM: new Date(),
//         updatedDTTM: new Date(),
//       }

//     ],
//     createdDTTM: new Date(),
//     updatedDTTM: new Date(),
//   },
//   {
//     id: 2,
//     folderName: 'Housing',
//     tabName: 'HOA',
//     tabNote: 'Garison Way #58',
//     dueDate: 30,
//     url: null,
//     status: true,
//     payments: [
//       {
//         amount: 891,
//         note: '#5801',
//         paymentDTTM: new Date(),
//         createdDTTM: new Date(),
//         updatedDTTM: new Date(),
//       }

//     ],
//     createdDTTM: new Date(),
//     updatedDTTM: new Date(),
//   }
// ]




// export class Expense {

//   id: number;
//   folderName: string;
//   tabName: string;
//   tabNote: string;
//   dueDate: number;
//   url: string;
//   status: boolean;
//   payments: Payment[];
//   createdDTTM: Date;
//   updatedDTTM: Date;


// }

// export class Payment {

//   amount: number;
//   note: string;
//   paymentDTTM: Date;
//   createdDTTM: Date;
//   updatedDTTM: Date;


// }


