export interface IExpense {

    id: number;
    folderName: string;
    tabName: string;
    tabNote: string;
    dueDate: number;
    url: string;
    isPaidByCreditCard: boolean;
    status: IExpenseStatus[];
    payments: IPayment[];
    createdDTTM: Date;
    updatedDTTM: Date;

}

export interface IExpenseStatus {
    activatedDTTM: Date;
    deactivatedDTTM: Date;
}

export interface IPayment {

    amount: number;
    note: string;
    paymentDTTM: Date;
    createdDTTM: Date;
    updatedDTTM: Date;
}


export interface ITotalAmounts {
    grand: number;
    year: number;
    month: number;
}

export interface IDttm {

    month: number; 
    year: number;

}