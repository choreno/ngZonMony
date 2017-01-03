
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
    //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); //with promise slow
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



