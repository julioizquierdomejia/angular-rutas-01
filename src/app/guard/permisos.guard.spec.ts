import { TestBed } from '@angular/core/testing';

import { PermisosGuard } from './permisos.guard';

describe('PermisosGuard', () => {
  let guard: PermisosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
