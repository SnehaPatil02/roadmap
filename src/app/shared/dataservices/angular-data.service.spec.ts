import { TestBed } from '@angular/core/testing';

import { AngularDataService } from './angular-data.service';

describe('AngularDataService', () => {
  let service: AngularDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
