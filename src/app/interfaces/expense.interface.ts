export interface IExpense {

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

export interface IPayment {

    amount: number;
    note: string;
    paymentDTTM: Date;
    createdDTTM: Date;
    updatedDTTM: Date;

}

export interface IGroupExpenses {
    folderName: string;
    expenses: IExpense[];
}


export interface ITotalAmounts {

    year: number;
    month: number;
}
