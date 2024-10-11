import { Injectable } from '@angular/core';

// Define the Hardware interface
interface Hardware {
  name: string;
  type: string; // Type of hardware (e.g., CPU, GPU, RAM, etc.)
  brand: string; // Brand name
  specifications: string; // Key specifications
}


@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareListService {
// List of computer hardware components
hardwareList: Hardware[] = [
  { name: 'Intel Core i9', type: 'CPU', brand: 'Intel', specifications: '10 cores, 20 threads' },
  { name: 'NVIDIA GeForce RTX 3080', type: 'GPU', brand: 'NVIDIA', specifications: '10GB GDDR6X' },
  { name: 'Corsair Vengeance LPX', type: 'RAM', brand: 'Corsair', specifications: '16GB DDR4' },
];

  constructor() { }
 // Method to get the list of hardware items
 getHardwareList(): Hardware[] {
  return this.hardwareList;
}

// Method to add a new hardware item
addHardware(hardware: Hardware) {
  this.hardwareList.push(hardware);
}

// Method to edit an existing hardware item
editHardware(index: number, updatedHardware: Hardware) {
  this.hardwareList[index] = updatedHardware;
}

// Method to remove a hardware item
removeHardware(index: number) {
  this.hardwareList.splice(index, 1);
}

}
