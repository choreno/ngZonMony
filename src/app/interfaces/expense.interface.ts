export class IExpense {

    id: number;
    folderName: string;
    tabName: string;
    tabNote: string;
    dueDate: number;
    url: string;
    status: boolean;
    payments: IPayment[];
    isPaidByCreditCard: boolean;
    createdDTTM: Date;
    updatedDTTM: Date;

}

export class IPayment {

    amount: number;
    note: string;
    paymentDTTM: Date;
    createdDTTM: Date;
    updatedDTTM: Date;

}


export interface IGroupExpenses{
    folderName: string;
    expenses: IExpense[];
}

//Tony
//how diffrent class and inteface ????
//Can I change class to interface???
