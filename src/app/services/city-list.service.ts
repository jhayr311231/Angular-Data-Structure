import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityListService {
  private cities: string[] = [];

  constructor() { }

// Method to get the list of cities
getCityList(): string[] {
  return this.cities;
}

// Method to add a new city
addCity(newCity: string): void {
  if (newCity.trim()) {
    this.cities.push(newCity.trim());
  }
}
}
