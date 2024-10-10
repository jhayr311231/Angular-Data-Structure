import { Component } from '@angular/core';
import { CountryListService } from '../../services/country-list.service'; // Import the service

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countries: { name: string; continent: string }[] = []; // Define countries as an array of objects
  filteredCountries: { name: string; continent: string }[] = []; // Array to hold filtered countries
  selectedContinent: string = ''; // Variable to hold selected continent for filtering
  newCountry = { name: '', continent: '' }; // Object to hold new country data
  editIndex: number | null = null; // Index for editing mode

  constructor(private countryListService: CountryListService) {
    this.countries = this.countryListService.getCountryList(); // Fetch the list of countries
    this.filteredCountries = this.countries; // Initialize filteredCountries with all countries
  }

  // Method to filter countries by continent
  filterByContinent() {
    if (!this.selectedContinent) {
      this.filteredCountries = this.countries; // If no continent is selected, show all countries
    } else {
      this.filteredCountries = this.countries.filter(country => country.continent === this.selectedContinent);
    }
    return this.filteredCountries; // Return the filtered countries
  }

  // Method to add or edit a country
  saveCountry() {
    if (this.editIndex === null) {
      // Add a new country
      this.countries.push({ ...this.newCountry }); // Add the new country to the list
    } else {
      // Update the existing country
      this.countries[this.editIndex] = { ...this.newCountry }; // Update the country at the specified index
      this.editIndex = null; // Reset editIndex after editing
    }
    this.resetForm(); // Reset the form after adding or editing
    this.filterByContinent(); // Refresh the filtered list
  }

  // Method to edit an existing country
  editCountry(index: number) {
    this.newCountry = { ...this.countries[index] }; // Populate the form with the selected country
    this.editIndex = index; // Set the index for editing mode
  }

  // Method to remove a country
  removeCountry(index: number) {
    this.countries.splice(index, 1); // Remove the country at the specified index
    this.filterByContinent(); // Refresh the filtered list after removal
  }

  // Method to reset the form after adding or editing
  resetForm() {
    this.newCountry = { name: '', continent: '' }; // Clear the input fields
    this.editIndex = null; // Reset the edit index
  }
}
