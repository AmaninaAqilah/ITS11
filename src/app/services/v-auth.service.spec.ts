import { TestBed } from '@angular/core/testing';

import { VAuthService } from './v-auth.service';

describe('VAuthService', () => {
  let service: VAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
