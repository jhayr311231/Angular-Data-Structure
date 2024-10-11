import { Injectable } from '@angular/core';

interface Exercise {
  name: string;
  description: string;
  duration: number; // duration in minutes
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {
  private exercises: Exercise[] = [
    { name: 'Push Up', description: 'A basic upper body exercise', duration: 10 },
    { name: 'Squats', description: 'A fundamental lower body exercise', duration: 15 },
    { name: 'Plank', description: 'Core strengthening exercise', duration: 5 }
  ]; // Sample exercises

  constructor() { }

  getExerciseList(): Exercise[] {
    return this.exercises; // Return the list of exercises
  }

  updateExerciseList(exercises: Exercise[]) {
    this.exercises = exercises; // Update the list of exercises
  }

}
