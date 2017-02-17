import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { ExpenseService } from '../services/expense.service';
import { IExpense, IGroupExpenses, IPayment } from '../interfaces/expense.interface';

//import * as Rx from 'rxjs/Rx';
import 'rxjs/Rx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clock = Observable.interval(1000);


  expenses: IExpense[];

  payment: Number;

  constructor(private _expenseService: ExpenseService) {

   }

  ngOnInit() {

    this._expenseService.getAllExpenses().subscribe(
      response => this.expenses = response,
      err => console.log(err),
      () => console.log('success loading expenses db'));

      // this.clock.subscribe( x => console.log(x));

      this._expenseService.getAllExpenses()
      .map(x => [].concat(...x.map(y => y.payments)))
      .subscribe(
      x => console.log(x),
      err => console.log(err),
      () => console.log('success loading sum???'));




    // this._expenseService.getPayments().subscribe(
    //   response => this.payments = response,
    //   err => console.log(err),
    //   () => console.log('success loading payments db'));



    // //####### Problem section  -- remove at later !!!!!!!!!!!!!!!!!!!!!!!!
    // this._expenseService.getAllExpenses().reduce((x, y) => x.payments + y)
    //   .subscribe(
    //   response => this.totalExpenses = response,
    //   err => console.log(err),
    //   () => console.log('success loading expenses db')
    //   );


    // this._expenseService.getSumOfExpense().subscribe(
    //   response => this.totalExpenses = response,
    //   err => console.log(err),
    //   () => console.log('success sum of  expenses'));
    // )

  }



}

// //emit value every 1 second
// const oneSecondInterval = Rx.Observable.interval(1000);
// //return an observable that emits value every 5 seconds
// const fiveSecondInterval = () => Rx.Observable.interval(5000);
// //every five seconds, emit buffered values
// const bufferWhenExample = oneSecondInterval.bufferWhen(fiveSecondInterval);
// //log values
// //ex. output: [0,1,2,3]...[4,5,6,7,8]
// const subscribe = bufferWhenExample.subscribe(val => console.log('Emitted Buffer: ', val));


// A good example 



// var movieLists = [
//   {
//     name: "Instant Queue",
//     videos : [
//       {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxarts": [
//           { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
//           { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
//         ],
//         "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//       },
//       {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxarts": [
//           { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
//           { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

//         ],
//         "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//       }
//     ]
//   },
//   {
//     name: "New Releases",
//     videos: [
//       {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxarts": [
//           { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//           { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
//         ],
//         "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//       },
//       {
//         "id": 675465,
//         "title": "Fracture",
//         "boxarts": [
//           { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
//           { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//           { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
//         ],
//         "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id: 432534, time: 65876586 }]
//       }
//     ]
//   }
// ];

// // Use one or more map, concatAll, and filter calls to create an array with the following items
// // [
// //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
// //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
// //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
// //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// // ];

// const go = function () {
//   return movieLists
//           .map(movieList => movieList.videos
//             .map(video => video.boxarts
//               .filter(boxart => boxart.width === 150)
//               .map(boxart => ({
//                 id: video.id,
//                 title: video.title,
//                 boxart: boxart.url
//               }))
//   ))
// }

// console.log(JSON.stringify(go(), null, 4));