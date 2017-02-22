export interface IExpense {

    id: number;
    folderName: string;
    tab: ITab[];
    tabName: string;
    tabNote: string;
    dueDate: number;
    url: string;
    status: ITabStatus[];
    payments: IPayment[];
    isPaidByCreditCard: boolean;
    createdDTTM: Date;
    updatedDTTM: Date; 

}

export interface ITab {
    name: string; 
    note: number; 
    dueDate: number;
    url: string; 
    isPaidByCreditCard: boolean;
    status: ITabStatus[];
}

export interface ITabStatus{
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


