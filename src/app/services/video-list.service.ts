import { Injectable } from '@angular/core';

// Define the Video interface
interface Video {
  title: string;       // Title of the video
  genre: string;       // Genre of the video (e.g., Action, Comedy, etc.)
  rating: number;      // Video rating
  description: string; // Brief description of the video
}

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
  private videoList: Video[] = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 4.8, description: 'A mind-bending thriller' },
    { title: 'The Godfather', genre: 'Crime', rating: 4.9, description: 'A story about a crime family' },
    { title: 'Toy Story', genre: 'Animation', rating: 4.7, description: 'A tale of toys coming to life' },
  ];


  constructor() { }

  // Method to get the list of videos
  getVideoList(): Video[] {
    return this.videoList;
  }

  // Method to add a new video
  addVideo(video: Video) {
    this.videoList.push(video);
  }

  // Method to edit an existing video
  editVideo(index: number, updatedVideo: Video) {
    this.videoList[index] = updatedVideo;
  }

  // Method to remove a video
  removeVideo(index: number) {
    this.videoList.splice(index, 1);
  }
}
