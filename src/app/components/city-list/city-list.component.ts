import { Component } from '@angular/core';
import { CityListService } from '../../services/city-list.service'; // Import the service

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities: string[] = []; // Array to hold the list of cities
  newCity: string = ''; // Variable to bind to the input field

  constructor(private cityListService: CityListService) {
    this.cities = this.cityListService.getCityList(); // Fetch the initial list of cities
  }

  // Method to add a new city to the list
  addCity() {
    if (this.newCity.trim()) { // Check if input is not empty
      this.cities.push(this.newCity.trim());
      this.newCity = ''; // Clear the input field after adding
    }
  }

  // Method to remove a city from the list
  removeCity(index: number) {
    this.cities.splice(index, 1); // Remove the city at the specified index
  }

}
