import { Component } from '@angular/core';
import { ArtistListService } from '../../services/artist-list.service';

// Define the Artist interface
interface Artist {
  name: string;
  year: number;
  masterpiece: string;
}

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  newArtist: Artist = { name: '', year: 0, masterpiece: '' };
  searchArtist: string = '';
  artists: Artist[] = [];
  editIndex: number | null = null;

  constructor(private artistListService: ArtistListService) {
    // Fetch the initial artist list from the service
    this.artists = this.artistListService.getArtistList();
  }

  getFilteredArtists(): Artist[] {
    if (!this.searchArtist) {
      return this.artists;
    }
    return this.artists.filter(artist =>
      artist.name.toLowerCase().includes(this.searchArtist.toLowerCase())
    );
  }

  addArtist() {
    if (this.newArtist.name.trim() !== '' && this.newArtist.year > 0 && this.newArtist.masterpiece.trim() !== '') {
      if (this.editIndex !== null) {
        this.artists[this.editIndex] = { ...this.newArtist };
        this.editIndex = null;
      } else {
        this.artists.push({ ...this.newArtist });
      }
      this.resetForm();
      // Update the artist list in the service
      this.artistListService.updateArtistList(this.artists);
    }
  }

  editArtist(index: number) {
    this.newArtist = { ...this.artists[index] };
    this.editIndex = index;
  }

  removeArtist(index: number) {
    this.artists.splice(index, 1);
    // Update the artist list in the service
    this.artistListService.updateArtistList(this.artists);
  }

  resetForm() {
    this.newArtist = { name: '', year: 0, masterpiece: '' };
  }
}
