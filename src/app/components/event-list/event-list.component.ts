import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events: { name: string; date: string; location: string }[] = []; // Array to hold event details
  newEventName: string = ''; // Variable to hold new event name input
  newEventDate: string = ''; // Variable to hold new event date input
  newEventLocation: string = ''; // Variable to hold new event location input
  searchTerm: string = ''; // Variable to hold search term

  // Method to add a new event
  addEvent() {
    if (this.newEventName.trim() !== '' && this.newEventDate.trim() !== '' && this.newEventLocation.trim() !== '') {
      this.events.push({
        name: this.newEventName.trim(),
        date: this.newEventDate.trim(),
        location: this.newEventLocation.trim(),
      });
      this.newEventName = ''; // Clear input field
      this.newEventDate = ''; // Clear input field
      this.newEventLocation = ''; // Clear input field
    }
  }

  // Method to remove an event by index
  removeEvent(index: number) {
    this.events.splice(index, 1);
  }

  // Method to edit an event
  editEvent(index: number) {
    const updatedName = prompt('Edit event name:', this.events[index].name);
    const updatedDate = prompt('Edit event date:', this.events[index].date);
    const updatedLocation = prompt('Edit event location:', this.events[index].location);
    if (updatedName !== null && updatedDate !== null && updatedLocation !== null) {
      this.events[index] = {
        name: updatedName,
        date: updatedDate,
        location: updatedLocation,
      };
    }
  }

  // Method to get filtered event list based on search term
  getFilteredEvents() {
    return this.events.filter(event => 
      event.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      event.date.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      event.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
