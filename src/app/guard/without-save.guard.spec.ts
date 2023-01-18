import { TestBed } from '@angular/core/testing';

import { WithoutSaveGuard } from './without-save.guard';

describe('WithoutSaveGuard', () => {
  let guard: WithoutSaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WithoutSaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
