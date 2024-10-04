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
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { ClassroomListComponent } from './components/classroom-list/classroom-list.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';
import { StationeryListComponent } from './components/stationery-list/stationery-list.component';
import { FlowerListComponent } from './components/flower-list/flower-list.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { LaptopListComponent } from './components/laptop-list/laptop-list.component';
import { LaptopSpecificationsListComponent } from './components/laptop-specifications-list/laptop-specifications-list.component';
import { ComputerHardwareListComponent } from './components/computer-hardware-list/computer-hardware-list.component';
import { MobileAppListComponent } from './components/mobile-app-list/mobile-app-list.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import { AccessoryListComponent } from './components/accessory-list/accessory-list.component';
import { BuildingListComponent } from './components/building-list/building-list.component';


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
  { path: 'grocerylist', component:GroceryListComponent },
  { path: 'classroomlist', component:ClassroomListComponent },
  { path: 'inventorylist', component:InventoryListComponent },
  { path: 'lecturelist', component:LectureListComponent },
  { path: 'stationerylist', component:StationeryListComponent },
  { path: 'flowerlist', component:FlowerListComponent },
  { path: 'destinationlist', component:DestinationListComponent },
  { path: 'laptoplist', component:LaptopListComponent },
  { path: 'laptopspecificationslist', component:LaptopSpecificationsListComponent },
  { path: 'computerhardwarelist', component:ComputerHardwareListComponent },
  { path: 'mobileapplist', component:MobileAppListComponent },
  { path: 'videolist', component:VideoListComponent },
  { path: 'tvshowlist', component:TvShowListComponent },
  { path: 'furniturelist', component:FurnitureListComponent },
  { path: 'accessorylist', component:AccessoryListComponent },
  { path: 'buildinglist', component:BuildingListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
