import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app works!';

  heroes= HEROES;
  selectedHero:Hero; 


  onSelect(hero:Hero): void {
    this.selectedHero = hero; 
  }


  expenses = EXPENSES; 



}

export class Hero {

  id: number;
  name: string;

}

const HEROES: Hero[] = [

  { id: 11, name: 'Mr.Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }

]

const EXPENSES: Expense[] = [
  {
    id: 1,
    folderName: 'Housing',
    tabName: 'Mortgage',
    tabNote: 'Garison Way #58, Fixed:5.5%, 30yrs',
    dueDate: 30,
    url: 'http://wellsfargo.com',
    status: true,
    payments: [
      {
        amount: 1600,
        note: 'for this month',
        paymentDTTM: new Date(),
        createdDTTM: new Date(),
        updatedDTTM: new Date(),
      }

    ],
    createdDTTM: new Date(),
    updatedDTTM: new Date(),
  },
  {
    id: 2,
    folderName: 'Housing',
    tabName: 'HOA',
    tabNote: 'Garison Way #58',
    dueDate: 30,
    url: null,
    status: true,
    payments: [
      {
        amount: 891,
        note: '#5801',
        paymentDTTM: new Date(),
        createdDTTM: new Date(),
        updatedDTTM: new Date(),
      }

    ],
    createdDTTM: new Date(),
    updatedDTTM: new Date(),
  }
]




export class Expense {

  id: number;
  folderName: string;
  tabName: string;
  tabNote: string;
  dueDate: number;
  url: string;
  status: boolean;
  payments: Payment[];
  createdDTTM: Date;
  updatedDTTM: Date;


}

export class Payment {

  amount: number;
  note: string;
  paymentDTTM: Date;
  createdDTTM: Date;
  updatedDTTM: Date;


}


