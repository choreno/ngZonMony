import { Injectable } from '@angular/core';
import { IDttm } from '../interfaces/dttm.interface';

@Injectable()
export class DttmService {

  dttm: Date;
  currentDTTM: IDttm;

  constructor() {
    this.dttm = new Date();
  }

  getCurrentMonth(): number {

    return this.dttm.getMonth();

  }

  getCurrentYear(): number {

    return this.dttm.getFullYear();

  }

  getCurrentDTTM(): IDttm {

    return this.currentDTTM =
      {
        month: this.getCurrentMonth(),
        year: this.getCurrentYear()
      }
      
  }

  convertJsonToDTTM(jsonDTTM: string) {

    const date = new Date(jsonDTTM);
    const month = date.getMonth();
    const year = date.getFullYear();

    return {
      month: month,
      year: year,
    };

  }

}
