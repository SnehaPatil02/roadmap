import { TestBed } from '@angular/core/testing';

import { SpringBootDataService } from './spring-boot-data.service';

describe('SpringBootDataService', () => {
  let service: SpringBootDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringBootDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
