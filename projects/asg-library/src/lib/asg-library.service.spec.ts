import { TestBed } from '@angular/core/testing';

import { AsgLibraryService } from './asg-library.service';

describe('AsgLibraryService', () => {
  let service: AsgLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsgLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
