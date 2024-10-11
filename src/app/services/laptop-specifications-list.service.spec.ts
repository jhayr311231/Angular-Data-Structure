import { TestBed } from '@angular/core/testing';

import { LaptopSpecificationsListService } from './laptop-specifications-list.service';

describe('LaptopSpecificationsListService', () => {
  let service: LaptopSpecificationsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopSpecificationsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
