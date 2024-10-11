import { Injectable } from '@angular/core';

// Define the Composer interface
interface Composer {
  name: string;
  year: number;
  masterpiece: string;
}


@Injectable({
  providedIn: 'root'
})
export class ComposerListService {
  private composers: Composer[] = [
    { name: 'Ludwig van Beethoven', year: 1827, masterpiece: 'Symphony No. 9' },
    { name: 'Wolfgang Amadeus Mozart', year: 1791, masterpiece: 'The Magic Flute' },
    { name: 'Johann Sebastian Bach', year: 1750, masterpiece: 'Brandenburg Concerto' },
    { name: 'Frederic Chopin', year: 1849, masterpiece: 'Nocturne in E-flat major' },
    { name: 'Pyotr Ilyich Tchaikovsky', year: 1893, masterpiece: 'Swan Lake' }
  ];

  constructor() { }
  getComposerList(): Composer[] {
    return this.composers;
  }

  updateComposerList(updatedComposers: Composer[]): void {
    this.composers = updatedComposers;
  }
}
