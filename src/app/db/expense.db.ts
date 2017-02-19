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
                        amount: 1600.39,
                        note: 'Jan',
                        paymentDTTM: new Date('1/1/2016'),
                        createdDTTM: new Date('1/1/2016'),
                        updatedDTTM: new Date('1/1/2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Feb',
                        paymentDTTM: new Date('2/1//2016'),
                        createdDTTM: new Date('2/1//2016'),
                        updatedDTTM: new Date('2/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Mar',
                        paymentDTTM: new Date('3/1//2016'),
                        createdDTTM: new Date('3/1//2016'),
                        updatedDTTM: new Date('3/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'APR',
                        paymentDTTM: new Date('4/1//2016'),
                        createdDTTM: new Date('4/1//2016'),
                        updatedDTTM: new Date('4/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'May',
                        paymentDTTM: new Date('5/1//2016'),
                        createdDTTM: new Date('5/1//2016'),
                        updatedDTTM: new Date('5/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Jun',
                        paymentDTTM: new Date('6/1//2016'),
                        createdDTTM: new Date('6/1//2016'),
                        updatedDTTM: new Date('6/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Jul',
                        paymentDTTM: new Date('7/1//2016'),
                        createdDTTM: new Date('7/1//2016'),
                        updatedDTTM: new Date('7/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Aug',
                        paymentDTTM: new Date('8/1//2016'),
                        createdDTTM: new Date('8/1//2016'),
                        updatedDTTM: new Date('8/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Sep',
                        paymentDTTM: new Date('9/1//2016'),
                        createdDTTM: new Date('9/1//2016'),
                        updatedDTTM: new Date('9/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Oct',
                        paymentDTTM: new Date('10/1//2016'),
                        createdDTTM: new Date('10/1//2016'),
                        updatedDTTM: new Date('10/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Nov',
                        paymentDTTM: new Date('11/1//2016'),
                        createdDTTM: new Date('11/1//2016'),
                        updatedDTTM: new Date('11/1//2016'),
                    },
                    {
                        amount: 1599.09,
                        note: 'Dec',
                        paymentDTTM: new Date('12/1//2016'),
                        createdDTTM: new Date('12/1//2016'),
                        updatedDTTM: new Date('12/1//2016'),
                    }

                ],
                createdDTTM: new Date('1/1/2016'),
                updatedDTTM: new Date('1/1/2016'),
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
                        amount: 162,
                        note: 'Jan',
                        paymentDTTM: new Date('1/1/2016'),
                        createdDTTM: new Date('1/1/2016'),
                        updatedDTTM: new Date('1/1/2016'),
                    },
                    {
                        amount: 81,
                        note: 'Feb',
                        paymentDTTM: new Date('2/1//2016'),
                        createdDTTM: new Date('2/1//2016'),
                        updatedDTTM: new Date('2/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Mar',
                        paymentDTTM: new Date('3/1//2016'),
                        createdDTTM: new Date('3/1//2016'),
                        updatedDTTM: new Date('3/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'APR',
                        paymentDTTM: new Date('4/1//2016'),
                        createdDTTM: new Date('4/1//2016'),
                        updatedDTTM: new Date('4/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'May',
                        paymentDTTM: new Date('5/1//2016'),
                        createdDTTM: new Date('5/1//2016'),
                        updatedDTTM: new Date('5/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Jun',
                        paymentDTTM: new Date('6/1//2016'),
                        createdDTTM: new Date('6/1//2016'),
                        updatedDTTM: new Date('6/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Jul',
                        paymentDTTM: new Date('7/1//2016'),
                        createdDTTM: new Date('7/1//2016'),
                        updatedDTTM: new Date('7/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Aug',
                        paymentDTTM: new Date('8/1//2016'),
                        createdDTTM: new Date('8/1//2016'),
                        updatedDTTM: new Date('8/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Sep',
                        paymentDTTM: new Date('9/1//2016'),
                        createdDTTM: new Date('9/1//2016'),
                        updatedDTTM: new Date('9/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Oct',
                        paymentDTTM: new Date('10/1//2016'),
                        createdDTTM: new Date('10/1//2016'),
                        updatedDTTM: new Date('10/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Nov',
                        paymentDTTM: new Date('11/1//2016'),
                        createdDTTM: new Date('11/1//2016'),
                        updatedDTTM: new Date('11/1//2016'),
                    },
                    {
                        amount: 81,
                        note: 'Dec',
                        paymentDTTM: new Date('12/1//2016'),
                        createdDTTM: new Date('12/1//2016'),
                        updatedDTTM: new Date('12/1//2016'),
                    }
                ],
                createdDTTM: new Date(),
                updatedDTTM: new Date(),
            },
            {
                id: 3,
                folderName: 'Utility',
                tabName: 'GRU',
                tabNote: 'The eletric power provider in Gainesville',
                dueDate: 15,
                url: 'http://www.gru.com',
                status: true,
                isPaidByCreditCard: true,
                payments: [
                    {
                        amount: 194.01,
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
                        amount: 2845.03,
                        note: '#5666',
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
                        amount: 145.01,
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

