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
    grand: number; 
    year: number;
    month: number;
}

export interface IFolder {
    folderName: string ;
    //folderTotalAmounts: number ; 
    expenses: IExpense[];
    //tabs: ITab[]; 
}

export interface ITab {
    tabName: string; 
    tabTotalAmounts: number; 
}

