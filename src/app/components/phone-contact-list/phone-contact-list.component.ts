import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  // Property to hold the new contact input values
  newContactName: string = '';
  newContactNumber: string = '';

  // List of phone contacts
  contacts: { name: string; number: string }[] = [
    { name: 'John Doe', number: '123-456-7890' },
    { name: 'Jane Smith', number: '987-654-3210' },
    { name: 'Alice Johnson', number: '555-555-5555' },
  ];

  // Property for search input
  searchQuery: string = '';

  // Property to hold the index of the contact being edited
  editIndex: number | null = null;

  // Temporary properties to store the edited contact values
  editedContactName: string = '';
  editedContactNumber: string = '';

  // Method to add new contact to the list
  addContact() {
    if (this.newContactName.trim() && this.newContactNumber.trim()) {
      this.contacts.push({ name: this.newContactName, number: this.newContactNumber });
      this.newContactName = ''; // Reset input field
      this.newContactNumber = ''; // Reset input field
    }
  }

  // Method to get the filtered list of contacts based on search query
  getFilteredContacts(): { name: string; number: string }[] {
    if (this.searchQuery.trim()) {
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    return this.contacts;
  }

  // Method to edit a contact entry
  editContact(index: number) {
    this.editIndex = index;
    this.editedContactName = this.contacts[index].name;
    this.editedContactNumber = this.contacts[index].number;
  }

  // Method to save the edited contact entry
  saveEdit() {
    if (this.editIndex !== null) {
      this.contacts[this.editIndex] = {
        name: this.editedContactName,
        number: this.editedContactNumber
      };
      this.editIndex = null; // Exit edit mode
      this.editedContactName = ''; // Reset edit input
      this.editedContactNumber = ''; // Reset edit input
    }
  }

  // Method to remove contact from the list
  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }

}
