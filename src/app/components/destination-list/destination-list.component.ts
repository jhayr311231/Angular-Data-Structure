import { Component } from '@angular/core';

// Define the Destination interface
interface Destination {
  name: string;
  country: string;
  duration: number; // Duration in days
}

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
// Properties for new destination input values
newDestinationName: string = '';
newDestinationCountry: string = '';
newDestinationDuration: number = 1;

// List of destinations
destinationList: Destination[] = [
  { name: 'Paris', country: 'France', duration: 5 },
  { name: 'Tokyo', country: 'Japan', duration: 7 },
  { name: 'New York', country: 'USA', duration: 4 },
];

// Property for search input
searchQuery: string = '';

// Property to hold the index of the destination being edited
editIndex: number | null = null;

// Temporary properties to store the edited destination values
editedDestinationName: string = '';
editedDestinationCountry: string = '';
editedDestinationDuration: number = 0;

// Method to add a new destination to the list
addDestination() {
  if (this.newDestinationName.trim() && this.newDestinationCountry.trim() && this.newDestinationDuration > 0) {
    this.destinationList.push({
      name: this.newDestinationName,
      country: this.newDestinationCountry,
      duration: this.newDestinationDuration
    });
    this.newDestinationName = ''; // Reset input fields
    this.newDestinationCountry = '';
    this.newDestinationDuration = 1;
  }
}

// Method to get the filtered list of destinations based on the search query
getFilteredList(): Destination[] {
  if (this.searchQuery.trim()) {
    return this.destinationList.filter(destination =>
      destination.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  return this.destinationList;
}

// Method to edit a destination item
editDestination(index: number) {
  this.editIndex = index;
  this.editedDestinationName = this.destinationList[index].name;
  this.editedDestinationCountry = this.destinationList[index].country;
  this.editedDestinationDuration = this.destinationList[index].duration;
}

// Method to save the edited destination
saveEdit() {
  if (this.editIndex !== null) {
    this.destinationList[this.editIndex] = {
      name: this.editedDestinationName,
      country: this.editedDestinationCountry,
      duration: this.editedDestinationDuration
    };
    this.editIndex = null; // Exit edit mode
    this.editedDestinationName = ''; // Reset edit input
    this.editedDestinationCountry = ''; // Reset edit input
    this.editedDestinationDuration = 0; // Reset edit input
  }
}

// Method to remove a destination from the list
removeDestination(index: number) {
  this.destinationList.splice(index, 1);
}

}
