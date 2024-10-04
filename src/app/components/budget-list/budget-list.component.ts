import { Component } from '@angular/core';

interface BudgetItem {
  name: string;
  amount: number;
}
@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {

  newItem: BudgetItem = { name: '', amount: 0 };
  searchItem: string = '';
  budgetItems: BudgetItem[] = [
    { name: 'Development', amount: 5000 },
    { name: 'Marketing', amount: 2000 },
    { name: 'Design', amount: 1500 }
  ];
  editIndex: number | null = null;

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
        this.budgetItems[this.editIndex] = { ...this.newItem };
        this.editIndex = null;
      } else {
        this.budgetItems.push({ ...this.newItem });
      }
      this.newItem = { name: '', amount: 0 };
    }
  }

  editItem(index: number) {
    this.newItem = { ...this.budgetItems[index] };
    this.editIndex = index;
  }

  removeItem(index: number) {
    this.budgetItems.splice(index, 1);
  }
}
