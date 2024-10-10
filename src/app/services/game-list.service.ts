import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private games: { name: string; genre: string; releaseYear: number }[] = [
    { name: 'The Legend of Zelda', genre: 'Action-Adventure', releaseYear: 1986 },
    { name: 'Super Mario Bros.', genre: 'Platformer', releaseYear: 1985 },
    { name: 'Minecraft', genre: 'Sandbox', releaseYear: 2011 }
  ];

  constructor() { }
 // Method to get the list of games
 getGameList() {
  return this.games;
}

// Method to add a new game
addGame(game: { name: string; genre: string; releaseYear: number }) {
  this.games.push(game);
}

// Method to remove a game
removeGame(index: number) {
  if (index >= 0 && index < this.games.length) {
    this.games.splice(index, 1);
  }
}

// Method to update a game
updateGame(index: number, game: { name: string; genre: string; releaseYear: number }) {
  if (index >= 0 && index < this.games.length) {
    this.games[index] = game;
  }
}
}
