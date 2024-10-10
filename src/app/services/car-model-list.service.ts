import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarModelListService {
  private carModels: string[] = [];

  constructor() { }

 // Method to get the list of car models
 getCarModelList(): string[] {
  return this.carModels;
}

// Method to add a new car model
addCarModel(newCarModel: string): void {
  if (newCarModel.trim()) {
    this.carModels.push(newCarModel.trim());
  }
}

}
