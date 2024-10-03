import { Component } from '@angular/core';

interface Country {
  name: string;
  continent: string;
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  continents: string[] = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Australia', 'Antarctica'];
  countries: Country[] = [
    { name: 'Nigeria', continent: 'Africa' },
    { name: 'India', continent: 'Asia' },
    { name: 'France', continent: 'Europe' }
  ];

  newCountry: Country = { name: '', continent: '' };
  filterContinent: string = '';
  editIndex: number | null = null;

  // Add or edit a country
  addCountry() {
    if (this.editIndex === null) {
      this.countries.push({ ...this.newCountry });
    } else {
      this.countries[this.editIndex] = { ...this.newCountry };
      this.editIndex = null;
    }
    this.resetForm();
  }

  // Edit a country
  editCountry(index: number) {
    this.newCountry = { ...this.countries[index] };
    this.editIndex = index;
  }

  // Remove a country
  removeCountry(index: number) {
    this.countries.splice(index, 1);
  }

  // Filter countries by continent
  filterByContinent() {
    if (this.filterContinent === '') {
      return this.countries;
    }
    return this.countries.filter(country => country.continent === this.filterContinent);
  }

  // Reset the form after adding or editing
  resetForm() {
    this.newCountry = { name: '', continent: '' };
  }

}
