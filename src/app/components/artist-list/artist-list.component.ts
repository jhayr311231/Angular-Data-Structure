import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  newArtist: string = '';
  searchArtist: string = '';
  artists: string[] = ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet', 'Frida Kahlo'];
  editIndex: number | null = null;

  getFilteredArtists(): string[] {
    if (!this.searchArtist) {
      return this.artists;
    }
    return this.artists.filter(artist =>
      artist.toLowerCase().includes(this.searchArtist.toLowerCase())
    );
  }

  addArtist() {
    if (this.newArtist.trim() !== '') {
      if (this.editIndex !== null) {
        this.artists[this.editIndex] = this.newArtist.trim();
        this.editIndex = null;
      } else {
        this.artists.push(this.newArtist.trim());
      }
      this.newArtist = '';
    }
  }

  editArtist(index: number) {
    this.newArtist = this.artists[index];
    this.editIndex = index;
  }

  removeArtist(index: number) {
    this.artists.splice(index, 1);
  }

}
