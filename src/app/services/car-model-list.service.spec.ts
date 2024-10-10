import { TestBed } from '@angular/core/testing';

import { CarModelListService } from './car-model-list.service';

describe('CarModelListService', () => {
  let service: CarModelListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarModelListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
