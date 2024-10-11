import { Component } from '@angular/core';
import { TvShowListService } from '../../services/tv-show-list.service';

export interface TVShow {
  title: string;
  genre: string;
  imageUrl: string;
}

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrl: './tv-show-list.component.css'
})
export class TvShowListComponent {
  tvShows: TVShow[] = [];
  newShow: TVShow = { title: '', genre: '', imageUrl: '' };
  searchTerm: string = '';

  constructor(private tvShowListService: TvShowListService) {
    // Initialize the tvShows list from the service
    this.tvShows = this.tvShowListService.getTvShowList();
  }

  addShow() {
    if (this.newShow.title && this.newShow.genre) {
      this.tvShows.push({ ...this.newShow });
      this.newShow = { title: '', genre: '', imageUrl: '' }; // Reset form
    }
  }

  removeShow(index: number) {
    this.tvShows.splice(index, 1);
  }

  editShow(index: number) {
    this.newShow = { ...this.tvShows[index] };
    this.removeShow(index);
  }

  getFilteredShows(): TVShow[] {
    return this.tvShows.filter(show =>
      show.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
