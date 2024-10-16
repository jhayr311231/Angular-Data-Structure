import { ComponentFixture, TestBed } from '@angular/core/testing';


import { PaintingListComponent } from './painting-list.component';

describe('PaintingListComponent', () => {
  let component: PaintingListComponent;
  let fixture: ComponentFixture<PaintingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
