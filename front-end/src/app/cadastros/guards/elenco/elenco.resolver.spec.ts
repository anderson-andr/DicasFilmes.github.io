import { TestBed } from '@angular/core/testing';

import { ElencoResolver } from './elenco.resolver';

describe('ElencoResolver', () => {
  let resolver: ElencoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ElencoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
