import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicPlaylistService {
  private playlist: { title: string; artist: string; duration: string }[] = [
    { title: 'Song A', artist: 'Artist A', duration: '3:30' },
    { title: 'Song B', artist: 'Artist B', duration: '4:00' },
    { title: 'Song C', artist: 'Artist C', duration: '2:45' }
  ];

  constructor() { }

 // Method to get the playlist
 getPlaylist() {
  return this.playlist;
}

// Method to add a new song
addSong(song: { title: string; artist: string; duration: string }) {
  this.playlist.push(song);
}

// Method to remove a song
removeSong(index: number) {
  if (index >= 0 && index < this.playlist.length) {
    this.playlist.splice(index, 1);
  }
}

// Method to update a song
updateSong(index: number, song: { title: string; artist: string; duration: string }) {
  if (index >= 0 && index < this.playlist.length) {
    this.playlist[index] = song;
  }
}
}
