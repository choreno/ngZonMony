import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IExpense, IGroupExpenses, IPayment } from '../interfaces/expense.interface';

import { Observable } from 'rxjs/Rx';
import { DttmService } from './dttm.service';


@Injectable()
export class ExpenseService {

    private baseUrl = 'api/expenses';

    constructor(private _http: Http, private _dttm: DttmService) { }

    getAllExpenses(): Observable<any> {
        return this._http.get(`${this.baseUrl}`)
            .map(response => response.json().data);
    }

    getAllPayments(): Observable<any> {
        return this.getAllExpenses()
            .map(x => [].concat(...x.map(y => y.payments)))
    }

    getTotalAmounts(): Observable<any> {
        return this.getAllPayments()
            .map(x => x.map(y => y.amount))
            .map(x => x.reduce((acc, curr) => acc + curr))
    }
    
    getTotalAmountsByDTTM(currentMonth: number, currentYear: number): Observable<any> {
        return this.getAllPayments()
            .map(x => x.filter((y) => {
                let current = this._dttm.convertJsonToDTTM(y.paymentDTTM);
                return current.month === currentMonth && current.year === currentYear;
            }))
            //.do(x => console.log(JSON.stringify(x, null, 2)))
            .map(x => x.map(y => y.amount))
            .map(x => x.reduce((acc, curr) => acc + curr));
    }

    getAllExpensesByFolderName(expense: IExpense[]): IGroupExpenses[] {

        if (!expense) {
            return;
        }

        const folderNames = new Set(expense.map(x => x.folderName));
        const result = Array.from(folderNames).map(x => ({
            folderName: x,
            expenses: expense.filter(exp => exp.folderName === x)
        }));

        return result;
    }

}



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