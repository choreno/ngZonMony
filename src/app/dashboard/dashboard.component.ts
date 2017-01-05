import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []; 

  constructor(private _heroService: HeroService) { }

  ngOnInit() {

    //this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));  //by Promise

    //Observable
    this._heroService.getHeroes().subscribe(heroes => this.heroes = heroes,
    err=>console.log('err:' + err),
    ()=>console.log('done loading Heroes')
    )

  }

}
