import { Component } from '@angular/core';
import { ComposerListService } from '../../services/composer-list.service';

// Define the Composer interface
interface Composer {
  name: string;
  year: number;
  masterpiece: string;
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
    newComposer: Composer = { name: '', year: 0, masterpiece: '' };
    searchComposer: string = '';
    composers: Composer[] = [];
    editIndex: number | null = null;

    constructor(private composerListService: ComposerListService) {
      // Fetch the initial composer list from the service
      this.composers = this.composerListService.getComposerList();
    }

    getFilteredComposers(): Composer[] {
      if (!this.searchComposer) {
        return this.composers;
      }
      return this.composers.filter(composer =>
        composer.name.toLowerCase().includes(this.searchComposer.toLowerCase())
      );
    }

    addComposer() {
      if (this.newComposer.name.trim() !== '' && this.newComposer.year > 0 && this.newComposer.masterpiece.trim() !== '') {
        if (this.editIndex !== null) {
          this.composers[this.editIndex] = { ...this.newComposer };
          this.editIndex = null;
        } else {
          this.composers.push({ ...this.newComposer });
        }
        this.resetForm();
        // Update the composer list in the service
        this.composerListService.updateComposerList(this.composers);
      }
    }

    editComposer(index: number) {
      this.newComposer = { ...this.composers[index] };
      this.editIndex = index;
    }

    removeComposer(index: number) {
      this.composers.splice(index, 1);
      // Update the composer list in the service
      this.composerListService.updateComposerList(this.composers);
    }

    resetForm() {
      this.newComposer = { name: '', year: 0, masterpiece: '' };
    }
}
