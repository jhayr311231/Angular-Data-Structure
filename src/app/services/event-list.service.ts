import { Injectable } from '@angular/core';

interface Event {
  name: string;
  date: string; // Date in ISO format
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventListService {
  private events: Event[] = [];

  constructor() {
    // Sample events
    this.events = [
      { name: 'Music Concert', date: '2024-10-20', location: 'City Park' },
      { name: 'Art Exhibition', date: '2024-11-01', location: 'Art Gallery' },
      { name: 'Food Festival', date: '2024-12-15', location: 'Downtown' }
    ];
  }

  getEvents(): Event[] {
    return this.events;
  }

  addEvent(name: string, date: string, location: string) {
    this.events.push({ name, date, location });
  }

  editEvent(index: number, name: string, date: string, location: string) {
    if (index >= 0 && index < this.events.length) {
      this.events[index] = { name, date, location };
    }
  }

  removeEvent(index: number) {
    if (index >= 0 && index < this.events.length) {
      this.events.splice(index, 1);
    }
  }
}
