import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IExpense } from '../interfaces/expense.interface';


export class ExpenseDb implements InMemoryDbService {

    createDb() {
        let expenses: IExpense[] = [
            {
                id: 1,
                folderName: 'Housing',
                tabName: 'Mortgage',
                tabNote: 'Garison Way #58, Fixed:5.5%, 30yrs',
                dueDate: 30,
                url: 'http://wellsfargo.com',
                status: true,
                isPaidByCreditCard: false,
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
                isPaidByCreditCard: false,
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
            },
            {
                id: 3,
                folderName: 'Utility',
                tabName: 'GRU',
                tabNote: 'The eletric power privider in Gainesville',
                dueDate: 15,
                url: 'http://www.gru.com',
                status: true,
                isPaidByCreditCard: true,
                payments: [
                    {
                        amount: 194,
                        note: '#5801',
                        paymentDTTM: new Date(),
                        createdDTTM: new Date(),
                        updatedDTTM: new Date(),
                    }

                ],
                createdDTTM: new Date(),
                updatedDTTM: new Date(),
            },
            {
                id: 4,
                folderName: 'Credit Card',
                tabName: 'Chase',
                tabNote: 'Chase Freedom Card',
                dueDate: 30,
                url: 'http://www.chase.com',
                status: true,
                isPaidByCreditCard: false,
                payments: [
                    {
                        amount: 2845,
                        note: '#5801',
                        paymentDTTM: new Date(),
                        createdDTTM: new Date(),
                        updatedDTTM: new Date(),
                    }

                ],
                createdDTTM: new Date(),
                updatedDTTM: new Date(),
            },
            {
                id: 5,
                folderName: 'Utility',
                tabName: 'Verizon',
                tabNote: 'Mobile Commnunication',
                dueDate: 30,
                url: 'http://verizonwireless.com',
                status: true,
                isPaidByCreditCard: true,
                payments: [
                    {
                        amount: 145,
                        note: '#123213123213215801',
                        paymentDTTM: new Date(),
                        createdDTTM: new Date(),
                        updatedDTTM: new Date(),
                    }

                ],
                createdDTTM: new Date(),
                updatedDTTM: new Date(),
            },
        ]


        return { expenses };

    }
}

