import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {

       let heroes = [

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

        ];

        let expenses = [
            {
                "id": 1,
                "folderName": "Housing",
                "tabName": "Mortgage",
                "tabNote": "Garison Way #58, Fixed:5.5%, 30yrs",
                "dueDate": 30,
                "url": "http://wellsfargo.com",
                "status": true,
                "payments": [
                    {
                        "amount": 1600,
                        "note": "for this month",
                        "paymentDTTM": new Date(),
                        "createdDTTM": new Date(),
                        "updatedDTTM": new Date()
                    }

                ],
                "createdDTTM": "2015-04-01T05:00:00.000Z",
                "updatedDTTM": new Date()
            },

            {
                "id": 2,
                "folderName": "Housing",
                "tabName": "HOA",
                "tabNote": "Garison Way #58",
                "dueDate": 30,
                "url": null,
                "status": true,
                "payments": [
                    {
                        "amount": 891,
                        "note": "#5801",
                        "paymentDTTM": new Date(),
                        "createdDTTM": new Date(),
                        "updatedDTTM": new Date()
                    }

                ],
                "createdDTTM": "2015-05-01T05:00:00.000Z",
                "updatedDTTM": new Date()
            }

            //add more from here!




        ];

        return { expenses, heroes };

    }




}