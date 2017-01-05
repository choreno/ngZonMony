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


// export const EXPENSES: Expense[] = [
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

