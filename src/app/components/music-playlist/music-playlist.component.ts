import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrl: './music-playlist.component.css'
})
export class MusicPlaylistComponent {
// Properties to hold the new song input values
newSongTitle: string = '';
newSongArtist: string = '';

// List of songs in the playlist
playlist: { title: string; artist: string }[] = [
  { title: 'Song One', artist: 'Artist A' },
  { title: 'Song Two', artist: 'Artist B' },
  { title: 'Song Three', artist: 'Artist C' },
];

// Property for search input
searchQuery: string = '';

// Property to hold the index of the song being edited
editIndex: number | null = null;

// Temporary properties to store the edited song values
editedSongTitle: string = '';
editedSongArtist: string = '';

// Method to add a new song to the playlist
addSong() {
  if (this.newSongTitle.trim() && this.newSongArtist.trim()) {
    this.playlist.push({ title: this.newSongTitle, artist: this.newSongArtist });
    this.newSongTitle = ''; // Reset input field
    this.newSongArtist = ''; // Reset input field
  }
}

// Method to get the filtered list of songs based on the search query
getFilteredPlaylist(): { title: string; artist: string }[] {
  if (this.searchQuery.trim()) {
    return this.playlist.filter(song =>
      song.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  return this.playlist;
}

// Method to edit a song entry
editSong(index: number) {
  this.editIndex = index;
  this.editedSongTitle = this.playlist[index].title;
  this.editedSongArtist = this.playlist[index].artist;
}

// Method to save the edited song entry
saveEdit() {
  if (this.editIndex !== null) {
    this.playlist[this.editIndex] = {
      title: this.editedSongTitle,
      artist: this.editedSongArtist
    };
    this.editIndex = null; // Exit edit mode
    this.editedSongTitle = ''; // Reset edit input
    this.editedSongArtist = ''; // Reset edit input
  }
}

// Method to remove a song from the playlist
removeSong(index: number) {
  this.playlist.splice(index, 1);
}

}
