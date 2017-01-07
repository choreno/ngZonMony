import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
//import {Http, Response, Headers, RequestOptions} from "@angular/http";



@Injectable()
export class HeroService {

  //private headers = new Headers({'Content-type': 'application/json'}); 

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });



  constructor(private _http: Http) { }


  // create(name:string):Observable<any>{
  //   return this._http.post('api/heroes', JSON.stringify({name: name}), this.options) ; 
  // }
  create(hero:Hero):Observable<any>{
    return this._http.post('api/heroes', JSON.stringify(hero), this.options)
    .map(response => response.json().data) ; 
  }


// create(todo: Todo) {
//     this.http.post(`${this.baseUrl}/todos`, JSON.stringify(todo))
//       .map(response => response.json()).subscribe(data => {
//         this.dataStore.todos.push(data);
//         this._todos.next(Object.assign({}, this.dataStore).todos);
//       }, error => console.log('Could not create todo.'));
//   }


  // create(name: string): Promise<Hero> {
  //   return this._http
  //     .post('api/heroes', JSON.stringify({ name: name }), { headers: this.headers })
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

//  private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }




  update(hero: Hero): Observable<any> {

    const url = 'api/heroes/' + hero.id;

    //return this._http.put(url, JSON.stringify(hero), {headers: this.headers})
    return this._http.put(url, JSON.stringify(hero), this.options);


  }

  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }


  // getHeroes(): Observable<Hero[]> {
  //   return this._http.get('/app/heroData.json')
  //     .map(response => response.json());

  // }


  //In memory  -- ## must add data at the end of json()
  getHeroes(): Observable<any> {

    return this._http.get('api/heroes')
      .map(response => response.json().data);

  }



  getHero(id: number): Observable<any> {

    // return this.getHeroes()
    //   .map(response => response.find(hero=>hero.id == id)) ;

    //OR

    const _url = 'api/heroes/' + id;
    return this._http.get(_url)
      .map(response => response.json().data);

  }



  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(x => {
  //     setTimeout(() => x(this.getHeroes()), 2000);
  //   })
  // }

}


//Useful Sample of Observable


// const PEOPLE : Person[] = [
//       {id: 1, name: 'Luke Skywalker', height: 177, weight: 70, profession: ''},
//       {id: 2, name: 'Darth Vader', height: 200, weight: 100, profession: ''},
//       {id: 3, name: 'Han Solo', height: 185, weight: 85, profession: ''},
//     ];

// export class PeopleService{

//   getAll() : Person[] {
//     return PEOPLE.map(p => this.clone(p));
//   }
//   get(id: number) : Person {
//     return this.clone(PEOPLE.find(p => p.id === id));
//   }
//   save(person: Person){
//     let originalPerson = PEOPLE.find(p => p.id === person.id);
//     if (originalPerson) Object.assign(originalPerson, person);
//     // saved muahahaha
//   }

//   private clone(object: any){
//     // hack
//     return JSON.parse(JSON.stringify(object));
//   }
// }


// @Component({...})
// export class PeopleListComponent implements OnInit{
//   people: Person[] = [];

//   constructor(private peopleService : PeopleService){}

//   ngOnInit(){
//     this._peopleService
//       .getAll()
//       .subscribe(p => this.people = p)
//   }
// }