import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  newMeal: string = '';
  searchMeal: string = '';
  meals: string[] = ['Breakfast - Oatmeal', 'Lunch - Grilled Chicken', 'Dinner - Salmon and Veggies'];
  editIndex: number | null = null;

  getFilteredMeals(): string[] {
    if (!this.searchMeal) {
      return this.meals;
    }
    return this.meals.filter(meal =>
      meal.toLowerCase().includes(this.searchMeal.toLowerCase())
    );
  }

  addMeal() {
    if (this.newMeal.trim() !== '') {
      if (this.editIndex !== null) {
        this.meals[this.editIndex] = this.newMeal.trim();
        this.editIndex = null;
      } else {
        this.meals.push(this.newMeal.trim());
      }
      this.newMeal = '';
    }
  }

  editMeal(index: number) {
    this.newMeal = this.meals[index];
    this.editIndex = index;
  }

  removeMeal(index: number) {
    this.meals.splice(index, 1);
  }

}
