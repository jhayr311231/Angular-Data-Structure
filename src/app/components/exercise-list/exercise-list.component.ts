import { Component } from '@angular/core';
import { ExerciseListService } from '../../services/exercise-list.service';

export interface Exercise {
  name: string;
  description: string;
  duration: number; // duration in minutes
}


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  newExercise: Exercise = { name: '', description: '', duration: 0 }; // Correctly initialized
  searchExercise: string = '';
  exercises: Exercise[] = []; // Ensure this is initialized as an Exercise array
  editIndex: number | null = null;

  constructor(private exerciseListService: ExerciseListService) {
    this.exercises = this.exerciseListService.getExerciseList(); // Should correctly get Exercise[]
  }

  getFilteredExercises(): Exercise[] {
    if (!this.searchExercise) {
      return this.exercises;
    }
    return this.exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(this.searchExercise.toLowerCase())
    );
  }

  addExercise() {
    if (this.newExercise.name.trim() !== '' && this.newExercise.description.trim() !== '' && this.newExercise.duration > 0) {
      if (this.editIndex !== null) {
        this.exercises[this.editIndex] = { ...this.newExercise };
        this.editIndex = null;
      } else {
        this.exercises.push({ ...this.newExercise });
      }
      this.resetForm();
      this.exerciseListService.updateExerciseList(this.exercises); // Correctly updates the service
    }
  }

  editExercise(index: number) {
    this.newExercise = { ...this.exercises[index] }; // Load the selected exercise for editing
    this.editIndex = index;
  }

  removeExercise(index: number) {
    this.exercises.splice(index, 1);
    this.exerciseListService.updateExerciseList(this.exercises); // Update service after removal
  }

  resetForm() {
    this.newExercise = { name: '', description: '', duration: 0 }; // Reset the form
  }
}

