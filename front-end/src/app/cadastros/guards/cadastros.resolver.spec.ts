import { TestBed } from '@angular/core/testing';

import { CadastrosResolver } from './cadastros.resolver';

describe('CadastrosResolver', () => {
  let resolver: CadastrosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CadastrosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
