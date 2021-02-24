import { TestBed } from '@angular/core/testing';

import { AdvertDetailesGuard } from './advert-detailes.guard';

describe('AdvertDetailesGuard', () => {
  let guard: AdvertDetailesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdvertDetailesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
