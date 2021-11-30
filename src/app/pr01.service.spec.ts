import { TestBed } from '@angular/core/testing';

import { Pr01Service } from './pr01.service';

describe('Pr01Service', () => {
  let service: Pr01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pr01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
