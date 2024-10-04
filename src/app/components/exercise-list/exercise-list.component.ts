import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  newExercise: string = '';
  searchExercise: string = '';
  exercises: string[] = ['Push-ups', 'Squats', 'Lunges', 'Plank', 'Burpees'];
  editIndex: number | null = null;

  getFilteredExercises(): string[] {
    if (!this.searchExercise) {
      return this.exercises;
    }
    return this.exercises.filter(exercise =>
      exercise.toLowerCase().includes(this.searchExercise.toLowerCase())
    );
  }

  addExercise() {
    if (this.newExercise.trim() !== '') {
      if (this.editIndex !== null) {
        this.exercises[this.editIndex] = this.newExercise.trim();
        this.editIndex = null;
      } else {
        this.exercises.push(this.newExercise.trim());
      }
      this.newExercise = '';
    }
  }

  editExercise(index: number) {
    this.newExercise = this.exercises[index];
    this.editIndex = index;
  }

  removeExercise(index: number) {
    this.exercises.splice(index, 1);
  }

}
