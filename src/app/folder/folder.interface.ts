import { IExpense, IPayment } from '../dashboard/dashboard.interface';

export interface IFolder {
    folderName: string ;
    expenses: IExpense[];
    currentPayment: IPayment[];

}
