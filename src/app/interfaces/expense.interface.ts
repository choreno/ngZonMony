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
