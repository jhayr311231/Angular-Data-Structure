import { Injectable } from '@angular/core';

// Define the Podcast interface
interface Podcast {
  title: string;
  host: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PodcastListService {
  private podcasts: Podcast[] = [
    { title: 'The Daily', host: 'Michael Barbaro', description: 'This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world.' },
    { title: 'Radiolab', host: 'Jad Abumrad & Robert Krulwich', description: 'Investigating a strange world.' },
    { title: 'Stuff You Should Know', host: 'Josh Clark & Charles W. W. Greene', description: 'If you’ve ever wanted to know about weird things, then this is the podcast for you.' },
    { title: 'How I Built This', host: 'Guy Raz', description: 'Guy Raz dives into the stories behind some of the world’s best-known companies.' },
    { title: 'Freakonomics Radio', host: 'Stephen J. Dubner', description: 'Discover the hidden side of everything.' }
  ];

  constructor() { }
  getPodcastList(): Podcast[] {
    return this.podcasts;
  }

  updatePodcastList(updatedPodcasts: Podcast[]): void {
    this.podcasts = updatedPodcasts;
  }


}
