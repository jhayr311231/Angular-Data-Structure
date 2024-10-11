import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetListService {
  private budgetItems: { name: string; amount: number }[] = [];

  constructor() {
    // Sample budget items
    this.budgetItems = [
      { name: 'Development', amount: 5000 },
      { name: 'Marketing', amount: 2000 },
      { name: 'Design', amount: 1500 }
    ];
  }

  getBudgetItems(): { name: string; amount: number }[] {
    return this.budgetItems;
  }

  addBudgetItem(name: string, amount: number) {
    this.budgetItems.push({ name, amount });
  }

  editBudgetItem(index: number, name: string, amount: number) {
    if (index >= 0 && index < this.budgetItems.length) {
      this.budgetItems[index] = { name, amount };
    }
  }

  removeBudgetItem(index: number) {
    if (index >= 0 && index < this.budgetItems.length) {
      this.budgetItems.splice(index, 1);
    }
  }
}
