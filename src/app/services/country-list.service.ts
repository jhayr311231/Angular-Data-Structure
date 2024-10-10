import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryListService {
  private countries: { name: string; continent: string }[] = [
    { name: 'USA', continent: 'North America' },
    { name: 'Canada', continent: 'North America' },
    { name: 'Brazil', continent: 'South America' },
    // Add more countries as needed
  ];

  constructor() { }

// Method to get the country list
getCountryList() {
  return this.countries;

}

}
