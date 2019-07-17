import { Url } from 'url';

export class Artiste {
    constructor(
      public id: number,
      public nom: string,
      public image: Url,
      public description: string,
    ) {}
  }
