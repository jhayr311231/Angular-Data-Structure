import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CarModelListComponent } from './components/car-model-list/car-model-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';
import { VegetableListComponent } from './components/vegetable-list/vegetable-list.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { SoftwareListComponent } from './components/software-list/software-list.component';
import { PhoneContactListComponent } from './components/phone-contact-list/phone-contact-list.component';
import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';



const routes: Routes = [
  { path: 'studentlist', component: StudentListComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'fruitlist', component: FruitListComponent },
  { path: 'courselist', component: CourseListComponent },
  { path: 'booklist', component: BookListComponent },
  { path: 'citylist', component: CityListComponent },
  { path: 'movielist', component: MovieListComponent },
  { path: 'carmodellist', component: CarModelListComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'subjectlist', component: SubjectListComponent },
  { path: 'countrylist', component: CountryListComponent },
  { path: 'sportslist', component: SportsListComponent },
  { path: 'vegetablelist', component: VegetableListComponent },
  { path: 'animallist', component: AnimalListComponent },
  { path: 'toollist', component: ToolListComponent },
  { path: 'languagelist', component: LanguageListComponent },
  { path: 'gamelist', component: GameListComponent },
  { path: 'softwarelist', component: SoftwareListComponent },
  { path: 'phonecontactlist', component: PhoneContactListComponent },
  { path: 'musicplaylist', component:MusicPlaylistComponent },
  { path: 'foodmenu', component:FoodMenuComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
