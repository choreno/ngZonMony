import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../hero';


//added for routing
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {

    
    this._route.params.switchMap(params => this._heroService.getHero(+params['id']))
      .subscribe(
      hero => this.hero = hero,
      err => console.log(err),
      () => console.log('get a hero:' + this.hero) // doesn't work ????
      );
  }

  goBack(): void {
    this._location.back();
  }

  save():void{
    this._heroService.update(this.hero).subscribe(
     ()=>{},
    err=> console.log(err),
    ()=>this.goBack()
    ) ;
  }


}
