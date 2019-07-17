import { Url } from 'url';

export class Spectacle {
    constructor(
      public id: number,
      public nom: string,
      public description: string,
      public images: Url,
      // tslint:disable-next-line: variable-name
      public artiste_id: string
    ) {}
  }
