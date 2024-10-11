import { Component } from '@angular/core';
import { BudgetListService } from '../../services/budget-list.service';

interface BudgetItem {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'] // Corrected here
})
export class BudgetListComponent {
  newItem: BudgetItem = { name: '', amount: 0 };
  searchItem: string = '';
  editIndex: number | null = null;

  constructor(private budgetListService: BudgetListService) {}

  get budgetItems(): BudgetItem[] {
    return this.budgetListService.getBudgetItems(); // Fetch from service
  }

  getFilteredItems(): BudgetItem[] {
    if (!this.searchItem) {
      return this.budgetItems;
    }
    return this.budgetItems.filter(item =>
      item.name.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }

  addItem() {
    if (this.newItem.name.trim() !== '' && this.newItem.amount > 0) {
      if (this.editIndex !== null) {
        this.budgetListService.editBudgetItem(this.editIndex, this.newItem.name, this.newItem.amount);
        this.editIndex = null;
      } else {
        this.budgetListService.addBudgetItem(this.newItem.name, this.newItem.amount);
      }
      this.newItem = { name: '', amount: 0 };
    }
  }

  editItem(index: number) {
    const item = this.budgetItems[index];
    this.newItem = { ...item };
    this.editIndex = index;
  }

  removeItem(index: number) {
    this.budgetListService.removeBudgetItem(index);
  }
}
