import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealPlanListService {
  private meals: string[] = [
    'Breakfast - Oatmeal',
    'Lunch - Grilled Chicken',
    'Dinner - Salmon and Veggies'
  ];

  constructor() { }

  // Get all meals
  getMeals(): string[] {
    return this.meals;
  }

  // Add a new meal
  addMeal(meal: string) {
    this.meals.push(meal);
  }

  // Edit an existing meal
  editMeal(index: number, meal: string) {
    this.meals[index] = meal;
  }

  // Remove a meal
  removeMeal(index: number) {
    this.meals.splice(index, 1);
  }
}
