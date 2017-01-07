import { Component, OnInit } from '@angular/core';


import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


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
    private _expenseService: ExpenseService,
    private _router: Router
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

  gotoDetail(): void {

    this._router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: any): void {

    var newHero = new Hero();
    newHero.name = name; 
    newHero.id = 55; 
    
    if (!name) { return; }
    this._heroService.create(newHero)
      .subscribe(
      hero => {
        
        this.heroes.push(newHero);
      },
      err => console.log(err),
      () => this.selectedHero = null);
  }



// create(todo: Todo) {
//     this.http.post(`${this.baseUrl}/todos`, JSON.stringify(todo))
//       .map(response => response.json()).subscribe(data => {
//         this.dataStore.todos.push(data);
//         this._todos.next(Object.assign({}, this.dataStore).todos);
//       }, error => console.log('Could not create todo.'));
//   }




  // add(name: string): void {
  //     name = name.trim();
  //     if (!name) { return; }
  //     this._heroService.create(name)
  //       .then(hero => {
  //         this.heroes.push(hero);
  //         this.selectedHero = null;
  //       });
  //   }

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
