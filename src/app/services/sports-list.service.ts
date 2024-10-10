import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsListService {
  private sports: { name: string; type: string }[] = []; // Array to hold the list of sports

  constructor() { }

 // Get the list of sports
 getSportsList() {
  return this.sports;
}

// Add a new sport
addSport(sport: { name: string; type: string }) {
  this.sports.push(sport);
}

// Edit an existing sport
editSport(index: number, sport: { name: string; type: string }) {
  this.sports[index] = sport;
}

// Remove a sport
removeSport(index: number) {
  this.sports.splice(index, 1);
}

}
