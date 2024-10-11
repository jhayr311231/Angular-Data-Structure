import { Component } from '@angular/core';
import { EventListService } from '../../services/event-list.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'] // Fixed typo: styleUrl should be styleUrls
})
export class EventListComponent {
  newEventName: string = ''; // Variable to hold new event name input
  newEventDate: string = ''; // Variable to hold new event date input
  newEventLocation: string = ''; // Variable to hold new event location input
  searchTerm: string = ''; // Variable to hold search term

  constructor(private eventListService: EventListService) {}

  // Get the events from the service
  get events() {
    return this.eventListService.getEvents();
  }

  // Method to add a new event
  addEvent() {
    if (this.newEventName.trim() !== '' && this.newEventDate.trim() !== '' && this.newEventLocation.trim() !== '') {
      this.eventListService.addEvent(this.newEventName.trim(), this.newEventDate.trim(), this.newEventLocation.trim());
      this.newEventName = ''; // Clear input field
      this.newEventDate = ''; // Clear input field
      this.newEventLocation = ''; // Clear input field
    }
  }

  // Method to remove an event by index
  removeEvent(index: number) {
    this.eventListService.removeEvent(index);
  }

  // Method to edit an event
  editEvent(index: number) {
    const updatedName = prompt('Edit event name:', this.events[index].name);
    const updatedDate = prompt('Edit event date:', this.events[index].date);
    const updatedLocation = prompt('Edit event location:', this.events[index].location);
    if (updatedName !== null && updatedDate !== null && updatedLocation !== null) {
      this.eventListService.editEvent(index, updatedName, updatedDate, updatedLocation);
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
