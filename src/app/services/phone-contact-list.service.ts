import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneContactListService {
  private contacts: { name: string; phone: string }[] = [
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '987-654-3210' },
    { name: 'Alice Johnson', phone: '555-555-5555' }
  ];

  constructor() { }

 // Method to get the list of contacts
 getContactList() {
  return this.contacts;
}

// Method to add a new contact
addContact(contact: { name: string; phone: string }) {
  this.contacts.push(contact);
}

// Method to remove a contact
removeContact(index: number) {
  if (index >= 0 && index < this.contacts.length) {
    this.contacts.splice(index, 1);
  }
}

// Method to update a contact
updateContact(index: number, contact: { name: string; phone: string }) {
  if (index >= 0 && index < this.contacts.length) {
    this.contacts[index] = contact;
  }
}
}
