import { Component } from '@angular/core';
import { VideoListService } from '../../services/video-list.service';

// Define the Video interface
interface Video {
  title: string;       // Title of the video
  genre: string;       // Genre of the video (e.g., Action, Comedy, etc.)
  rating: number;      // Video rating
  description: string; // Brief description of the video
}

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
   // Properties for new video input values
   newVideoTitle: string = '';
   newVideoGenre: string = '';
   newVideoRating: number = 0;
   newVideoDescription: string = '';

   // List of videos
   videoList: Video[] = [
     { title: 'Inception', genre: 'Sci-Fi', rating: 4.8, description: 'A mind-bending thriller' },
     { title: 'The Godfather', genre: 'Crime', rating: 4.9, description: 'A story about a crime family' },
     { title: 'Toy Story', genre: 'Animation', rating: 4.7, description: 'A tale of toys coming to life' },
   ];

   // Property for search input
   searchQuery: string = '';

   // Property to hold the index of the video item being edited
   editIndex: number | null = null;

   // Temporary properties to store the edited video values
   editedVideoTitle: string = '';
   editedVideoGenre: string = '';
   editedVideoRating: number = 0;
   editedVideoDescription: string = '';

   constructor(private videoListService: VideoListService) {
    this.videoList = this.videoListService.getVideoList();
  }

   // Method to add a new video to the list
   addVideo() {
     if (this.newVideoTitle.trim() && this.newVideoGenre.trim() &&
         this.newVideoRating > 0 && this.newVideoDescription.trim()) {
       this.videoList.push({
         title: this.newVideoTitle,
         genre: this.newVideoGenre,
         rating: this.newVideoRating,
         description: this.newVideoDescription
       });
       // Reset input fields
       this.newVideoTitle = '';
       this.newVideoGenre = '';
       this.newVideoRating = 0;
       this.newVideoDescription = '';
     }
   }

   // Method to get the filtered list of videos based on the search query
   getFilteredVideos(): Video[] {
     if (this.searchQuery.trim()) {
       return this.videoList.filter(video =>
         video.title.toLowerCase().includes(this.searchQuery.toLowerCase())
       );
     }
     return this.videoList;
   }

   // Method to edit a video item
   editVideo(index: number) {
     this.editIndex = index;
     this.editedVideoTitle = this.videoList[index].title;
     this.editedVideoGenre = this.videoList[index].genre;
     this.editedVideoRating = this.videoList[index].rating;
     this.editedVideoDescription = this.videoList[index].description;
   }

   // Method to save the edited video
   saveEdit() {
     if (this.editIndex !== null) {
       this.videoList[this.editIndex] = {
         title: this.editedVideoTitle,
         genre: this.editedVideoGenre,
         rating: this.editedVideoRating,
         description: this.editedVideoDescription
       };
       this.editIndex = null; // Exit edit mode
       // Reset edit input
       this.editedVideoTitle = '';
       this.editedVideoGenre = '';
       this.editedVideoRating = 0;
       this.editedVideoDescription = '';
     }
   }

   // Method to remove a video from the list
   removeVideo(index: number) {
     this.videoList.splice(index, 1);
   }

}
