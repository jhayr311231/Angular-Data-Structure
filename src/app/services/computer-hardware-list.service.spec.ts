import { TestBed } from '@angular/core/testing';

import { ComputerHardwareListService } from './computer-hardware-list.service';

describe('ComputerHardwareListService', () => {
  let service: ComputerHardwareListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerHardwareListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
