import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListComponent } from './grocery-list.component';

describe('GroceryListComponent', () => {
  let component: GroceryListComponent;
  let fixture: ComponentFixture<GroceryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
