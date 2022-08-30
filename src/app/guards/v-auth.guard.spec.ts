import { TestBed } from '@angular/core/testing';

import { VAuthGuard } from './v-auth.guard';

describe('VAuthGuard', () => {
  let guard: VAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
