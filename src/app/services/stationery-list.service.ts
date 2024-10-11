import { Injectable } from '@angular/core';

interface Stationery {
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class StationeryListService {
  private stationeryList: Stationery[] = [
    { name: 'Pen', quantity: 10 },
    { name: 'Pencil', quantity: 20 },
    { name: 'Notebook', quantity: 5 }
  ];

  constructor() { }

  getStationeryItems(): Stationery[] {
    return this.stationeryList;
  }

  addStationeryItem(item: Stationery) {
    this.stationeryList.push(item);
  }

  updateStationeryItem(index: number, updatedItem: Stationery) {
    this.stationeryList[index] = updatedItem;
  }

  removeStationeryItem(index: number) {
    this.stationeryList.splice(index, 1);
  }
}
