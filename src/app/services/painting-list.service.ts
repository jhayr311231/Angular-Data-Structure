import { Injectable } from '@angular/core';

// Define the Painting interface here
export interface Painting {
  name: string;
  artist: string;
  year: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaintingListService {
  private paintingList: Painting[] = [
    { name: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503, imageUrl: 'https://i.pinimg.com/474x/3f/90/a4/3f90a40c6f9b5d45e8c57d2afdb6ed48.jpg' },
    { name: 'Starry Night', artist: 'Vincent van Gogh', year: 1889, imageUrl: 'https://i.pinimg.com/564x/4a/9c/fd/4a9cfdec861d304d61a40b06a402fe7f.jpg' }
  ];

  constructor() { }

// Get the list of paintings
getPaintingList(): Painting[] {
  return this.paintingList;
}

// Add a new painting
addPainting(painting: Painting) {
  this.paintingList.push(painting);
}

// Remove a painting by index
removePainting(index: number) {
  this.paintingList.splice(index, 1);
}

// Update a painting
updatePainting(index: number, painting: Painting) {
  this.paintingList[index] = painting;
}
}
