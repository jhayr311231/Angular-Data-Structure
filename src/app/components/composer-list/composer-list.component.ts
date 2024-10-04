import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  newComposer: string = '';
  searchComposer: string = '';
  composers: string[] = ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frédéric Chopin', 'Pyotr Ilyich Tchaikovsky'];
  editIndex: number | null = null;

  getFilteredComposers(): string[] {
    if (!this.searchComposer) {
      return this.composers;
    }
    return this.composers.filter(composer =>
      composer.toLowerCase().includes(this.searchComposer.toLowerCase())
    );
  }

  addComposer() {
    if (this.newComposer.trim() !== '') {
      if (this.editIndex !== null) {
        this.composers[this.editIndex] = this.newComposer.trim();
        this.editIndex = null;
      } else {
        this.composers.push(this.newComposer.trim());
      }
      this.newComposer = '';
    }
  }

  editComposer(index: number) {
    this.newComposer = this.composers[index];
    this.editIndex = index;
  }

  removeComposer(index: number) {
    this.composers.splice(index, 1);
  }

}
