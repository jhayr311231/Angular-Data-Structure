import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwareListService {
  private softwareList: { name: string; version: string; license: string }[] = [
    { name: 'Visual Studio Code', version: '1.62.3', license: 'Free' },
    { name: 'Postman', version: '9.1.1', license: 'Free' },
    { name: 'Slack', version: '4.19.0', license: 'Free' }
  ];

  constructor() { }

 // Method to get the list of software
 getSoftwareList() {
  return this.softwareList;
}

// Method to add a new software item
addSoftware(software: { name: string; version: string; license: string }) {
  this.softwareList.push(software);
}

// Method to remove a software item
removeSoftware(index: number) {
  if (index >= 0 && index < this.softwareList.length) {
    this.softwareList.splice(index, 1);
  }
}

// Method to update a software item
updateSoftware(index: number, software: { name: string; version: string; license: string }) {
  if (index >= 0 && index < this.softwareList.length) {
    this.softwareList[index] = software;
  }
}


}
