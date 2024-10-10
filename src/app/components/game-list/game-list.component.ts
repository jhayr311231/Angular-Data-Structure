import { Component } from '@angular/core';
import { GameListService } from '../../services/game-list.service'; // Import the service

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
   // Property to hold the new game input value
   newGame: string = '';

   // List of video games
   games: string[] = ['The Legend of Zelda', 'Super Mario Odyssey', 'Minecraft', 'Fortnite', 'Cyberpunk 2077'];

   // Property for search input
   searchQuery: string = '';

   // Property to hold the index of the game being edited
   editIndex: number | null = null;

   // Temporary property to store the edited game value
   editedGame: string = '';

   constructor(private gameListService: GameListService) {}


   // Method to add a new game to the list
   addGame() {
     if (this.newGame.trim()) {
       this.games.push(this.newGame);
       this.newGame = ''; // Reset input field
     }
   }

   // Method to get the filtered list of games based on search query
   getFilteredGames(): string[] {
     if (this.searchQuery.trim()) {
       return this.games.filter(game =>
         game.toLowerCase().includes(this.searchQuery.toLowerCase())
       );
     }
     return this.games;
   }

   // Method to edit a game
   editGame(index: number) {
     this.editIndex = index;
     this.editedGame = this.games[index];
   }

   // Method to save the edited game
   saveEdit() {
     if (this.editIndex !== null && this.editedGame.trim()) {
       this.games[this.editIndex] = this.editedGame;
       this.editIndex = null; // Exit edit mode
       this.editedGame = ''; // Reset edit input
     }
   }

   // Method to remove a game from the list
   removeGame(index: number) {
     this.games.splice(index, 1);
   }

}
