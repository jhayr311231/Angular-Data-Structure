import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CityListComponent } from './components/city-list/city-list.component';


const routes: Routes = [
  { path: 'studentlist', component: StudentListComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'fruitlist', component: FruitListComponent },
  { path: 'courselist', component: CourseListComponent },
  { path: 'booklist', component: BookListComponent },
  { path: 'citylist', component: CityListComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
