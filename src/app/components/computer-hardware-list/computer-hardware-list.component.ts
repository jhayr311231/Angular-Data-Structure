import { Component } from '@angular/core';
import { ComputerHardwareListService} from '../../services/computer-hardware-list.service'; // Import the service


// Define the Hardware interface
interface Hardware {
  name: string;
  type: string; // Type of hardware (e.g., CPU, GPU, RAM, etc.)
  brand: string; // Brand name
  specifications: string; // Key specifications
}

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  // Properties for new hardware input values
  newHardwareName: string = '';
  newHardwareType: string = '';
  newHardwareBrand: string = '';
  newHardwareSpecifications: string = '';

  // List of computer hardware components
  hardwareList: Hardware[] = [
    { name: 'Intel Core i9', type: 'CPU', brand: 'Intel', specifications: '10 cores, 20 threads' },
    { name: 'NVIDIA GeForce RTX 3080', type: 'GPU', brand: 'NVIDIA', specifications: '10GB GDDR6X' },
    { name: 'Corsair Vengeance LPX', type: 'RAM', brand: 'Corsair', specifications: '16GB DDR4' },
  ];

  // Property for search input
  searchQuery: string = '';

  // Property to hold the index of the hardware item being edited
  editIndex: number | null = null;

  // Temporary properties to store the edited hardware values
  editedHardwareName: string = '';
  editedHardwareType: string = '';
  editedHardwareBrand: string = '';
  editedHardwareSpecifications: string = '';

  constructor(private computerHardwareListService: ComputerHardwareListService) {
    // Fetch the hardware list from the service
    this.hardwareList = this.computerHardwareListService.getHardwareList();
  }

  // Method to add a new hardware item to the list
  addHardware() {
    if (this.newHardwareName.trim() && this.newHardwareType.trim() &&
        this.newHardwareBrand.trim() && this.newHardwareSpecifications.trim()) {
      this.hardwareList.push({
        name: this.newHardwareName,
        type: this.newHardwareType,
        brand: this.newHardwareBrand,
        specifications: this.newHardwareSpecifications
      });
      // Reset input fields
      this.newHardwareName = '';
      this.newHardwareType = '';
      this.newHardwareBrand = '';
      this.newHardwareSpecifications = '';
    }
  }

  // Method to get the filtered list of hardware based on the search query
  getFilteredHardware(): Hardware[] {
    if (this.searchQuery.trim()) {
      return this.hardwareList.filter(hw =>
        hw.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    return this.hardwareList;
  }

  // Method to edit a hardware item
  editHardware(index: number) {
    this.editIndex = index;
    this.editedHardwareName = this.hardwareList[index].name;
    this.editedHardwareType = this.hardwareList[index].type;
    this.editedHardwareBrand = this.hardwareList[index].brand;
    this.editedHardwareSpecifications = this.hardwareList[index].specifications;
  }

  // Method to save the edited hardware
  saveEdit() {
    if (this.editIndex !== null) {
      this.hardwareList[this.editIndex] = {
        name: this.editedHardwareName,
        type: this.editedHardwareType,
        brand: this.editedHardwareBrand,
        specifications: this.editedHardwareSpecifications
      };
      this.editIndex = null; // Exit edit mode
      // Reset edit input
      this.editedHardwareName = '';
      this.editedHardwareType = '';
      this.editedHardwareBrand = '';
      this.editedHardwareSpecifications = '';
    }
  }

  // Method to remove a hardware item from the list
  removeHardware(index: number) {
    this.hardwareList.splice(index, 1);
  }

}
