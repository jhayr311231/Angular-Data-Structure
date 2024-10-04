import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSpecificationsListComponent } from './laptop-specifications-list.component';

describe('LaptopSpecificationsListComponent', () => {
  let component: LaptopSpecificationsListComponent;
  let fixture: ComponentFixture<LaptopSpecificationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopSpecificationsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSpecificationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
