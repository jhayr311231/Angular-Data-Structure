import { Injectable } from '@angular/core';

// Define the Artist interface
interface Artist {
  name: string;
  year: number;
  masterpiece: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
  private artists: Artist[] = [
    { name: 'Leonardo da Vinci', year: 1519, masterpiece: 'Mona Lisa' },
    { name: 'Vincent van Gogh', year: 1890, masterpiece: 'Starry Night' },
    { name: 'Pablo Picasso', year: 1973, masterpiece: 'Guernica' },
    { name: 'Claude Monet', year: 1926, masterpiece: 'Water Lilies' },
    { name: 'Frida Kahlo', year: 1954, masterpiece: 'The Two Fridas' }
  ];

  constructor() { }

  getArtistList(): Artist[] {
    return this.artists;
  }

  updateArtistList(updatedArtists: Artist[]): void {
    this.artists = updatedArtists;
  }
}
