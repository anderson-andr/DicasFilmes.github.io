import { TestBed } from '@angular/core/testing';
import { beforeEach,describe,it} from 'node:test';

import { CadastrosService } from './cadastros.service';

describe('CadastrosService', () => {
  let service: CadastrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrosService);
  });

  it('should be created', () => {
    expect(service);
  });
});
function expect(service: CadastrosService) {
  throw new Error('Function not implemented.');
}

