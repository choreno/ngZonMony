import { Component, OnInit } from '@angular/core';


import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';



import { ExpenseService } from '../expense.service';
import { Expense } from '../mock-expenses';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

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
    //this._heroService.getHeroes().then(heroes => this.heroes = heroes); //with promise
    //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); //with promise slow

    //Observable
    this._heroService.getHeroes().subscribe(
      //success
      heroes => this.heroes = heroes,
      //error
      error => console.log('err:' + error),
      //completed
      () => console.log('done loading heroes --Herocomponent')
    );



  }


  ngOnInit(): void {
    this.getHeroes();
    this.getExpenses();
  }

  //Expense -------

  expenses: Expense[];

  // getExpenses(): void {
  //   this._expenseService.getExpenses().then(x => this.expenses = x);
  // }

  getExpenses(): void {
    this._expenseService.getExpenses().subscribe(
      response => this.expenses = response,
      err => console.log(err),
      () => console.log('success loading expenses -- herocomponent'));

  }


}
