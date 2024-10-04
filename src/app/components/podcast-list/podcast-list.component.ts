import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
  newPodcast: string = '';
  searchPodcast: string = '';
  podcasts: string[] = ['Episode 1: Introduction', 'Episode 2: Tech Trends', 'Episode 3: Health and Fitness', 'Episode 4: Business Ideas'];
  editIndex: number | null = null;

  getFilteredPodcasts(): string[] {
    if (!this.searchPodcast) {
      return this.podcasts;
    }
    return this.podcasts.filter(podcast =>
      podcast.toLowerCase().includes(this.searchPodcast.toLowerCase())
    );
  }

  addPodcast() {
    if (this.newPodcast.trim() !== '') {
      if (this.editIndex !== null) {
        this.podcasts[this.editIndex] = this.newPodcast.trim();
        this.editIndex = null;
      } else {
        this.podcasts.push(this.newPodcast.trim());
      }
      this.newPodcast = '';
    }
  }

  editPodcast(index: number) {
    this.newPodcast = this.podcasts[index];
    this.editIndex = index;
  }

  removePodcast(index: number) {
    this.podcasts.splice(index, 1);
  }

}
