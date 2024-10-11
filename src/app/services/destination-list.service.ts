import { Injectable } from '@angular/core';

// Define the Destination interface

interface Destination {
  name: string;
  country: string;
  duration: number; // Duration in days
}

@Injectable({
  providedIn: 'root'
})
export class DestinationListService {
 // List of destinations
 private destinationList: Destination[] = [
  { name: 'Paris', country: 'France', duration: 5 },
  { name: 'Tokyo', country: 'Japan', duration: 7 },
  { name: 'New York', country: 'USA', duration: 4 },
];

  constructor() { }

 // Method to get the list of destinations
 getDestinations(): Destination[] {
  return this.destinationList;
}

// Method to add a new destination to the list
addDestination(destination: Destination): void {
  this.destinationList.push(destination);
}

// Method to edit a destination
editDestination(index: number, updatedDestination: Destination): void {
  this.destinationList[index] = updatedDestination;
}

// Method to remove a destination from the list
removeDestination(index: number): void {
  this.destinationList.splice(index, 1);
}

}
