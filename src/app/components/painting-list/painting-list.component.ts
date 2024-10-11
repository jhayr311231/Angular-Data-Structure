import { Component } from '@angular/core';
import { PaintingListService } from '../../services/painting-list.service';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  newPainting = {
    name: '',
    artist: '',
    year: 0,
    imageUrl: ''
  };

  paintingList = [
    { name: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503, imageUrl: 'https://i.pinimg.com/474x/3f/90/a4/3f90a40c6f9b5d45e8c57d2afdb6ed48.jpg' },
    { name: 'Starry Night', artist: 'Vincent van Gogh', year: 1889, imageUrl: 'https://i.pinimg.com/564x/4a/9c/fd/4a9cfdec861d304d61a40b06a402fe7f.jpg' }
  ];

  searchTerm = '';
  editingIndex: number | null = null;

  constructor(private paintingListService: PaintingListService) {
    // Fetch the painting list from the service
    this.paintingList = this.paintingListService.getPaintingList();
  }

  addPainting() {
    if (this.editingIndex !== null) {
      this.paintingList[this.editingIndex] = { ...this.newPainting };
      this.editingIndex = null;
    } else {
      this.paintingList.push({ ...this.newPainting });
    }
    this.resetForm();
  }

  editPainting(index: number) {
    this.newPainting = { ...this.paintingList[index] };
    this.editingIndex = index;
  }

  removePainting(index: number) {
    this.paintingList.splice(index, 1);
  }

  getFilteredPaintings() {
    if (!this.searchTerm) {
      return this.paintingList;
    }
    return this.paintingList.filter(painting =>
      painting.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      painting.artist.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetForm() {
    this.newPainting = { name: '', artist: '', year: 0, imageUrl: '' };
  }
}
