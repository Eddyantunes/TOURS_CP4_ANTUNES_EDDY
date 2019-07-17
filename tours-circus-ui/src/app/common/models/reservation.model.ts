import { Url } from 'url';

export class Reservation {
    constructor(
      public id: number,
      public nbPlace: number,
      // tslint:disable-next-line: variable-name
      public spectacle_id: string
    ) {}
  }
