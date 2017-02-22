import { IExpense } from '../dashboard/dashboard.interface';

export interface IFolder {
    folderName: string ;
    expenses: IExpense[];

}
