import { TestBed } from '@angular/core/testing';

import { FilmesGuard } from './filmes.guard';

describe('FilmesGuard', () => {
  let guard: FilmesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FilmesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
