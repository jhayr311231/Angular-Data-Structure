import { Component } from '@angular/core';
import { PodcastListService } from '../../services/podcast-list.service';

// Define the Podcast interface
interface Podcast {
  title: string;
  host: string;
  description: string;
}

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent {
  newPodcast: Podcast = { title: '', host: '', description: '' }; // Ensure this is an object of Podcast type
  searchPodcast: string = '';
  podcasts: Podcast[] = []; // Ensure this is an array of Podcast type
  editIndex: number | null = null;

  constructor(private podcastListService: PodcastListService) {
    // Fetch the initial podcast list from the service
    this.podcasts = this.podcastListService.getPodcastList();
  }

  getFilteredPodcasts(): Podcast[] {
    if (!this.searchPodcast) {
      return this.podcasts;
    }
    return this.podcasts.filter(podcast =>
      podcast.title.toLowerCase().includes(this.searchPodcast.toLowerCase())
    );
  }

  addPodcast() {
    if (this.newPodcast.title.trim() !== '' && this.newPodcast.host.trim() !== '' && this.newPodcast.description.trim() !== '') {
      if (this.editIndex !== null) {
        this.podcasts[this.editIndex] = { ...this.newPodcast }; // Update existing podcast
        this.editIndex = null;
      } else {
        this.podcasts.push({ ...this.newPodcast }); // Add new podcast
      }
      this.resetForm();
      // Update the podcast list in the service
      this.podcastListService.updatePodcastList(this.podcasts);
    }
  }

  editPodcast(index: number) {
    this.newPodcast = { ...this.podcasts[index] }; // Load the selected podcast for editing
    this.editIndex = index;
  }

  removePodcast(index: number) {
    this.podcasts.splice(index, 1); // Remove the selected podcast
    // Update the podcast list in the service
    this.podcastListService.updatePodcastList(this.podcasts);
  }

  resetForm() {
    this.newPodcast = { title: '', host: '', description: '' }; // Reset the form
  }
}
